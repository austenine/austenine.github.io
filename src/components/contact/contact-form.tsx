'use client';

import Link from 'next/link';
import { useEffect, useId, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { AlertCircle, CheckCircle2, Loader2 } from 'lucide-react';
import { services } from '@/data/services';
import { site } from '@/lib/site';
import { buttonClass } from '@/components/shared/button';
import { cn } from '@/lib/utils';
import GoogleContactForm from './google-contact-form';

/**
 * Web3Forms emails each submission to the address registered with the key — no
 * backend, which suits the static export. Without NEXT_PUBLIC_WEB3FORMS_KEY the
 * form says so and points to email instead of pretending to send.
 */
const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? '';
const ENDPOINT = 'https://api.web3forms.com/submit';
const MIN_FILL_MS = 3000; // humans take longer than this; most bots don't

const serviceOptions = [...services.map((s) => ({ value: s.id, label: s.title })), { value: 'other', label: 'Something else' }];
const budgets = ['Under US$5k', 'US$5k – 15k', 'US$15k – 40k', 'Over US$40k', 'Not sure yet'];
const timelines = ['As soon as possible', 'Within 1–3 months', 'In 3–6 months', 'Just exploring'];

const schema = z.object({
  name: z.string().trim().min(2, 'Please enter your full name.').max(100),
  email: z.email('Please enter a valid email address.'),
  company: z.string().trim().max(120).optional(),
  service: z.string().refine((v) => serviceOptions.some((o) => o.value === v), 'Please choose a service.'),
  description: z.string().trim().min(20, 'Please add a little more detail (at least 20 characters).').max(5000),
  budget: z.string().optional(),
  timeline: z.string().optional(),
  botcheck: z.boolean().optional(),
});

type Values = z.infer<typeof schema>;
type Status = { state: 'idle' } | { state: 'sent' } | { state: 'error'; message: string };

export function ContactForm() {
  const [status, setStatus] = useState<Status>({ state: 'idle' });
  const mountedAt = useRef(Date.now());
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<Values>({ resolver: zodResolver(schema), defaultValues: { service: '' } });

  // /contact/?service=cloud-devops preselects the service (linked from /services).
  useEffect(() => {
    const id = new URLSearchParams(window.location.search).get('service');
    if (id && serviceOptions.some((o) => o.value === id)) setValue('service', id);
  }, [setValue]);

  async function onSubmit(values: Values) {
    setStatus({ state: 'idle' });
    // Honeypot ticked or submitted inhumanly fast: act as if sent, send nothing.
    if (values.botcheck || Date.now() - mountedAt.current < MIN_FILL_MS) {
      setStatus({ state: 'sent' });
      return;
    }
    if (!ACCESS_KEY) {
      setStatus({ state: 'error', message: `The form isn’t connected yet. Please email us at ${site.email}.` });
      return;
    }
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: `New enquiry from ${values.name} — ${site.name} website`,
          from_name: `${site.name} website`,
          name: values.name,
          email: values.email,
          company: values.company || '—',
          service: serviceOptions.find((o) => o.value === values.service)?.label,
          message: values.description,
          budget: values.budget || '—',
          timeline: values.timeline || '—',
        }),
      });
      const result = await res.json().catch(() => ({}));
      if (!res.ok || result.success === false) throw new Error(result.message || 'Submission failed.');
      reset();
      setStatus({ state: 'sent' });
    } catch {
      setStatus({ state: 'error', message: `Your message couldn’t be sent. Please try again, or email us at ${site.email}.` });
    }
  }

  if (status.state === 'sent') {
    return (
      <div role="status" className="rounded-xl border border-line bg-ink-2 p-10 text-center">
        <CheckCircle2 aria-hidden className="mx-auto size-12 text-glow" />
        <h2 className="mt-6 text-3xl">Thank you — message received.</h2>
        <p className="mx-auto mt-3 max-w-md text-fg-2">We read every enquiry personally and will reply to the email you provided.</p>
        <button type="button" onClick={() => setStatus({ state: 'idle' })} className="mt-8 text-sm text-glow hover:underline">
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="rounded-xl border border-line bg-ink-2 p-6 sm:p-10">
      {/* {!ACCESS_KEY ? (
        <p className="mb-8 flex gap-3 rounded-lg border border-line-hover bg-accent-soft p-4 text-sm text-fg-2">
          <AlertCircle aria-hidden className="mt-0.5 size-4 shrink-0 text-glow" />
          <span>
            <strong className="font-medium text-fg">Setup required:</strong> set <code className="text-fg">NEXT_PUBLIC_WEB3FORMS_KEY</code> to
            enable sending (see README). Until then, please email{' '}
            <a href={`mailto:${site.email}`} className="text-glow underline">
              {site.email}
            </a>
            .
          </span>
        </p>
      ) : null} */}

      {/* Honeypot: hidden from people and assistive tech; bots tick it. */}
      <input type="checkbox" tabIndex={-1} autoComplete="off" aria-hidden className="hidden" {...register('botcheck')} />

      {/* <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Full name" error={errors.name?.message}>
          {(p) => <input {...p} {...register('name')} autoComplete="name" className={inputClass} />}
        </Field>
        <Field label="Business email" error={errors.email?.message}>
          {(p) => <input {...p} {...register('email')} type="email" autoComplete="email" className={inputClass} />}
        </Field>
        <Field label="Company name" optional error={errors.company?.message}>
          {(p) => <input {...p} {...register('company')} autoComplete="organization" className={inputClass} />}
        </Field>
        <Field label="Service required" error={errors.service?.message}>
          {(p) => (
            <select {...p} {...register('service')} className={inputClass}>
              <option value="" disabled>
                Select a service
              </option>
              {serviceOptions.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          )}
        </Field>
        <Field label="Project description" error={errors.description?.message} className="sm:col-span-2">
          {(p) => (
            <textarea
              {...p}
              {...register('description')}
              rows={6}
              placeholder="What are you building, what problem does it solve, and where are you today?"
              className={cn(inputClass, 'resize-y')}
            />
          )}
        </Field>
        <Field label="Estimated budget" optional>
          {(p) => (
            <select {...p} {...register('budget')} defaultValue="" className={inputClass}>
              <option value="">Prefer not to say</option>
              {budgets.map((b) => (
                <option key={b}>{b}</option>
              ))}
            </select>
          )}
        </Field>
        <Field label="Expected timeline" optional>
          {(p) => (
            <select {...p} {...register('timeline')} defaultValue="" className={inputClass}>
              <option value="">Not decided</option>
              {timelines.map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>
          )}
        </Field>
      </div> */}

      <GoogleContactForm formUrl='https://google.com' />

      {status.state === 'error' ? (
        <p role="alert" className="mt-8 flex gap-3 rounded-lg border border-red-400/40 bg-red-500/10 p-4 text-sm text-red-200">
          <AlertCircle aria-hidden className="mt-0.5 size-4 shrink-0" />
          {status.message}
        </p>
      ) : null}

      <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-fg-3">
          We use your details only to reply.{' '}
          <Link href="/privacy/" className="underline hover:text-fg">
            Privacy
          </Link>
        </p>
        {/* <button type="submit" disabled={isSubmitting} className={buttonClass('primary', 'w-full sm:w-auto')}>
          {isSubmitting ? <Loader2 aria-hidden className="size-4 animate-spin" /> : null}
          {isSubmitting ? 'Sending…' : 'Send enquiry'}
        </button> */}
      </div>
    </form>
  );
}

const inputClass =
  'w-full rounded-md border border-line bg-ink px-4 py-3 text-fg transition-colors placeholder:text-fg-3 hover:border-white/20 focus:border-glow focus:outline-none focus-visible:outline-none focus:ring-2 focus:ring-accent/40 aria-[invalid=true]:border-red-400/70';

type FieldProps = { id: string; 'aria-invalid': boolean; 'aria-describedby'?: string };

/** Label + control + error message, wired together for screen readers. */
function Field({
  label,
  optional,
  error,
  className,
  children,
}: {
  label: string;
  optional?: boolean;
  error?: string;
  className?: string;
  children: (props: FieldProps) => React.ReactNode;
}) {
  const id = useId();
  const errorId = `${id}-error`;
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-2 block text-sm text-fg">
        {label}
        {optional ? <span className="ml-1.5 text-fg-3">(optional)</span> : null}
      </label>
      {children({ id, 'aria-invalid': Boolean(error), 'aria-describedby': error ? errorId : undefined })}
      {error ? (
        <p id={errorId} className="mt-2 text-sm text-red-300">
          {error}
        </p>
      ) : null}
    </div>
  );
}

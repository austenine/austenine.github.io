
interface GoogleContactFormProps {
  formUrl: string;
}

export default function GoogleContactForm({
  formUrl,
}: GoogleContactFormProps) {
  return (
    <iframe
      src={'https://docs.google.com/forms/d/e/1FAIpQLSf_FinyrDrp7pQ-T8QLUyucWzhAJIGVhLZszkHCX11fmwsgLA/viewform?embedded=true'}
      width="100%"
      height="850"
      title="Austenine Project Enquiry Form"
      className="w-full rounded-xl border-0"
    >
      Loading…
    </iframe>
  );
}


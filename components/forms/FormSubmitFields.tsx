import { SITE_ORIGIN } from "@/lib/site";

type Props = {
  subject: string;
  nextPath: string;
};

/** Hidden FormSubmit.co fields: thank-you redirect, honeypot, captcha. */
export default function FormSubmitFields({ subject, nextPath }: Props) {
  const next = nextPath.startsWith("http")
    ? nextPath
    : `${SITE_ORIGIN}${nextPath}`;

  return (
    <>
      <input type="hidden" name="_subject" value={subject} />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_next" value={next} />
      <input type="hidden" name="_captcha" value="true" />
      <input
        type="text"
        name="_honey"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />
    </>
  );
}

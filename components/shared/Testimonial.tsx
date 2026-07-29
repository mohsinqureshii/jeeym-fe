import { Quote } from "lucide-react";

interface TestimonialProps {
  quote: string;
  role: string;
  organisation: string;
  /** Shows a visible editorial note that the quote is placeholder content. */
  placeholder?: boolean;
}

export default function Testimonial({
  quote,
  role,
  organisation,
  placeholder = false,
}: TestimonialProps) {
  return (
    <figure className="relative mx-auto max-w-3xl rounded-2.5xl border border-line bg-white p-8 shadow-card sm:p-12">
      <Quote
        className="absolute -top-5 left-8 h-10 w-10 rounded-xl bg-brand p-2 text-white"
        aria-hidden="true"
      />
      <blockquote className="text-[21px] font-medium leading-relaxed tracking-tight text-ink sm:text-[24px]">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-3.5">
        <span
          className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-wash text-[14px] font-bold text-brand"
          aria-hidden="true"
        >
          HT
        </span>
        <div>
          <p className="text-[15px] font-semibold text-ink">{role}</p>
          <p className="text-[14px] text-body">{organisation}</p>
        </div>
      </figcaption>
      {placeholder ? (
        <p className="mt-6 rounded-lg border border-dashed border-warning/40 bg-amber-50 px-3.5 py-2 text-[12.5px] font-medium text-amber-700">
          CMS note: placeholder testimonial — replace with a verified customer
          quote before publication.
        </p>
      ) : null}
    </figure>
  );
}

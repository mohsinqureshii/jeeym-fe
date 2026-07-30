import Link from "next/link";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center justify-center bg-brand-faint py-24">
      <div className="container-site text-center">
        <p className="eyebrow">404</p>
        <h1 className="mt-4 text-display text-ink">
          We couldn&apos;t find that page
        </h1>
        <p className="mx-auto mt-4 max-w-md text-lead text-body">
          The page may have moved, or the link may be out of date.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href="/" size="lg">
            Back to the homepage
          </Button>
          <Button href="/product" variant="secondary" size="lg">
            Explore the product
          </Button>
        </div>
        <p className="mt-6 text-[14px] text-body">
          Looking for something specific? Try{" "}
          <Link href="/pricing" className="font-semibold text-brand">
            pricing
          </Link>
          ,{" "}
          <Link href="/security" className="font-semibold text-brand">
            security
          </Link>{" "}
          or{" "}
          <Link href="/contact-sales" className="font-semibold text-brand">
            contact sales
          </Link>
          .
        </p>
      </div>
    </section>
  );
}

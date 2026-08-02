import Reveal from "@/components/ui/Reveal";

/**
 * Monochrome placeholder customer logos.
 * TODO: replace with real customer logos once supplied.
 */
const placeholderLogos = [
  "Almadar Holdings",
  "Novapoint",
  "Crescent Health",
  "Terrabyte Systems",
  "Meridian Logistics",
  "Zahra Capital",
  "Orbit Education",
  "Falconline",
];

export default function LogoStrip() {
  return (
    <section className="bg-white py-14 sm:py-16" aria-label="Trusted organisations">
      <div className="container-site">
        <Reveal>
          <p className="text-center text-[15px] font-semibold text-ink">
            A better way for organisations to work
          </p>
          <p className="mt-2 text-center text-[14px] text-body">
            Built for startups, growing teams, enterprises and regulated
            organisations.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <ul className="mt-8 grid grid-cols-2 items-center justify-items-center gap-x-8 gap-y-6 sm:grid-cols-4 lg:grid-cols-8">
            {placeholderLogos.map((name) => (
              <li
                key={name}
                className="select-none whitespace-nowrap text-[15px] font-bold tracking-tight text-body/50 grayscale transition-colors duration-300 hover:text-body"
                aria-label={`${name} (placeholder logo)`}
              >
                {name}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

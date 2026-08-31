import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[680px] overflow-hidden">

      {/* Desktop / Tablet Hero Image */}
      <Image
        src="/images/hero-lifestyle.png"
        alt="Integrative lifestyle healthcare"
        fill
        priority
        sizes="100vw"
        className="hidden object-cover object-center md:block"
      />

      {/* Mobile Hero Image */}
      <Image
        src="/images/hero-lifestyle-mobile.png"
        alt="Integrative lifestyle healthcare"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center md:hidden"
      />

      {/* Readability overlay */}
        <div
          className="
            absolute inset-0
            bg-gradient-to-r
            from-[#FFF]/95
            via-[#FAF8F1]/10
            to-transparent

            md:bg-gradient-to-r
            md:from-[#FFF]/95
            md:via-[#FAF8F1]/10
            md:to-transparent
          "
        />

        {/* Mobile overlay */}
        <div
          className="
            absolute inset-0
            bg-gradient-to-r
            from-[#FAF8F1]/95
            via-[#FAF8F1]/85
            to-[#FAF8F1]/75
            md:hidden
          "
        />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[680px] max-w-[1500px] items-center px-6 sm:px-10 lg:px-16 xl:px-20">

        <div className="max-w-[620px] py-20">

          {/* Eyebrow */}
          <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#609174] sm:text-[12px]">
            Integrative Lifestyle Healthcare
          </p>

          {/* H1 */}
          <h1 className="font-serif text-[48px] leading-[0.98] tracking-[-0.045em] text-[#123F35] sm:text-[60px] md:text-[68px] lg:text-[72px]">
            Better health
            <br />
            starts with
            <br />
            <span className="italic text-[#65966F]">
              your lifestyle.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-[500px] text-[14px] leading-6 text-[#405B53] sm:text-[16px] sm:leading-7">
            We help you build healthier, sustainable habits through
            personalized lifestyle medicine, nutrition, yoga, breath
            and mind practices.
          </p>

          {/* CTA */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">

            <Link
              href="/book-appointment"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#123F35] px-7 text-[13px] font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#0D332C]"
            >
              Book Consultation
              <span aria-hidden="true">→</span>
            </Link>

            <Link
              href="/assessment"
              className="inline-flex h-12 items-center justify-center rounded-full border border-[#173F35]/25 bg-white/70 px-7 text-[13px] font-semibold text-[#173F35] backdrop-blur-sm transition hover:bg-white"
            >
              21-Point Assessment
            </Link>

          </div>

          {/* Trust points */}
          <div className="mt-9 grid max-w-[540px] grid-cols-2 border-t border-[#173F35]/15 pt-5 sm:grid-cols-4">

            <TrustItem
              icon="✦"
              title="Evidence-based"
              subtitle="Care"
            />

            <TrustItem
              icon="◌"
              title="Personalized"
              subtitle="for You"
            />

            <TrustItem
              icon="♧"
              title="Expert"
              subtitle="Guidance"
            />

            <TrustItem
              icon="⌁"
              title="Sustainable"
              subtitle="Habits"
            />

          </div>

        </div>
      </div>
    </section>
  );
}

function TrustItem({
  icon,
  title,
  subtitle,
}: {
  icon: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="flex items-center gap-2 border-[#173F35]/10 px-2 py-2 first:border-l-0 sm:border-l">

      <div
        aria-hidden="true"
        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#E6EFE3]/90 text-[#4C8060]"
      >
        {icon}
      </div>

      <div>
        <p className="text-[9px] font-semibold leading-tight text-[#304A43] sm:text-[10px]">
          {title}
        </p>

        <p className="mt-0.5 text-[9px] leading-tight text-[#7A8983]">
          {subtitle}
        </p>
      </div>

    </div>
  );
}
import { useLang } from "../data/useLang";
import animeImg from "../assets/anime.png";

export default function About() {
  const { t } = useLang();
  return (
    <section id="about" className="pt-14 md:pt-16 pb-20 md:pb-28 scroll-mt-24 relative">
      {/* Subtle separator */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-2xl h-px separator-shimmer" />
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-start justify-center gap-12 md:gap-16">
          {/* Text */}
          <div className="flex-1 text-center md:text-left order-2 md:order-1">
            <h2 className="reveal font-heading type-h2 font-semibold text-on-surface mb-8">
              {t("about.title")}
            </h2>
            <div className="space-y-5">
              <p className="type-body md:type-body-lg text-on-surface-variant max-w-prose">
                {t("about.desc")}
              </p>
            </div>
          </div>

          {/* Image with animated border glow */}
          <div className="flex-shrink-0 order-1 md:order-2">
            <div className="relative w-48 h-48 md:w-64 md:h-64">
              {/* Animated gradient border */}
              <div
                className="absolute inset-0 rounded-[16px] animate-border-glow"
                style={{
                  background: "conic-gradient(from 0deg, var(--color-primary), var(--color-secondary), var(--color-tertiary), var(--color-primary))",
                  willChange: "transform",
                }}
              />
              {/* Inner glow blur */}
              <div className="absolute inset-0 rounded-[16px] blur-md opacity-60"
                style={{
                  background: "conic-gradient(from 0deg, var(--color-primary), var(--color-secondary), var(--color-tertiary), var(--color-primary))",
                  willChange: "transform",
                }}
              />
              {/* Image */}
              <div className="absolute inset-[3px] rounded-[13px] overflow-hidden bg-surface">
                <img
                  src={animeImg}
                  alt="About"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

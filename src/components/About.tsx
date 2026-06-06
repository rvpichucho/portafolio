import { useLang } from "../data/useLang";
import animeImg from "../assets/anime.png";

export default function About() {
  const { t } = useLang();
  return (
    <section id="about" className="pt-14 md:pt-16 pb-20 md:pb-28 scroll-mt-24 relative">
      {/* Subtle separator */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-2xl h-px bg-gradient-to-r from-transparent via-outline-variant/30 to-transparent" />
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-14">
          {/* Text */}
          <div className="flex-1 text-center md:text-left md:pl-8">
            <h2 className="font-heading text-[32px] md:text-[40px] font-semibold tracking-[-0.02em] text-on-surface mb-6">
              {t("about.title")}
            </h2>
            <p className="text-lg text-on-surface-variant leading-[1.8] max-w-2xl mx-auto md:mx-0">
              {t("about.desc")}
            </p>
          </div>

          {/* Image with animated border glow */}
          <div className="flex-shrink-0 md:pr-8">
            <div className="relative w-56 h-56 md:w-72 md:h-72">
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

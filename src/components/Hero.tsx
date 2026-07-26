import { personalInfo } from "../data/portfolio";
import { useLang } from "../data/useLang";
import foto from "../assets/romel.png";

export default function Hero() {
  const { t } = useLang();
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center relative overflow-hidden pt-14 md:pt-16"
    >
      {/* ─── Background ambient ─── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-40 w-[500px] h-[500px] bg-primary/8 rounded-full blur-[120px] animate-breath" />
        <div className="absolute bottom-1/4 -right-40 w-[400px] h-[400px] bg-secondary/8 rounded-full blur-[120px] animate-breath" style={{ animationDelay: "-2s" }} />
      </div>

      <div className="section-container w-full">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10">
          {/* ─── Text Content ─── */}
          <div className="flex-1 text-center md:text-left md:max-w-xl">
            <span
              className="inline-block font-code type-meta font-medium tracking-[var(--tracking-badge)] uppercase text-primary-light mb-5"
              style={{ animation: "fadeUp 0.5s cubic-bezier(0.16,1,0.3,1) 0.1s both" }}
            >
              ✦ {t("hero.badge")}
            </span>

            <h1
              className="font-heading type-display font-bold text-on-surface mb-6"
              style={{ animation: "fadeUp 0.6s cubic-bezier(0.16,1,0.3,1) 0.25s both" }}
            >
              {personalInfo.name.split(" ")[0]}{" "}
              <span className="text-primary-light">
                {personalInfo.name.split(" ").slice(1).join(" ")}
              </span>
            </h1>

            <p
              className="type-body md:type-body-lg font-body text-on-surface-variant max-w-prose mx-auto md:mx-0 mb-9"
              style={{ animation: "fadeUp 0.6s cubic-bezier(0.16,1,0.3,1) 0.4s both" }}
            >
              {t("hero.desc")}
            </p>

            {/* CTA Buttons */}
            <div
              className="flex flex-wrap gap-3 justify-center md:justify-start"
              style={{ animation: "fadeUp 0.6s cubic-bezier(0.16,1,0.3,1) 0.55s both" }}
            >
              <a
                href={personalInfo.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 px-6 py-3 bg-primary hover:bg-primary-dark text-on-primary font-medium rounded-[8px] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25 active:scale-95 touch-target"
              >
                <svg className="w-4 h-4 group-hover:translate-y-[-2px] transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                {t("hero.cv")}
              </a>
              <button
                onClick={() => scrollTo("#contact")}
                className="inline-flex items-center gap-2.5 px-6 py-3 border border-outline hover:border-primary-light text-on-surface hover:text-primary-light font-medium rounded-[8px] transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 active:scale-95 touch-target"
              >
                {t("hero.contact")}
              </button>
            </div>

            {/* Social */}
            <div
              className="flex gap-3 mt-9 justify-center md:justify-start"
              style={{ animation: "fadeUp 0.6s cubic-bezier(0.16,1,0.3,1) 0.7s both" }}
            >
              {[
                { href: personalInfo.social.linkedin, label: "LinkedIn" },
                { href: personalInfo.social.github, label: "GitHub" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-2.5 rounded-xl border border-outline-variant/20 bg-surface-container-low/50 hover:bg-surface-container hover:border-primary/30 hover:text-primary-light transition-all duration-300 text-on-surface-variant"
                  aria-label={s.label}
                >
                  {s.label === "LinkedIn" && (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  )}
                  {s.label === "GitHub" && (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                    </svg>
                  )}

                </a>
              ))}
            </div>
          </div>

          {/* ─── Avatar Card ─── */}
          <div
            className="flex-shrink-0"
            style={{ animation: "fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) 0.4s both" }}
          >
            <div className="relative animate-float">
              {/* Glow orb behind */}
              <div className="absolute -top-6 -right-6 w-28 h-28 md:w-40 md:h-40 bg-primary/15 rounded-full blur-[60px] animate-breath" />
              <div className="absolute -bottom-4 -left-4 w-20 h-20 md:w-28 md:h-28 bg-secondary/10 rounded-full blur-[50px] animate-breath" style={{ animationDelay: "-2.5s" }} />

              {/* Card frame */}
              <div className="relative w-40 h-56 md:w-72 md:h-96 rounded-[12px] overflow-hidden border border-primary/20 shadow-2xl shadow-primary/10 rotate-[2deg] hover:rotate-0 transition-transform duration-500">
                {/* Gradient overlay on image */}
                <div className="absolute inset-0 bg-gradient-to-t from-surface/40 via-transparent to-transparent z-10 pointer-events-none" />
                <img
                  src={foto}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Glass accent bar */}
              <div className="absolute -bottom-3 left-4 right-4 h-3 rounded-b-[12px] bg-surface-container-low/80 backdrop-blur-sm border border-primary/10 border-t-0 z-20" />

              {/* Decorative ring */}
              <div className="absolute -inset-3 rounded-[16px] border border-primary/10 -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

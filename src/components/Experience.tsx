import { useState } from "react";
import { useLang } from "../data/useLang";
import { experiences } from "../data/portfolio";

const VISIBLE_COUNT = 3;

const DOT_COLORS = [
  "bg-primary border-primary",
  "bg-secondary border-secondary",
  "bg-tertiary border-tertiary",
];

export default function Experience() {
  const { t } = useLang();
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? experiences : experiences.slice(0, VISIBLE_COUNT);

  return (
    <section id="experience" className="pt-14 md:pt-16 pb-20 md:pb-28 scroll-mt-24 relative">
      {/* Subtle separator */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-2xl h-px separator-shimmer" />
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="reveal font-heading type-h2 font-semibold text-on-surface">
            {t("exp.title")}
          </h2>
          <p className="text-on-surface-variant mt-3 max-w-xl mx-auto">
            {t("skills.desc")}
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {visible.map((exp, idx) => (
            <div
              key={idx}
              className="relative pl-10 pb-2 border-l-2 border-outline-variant/30 last:border-l-2 last:border-transparent"
            >
              {/* Timeline dot — alternates through palette */}
              <div className={`absolute left-[-10px] top-[6px] w-[18px] h-[18px] rounded-full bg-surface border-2 ${DOT_COLORS[idx % DOT_COLORS.length]} shadow-[0_0_0_3px_var(--color-surface)] z-10`} />

              {/* Period — compact above */}
              <span className="font-code type-meta font-medium uppercase text-primary-light/70">
                {exp.period}
              </span>

              {/* Role + Company cluster */}
              <div className="mt-0.5">
                <h3 className="font-heading type-h3 font-semibold text-on-surface">
                  {t(`exp.${idx}.role`)}
                </h3>
                <p className="type-body-sm text-primary-light/70 font-medium -mt-0.5">
                  {exp.company}
                </p>
              </div>

              {/* Description — set apart with generous leading */}
              <p className="type-body-sm md:type-body text-on-surface-variant mt-3 mb-4">
                {t(`exp.${idx}.desc`)}
              </p>

              {/* Tech tags */}
              {exp.techs.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mb-1">
                  {exp.techs.map((tech) => (
                    <span
                      key={tech}
                      className="tag-hover px-2.5 py-0.5 text-[11px] font-medium rounded-full bg-primary/8 text-primary-light/90 border border-primary/15"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {experiences.length > VISIBLE_COUNT && (
          <div className="flex justify-center mt-10">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-primary-light hover:text-on-surface transition-colors rounded-[8px] border border-outline-variant/20 hover:border-primary/30 hover:bg-surface-container active:bg-surface-container-highest active:scale-95 touch-target"
            >
              {showAll ? (
                <>{t("exp.show_less")} <span className="text-xs">↑</span></>
              ) : (
                <>{t("exp.show_all").replace("{count}", String(experiences.length - VISIBLE_COUNT))} <span className="text-xs">→</span></>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

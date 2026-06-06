import { useLang } from "../data/useLang";
import { experiences } from "../data/portfolio";

export default function Experience() {
  const { t } = useLang();
  return (
    <section id="experience" className="pt-14 md:pt-16 pb-20 md:pb-28 scroll-mt-24 relative">
      {/* Subtle separator */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-2xl h-px bg-gradient-to-r from-transparent via-outline-variant/30 to-transparent" />
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="font-heading text-[32px] md:text-[40px] font-semibold tracking-[-0.02em] text-on-surface">
            {t("exp.title")}
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-8">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="relative pl-8 border-l-2 border-outline-variant/40"
            >
              {/* Timeline dot */}
              <div className="absolute left-[-9px] top-1 w-4 h-4 rounded-full bg-primary border-2 border-surface" />

              <span className="font-code text-xs font-medium text-primary-light tracking-wider">
                {exp.period}
              </span>
              <h3 className="font-heading text-xl font-semibold text-on-surface mt-1">
                {t(`exp.${idx}.role`)}
              </h3>
              <p className="text-sm text-primary-light/80 font-medium mb-3">
                {exp.company}
              </p>
              <p className="text-on-surface-variant leading-relaxed mb-4">
                {t(`exp.${idx}.desc`)}
              </p>
              <div className="flex flex-wrap gap-2">
                {exp.techs.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary-light border border-primary/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { useState } from "react";
import { useLang } from "../data/useLang";
import { services } from "../data/portfolio";

const iconMap: Record<string, string> = {
  web: "🌐",
  smartphone: "📱",
  dns: "🖥️",
  api: "🔌",
  hub: "🔗",
  precision_manufacturing: "🤖",
  settings_suggest: "⚙️",
  query_stats: "📊",
};

const PRIMARY_COUNT = 4;

const HOVER_BORDERS = [
  "hover:border-primary/30",
  "hover:border-secondary/30",
  "hover:border-tertiary/30",
  "hover:border-primary/30",
  "hover:border-secondary/30",
  "hover:border-tertiary/30",
  "hover:border-primary/30",
  "hover:border-secondary/30",
];

export default function Services() {
  const { t } = useLang();
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? services : services.slice(0, PRIMARY_COUNT);

  return (
    <section id="services" className="pt-14 md:pt-16 pb-20 md:pb-28 bg-surface-container-low scroll-mt-24 relative">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="reveal font-heading type-h2 font-semibold text-on-surface">
            {t("about.services_title")}
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {visible.map((service, idx) => (
            <div
              key={service.title}
              className={`group p-4 md:p-5 rounded-[8px] bg-surface-container-low border border-outline-variant/20 ${HOVER_BORDERS[idx]} hover:bg-surface-container transition-all duration-300`}
            >
              <span className="text-xl md:text-2xl mb-2 md:mb-3 block">{iconMap[service.icon] || "🛠️"}</span>
              <h4 className="font-heading font-semibold type-body-sm md:type-h4 text-on-surface mb-1 md:mb-2">
                {t(`sv.${idx}.title`)}
              </h4>
              <p className="type-caption md:type-body-sm text-on-surface-variant">
                {t(`sv.${idx}.desc`)}
              </p>
            </div>
          ))}
        </div>

        {services.length > PRIMARY_COUNT && (
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-primary-light hover:text-on-surface transition-colors rounded-[8px] border border-outline-variant/20 hover:border-primary/30 hover:bg-surface-container active:bg-surface-container-highest active:scale-95 touch-target"
            >
              {showAll ? (
                <>{t("sv.show_less")} <span className="text-xs">↑</span></>
              ) : (
                <>{t("sv.show_all")} <span className="text-xs">→</span></>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

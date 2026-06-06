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

export default function Services() {
  const { t } = useLang();
  return (
    <section id="services" className="pt-14 md:pt-16 pb-20 md:pb-28 bg-surface-container-low scroll-mt-24 relative">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="font-heading text-[32px] md:text-[40px] font-semibold tracking-[-0.02em] text-on-surface">
            {t("about.services_title")}
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {services.map((service, idx) => (
            <div
              key={service.title}
              className="group p-4 md:p-5 rounded-[8px] bg-surface-container-low border border-outline-variant/20 hover:border-primary/30 hover:bg-surface-container transition-all duration-300"
            >
              <span className="text-xl md:text-2xl mb-2 md:mb-3 block">{iconMap[service.icon] || "🛠️"}</span>
              <h4 className="font-heading font-semibold text-sm md:text-base text-on-surface mb-1 md:mb-2">
                {t(`sv.${idx}.title`)}
              </h4>
              <p className="text-xs md:text-sm text-on-surface-variant leading-relaxed">
                {t(`sv.${idx}.desc`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

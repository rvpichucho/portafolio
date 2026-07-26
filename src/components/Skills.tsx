import { useState, useMemo } from "react";
import { skillCategories } from "../data/portfolio";
import { useLang } from "../data/useLang";
import {
  SiLaravel, SiDjango, SiNodedotjs, SiFastapi, SiFlask, SiNestjs,
  SiReact, SiTypescript, SiAngular, SiHtml5, SiCss,
  SiFlutter, SiDart,
  SiMysql, SiPostgresql, SiMongodb, SiFirebase,
  SiScikitlearn, SiPytorch, SiNumpy, SiOpencv,
} from "react-icons/si";

const techIconMap: Record<string, React.ElementType> = {
  Laravel: SiLaravel,
  Django: SiDjango,
  "Node.js": SiNodedotjs,
  FastAPI: SiFastapi,
  Flask: SiFlask,
  NestJS: SiNestjs,
  React: SiReact,
  TypeScript: SiTypescript,
  Angular: SiAngular,
  HTML5: SiHtml5,
  CSS3: SiCss,
  "React Native": SiReact,
  Flutter: SiFlutter,
  Dart: SiDart,
  MySQL: SiMysql,
  PostgreSQL: SiPostgresql,
  MongoDB: SiMongodb,
  Firebase: SiFirebase,
  "Scikit-learn": SiScikitlearn,
  PyTorch: SiPytorch,
  NumPy: SiNumpy,
  OpenCV: SiOpencv,
};

const catIconMap: Record<string, string> = {
  code: "💻",
  terminal: "🖥️",
  smartphone: "📱",
  database: "🗄️",
  brain: "🧠",
};

export default function Skills() {
  const { t } = useLang();
  const [activeCategory, setActiveCategory] = useState(skillCategories[0].id);

  const activeData = useMemo(
    () => skillCategories.find((cat) => cat.id === activeCategory),
    [activeCategory]
  );

  return (
    <section id="skills" className="pt-14 md:pt-16 pb-20 md:pb-28 scroll-mt-24">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="reveal font-heading type-h2 font-semibold text-on-surface">
            {t("skills.title")}
          </h2>
          <p className="mt-4 type-body-lg text-on-surface-variant max-w-prose mx-auto">
            {t("skills.desc")}
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {skillCategories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 flex items-center gap-1.5 ${
                  isActive
                    ? "text-white shadow-md scale-105"
                    : "bg-surface-container border border-outline-variant/30 text-on-surface-variant hover:border-outline hover:text-on-surface"
                }`}
                style={isActive ? { backgroundColor: cat.color } : undefined}
              >
                <span>{catIconMap[cat.icon] || "🛠️"}</span>
                {cat.name}
              </button>
            );
          })}
        </div>

        {/* Tech Grid */}
        {activeData && (
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
              {activeData.techs.map((tech) => {
                const Icon = techIconMap[tech.name];
                return (
                  <div
                    key={tech.name}
                    className="group relative p-4 md:p-5 rounded-xl bg-surface-container-low border border-outline-variant/20 hover:border-primary/30 hover:bg-surface-container transition-all duration-300 text-center overflow-hidden"
                  >
                    {/* Top accent line */}
                    <div
                      className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ backgroundColor: activeData.color }}
                    />

                    {/* Icon */}
                    <div className="mb-3 flex items-center justify-center">
                      {Icon ? (
                        <Icon
                          className="w-8 h-8 md:w-10 md:h-10 transition-all duration-300 group-hover:scale-110"
                          style={{ color: activeData.color }}
                        />
                      ) : (
                        <span className="text-3xl">📘</span>
                      )}
                    </div>

                    {/* Name */}
                    <h4 className="font-heading font-semibold text-xs md:text-sm text-on-surface group-hover:text-primary-light transition-colors">
                      {tech.name}
                    </h4>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

import { useState } from "react";
import { projects } from "../data/portfolio";
import { useLang } from "../data/useLang";
import {
  SiPython, SiPytorch, SiPostgresql, SiScikitlearn, SiMysql, SiOpencv,
  SiNestjs, SiReact, SiVite, SiFlutter, SiFlask, SiFastapi, SiFirebase,
  SiLaravel, SiDjango, SiMongodb,
} from "react-icons/si";

const iconMap: Record<string, React.ElementType> = {
  python: SiPython,
  pytorch: SiPytorch,
  postgresql: SiPostgresql,
  scikitlearn: SiScikitlearn,
  mysql: SiMysql,
  opencv: SiOpencv,
  nestjs: SiNestjs,
  react: SiReact,
  vite: SiVite,
  flutter: SiFlutter,
  flask: SiFlask,
  fastapi: SiFastapi,
  firebase: SiFirebase,
  laravel: SiLaravel,
  django: SiDjango,
  mongodb: SiMongodb,
  reactnative: SiReact,
};

/* ─── Tech color families ─── */
const techColorMap: Record<string, { bg: string; text: string; border: string }> = {
  // Web / Backend → primary (indigo)
  python: { bg: "bg-primary/10", text: "text-primary-light", border: "border-primary/20" },
  django: { bg: "bg-primary/10", text: "text-primary-light", border: "border-primary/20" },
  flask: { bg: "bg-primary/10", text: "text-primary-light", border: "border-primary/20" },
  laravel: { bg: "bg-primary/10", text: "text-primary-light", border: "border-primary/20" },
  nestjs: { bg: "bg-primary/10", text: "text-primary-light", border: "border-primary/20" },
  react: { bg: "bg-primary/10", text: "text-primary-light", border: "border-primary/20" },
  vite: { bg: "bg-primary/10", text: "text-primary-light", border: "border-primary/20" },
  typescript: { bg: "bg-primary/10", text: "text-primary-light", border: "border-primary/20" },
  // Mobile → secondary (purple)
  reactnative: { bg: "bg-secondary/10", text: "text-secondary-light", border: "border-secondary/20" },
  flutter: { bg: "bg-secondary/10", text: "text-secondary-light", border: "border-secondary/20" },
  dart: { bg: "bg-secondary/10", text: "text-secondary-light", border: "border-secondary/20" },
  // AI/ML → tertiary (cyan)
  pytorch: { bg: "bg-tertiary/10", text: "text-tertiary-light", border: "border-tertiary/20" },
  scikitlearn: { bg: "bg-tertiary/10", text: "text-tertiary-light", border: "border-tertiary/20" },
  opencv: { bg: "bg-tertiary/10", text: "text-tertiary-light", border: "border-tertiary/20" },
  numpy: { bg: "bg-tertiary/10", text: "text-tertiary-light", border: "border-tertiary/20" },
  // Databases → warm (orange via outline-variant tint)
  mysql: { bg: "bg-surface-container-low", text: "text-on-surface-variant", border: "border-outline-variant/40" },
  postgresql: { bg: "bg-surface-container-low", text: "text-on-surface-variant", border: "border-outline-variant/40" },
  mongodb: { bg: "bg-surface-container-low", text: "text-on-surface-variant", border: "border-outline-variant/40" },
  firebase: { bg: "bg-surface-container-low", text: "text-on-surface-variant", border: "border-outline-variant/40" },
  // API frameworks → blend
  fastapi: { bg: "bg-primary/10", text: "text-primary-light", border: "border-primary/20" },
};

const defaultTechColor = { bg: "bg-primary/10", text: "text-primary-light", border: "border-primary/20" };

/* ─── Lightweight Image Gallery ─── */
function Gallery({ images, title }: { images: string[]; title: string }) {
  const { t } = useLang();
  const [idx, setIdx] = useState(0);

  const prev = () => setIdx((i) => (i === 0 ? images.length - 1 : i - 1));
  const next = () => setIdx((i) => (i === images.length - 1 ? 0 : i + 1));

  return (
    <div>
      <div className="aspect-[16/10] rounded-[8px] relative bg-surface-container">
        <img
          src={images[idx]}
          alt={`${title} ${idx + 1}`}
          className="w-full h-full object-contain"
        />
        {/* Navigation arrows */}
        <button
          onClick={prev}
          className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors"
          aria-label={t("gallery.prev")}
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={next}
          className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors"
          aria-label={t("gallery.next")}
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
        {/* Counter */}
        <span className="absolute bottom-2 right-2 px-2 py-0.5 type-caption bg-black/50 text-white rounded-full">
          {idx + 1} / {images.length}
        </span>
      </div>
      {/* Dots */}
      <div className="flex justify-center gap-1.5 mt-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            className={`w-2 h-2 rounded-full transition-all ${
              i === idx ? "bg-primary-light w-4" : "bg-outline-variant"
            }`}
            aria-label={`${t("gallery.image")} ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  const { t, lang } = useLang();
  const [selected, setSelected] = useState<number | null>(null);
  const [showModal, setShowModal] = useState(false);

  const openModal = (idx: number) => {
    setSelected(idx);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelected(null);
  };

  const project = selected !== null ? projects[selected] : null;

  return (
    <section id="projects" className="pt-14 md:pt-16 pb-20 md:pb-28 bg-surface-container-low scroll-mt-24">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="reveal font-heading type-h2 font-semibold text-on-surface">
            {t("proj.title")}
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 max-w-7xl mx-auto">
          {projects.map((p, idx) => {
            const techs = p.tecnologias || [];
            return (
              <button
                key={idx}
                onClick={() => openModal(idx)}
                className="group text-left rounded-[8px] bg-surface-container-low border border-outline-variant/20 overflow-hidden hover:border-primary/30 hover:bg-surface-container hover:translate-y-[-3px] hover:shadow-lg hover:shadow-primary/5 active:translate-y-0 active:scale-[0.98] transition-all duration-300"
              >
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={p.imagen}
                    alt={p.titulo[lang]}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-3 md:p-4">
                  <h3 className="font-heading font-semibold type-body-sm text-on-surface group-hover:text-primary-light transition-colors">
                    {p.titulo[lang]}
                  </h3>
                  {techs.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {techs.map((t) => {
                        const Icon = iconMap[t];
                        return (
                          <span key={t} className="inline-flex" title={t}>
                            {Icon ? <Icon className="w-4 h-4" /> : <span className="text-base">🔧</span>}
                          </span>
                        );
                      })}
                    </div>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Modal */}
        {showModal && project && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            onClick={closeModal}
            style={{ animation: "fadeUp 0.2s cubic-bezier(0.16,1,0.3,1) both" }}
          >
            <div
              className="bg-surface-container-high rounded-[8px] max-w-5xl w-full max-h-[95vh] overflow-y-auto border border-outline-variant/30"
              onClick={(e) => e.stopPropagation()}
              style={{ animation: "fadeUp 0.3s cubic-bezier(0.16,1,0.3,1) 0.05s both" }}
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-3 border-b border-outline-variant/20">
                <h3 className="font-heading text-lg font-semibold text-on-surface">
                  {project.titulo[lang]}
                </h3>
                <button
                  onClick={closeModal}
                  className="p-2 text-on-surface-variant hover:text-on-surface transition-colors"
                  aria-label={t("proj.close")}
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Body */}
              <div className="grid md:grid-cols-4 gap-6 p-6">
                {/* Image */}
                <div className="md:col-span-3">
                  {project.imagenes && project.imagenes.length > 1 ? (
                    <Gallery images={project.imagenes} title={project.titulo[lang]} />
                  ) : (
                    <div className="rounded-[8px] bg-surface-container w-full h-full min-h-[200px] flex items-center justify-center">
                      <img
                        src={project.imagen}
                        alt={project.titulo[lang]}
                        className="w-full h-full object-contain max-h-[50vh]"
                      />
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className="flex flex-col gap-4">
                  <p className="text-on-surface-variant type-body-sm">
                    {project.descripcion[lang]}
                  </p>

                  {/* Techs */}
                  {project.tecnologias && project.tecnologias.length > 0 && (
                    <div>
                      <h4 className="font-heading font-semibold type-body-sm text-on-surface mb-2">
                        {t("proj.techs")}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tecnologias.map((t) => {
                          const Icon = iconMap[t];
                          const c = techColorMap[t] || defaultTechColor;
                          return (
                            <span
                              key={t}
                              className={`tag-hover inline-flex items-center gap-1.5 px-2.5 py-1 type-caption rounded-full ${c.bg} ${c.text} ${c.border}`}
                            >
                              {Icon ? <Icon className="w-3.5 h-3.5" /> : <span>🔧</span>}
                              {t.charAt(0).toUpperCase() + t.slice(1)}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* GitHub link */}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-surface-container border border-outline-variant/30 hover:border-primary/30 text-on-surface hover:text-primary-light rounded-[8px] transition-all text-sm font-medium self-start"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                      </svg>
                      {t("proj.github")}
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

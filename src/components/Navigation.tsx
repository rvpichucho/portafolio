import { useState, useEffect, useCallback } from "react";
import { personalInfo } from "../data/portfolio";
import { useLang } from "../data/useLang";

const NAV_ITEMS = [
  { href: "#hero", label: { es: "Inicio", en: "Home" } },
  { href: "#about", label: { es: "Acerca", en: "About" } },
  { href: "#services", label: { es: "Servicios", en: "Services" } },
  { href: "#skills", label: { es: "Habilidades", en: "Skills" } },
  { href: "#experience", label: { es: "Experiencia", en: "Experience" } },
  { href: "#projects", label: { es: "Proyectos", en: "Projects" } },
  { href: "#contact", label: { es: "Contacto", en: "Contact" } },
];

export default function Navigation() {
  const { lang, toggleLang } = useLang();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">(() => {
    const saved = localStorage.getItem("theme");
    return saved === "light" ? "light" : "dark";
  });

  // Apply theme to HTML element
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "light") {
      root.setAttribute("data-theme", "light");
    } else {
      root.removeAttribute("data-theme");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }, []);

  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const sectionIds = NAV_ITEMS.map((item) => item.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      setMenuOpen(false);
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    },
    []
  );

  const t = (es: string, en: string) => (lang === "es" ? es : en);

  return (
    <>
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-surface shadow-[0_1px_0_var(--color-outline-variant)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, "#hero")}
            className="font-heading text-xl font-bold tracking-tight text-on-surface hover:text-primary-light transition-colors"
          >
            {personalInfo.name
              .split(" ")
              .map((w) => w[0])
              .join("")}
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`px-4 py-2 text-sm font-medium transition-colors rounded-lg ${
                  activeSection === item.href.slice(1)
                    ? "text-primary-light bg-primary/8"
                    : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest"
                }`}
              >
                {t(item.label.es, item.label.en)}
              </a>
            ))}
          </nav>

          {/* Right side actions - Desktop */}
          <div className="hidden md:flex items-center gap-2">
            {/* Language Toggle */}
            <button
              onClick={toggleLang}
              className="px-3 py-1.5 text-xs font-medium font-code rounded-lg bg-surface-container-low border border-outline-variant/30 text-on-surface-variant hover:text-on-surface hover:border-outline transition-all"
              aria-label={t("Cambiar idioma", "Switch language")}
            >
              {lang === "es" ? "EN" : "ES"}
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest transition-all"
              aria-label={t("Cambiar tema", "Toggle theme")}
            >
              {theme === "dark" ? (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile - Theme & Lang + Menu toggle */}
          <div className="flex md:hidden items-center gap-1">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-on-surface-variant hover:text-on-surface transition-colors"
              aria-label={t("Cambiar tema", "Toggle theme")}
            >
              {theme === "dark" ? (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 text-on-surface hover:text-primary-light transition-colors"
              aria-label={t("Menú", "Menu")}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>

      {/* Mobile Menu Panel - rendered outside header */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-[60] md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}
      {menuOpen && (
        <div className="fixed top-0 right-0 h-full w-auto min-w-fit z-[70] md:hidden">
          <div className="h-full w-full bg-surface-container-high shadow-2xl shadow-black/40">
            <div className="flex items-center justify-between p-4 border-b border-outline-variant/20">
              <button
                onClick={toggleLang}
                className="px-3 py-1.5 text-xs font-medium font-code rounded-lg bg-surface-container-low border border-outline-variant/30 text-on-surface-variant hover:text-on-surface transition-all"
              >
                {lang === "es" ? "EN" : "ES"}
              </button>
              <button
                onClick={() => setMenuOpen(false)}
                className="p-2 text-on-surface-variant hover:text-on-surface transition-colors"
                aria-label="Cerrar menú"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <nav className="flex flex-col gap-1 px-4 mt-2">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-4 py-3 text-base font-medium rounded-lg transition-colors ${
                    activeSection === item.href.slice(1)
                      ? "text-primary-light bg-primary/8"
                      : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest"
                  }`}
                >
                  {t(item.label.es, item.label.en)}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}

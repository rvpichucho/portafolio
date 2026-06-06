import { useState, useCallback, useMemo } from "react";
import { personalInfo } from "../data/portfolio";
import { useLang } from "../data/useLang";

export default function Contact() {
  const { t } = useLang();
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    },
    []
  );

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSent(true);
      setFormData({ nombre: "", email: "", mensaje: "" });
      setTimeout(() => setSent(false), 3000);
    }, 1500);
  }, []);

  const emailChars = useMemo(() => {
    const shift = 3;
    return personalInfo.email.split("").map((c) =>
      String.fromCharCode(c.charCodeAt(0) + shift)
    );
  }, []);

  return (
    <section id="contact" className="pt-14 md:pt-16 pb-20 md:pb-28 scroll-mt-24 relative">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="font-heading text-[32px] md:text-[40px] font-semibold tracking-[-0.02em] text-on-surface">
            {t("contact.title")}
          </h2>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-[8px] bg-primary/10 flex items-center justify-center text-primary-light flex-shrink-0">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h4 className="font-heading font-semibold text-on-surface mb-1">{t("contact.email_label")}</h4>
                <span className="text-on-surface-variant text-sm select-none">
                  {emailChars.map((ch, i) => (
                    <span key={i} style={{ unicodeBidi: "isolate" }}>
                      {String.fromCharCode(ch.charCodeAt(0) - 3)}
                    </span>
                  ))}
                </span>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-[8px] bg-secondary/10 flex items-center justify-center text-secondary-light flex-shrink-0">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h4 className="font-heading font-semibold text-on-surface mb-1">{t("contact.location_label")}</h4>
                <p className="text-on-surface-variant text-sm">{personalInfo.location}</p>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-[8px] bg-tertiary/10 flex items-center justify-center text-tertiary-light flex-shrink-0">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <div>
                <h4 className="font-heading font-semibold text-on-surface mb-1">{t("contact.whatsapp_label")}</h4>
                <p className="text-on-surface-variant text-sm">{personalInfo.phone}</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              {[
                { href: personalInfo.social.linkedin, label: "LinkedIn" },
                { href: personalInfo.social.github, label: "GitHub" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-sm font-medium rounded-[8px] bg-surface-container border border-outline-variant/30 text-on-surface-variant hover:text-primary-light hover:border-primary/30 transition-all"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <input
                type="text"
                name="nombre"
                placeholder={t("contact.name_placeholder")}
                value={formData.nombre}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-surface-container-low border border-outline-variant/30 rounded-[8px] text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:border-primary/50 transition-colors text-sm"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder={t("contact.email_placeholder")}
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-surface-container-low border border-outline-variant/30 rounded-[8px] text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:border-primary/50 transition-colors text-sm"
              />
            </div>
            <div>
              <textarea
                name="mensaje"
                placeholder={t("contact.message_placeholder")}
                rows={5}
                value={formData.mensaje}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-surface-container-low border border-outline-variant/30 rounded-[8px] text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:border-primary/50 transition-colors text-sm resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={sending}
              className={`w-full px-6 py-3 rounded-[8px] font-medium text-sm transition-all duration-300 flex items-center justify-center gap-2 ${
                sent
                  ? "bg-green-600 text-white"
                  : "bg-primary hover:bg-primary-dark text-on-primary hover:shadow-lg hover:shadow-primary/25"
              }`}
            >
              {sending ? (
                t("contact.sending")
              ) : sent ? (
                t("contact.sent")
              ) : (
                <>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                  {t("contact.send")}
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

import { useEffect } from "react";

/**
 * Observes elements with class "reveal" and adds "visible" when they enter the viewport.
 * Usage: <h2 className="reveal">...</h2>
 */
export function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "-80px 0px -80px 0px", threshold: 0 }
    );

    const elements = document.querySelectorAll(".reveal");
    for (const el of elements) {
      observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);
}

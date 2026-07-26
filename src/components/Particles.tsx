import { useMemo } from "react";

const PARTICLE_COUNT = 35;

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
}

export default function Particles() {
  const particles = useMemo<Particle[]>(() => {
    const seed = (i: number) => {
      const s = Math.sin(i * 127.1 + 311.7) * 43758.5453;
      return s - Math.floor(s);
    };

    return Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
      id: i,
      x: seed(i * 2) * 100,
      y: seed(i * 2 + 1) * 100,
      size: 3 + seed(i * 3) * 4,
      delay: seed(i * 5) * 14,
      duration: 16 + seed(i * 7) * 14,
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" aria-hidden="true" style={{ zIndex: 1 }}>
      {particles.map((p) => {
        const colors = ["var(--color-primary-light)", "var(--color-secondary-light)", "var(--color-tertiary-light)"];
        const color = colors[p.id % 3];
        return (
          <span
            key={p.id}
            className="absolute rounded-full particle-glow"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.size,
              height: p.size,
              color: color,
              backgroundColor: color,
              opacity: 0.4,
              animation: `particleFloat ${p.duration}s ease-in-out ${p.delay}s infinite alternate`,
              willChange: "transform",
            }}
          />
        );
      })}
    </div>
  );
}

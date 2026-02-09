import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import heroVideo from "@/assets/hero-video.mov";

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.85, 1.05]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 py-20"
    >
      {/* Background subtle gradient */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background via-background to-background" />

      {/* Copy above video */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 mb-10 max-w-3xl text-center"
      >
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-muted-foreground">
          AI Automation Specialist
        </p>
        <h1 className="mb-6 text-4xl font-bold leading-[1.1] tracking-tight text-gradient sm:text-5xl md:text-6xl lg:text-7xl">
          Беру под контроль хаос ваших данных
        </h1>
        <p className="mx-auto max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          12 лет опыта в управлении аэропортами, упакованные в отказоустойчивые
          AI-системы. Из коммерческой авиации — в автоматизацию вашего бизнеса.
        </p>
      </motion.div>

      {/* CTAs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 mb-14 flex flex-wrap items-center justify-center gap-4"
      >
        <a
          href="#contact"
          className="inline-flex h-12 items-center rounded-full bg-primary px-8 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_-5px_hsl(175_80%_50%/0.3)]"
        >
          Запустить проект
        </a>
        <a
          href="#services"
          className="inline-flex h-12 items-center rounded-full border border-border px-8 text-sm font-medium text-foreground transition-all duration-300 hover:border-muted-foreground hover:bg-secondary"
        >
          Посмотреть решения
        </a>
      </motion.div>

      {/* Cinematic Video Container */}
      <motion.div
        style={{ scale, y }}
        className="relative z-10 w-full max-w-5xl"
      >
        <div className="glow-border cinematic-glow overflow-hidden rounded-cinematic">
          <div className="relative aspect-video w-full overflow-hidden bg-card">
            <video
              src={heroVideo}
              autoPlay
              loop
              muted
              playsInline
              className="h-full w-full object-cover"
            />
            {/* Overlay gradient */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-muted-foreground">Scroll</span>
          <div className="h-8 w-px animate-glow-pulse bg-gradient-to-b from-muted-foreground to-transparent" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;

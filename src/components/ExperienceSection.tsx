import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface BentoCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const BentoCard = ({ children, className = "", delay = 0 }: BentoCardProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className={`glass-card rounded-2xl p-6 sm:p-8 ${className}`}
    >
      {children}
    </motion.div>
  );
};

const techStack = [
  "Python", "n8n", "OpenAI", "LangChain", "PostgreSQL",
  "Make", "Telegram API", "FastAPI", "Docker", "Vercel",
];

const ExperienceSection = () => {
  return (
    <section className="relative px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-muted-foreground"
        >
          Опыт & Стек
        </motion.h2>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {/* Card 1: Experience */}
          <BentoCard className="lg:col-span-2" delay={0.1}>
            <div className="flex h-full flex-col justify-between">
              <div>
                <span className="mb-3 inline-block rounded-full bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
                  12 лет опыта
                </span>
                <h3 className="mb-3 text-xl font-semibold leading-tight text-foreground sm:text-2xl">
                  От маркетинга до коммерческого директора аэропорта
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                  Применяю принципы диспетчеризации и авиационной надежности в коде.
                  Каждая система проектируется как критически важная инфраструктура —
                  с резервированием, мониторингом и нулевым допуском к ошибкам.
                </p>
              </div>
            </div>
          </BentoCard>

          {/* Card 2: Motivation */}
          <BentoCard delay={0.2}>
            <div className="flex h-full flex-col justify-between">
              <span className="mb-3 inline-block rounded-full bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
                Миссия
              </span>
              <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                Ушел из найма, чтобы автоматизировать мир. Строю системы, которые не падают.
              </p>
              <div className="mt-4 h-px w-full bg-gradient-to-r from-glow-cyan/30 to-glow-violet/30" />
            </div>
          </BentoCard>

          {/* Card 3: Tech Stack */}
          <BentoCard className="lg:col-span-3" delay={0.3}>
            <span className="mb-4 inline-block rounded-full bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
              Технологический стек
            </span>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg border border-border bg-secondary/50 px-4 py-2 text-sm font-medium text-foreground transition-colors duration-300 hover:border-accent/30 hover:text-accent"
                >
                  {tech}
                </span>
              ))}
            </div>
          </BentoCard>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

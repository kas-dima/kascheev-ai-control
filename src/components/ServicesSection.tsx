import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  delay: number;
}

const ServiceCard = ({ title, description, icon, delay }: ServiceCardProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className="glass-card group rounded-2xl p-6 sm:p-8"
    >
      <span className="mb-4 block text-3xl">{icon}</span>
      <h3 className="mb-2 text-lg font-semibold text-foreground">{title}</h3>
      <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
      <div className="mt-6 h-px w-0 bg-gradient-to-r from-glow-cyan to-glow-violet transition-all duration-500 group-hover:w-full" />
    </motion.div>
  );
};

const services = [
  {
    icon: "🤖",
    title: "AI-агенты",
    description: "Автономные интеллектуальные ассистенты, которые обрабатывают запросы, принимают решения и интегрируются с вашими системами 24/7.",
  },
  {
    icon: "💬",
    title: "Telegram-экосистемы",
    description: "Ботоводство на уровне платформы: CRM, воронки продаж, автоматические ответы и аналитика в одном Telegram-боте.",
  },
  {
    icon: "⚙️",
    title: "Архитектура бизнес-процессов",
    description: "Проектирование и внедрение отказоустойчивых пайплайнов автоматизации с n8n, Make и кастомными решениями.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="relative px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-muted-foreground"
        >
          Услуги
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12 max-w-lg text-2xl font-semibold leading-tight text-foreground sm:text-3xl"
        >
          Решения, которые работают на&nbsp;вас
        </motion.p>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {services.map((service, i) => (
            <ServiceCard key={service.title} {...service} delay={0.1 + i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

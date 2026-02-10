import { motion, useInView } from "framer-motion";
import { useRef } from "react";
const projects = [{
  title: "beercode.ru",
  description: "Платформа для разработчиков и автоматизаторов",
  url: "https://beercode.ru"
}, {
  title: "marry-ai.pro",
  description: "AI-ассистент для свадебной индустрии",
  url: "https://marry-ai.pro"
}, {
  title: "design-director-ai",
  description: "AI-дизайн-директор на базе Vercel",
  url: "https://design-director-ai.vercel.app"
}];
const PortfolioSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-80px"
  });
  return <section className="relative px-4 py-24 sm:py-[50px]">
      <div className="mx-auto max-w-6xl">
        <motion.h2 initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }} className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-muted-foreground">
          Портфолио
        </motion.h2>
        <motion.p initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6,
        delay: 0.1
      }} className="mb-12 max-w-lg text-2xl font-semibold leading-tight text-foreground sm:text-3xl">
          Проекты в продакшене
        </motion.p>

        <div ref={ref} className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {projects.map((project, i) => <motion.a key={project.title} href={project.url} target="_blank" rel="noopener noreferrer" initial={{
          opacity: 0,
          y: 30
        }} animate={isInView ? {
          opacity: 1,
          y: 0
        } : {}} transition={{
          duration: 0.7,
          delay: 0.1 + i * 0.1,
          ease: [0.16, 1, 0.3, 1]
        }} className="glass-card group relative flex flex-col justify-between overflow-hidden rounded-2xl p-6 sm:p-8">
              <div>
                <h3 className="mb-2 text-lg font-semibold text-foreground transition-colors duration-300 group-hover:text-accent">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground">{project.description}</p>
              </div>
              <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground transition-colors duration-300 group-hover:text-accent">
                <span>Открыть</span>
                <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </motion.a>)}
        </div>
      </div>
    </section>;
};
export default PortfolioSection;
import { motion } from "framer-motion";
const Footer = () => {
  return <footer id="contact" className="relative px-4 py-24 sm:py-[50px]">
      <div className="mx-auto max-w-6xl">
        {/* CTA */}
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }} className="mb-20 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gradient sm:text-4xl md:text-5xl rounded-sm"> Расскажите о задаче — предложу архитектуру решения.</h2>
          <p className="mx-auto mb-8 max-w-md text-base text-muted-foreground">
        </p>
          <a href="https://t.me/" target="_blank" rel="noopener noreferrer" className="inline-flex h-12 items-center rounded-full bg-primary px-8 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_-5px_hsl(175_80%_50%/0.3)]">
            Написать в Telegram
          </a>
        </motion.div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <div className="flex items-center gap-3">
            <span className="text-sm font-semibold text-foreground">KASCHEEV</span>
            <span className="h-1 w-1 rounded-full bg-muted-foreground" />
            <span className="text-sm text-muted-foreground">AI Automation</span>
          </div>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <a href="https://kas-ai.ru" target="_blank" rel="noopener noreferrer" className="transition-colors duration-300 hover:text-foreground">
              kas-ai.ru
            </a>
            <span className="h-1 w-1 rounded-full bg-muted-foreground" />
            <a href="https://node-ai.ru" target="_blank" rel="noopener noreferrer" className="transition-colors duration-300 hover:text-foreground">
              node-ai.ru
            </a>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;
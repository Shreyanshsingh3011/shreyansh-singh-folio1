import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container-narrow">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © {new Date().getFullYear()} Shreyansh Singh — AI, clean energy, defence technology and enterprise systems.
          </p>
          <div className="flex items-center gap-6">
            <a href="/about/shreyansh-singh/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Official Bio</a>
            <a href="/india-japan/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">India–Japan</a>
            <a href="/cloud-energy/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Cloud Energy</a>
            <a href="/defence-technology/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Defence Tech</a>
            <a href="/press/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Press</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

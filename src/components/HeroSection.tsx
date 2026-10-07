import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileHeadshot from "@/assets/profile-headshot.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(200_80%_55%/0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,hsl(180_70%_45%/0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.3)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.3)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />

      <div className="container-wide relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">India • Building Globally</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6">
              Shreyansh Singh
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-4">
              Founder • Technologist • Builder
            </p>

            <p className="text-lg text-muted-foreground/80 max-w-xl mb-8">
              Building companies and technology across artificial intelligence, clean energy,
              defence technology, industrial systems and enterprise software.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Button variant="hero" size="xl" asChild>
                <a href="#projects">
                  Explore My Work
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <a href="#about">About Shreyansh</a>
              </Button>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="relative flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/20 rounded-3xl blur-3xl scale-110 animate-glow-pulse" />
              <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden">
                <img
                  src={profileHeadshot}
                  alt="Shreyansh Singh, founder and technologist"
                  width="768"
                  height="768"
                  loading="eager"
                  fetchPriority="high"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              </div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.8 }} className="absolute -bottom-4 -left-4 px-4 py-3 rounded-xl glass-strong">
                <p className="text-sm font-medium">Founder across AI, Energy & Defence</p>
                <p className="text-xs text-muted-foreground">Technology + Infrastructure</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

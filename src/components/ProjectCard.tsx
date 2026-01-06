import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  variant: "dark" | "light";
  index: number;
}

const ProjectCard = ({ title, description, variant, index }: ProjectCardProps) => {
  const isDark = variant === "dark";

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2, duration: 0.6 }}
      className={`relative rounded-2xl overflow-hidden ${
        isDark
          ? "bg-card border border-border"
          : "bg-gradient-to-br from-primary/20 to-accent/10 border border-primary/30"
      }`}
    >
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden">
        {isDark ? (
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
        ) : (
          <>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 to-transparent" />
            <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-accent/10 rounded-full blur-3xl" />
          </>
        )}
      </div>

      <div className="relative z-10 p-6 md:p-8">
        <span className="text-xs text-muted-foreground uppercase tracking-wider">
          Featured Project
        </span>
        <h3 className="text-xl md:text-2xl font-display font-bold mt-2 mb-4">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-6 max-w-md">
          {description}
        </p>

        {/* Project preview mockup */}
        <div className="relative rounded-lg overflow-hidden mb-6">
          <div
            className={`aspect-video rounded-lg border ${
              isDark ? "border-border bg-secondary/30" : "border-primary/20 bg-card/50"
            } p-4`}
          >
            {/* Browser mockup */}
            <div className="flex gap-1.5 mb-3">
              <div className="w-2.5 h-2.5 rounded-full bg-destructive/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
            </div>
            {/* Content mockup */}
            <div className="space-y-2">
              <div className="h-3 w-3/4 rounded bg-muted-foreground/20" />
              <div className="h-3 w-1/2 rounded bg-muted-foreground/15" />
              <div className="h-8 w-full rounded bg-muted-foreground/10 mt-4" />
              <div className="flex gap-2 mt-2">
                <div className="h-6 w-16 rounded bg-primary/30" />
                <div className="h-6 w-16 rounded bg-muted-foreground/15" />
              </div>
            </div>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-3">
          <motion.a
            href="#"
            className="p-2 rounded-lg glass hover:bg-primary/20 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github size={18} className="text-muted-foreground" />
          </motion.a>
          <motion.a
            href="#"
            className="p-2 rounded-lg glass hover:bg-primary/20 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ExternalLink size={18} className="text-muted-foreground" />
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;

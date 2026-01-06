import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface WorkExperienceCardProps {
  icon: LucideIcon;
  title: string;
  company: string;
  description: string;
  index: number;
}

const WorkExperienceCard = ({
  icon: Icon,
  title,
  company,
  description,
  index,
}: WorkExperienceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="group relative p-4 md:p-6 rounded-xl glass hover:border-primary/50 transition-all duration-300"
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/10 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative z-10">
        <div className="flex items-start gap-4">
          <div className="p-2 md:p-3 rounded-lg bg-primary/20 text-primary shrink-0">
            <Icon size={20} />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-display font-semibold text-sm md:text-base text-foreground mb-1 truncate">
              {title}
            </h3>
            <p className="text-primary text-xs md:text-sm mb-2">{company}</p>
            <p className="text-muted-foreground text-xs leading-relaxed line-clamp-2">
              {description}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default WorkExperienceCard;

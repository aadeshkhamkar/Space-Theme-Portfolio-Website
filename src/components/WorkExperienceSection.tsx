import { motion } from "framer-motion";
import { Code2, Smartphone, Layout, Database } from "lucide-react";
import WorkExperienceCard from "./WorkExperienceCard";

const experiences = [
  {
    icon: Smartphone,
    title: "CIB on the Mobile",
    company: "Mobile Development",
    description: "Developed and maintained mobile applications with focus on user experience",
  },
  {
    icon: Code2,
    title: "CIB on the Mobile",
    company: "Frontend Engineering",
    description: "Built responsive web applications using modern frameworks and technologies",
  },
  {
    icon: Layout,
    title: "CIB on the Mobile",
    company: "UI/UX Design",
    description: "Created intuitive user interfaces with attention to visual design principles",
  },
  {
    icon: Database,
    title: "CIB on the Mobile",
    company: "Backend Development",
    description: "Designed and implemented scalable backend solutions and APIs",
  },
];

const WorkExperienceSection = () => {
  return (
    <section id="work" className="py-16 md:py-24 px-4">
      <div className="container mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-4xl font-display font-bold mb-8 md:mb-12"
        >
          Work Experience
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          {experiences.map((exp, index) => (
            <WorkExperienceCard key={index} {...exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperienceSection;

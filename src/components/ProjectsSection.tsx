import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Example Project",
    description:
      "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
    variant: "dark" as const,
  },
  {
    title: "Example Project",
    description:
      "A multi-user video conferencing web application built using React and Node.js. Features include screen sharing, chat functionality, and seamless video/audio integration for collaborative remote work.",
    variant: "light" as const,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-16 md:py-24 px-4 relative">
      {/* Background decoration */}
      <div className="absolute left-0 top-1/3 w-1/3 h-64 bg-primary/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-4xl font-display font-bold mb-12 text-center"
        >
          Featured <span className="text-gradient">Projects</span>
        </motion.h2>

        <div className="space-y-8 md:space-y-12">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

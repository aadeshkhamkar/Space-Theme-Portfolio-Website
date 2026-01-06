import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Dribbble, Instagram, Mail } from "lucide-react";

const socialIcons = [
  { icon: Github, href: "#" },
  { icon: Linkedin, href: "#" },
  { icon: Twitter, href: "#" },
  { icon: Dribbble, href: "#" },
  { icon: Instagram, href: "#" },
  { icon: Mail, href: "#" },
];

const TeamSection = () => {
  return (
    <section className="py-12 md:py-16 px-4">
      <div className="container mx-auto max-w-3xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl text-muted-foreground mb-2"
        >
          I'm currently looking to join a{" "}
          <span className="text-gradient font-semibold">cross-functional</span> team
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-sm text-muted-foreground mb-8"
        >
          that values improving people's lives through accessible design
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex items-center justify-center gap-3 md:gap-4 flex-wrap"
        >
          {socialIcons.map(({ icon: Icon, href }, index) => (
            <motion.a
              key={index}
              href={href}
              className="p-2.5 md:p-3 rounded-full glass hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 group"
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon
                size={18}
                className="text-muted-foreground group-hover:text-primary transition-colors"
              />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;

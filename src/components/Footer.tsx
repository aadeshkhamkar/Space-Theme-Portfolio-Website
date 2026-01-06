import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ];

  return (
    <footer id="contact" className="py-16 md:py-24 px-4 border-t border-border/50">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12"
        >
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-6">
              Contact
            </h2>
            <p className="text-muted-foreground text-sm mb-6 max-w-md leading-relaxed">
              I'm currently looking for new opportunities. Whether you have a question
              or just want to say hi, I'll try my best to get back to you!
            </p>

            <div className="space-y-3">
              <a
                href="mailto:hello@example.com"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
              >
                <Mail size={18} className="group-hover:text-primary" />
                <span className="text-sm">hello@example.com</span>
              </a>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin size={18} />
                <span className="text-sm">New York, NY</span>
              </div>
            </div>
          </div>

          {/* Quick Links & Social */}
          <div className="md:text-right">
            <h3 className="text-lg font-display font-semibold mb-6">
              Let's Connect
            </h3>
            <div className="flex gap-3 md:justify-end mb-8">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="p-3 rounded-lg glass hover:bg-primary/20 hover:border-primary/50 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon size={18} className="text-muted-foreground" />
                </motion.a>
              ))}
            </div>

            <motion.a
              href="mailto:hello@example.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-primary to-accent text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Mail size={16} />
              Say Hello
            </motion.a>
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 pt-8 border-t border-border/30 text-center"
        >
          <p className="text-muted-foreground text-xs">
            Designed & Built with 💜 • © {currentYear}
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

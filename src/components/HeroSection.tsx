import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import TypewriterText from "./TypewriterText";
import avatar from "@/assets/avatar.png";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 pb-16 px-4 relative overflow-hidden"
    >
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-accent/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col items-center text-center">
          {/* Avatar */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
            className="relative mb-6"
          >
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden glow-primary">
              <img
                src={avatar}
                alt="Developer Avatar"
                className="w-full h-full object-cover"
              />
            </div>
            <motion.div
              className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 glass rounded-full text-xs text-muted-foreground"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              hello i am
            </motion.div>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-muted-foreground text-sm md:text-base mb-2"
          >
            A Designer who
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-3xl md:text-5xl lg:text-6xl font-display font-bold mb-2 leading-tight"
          >
            Judges a book
          </motion.h1>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-3xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight"
          >
            by its <TypewriterText text="Cover..." className="text-gradient" delay={800} />
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-muted-foreground text-xs md:text-sm max-w-md mb-12"
          >
            Crafting visually stunning and user-centered digital experiences
          </motion.p>

          {/* Software Engineer Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="w-full max-w-xl text-left"
          >
            <h2 className="text-2xl md:text-4xl font-display font-bold mb-3">
              I'm a Software Engineer!
            </h2>
            <p className="text-muted-foreground text-sm mb-2">
              Currently I'm a Software Engineer at{" "}
              <a
                href="#"
                className="inline-flex items-center gap-1 text-primary hover:underline"
              >
                <Linkedin size={14} />
                LinkedIn
              </a>
            </p>
            <p className="text-muted-foreground text-xs md:text-sm leading-relaxed max-w-lg">
              A self-taught UI/UX designer. Functioning in the industry for 3+ years now.
              I make meaningful and delightful digital products that create an equilibrium
              between user needs and business goals.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

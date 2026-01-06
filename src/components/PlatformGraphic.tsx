import { motion } from "framer-motion";

const PlatformGraphic = () => {
  return (
    <section className="py-16 md:py-24 px-4 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-primary/20 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto max-w-4xl">
        <div className="relative flex items-center justify-center">
          {/* Rotating ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96"
          >
            <div className="w-full h-full rounded-full platform-ring opacity-30" style={{ padding: "2px" }}>
              <div className="w-full h-full rounded-full bg-background" />
            </div>
          </motion.div>

          {/* Ellipse platform */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <div
              className="w-72 h-28 md:w-96 md:h-36 lg:w-[450px] lg:h-44 rounded-[50%] relative"
              style={{
                background: "linear-gradient(180deg, hsl(var(--primary) / 0.3) 0%, hsl(var(--primary) / 0.05) 100%)",
                boxShadow: "0 -20px 60px hsl(var(--primary) / 0.3), 0 20px 40px hsl(var(--background))",
              }}
            >
              {/* Inner glow ring */}
              <div
                className="absolute inset-2 rounded-[50%] border border-primary/40"
                style={{
                  boxShadow: "inset 0 -10px 30px hsl(var(--primary) / 0.2)",
                }}
              />

              {/* Center logo */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[80%]"
              >
                <div className="text-3xl md:text-4xl font-display font-bold text-gradient glow-primary p-4 rounded-xl bg-card/50 backdrop-blur-sm">
                  ⟨/⟩
                </div>
              </motion.div>
            </div>

            {/* Reflection */}
            <div
              className="w-72 h-14 md:w-96 md:h-18 lg:w-[450px] lg:h-22 mx-auto mt-2 rounded-[50%] opacity-20"
              style={{
                background: "radial-gradient(ellipse, hsl(var(--primary) / 0.3) 0%, transparent 70%)",
              }}
            />
          </motion.div>

          {/* Floating particles */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 md:w-2 md:h-2 rounded-full bg-primary/60"
              style={{
                left: `${20 + i * 12}%`,
                top: `${30 + (i % 3) * 15}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformGraphic;

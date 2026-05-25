import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const AnimatedCounter = ({ from = 0, to, suffix = "", duration = 2 }) => {
  const [count, setCount] = useState(from);

  useEffect(() => {
    let start = null;
    const animate = (timestamp) => {
      if (!start) start = timestamp;
      const progress = (timestamp - start) / (duration * 1000);
      if (progress < 1) {
        setCount(Math.floor(from + (to - from) * progress));
        requestAnimationFrame(animate);
      } else {
        setCount(to);
      }
    };
    requestAnimationFrame(animate);
  }, [from, to, duration]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

const Stats = () => {
  const stats = [
    { label: "Total Projects", value: 50, suffix: "+", icon: "📊" },
    { label: "Full Stack Apps", value: 3, suffix: "", icon: "🚀" },
    { label: "GitHub Repos", value: 20, suffix: "+", icon: "💻" },
    { label: "Deployments", value: 15, suffix: "+", icon: "🌐" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">By The Numbers</span>
          </h2>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
            A snapshot of my development journey and accomplishments
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group glass-morphism rounded-2xl p-8 text-center hover:shadow-glass-hover transition-all duration-500">
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <motion.div
                className="text-4xl md:text-5xl font-bold text-primary mb-3"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1 }}>
                <AnimatedCounter
                  to={stat.value}
                  suffix={stat.suffix}
                  duration={2.5}
                />
              </motion.div>
              <p className="text-gray-400 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;

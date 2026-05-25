import React from "react";
import { motion } from "framer-motion";
import { FiCode, FiRefreshCw, FiTrendingUp } from "react-icons/fi";

const Timeline = () => {
  const timelineData = [
    {
      year: "2024",
      title: "HTML/CSS Foundation",
      description:
        "Started my web development journey by mastering HTML and CSS, building static websites and learning design principles.",
      icon: FiCode,
      color: "from-blue-500 to-blue-600",
    },
    {
      year: "2025",
      title: "JavaScript & Interactivity",
      description:
        "Learned JavaScript fundamentals and built interactive projects including calculators, games, and DOM manipulation apps.",
      icon: FiRefreshCw,
      color: "from-yellow-500 to-yellow-600",
    },
    {
      year: "2025",
      title: "React & Full Stack",
      description:
        "Transitioned to React for frontend development and learned backend with Node.js and databases like MongoDB.",
      icon: FiCode,
      color: "from-purple-500 to-purple-600",
    },
    {
      year: "2026",
      title: "SaaS & Modern Dev",
      description:
        "Building production-ready applications with modern tech stack, focusing on creating student-focused platforms.",
      icon: FiTrendingUp,
      color: "from-green-500 to-green-600",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
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
            <span className="gradient-text">Development Journey</span>
          </h2>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
            From beginner to full-stack developer
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary to-primary" />

          {/* Timeline Items */}
          <div className="space-y-16">
            {timelineData.map((item, index) => {
              const IconComponent = item.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`flex ${isEven ? "flex-row" : "flex-row-reverse"}`}>
                  {/* Content */}
                  <div
                    className={`w-full md:w-5/12 ${isEven ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <motion.div
                      className="glass-morphism rounded-2xl p-8 hover:shadow-glass-hover transition-all duration-500"
                      whileHover={{ y: -5 }}>
                      <span
                        className={`inline-block px-4 py-2 rounded-2xl bg-gradient-to-r ${item.color} text-white text-sm font-bold mb-4`}>
                        {item.year}
                      </span>
                      <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                      <p className="text-gray-400 leading-relaxed">{item.description}</p>
                    </motion.div>
                  </div>

                  {/* Center Icon */}
                  <div className="w-full md:w-2/12 flex justify-center">
                    <motion.div
                      className="relative"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}>
                      {/* Glow */}
                      <div className="absolute inset-0 rounded-full bg-primary/30 blur-xl animate-pulse" />

                      {/* Icon Circle */}
                      <div
                        className={`relative w-16 h-16 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center shadow-glass`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                    </motion.div>
                  </div>

                  {/* Placeholder for alignment */}
                  <div className="w-full md:w-5/12" />
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Timeline;

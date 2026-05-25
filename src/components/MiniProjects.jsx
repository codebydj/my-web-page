import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import {
  htmlCssProjects,
  javascriptProjects,
  realTimeProjects,
} from "../data/projects";

const MiniProjects = () => {
  const scrollContainerRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState("HTML/CSS");

  const categories = [
    { label: "HTML/CSS", projects: htmlCssProjects },
    { label: "JavaScript", projects: javascriptProjects },
    { label: "UI Experiments", projects: realTimeProjects },
  ];

  const activeCategoryData =
    categories.find((cat) => cat.label === activeCategory) || categories[0];
  const currentProjects = activeCategoryData.projects;
  const displayedProjects = currentProjects;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
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
          className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Mini Projects</span>
          </h2>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
            A collection of smaller projects and experiments showcasing various
            technologies and techniques
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex justify-center gap-3 mb-12 flex-wrap"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}>
          {categories.map((category) => (
            <motion.button
              key={category.label}
              onClick={() => {
                setActiveCategory(category.label);
                if (scrollContainerRef.current) {
                  scrollContainerRef.current.scrollLeft = 0;
                }
              }}
              className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                activeCategory === category.label
                  ? "bg-primary text-dark-900 shadow-glass"
                  : "glass-morphism text-gray-300 hover:text-white hover:bg-white/10"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}>
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Carousel */}
        <div className="relative mb-12">
          <motion.div
            ref={scrollContainerRef}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scroll-smooth horizontal-scrollbar px-1">
            {displayedProjects.length === 0 ? (
              <div className="w-full glass-morphism rounded-2xl p-10 text-center text-gray-300">
                No projects available in this category yet.
              </div>
            ) : (
              displayedProjects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="min-w-[280px] md:min-w-[300px] lg:min-w-[320px] max-w-[320px] snap-start group glass-morphism rounded-2xl overflow-hidden hover:shadow-glass-hover transition-all duration-500">
                  <div className="relative overflow-hidden h-44 bg-gradient-to-br from-primary/5 to-primary/10">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />

                    <span className="absolute top-4 right-4 px-3 py-1.5 rounded-full text-xs font-semibold bg-primary/90 backdrop-blur-sm text-dark-900">
                      {project.difficulty}
                    </span>
                  </div>

                  <div className="p-5 space-y-3">
                    <h3 className="font-bold text-lg line-clamp-2 group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.tags?.slice(0, 3).map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-full text-xs bg-primary/10 text-primary border border-primary/20">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex flex-col gap-3">
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-2xl bg-primary hover:bg-primary/90 text-dark-900 transition-all duration-300 font-semibold"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}>
                        <FiExternalLink className="w-4 h-4" />
                        Demo
                      </motion.a>
                      <motion.a
                        href={project.code}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-2xl bg-white/5 hover:bg-white/10 text-white transition-all duration-300 border border-white/10 font-semibold"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}>
                        <FiGithub className="w-4 h-4" />
                        Code
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              ))
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MiniProjects;

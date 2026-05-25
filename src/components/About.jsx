import React from "react";
import { motion } from "framer-motion";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
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
          className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">About Me</span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Content */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="space-y-6">
              <p className="text-xl text-gray-300 leading-relaxed">
                I'm a passionate full-stack developer and CSE student committed to
                building beautiful, functional web applications. My journey in
                tech has been driven by curiosity and a desire to solve real-world
                problems through code.
              </p>

              <p className="text-xl text-gray-300 leading-relaxed">
                Starting with HTML and CSS, I've grown into a full-stack developer
                proficient in modern technologies like React, Node.js, and
                MongoDB. I'm particularly interested in creating student-focused
                applications that make learning more engaging and accessible.
              </p>

              <p className="text-xl text-gray-300 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies,
                contributing to open-source projects, or working on personal
                projects that push my skills to the next level.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4 pt-8">
              <motion.div
                variants={itemVariants}
                className="flex items-center gap-4 text-gray-300 hover:text-primary transition-colors cursor-pointer">
                <div className="p-3 rounded-2xl bg-primary/10">
                  <FiMail className="w-5 h-5 text-primary" />
                </div>
                <a href="mailto:jayad6889@gmail.com" className="text-lg">jayad6889@gmail.com</a>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="flex items-center gap-4 text-gray-300">
                <div className="p-3 rounded-2xl bg-primary/10">
                  <FiMapPin className="w-5 h-5 text-primary" />
                </div>
                <span className="text-lg">Dharmavaram, Andhra Pradesh, India</span>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="flex items-center gap-4 text-gray-300 hover:text-primary transition-colors cursor-pointer">
                <div className="p-3 rounded-2xl bg-primary/10">
                  <FiPhone className="w-5 h-5 text-primary" />
                </div>
                <a href="tel:+917569099290" className="text-lg">+91 7569099290</a>
              </motion.div>
            </div>
          </motion.div>

          {/* Avatar/Image */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center">
            <motion.div
              className="relative w-80 h-80 md:w-96 md:h-96"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}>
              {/* Animated Border */}
              <motion.div
                className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary to-primary p-1"
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(14, 165, 233, 0.3)",
                    "0 0 40px rgba(14, 165, 233, 0.6)",
                    "0 0 20px rgba(14, 165, 233, 0.3)",
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}>
                <img
                  src="https://i.ibb.co/TbJhCM8/user0.jpg"
                  alt="Dhanunjaya"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </motion.div>

              {/* Background Circle */}
              <motion.div
                className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-primary/20 to-primary/20 -z-10"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

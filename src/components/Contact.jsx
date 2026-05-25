import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FiMail,
  FiMapPin,
  FiPhone,
  FiLinkedin,
  FiGithub,
  FiSend,
} from "react-icons/fi";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
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
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
            Have a project in mind? Let's connect and create something amazing together
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto">
          {/* Contact Form */}
          <motion.div
            variants={itemVariants}
            className="glass-morphism rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Form Section */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-3xl font-bold mb-4">Send Me a Message</h3>
                  <p className="text-gray-400 leading-relaxed">
                    I'm always interested in new opportunities and exciting projects.
                    Let's discuss how we can work together.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold mb-3 text-gray-300">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-4 focus:outline-none focus:border-primary focus:bg-white/10 transition-all duration-300 placeholder-gray-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-3 text-gray-300">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-4 focus:outline-none focus:border-primary focus:bg-white/10 transition-all duration-300 placeholder-gray-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-3 text-gray-300">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project..."
                      rows={5}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-4 focus:outline-none focus:border-primary focus:bg-white/10 transition-all duration-300 resize-none placeholder-gray-500"
                      required
                    />
                  </div>

                  <motion.button
                    type="submit"
                    className="w-full btn-primary flex items-center justify-center gap-3 py-4 text-lg"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}>
                    <FiSend className="w-5 h-5" />
                    Send Message
                  </motion.button>

                  {submitted && (
                    <motion.div
                      className="p-4 bg-primary/20 border border-primary/30 rounded-2xl text-primary text-center font-semibold"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}>
                      ✓ Message sent successfully!
                    </motion.div>
                  )}
                </form>
              </div>

              {/* Contact Info Section */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-3xl font-bold mb-4">Let's Connect</h3>
                  <p className="text-gray-400 leading-relaxed mb-8">
                    I'm currently available for freelance work and full-time opportunities.
                    Feel free to reach out through any of these channels.
                  </p>
                </div>

                {/* Contact Links */}
                <div className="space-y-4">
                  <motion.a
                    href="mailto:jayad6889@gmail.com"
                    className="flex items-center gap-4 p-4 rounded-2xl glass-morphism hover:bg-white/10 transition-all duration-300 group"
                    whileHover={{ x: 4 }}>
                    <div className="p-3 rounded-2xl bg-primary/20 group-hover:bg-primary/30 transition-colors">
                      <FiMail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold">Email</div>
                      <div className="text-gray-400 text-sm">jayad6889@gmail.com</div>
                    </div>
                  </motion.a>

                  <motion.a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-2xl glass-morphism hover:bg-white/10 transition-all duration-300 group"
                    whileHover={{ x: 4 }}>
                    <div className="p-3 rounded-2xl bg-blue-500/20 group-hover:bg-blue-500/30 transition-colors">
                      <FiLinkedin className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <div className="font-semibold">LinkedIn</div>
                      <div className="text-gray-400 text-sm">Connect professionally</div>
                    </div>
                  </motion.a>

                  <motion.a
                    href="https://github.com/codebydj"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-2xl glass-morphism hover:bg-white/10 transition-all duration-300 group"
                    whileHover={{ x: 4 }}>
                    <div className="p-3 rounded-2xl bg-gray-500/20 group-hover:bg-gray-500/30 transition-colors">
                      <FiGithub className="w-6 h-6 text-gray-300" />
                    </div>
                    <div>
                      <div className="font-semibold">GitHub</div>
                      <div className="text-gray-400 text-sm">View my code</div>
                    </div>
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

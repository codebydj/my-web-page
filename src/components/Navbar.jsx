import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiMenu, FiX, FiGithub, FiLinkedin, FiMail, FiDownload } from "react-icons/fi";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
    { name: "Resume", href: "/resume.pdf", external: true },
  ];

  const socialLinks = [
    { icon: FiGithub, href: "https://github.com/codebydj", label: "GitHub" },
    { icon: FiLinkedin, href: "#", label: "LinkedIn" },
    { icon: FiMail, href: "mailto:jayad6889@gmail.com", label: "Email" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = navLinks.map(link => link.href.substring(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href, external = false) => {
    setIsOpen(false);
    if (external) {
      window.open(href, "_blank");
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "glass-morphism shadow-glass backdrop-blur-md"
          : "bg-transparent"
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.a
            href="#home"
            onClick={() => handleNavClick("#home")}
            className="text-2xl font-bold gradient-text cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}>
            CodeByDJ
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={() => handleNavClick(link.href, link.external)}
                className={`relative px-3 py-2 rounded-2xl font-semibold transition-all duration-300 ${
                  activeSection === link.href.substring(1)
                    ? "text-primary bg-primary/10"
                    : "text-gray-300 hover:text-white hover:bg-white/5"
                }`}
                whileHover={{ scale: 1.05 }}>
                {link.name}
                {link.name === "Resume" && (
                  <FiDownload className="inline w-4 h-4 ml-1" />
                )}
              </motion.a>
            ))}
          </div>

          {/* Right Side - Social + Dark Mode + Menu */}
          <div className="flex items-center gap-3">
            {/* Desktop Social Links */}
            <div className="hidden md:flex items-center gap-2">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-2xl glass-morphism hover:bg-white/10 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}>
                  <link.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>

            {/* Dark Mode Toggle */}
            <motion.button
              onClick={() => setDarkMode(!darkMode)}
              className="p-3 rounded-2xl glass-morphism hover:bg-white/10 transition-all duration-300"
              whileHover={{ scale: 1.1, rotate: 15 }}
              whileTap={{ scale: 0.95 }}>
              {darkMode ? (
                <HiOutlineSun className="w-5 h-5" />
              ) : (
                <HiOutlineMoon className="w-5 h-5" />
              )}
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-3 rounded-2xl glass-morphism hover:bg-white/10 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}>
              {isOpen ? (
                <FiX className="w-6 h-6" />
              ) : (
                <FiMenu className="w-6 h-6" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={
          isOpen ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }
        }
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="md:hidden overflow-hidden glass-morphism backdrop-blur-md">
        <div className="px-4 py-6 space-y-2">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              onClick={() => handleNavClick(link.href, link.external)}
              className={`flex items-center justify-between px-4 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                activeSection === link.href.substring(1)
                  ? "text-primary bg-primary/10"
                  : "text-gray-300 hover:text-white hover:bg-white/5"
              }`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ x: 4 }}>
              <span>{link.name}</span>
              {link.name === "Resume" && (
                <FiDownload className="w-4 h-4" />
              )}
            </motion.a>
          ))}
          <div className="flex gap-3 pt-4 mt-4 border-t border-white/10">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-2xl glass-morphism hover:bg-white/10 transition-all duration-300"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.1, y: -2 }}>
                <link.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;

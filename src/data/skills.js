import {
  FaReact,
  FaNode,
  FaGitAlt,
  FaGithub,
  FaDatabase,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiPostgresql,
  SiFirebase,
  SiVercel,
  SiJavascript,
} from "react-icons/si";

// Categorized Skills with Icons
export const skillsData = {
  frontend: {
    category: "Frontend Development",
    icon: FaReact,
    color: "#61DAFB",
    skills: [
      { name: "React", icon: FaReact, level: 90 },
      { name: "JavaScript", icon: SiJavascript, level: 85 },
      { name: "Tailwind CSS", icon: SiTailwindcss, level: 95 },
      { name: "HTML/CSS", icon: null, level: 95 },
      { name: "Responsive Design", icon: null, level: 90 },
      { name: "Component Design", icon: null, level: 85 },
    ],
  },
  backend: {
    category: "Backend Development",
    icon: FaNode,
    color: "#68A063",
    skills: [
      { name: "Node.js", icon: FaNode, level: 85 },
      { name: "Express.js", icon: SiExpress, level: 80 },
      { name: "REST APIs", icon: null, level: 85 },
      { name: "Authentication", icon: null, level: 80 },
      { name: "Server-side Logic", icon: null, level: 85 },
      { name: "Database Design", icon: null, level: 80 },
    ],
  },
  database: {
    category: "Database & Storage",
    icon: FaDatabase,
    color: "#13AA52",
    skills: [
      { name: "MongoDB", icon: SiMongodb, level: 85 },
      { name: "PostgreSQL", icon: SiPostgresql, level: 80 },
      { name: "Firebase", icon: SiFirebase, level: 75 },
      { name: "Data Modeling", icon: null, level: 80 },
      { name: "Query Optimization", icon: null, level: 75 },
    ],
  },
  tools: {
    category: "Tools & Deployment",
    icon: FaGitAlt,
    color: "#F1502F",
    skills: [
      { name: "Git", icon: FaGitAlt, level: 90 },
      { name: "GitHub", icon: FaGithub, level: 90 },
      { name: "Vercel", icon: SiVercel, level: 85 },
      { name: "VS Code", icon: null, level: 95 },
      { name: "Problem Solving", icon: null, level: 88 },
      { name: "Web Scraping", icon: null, level: 75 },
    ],
  },
};

// Flatten skills for easy iteration
export const allSkills = Object.values(skillsData).reduce((acc, category) => {
  return [...acc, ...category.skills];
}, []);

// Skills stats
export const skillStats = [
  { label: "Skills Mastered", value: 20, suffix: "+" },
  { label: "Programming Languages", value: 5, suffix: "+" },
  { label: "Frameworks & Libraries", value: 8, suffix: "+" },
  { label: "Years Experience", value: 2, suffix: "+" },
];

import {
  FaCss3Alt,
  FaDatabase,
  FaGitAlt,
  FaHtml5,
  FaJava,
  FaJs,
  FaPython,
  FaReact,
  FaTools
} from "react-icons/fa";
import { SiMysql, SiPostman, SiSpringboot } from "react-icons/si";

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" }
];

export const skills = [
  {
    category: "Programming",
    items: [
      { name: "Java", icon: FaJava },
      { name: "Python", icon: FaPython }
    ]
  },
  {
    category: "Frontend",
    items: [
      { name: "React.js", icon: FaReact },
      { name: "JavaScript", icon: FaJs },
      { name: "HTML", icon: FaHtml5 },
      { name: "CSS", icon: FaCss3Alt }
    ]
  },
  {
    category: "Backend",
    items: [
      { name: "Spring Boot", icon: SiSpringboot },
      { name: "REST APIs", icon: FaDatabase }
    ]
  },
  {
    category: "Database",
    items: [
      { name: "MySQL", icon: SiMysql },
      { name: "Oracle", icon: FaDatabase }
    ]
  },
  {
    category: "Tools",
    items: [
      { name: "Git", icon: FaGitAlt },
      { name: "Postman", icon: SiPostman },
      { name: "Maven", icon: FaTools }
    ]
  }
];

export const projects = [
  {
    title: "Task Manager Application",
    description:
      "A full-stack productivity app built with Spring Boot and React featuring JWT-based login and complete task CRUD workflows.",
    tech: ["Spring Boot", "React.js", "JWT", "REST API", "MySQL"],
    github: "https://www.github.com/ravitejamanthu",
    demo: ""
  },
  {
    title: "Bone Fracture Detection System",
    description:
      "An AI-driven web solution using YOLOv5 and Django to detect fractures from X-ray images and provide prediction insights.",
    tech: ["Python", "YOLOv5", "Django", "Deep Learning"],
    github: "https://www.github.com/ravitejamanthu",
    demo: ""
  }
];

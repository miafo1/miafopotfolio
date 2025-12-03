import { Code, Server, Database, Cloud, Shield, Terminal, Layout, Smartphone } from 'lucide-react';
// Import the Land Management App logo from assets
import LandMgmtLogo from '../assets/Logos/logo1.png';

// Import Certification PDFs
// PDFs are now served statically from public/pdfs

export const personalInfo = {
  name: "CHEUSSOPKENG MIAFO ARNAULD PARFAIT",
  title: "Software Engineer | AWS Cloud Engineer",
  bio: "I am a dedicated Software Engineer and AWS Cloud Engineer with over two years of hands-on experience in backend development, cloud technologies, and secure system design. I specialize in building scalable web applications using Python (Django), Java, React, and modern API-driven architectures. Certified in AWS Solutions Architect – Associate, AWS Security – Specialty, CCNA, and Security+. Passionate about solving real-world problems and building reliable digital solutions, I continuously strive to improve my skills. Perfectly bilingual with an advanced level in both French and English.",
  email: "miafoarnauld@gmail.com",
  phone: "+237 671 383 867",
  location: "Yaoundé, Cameroon",
  github: "https://github.com/miafo1",
  linkedin: "https://www.linkedin.com/in/miafo-arnauld-aaa7142a8",
};

export const certifications = [
  {
    id: "aws-sa",
    name: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services",
    pdf: "/pdfs/aws-certified-solutions-architect-associate.pdf",
    icon: Cloud
  },
  {
    id: "aws-sec",
    name: "AWS Certified Security – Specialty",
    issuer: "Amazon Web Services",
    pdf: "/pdfs/aws-certified-security-specialty.pdf",
    icon: Shield
  },
  {
    id: "ccna",
    name: "Cisco Certified Network Associate (CCNA)",
    issuer: "Cisco",
    pdf: "/pdfs/cisco-certified-network-associate.pdf",
    icon: Terminal
  },
  {
    id: "sec-plus",
    name: "CompTIA Security+",
    issuer: "CompTIA",
    pdf: "/pdfs/comptia-security-plus.pdf",
    icon: Shield
  }
];

export const skills = {
  programming: [
    { name: "Python (Django)", level: 70 },
    { name: "Java", level: 70 },
    { name: "JavaScript (React)", level: 70 },
    { name: "HTML/CSS/Tailwind", level: 70 },
    { name: "PHP", level: 80},
  ],
  cloudSecurity: [
    { name: "AWS Solutions Architect", level: 75 },
    { name: "AWS Security", level: 70 },
    { name: "CCNA", level: 70 },
    { name: "Security+", level: 70 },
    { name: "IAM, VPC, S3, EC2", level: 85 },
  ],
  other: [
    { name: "PostgreSQL/MySQL", level: 70 },
    { name: "UML/2TUP", level: 85 },
    { name: "Git & Linux", level: 70},
    { name: "Docker", level: 70},
  ]
};

export const services = [
  {
    title: "Backend Development",
    description: "Robust backend systems using Django, PHP, and Java.",
    icon: Server
  },
  {
    title: "Full-Stack Development",
    description: "End-to-end web application development with React and modern frameworks.",
    icon: Layout
  },
  {
    title: "Cloud Architecture",
    description: "Scalable and secure cloud infrastructure design on AWS.",
    icon: Cloud
  },
  {
    title: "Cloud Security",
    description: "Implementing security best practices and compliance on cloud platforms.",
    icon: Shield
  },
  {
    title: "API Development",
    description: "RESTful API design, documentation, and integration.",
    icon: Terminal
  },
  {
    title: "PWA Development",
    description: "Building progressive web apps for mobile-native experience.",
    icon: Smartphone
  }
];

export const projects = [
  {
    title: "Fast-Eat",
    description: "Food-delivery platform built with React, Django, and PostgreSQL. Implemented REST APIs, ordering workflows, and database models.",
    tags: ["React", "Django", "PostgreSQL", "REST API"],
    image: "fast-eat.jpg",
     // Placeholder
    link: "#"
  },
  {
    title: "Vider-Grenier",
    description: "Agricultural marketplace for buying and selling produce. Features user profiles, product listings, and search.",
    tags: ["React", "Django", "PostgreSQL"],
    image: "vider-grenier.jpg", // Placeholder
    link: "#"
  },
  {
    title: "Land Management App",
    description: "Comprehensive land management system handling plots, owners, and transactions.",
    tags: ["PHP", "MySQL", "Bootstrap"],
    image: LandMgmtLogo,
    link: "#"
  },
  {
    title: "Cocoa Marketplace App",
    description: "Platform for cocoa trading, connecting farmers with buyers.",
    tags: ["PHP", "MySQL", "UML"],
    image: "cocoa.jpg", // Placeholder
    link: "#"
  }
];

export const experience = [
  {
    role: "Full-Time Software Developer",
    company: "Univers Binaire",
    period: "2024 – Present",
    description: "Full-stack development, API integration, microservices, and intern training.",
    technologies: ["HTML", "CSS", "Tailwind", "JS", "PHP", "PWA"]
  },
  {
    role: "Part-Time Developer",
    company: "Univers Binaire",
    period: "2023 – 2024",
    description: "Contributed to UB Hotel, UBSchool, Business Car, UBRESTO. Backend & frontend development.",
    technologies: ["PHP", "JS", "MySQL", "UML", "2TUP", "HTML", "CSS", "Tailwind", "JS"]
  },
  {
    role: "Academic Intern",
    company: "Univers Binaire",
    period: "2022 – 2023",
    description: "Developed a Land-management app.",
    technologies: ["PHP", "MySQL", "UML", "2TUP", "HTML", "CSS", "Tailwind", "JS"]
  },
  {
    role: "Academic Intern",
    company: "Univers Binaire",
    period: "2023 – 2024",
    description: "Developed a Cocoa-marketplace app.",
    technologies: ["PHP", "MySQL", "UML", "2TUP", "HTML", "CSS", "Tailwind", "JS"]
  }
];

export const education = [
  {
    degree: "Bachelor of Technology in Software Engineering",
    school: "University of Bamenda",
    period: "2020 – 2024",
    description: "Focus on software architecture, algorithms, and system design."
  }
];

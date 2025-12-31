import { Code, Server, Database, Cloud, Shield, Terminal, Layout, Smartphone } from 'lucide-react';
// Import the Land Management App logo from assets
import LandMgmtLogo from '../assets/Logos/logo1.png';

// Import Certification PDFs
// PDFs are now served statically from public/pdfs

export const personalInfo = {
  name: "CHEUSSOPKENG MIAFO ARNAULD PARFAIT",
  title: "Software Engineer | AWS Cloud Engineer",
  bio: "I am a dedicated Software Engineer and AWS Cloud Engineer with more than two years of hands-on experience in backend development, cloud technologies, and secure system design. I specialize in building scalable web applications using Python (Django), Java, React, and modern API-driven architectures. Certified in AWS Solutions Architect – Associate, AWS Security – Specialty, CCNA, and Security+. Passionate about solving real-world problems and building reliable digital solutions, I continuously strive to improve my skills. Perfectly bilingual with an advanced level in both French and English.",
  email: "miafoarnauld@gmail.com",
  phone: "+237 671 343 867",
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
    { name: "Python", level: 70 },
    { name: "Java", level: 70 },
    { name: "JavaScript ", level: 70 },
    { name: "HTML/CSS/Tailwind", level: 70 },
    { name: "PHP", level: 80},
  ],
  cloudSecurity: [
    { name: "AWS Solutions Architect", level: 89 },
    { name: "AWS Security", level: 88 },
    { name: "CCNA", level: 90 },
    { name: "Security+", level: 90 },
    { name: "Azure", level: 67},
    { name: "IAM, VPC, S3, EC2", level: 90 },
  ],
  other: [
    { name: "PostgreSQL/MySQL", level: 70 },
    { name: "UML/2TUP", level: 85 },
    { name: "Git & Linux", level: 70},
    { name: "Docker", level: 70},
    { name: "Jenkins", level: 68},
    { name: "Github/git", level: 80},
    { name: "Shell", level: 70},
    { name: "Terraform", level: 80},
    { name: "Ansible", level: 80},
    { name: "Kubernetes", level: 65},
    { name: "Graphana", level: 65},
    { name: "Prometheus", level: 65},
    { name: "Boto3", level: 75},
    { name: "Lambda", level: 70},
    { name: "Multistage Build", level: 68},
    { name: "pods", level: 70},
  ]
};

export const services = [
  {
    title: "Backend Development",
    description: "Robust backend systems using Django, PHP,Js, and Java.",
    icon: Server
  },
  {
    title: "Full-Stack Development",
    description: "End-to-end web application development with React, python, java, HTML and modern frameworks.",
    icon: Layout
  },
  {
    title: "Cloud Architecture & DevOps",
    description: "Scalable and secure cloud infrastructure design on AWS and Azure.",
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
    title: "Food Delivery DevOps Project",
    description: "Food-delivery platform built with React, Django, and PostgreSQL. Implemented REST APIs, ordering workflows, and database models.",
    tags: ["React", "Django", "PostgreSQL", "REST API","DynamoDB", "Redis (ElastiCache)", "AWS (VPC, ALB, ECS, S3, CloudFront)", "Docker", "Terraform"],
    image: "fast-eat.jpg",
     // Placeholder
    link: "https://github.com/miafo1/devops-projects"
  },
  {
    title: "Multi-Cloud GitOps Pipeline",
    description: "A production-grade GitOps pipeline demonstrating modern DevOps practices for deploying microservices to Kubernetes.",
    tags: ["Terraform", "GitHub Actions", "ArgoCD", "AWS EKS", "Python/Flask", "Terraform Modules/Simulated Azure AKS & GCP GKE", "shell", "hcl"],
    image: "vider-grenier.jpg", // Placeholder
    link: "https://github.com/miafo1/gitops-multicloud-pipeline"
  },
  {
    title: "Secure CI/CD Pipeline (DevSecOps)",
    description: "A production-grade, end-to-end CI/CD pipeline implementation demonstrating DevSecOps best practices. This project automates the build, security scanning, and deployment of a Python Django application to AWS Elastic Container Registry (ECR).",
    tags: ["Flake8", "Hadolint", "Bootstrap", "AWS IAM", "Docker", "Terraform", "AWS ECR", "HCL $ shell", "Python ", "GitHub Actions"],
    image: LandMgmtLog1,
    link: "https://github.com/miafo1/secure-ci-cd-pipeline"
  },
  {
    title: "Kubernetes Auto-Scaling Production Cluster (AWS - K3s)",
    description: "This project provisions a production-grade Kubernetes cluster using K3s on AWS EC2, implementing full auto-scaling capabilities (HPA + Cluster Autoscaler) and observability (Prometheus/Grafana).",
    tags: ["AWS EC2", "HPA + Cluster Autoscaler", "Prometheus", "Grafana", "Python", "JavaScript", "Shell & HCL", "Docker", "Terraform", "K8s" "AWS(ASM)", "ASG"],
    image: LandMgmtLogo2,
    link: "https://github.com/miafo1/kubernetes-autoscaling-production-cluster"
  },
  {
    title: "Land Management App",
    description: "This project aims to develop an innovative and comprehensive online platform, named EASY-TOPO, to address the multifaceted challenges that individuals encounter when engaging in land buying, searching, and measuring activities.",
    tags: ["PHP", "MySQL", "Bootstrap"],
    image: LandMgmtLogo,
    link: "https://github.com/miafo1/easy-topo"
  },
  {
    title: "Zero-Downtime Blue-Green Deployment System",
    description: "This project demonstrates a production-grade Blue-Green deployment strategy using Docker Compose and NGINX.",
    tags: ["Docker", "NGINX", "PostgreSQL", "CI/CD", "Python", "Dockerfile", "..."],
    image: LandMgmtLogo3,
    link: "https://github.com/miafo1/Zero-Downtime-Blue-Green-Deployment"
  },
  {
    title: "Cocoa Marketplace App",
    description: "Platform for cocoa trading, connecting farmers with buyers.",
    tags: ["PHP", "MySQL", "UML"],
    image: "cocoa.jpg", // Placeholder
    link: "https://github.com/miafo1/Cocoa-selling-buying-app"
  }
];

export const experience = [
  {
    role: "Full-Time Software Developer",
    company: "Univers Binaire",
    period: "2024 – Present",
    description: "Full-stack development, API integration, microservices, and intern training.",
    technologies: ["HTML", "CSS", "Tailwind", "JS", "PHP", "PWA", "AWS", "Docker", "K8", "Python", "Java", "PostgreSQL", "Terraform", "Prometheus", "Grafana" "..."]
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
    school: "IAI-Cameroon",
    period: "2020 – 2024",
    description: "Focus on software architecture, algorithms, and system design."
  }
];

import { Github, Linkedin } from 'lucide-react';
import type {
  PersonalData,
  WorkExperience,
  Education,
  Project,
  NavLink,
} from '@/lib/types';

export const personalData: PersonalData = {
  name: 'Kshittiz Kumar',
  title: 'Senior Software Developer',
  bio: 'A passionate Full Stack Software Developer with over 5 years of experience, I specialize in creating robust and scalable web applications. My expertise spans across modern frontend frameworks like React and Next.js, and backend technologies including Node.js and Python.',
  image: 'profile-photo',
  contact: {
    email: 'alex.doe@email.com',
    social: [
      {
        name: 'GitHub',
        url: 'https://github.com',
        icon: Github,
      },
      {
        name: 'LinkedIn',
        url: 'https://linkedin.com',
        icon: Linkedin,
      },
    ],
  },
};

export const workExperience: WorkExperience[] = [
  {
    company: 'Tech Solutions Inc.',
    role: 'Senior Software Developer',
    startDate: 'Jan 2021',
    endDate: 'Present',
    accomplishments: [
      'Led the development of a new microservices architecture, improving system scalability by 40%.',
      'Mentored a team of 4 junior developers, fostering their growth and improving team productivity.',
      'Implemented a CI/CD pipeline which reduced deployment times by 75%.',
      'Developed and maintained critical features for a high-traffic e-commerce platform.',
    ],
  },
  {
    company: 'Innovate LLC',
    role: 'Software Developer',
    startDate: 'Jun 2018',
    endDate: 'Dec 2020',
    accomplishments: [
      'Contributed to the development of a SaaS product using React, Node.js, and PostgreSQL.',
      'Improved application performance by optimizing database queries and frontend rendering.',
      'Collaborated with cross-functional teams to define and ship new features.',
    ],
  },
];

export const education: Education[] = [
  {
    institution: 'University of Technology',
    degree: 'Master of Science in Computer Science',
    startDate: '2016',
    endDate: '2018',
    description:
      'Focused on machine learning and distributed systems. Published a paper on efficient data processing algorithms.',
  },
  {
    institution: 'State University',
    degree: 'Bachelor of Science in Software Engineering',
    startDate: '2012',
    endDate: '2016',
    description:
      'Graduated with honors. Active member of the coding club and participated in several hackathons.',
  },
];

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'E-commerce Platform',
    description:
      'A feature-rich e-commerce platform with a modern UI, product management, and a secure checkout process.',
    techStack: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Stripe',
      'PostgreSQL',
    ],
    liveDemoUrl: '#',
    githubUrl: '#',
    image: 'project-ecommerce',
  },
  {
    id: 'project-2',
    title: 'AI-Powered Chatbot',
    description:
      'A customer service chatbot that uses natural language processing to understand and respond to user queries in real-time.',
    techStack: ['Python', 'Flask', 'TensorFlow', 'React', 'Docker'],
    liveDemoUrl: '#',
    githubUrl: '#',
    image: 'project-chatbot',
  },
  {
    id: 'project-3',
    title: 'Project Management Tool',
    description:
      'A collaborative project management tool to help teams organize tasks, track progress, and meet deadlines.',
    techStack: ['React', 'Firebase', 'Material-UI', 'Node.js'],
    liveDemoUrl: '#',
    githubUrl: '#',
    image: 'project-management',
  },
  {
    id: 'project-4',
    title: 'Personal Portfolio Website',
    description:
      'This very portfolio website, built to showcase my skills and projects in a visually appealing way.',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'GenAI'],
    liveDemoUrl: '#',
    githubUrl: '#',
    image: 'project-portfolio',
  },
];

export const navLinks: NavLink[] = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#education', label: 'Education' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

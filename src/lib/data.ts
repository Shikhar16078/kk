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
    email: 'your.email@example.com',
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
      'Led the development of a new microservices architecture using Node.js, Express, and Docker, improving system scalability by 40%.',
      'Mentored a team of 4 junior developers, fostering their growth and improving team productivity through code reviews and pair programming.',
      'Implemented a CI/CD pipeline with Jenkins and GitHub Actions, which reduced deployment times by 75%.',
      'Developed and maintained critical features for a high-traffic e-commerce platform using React, Redux, and TypeScript.',
    ],
  },
  {
    company: 'Innovate LLC',
    role: 'Software Developer',
    startDate: 'Jun 2018',
    endDate: 'Dec 2020',
    accomplishments: [
      'Contributed to the development of a SaaS product using React, Node.js, and PostgreSQL, focusing on RESTful API design and integration.',
      'Improved application performance by 25% by optimizing database queries with query analysis and frontend rendering with code splitting.',
      'Collaborated with cross-functional teams in an Agile environment to define, design, and ship new features.',
      'Wrote unit and integration tests using Jest and React Testing Library to ensure code quality and maintainability.',
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
      'Focused on advanced topics in machine learning and distributed systems, with a thesis on a novel algorithm for efficient data processing in large-scale systems.',
    courses: [
      'Advanced Algorithms',
      'Distributed Systems',
      'Machine Learning',
      'Deep Learning',
      'Natural Language Processing',
      'Cloud Computing',
    ],
  },
  {
    institution: 'State University',
    degree: 'Bachelor of Science in Software Engineering',
    startDate: '2012',
    endDate: '2016',
    description:
      'Graduated with honors, acquiring a strong foundation in software development principles. Led a team to win first place in a regional hackathon for a real-time collaborative coding application.',
    courses: [
      'Data Structures and Algorithms',
      'Software Engineering Principles',
      'Database Management Systems',
      'Web Application Development',
      'Operating Systems',
      'Computer Networks',
    ],
  },
];

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'E-commerce Platform',
    description:
      'A feature-rich e-commerce platform with a modern UI, real-time inventory management, and a secure Stripe-powered checkout process.',
    techStack: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Redux Toolkit',
      'Stripe API',
      'PostgreSQL',
      'Redis',
      'Docker',
      'Prisma',
    ],
    liveDemoUrl: '#',
    githubUrl: '#',
    image: 'project-ecommerce',
  },
  {
    id: 'project-2',
    title: 'AI-Powered Chatbot',
    description:
      'A customer service chatbot that uses natural language processing to understand and respond to user queries in real-time. Deployed on a scalable infrastructure.',
    techStack: [
      'Python',
      'Flask',
      'TensorFlow',
      'PyTorch',
      'NLTK',
      'React',
      'Docker',
      'Kubernetes',
      'Google Cloud Platform',
    ],
    liveDemoUrl: '#',
    githubUrl: '#',
    image: 'project-chatbot',
  },
  {
    id: 'project-3',
    title: 'Project Management Tool',
    description:
      'A collaborative project management tool to help teams organize tasks, track progress with Kanban boards, and meet deadlines effectively.',
    techStack: [
      'React',
      'Firebase',
      'Material-UI',
      'Node.js',
      'Express',
      'MongoDB',
      'GraphQL',
      'Apollo Client',
    ],
    liveDemoUrl: '#',
    githubUrl: '#',
    image: 'project-management',
  },
  {
    id: 'project-4',
    title: 'Personal Portfolio Website',
    description:
      'This very portfolio website, built to showcase my skills and projects in a visually appealing and AI-enhanced way.',
    techStack: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Genkit',
      'Jest',
      'Framer Motion',
      'Vercel',
    ],
    liveDemoUrl: '#',
    githubUrl: '#',
    image: 'project-portfolio',
  },
];

export const navLinks: NavLink[] = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
];

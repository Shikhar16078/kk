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
  title: 'Senior Software Engineer at Microsoft',
  bio: 'Calm, Artistic and Ambitious :)',
  image: 'profile-photo',
  contact: {
    email: 'kshittiz.k@gmail.com',
    social: [
      {
        name: 'GitHub',
        url: 'https://github.com/kshittiz',
        icon: Github,
      },
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/kshittiz-kumar',
        icon: Linkedin,
      },
    ],
  },
};

export const workExperience: WorkExperience[] = [
  {
    company: 'Microsoft',
    role: 'Senior Software Engineer',
    startDate: 'Jan 2022',
    endDate: 'Present',
    accomplishments: [
      'As a Software Engineer II, focused on Azure Cosmos Database Back-up & Restore.',
      'Designed and implemented backup and restore solutions for partitioned collections and databases in Azure Cosmos DB, focusing on complex restore scenarios, resiliency, and high availability.',
      'Architected solutions that ensure data consistency and quick recovery, leveraging both periodic and continuous backup modes.',
      'Specialized in optimizing restore workflows for large-scale, multi-partitioned environments, ensuring minimal downtime and maximum data integrity.',
      'Managed restore permissions at scale, automating recovery processes, and collaborating with cross-functional teams.',
    ],
  },
  {
    company: 'FactSet',
    role: 'Software Engineer I - III',
    startDate: 'July 2019',
    endDate: 'Jan 2022',
    accomplishments: [
      'Formulated complex SQL queries to upload ~300TB of data on Snowflake and setup AWS lambda with Snowpipe for daily uploads.',
      'Built a distributed web service in Go powered by Redis to run SQL queries on Snowflake and ship results to Amazon S3.',
      'Redesigned an existing C++ service in Java, increasing performance by 8 times.',
      'Instrumented existing Go services with OpenTracing to leverage LightStep monitoring.',
    ],
  },
  {
    company: 'PayPal',
    role: 'Software Engineer Intern',
    startDate: 'May 2018',
    endDate: 'Aug 2018',
    accomplishments: [
      'Created a tracer for distributed tracing using OpenTracing APIs in Java for real-time performance monitoring of services.',
      'Achieved code coverage of 85% using JUnit test cases.',
      'Worked with Java, JUnit, Spring Boot, OpenTracing, and Jenkins.',
    ],
  },
  {
    company: 'Aricent',
    role: 'Software Engineer',
    startDate: 'Oct 2015',
    endDate: 'May 2017',
    accomplishments: [
      'Full stack developer, with a specialization in back-end using Java EE.',
      'Constructed RESTful web services, EJBs, and CRUD operations using JPA for a Network Management System.',
      'Achieved ~95% code coverage using TestNG, Mockito, and PowerMock.',
      'Peer code reviews and provided knowledge transfer sessions to new recruits.',
    ],
  },
];

export const education: Education[] = [
  {
    institution: 'North Carolina State University',
    degree: "Master's degree, Computer Science",
    startDate: '2017',
    endDate: '2019',
    description:
      'Completed a Master of Science with a focus on core computer science principles and practices.',
    courses: [
      'Algorithms',
      'Operating Systems',
      'Database Management',
      'Software Engineering',
      'Computer Networks',
      'Automata Theory',
    ],
  },
  {
    institution: 'Guru Gobind Singh Indraprastha University',
    degree: 'Bachelor of Technology, Computer Science & Engineering',
    startDate: '2011',
    endDate: '2015',
    description:
      'Gained a strong foundation in computer science and engineering principles.',
    courses: [
      'Data Structures',
      'Object-Oriented Programming',
      'Discrete Mathematics',
      'Compiler Design',
      'Web Development',
      'Artificial Intelligence',
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

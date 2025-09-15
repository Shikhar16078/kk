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
    title: 'Clustering - data set',
    description:
      'Used various clustering algorithms (Hierarchical, k-means, DBSCAN & Gaussian Decomposition) on dummy data set to find optimal number of clusters. Used python libraries for analysis.',
    techStack: ['Python', 'scikit-learn', 'Hierarchical Clustering', 'K-Means'],
    liveDemoUrl: '#',
    githubUrl: '#',
    image: 'project-1',
  },
  {
    id: 'project-2',
    title: 'Forecasting time-series & analysis',
    description:
      'Analyzed various forecasting algorithms like Exponential Smoothing, Simple Moving Average, AR(p) etc. to determine the best model for a time series. Used python libraries for analysis.',
    techStack: ['Python', 'Pandas', 'StatsModels', 'Time Series Analysis'],
    liveDemoUrl: '#',
    githubUrl: '#',
    image: 'project-2',
  },
  {
    id: 'project-3',
    title: 'Multivariable Regression using Python',
    description:
      'Developed a multivariable regression to establish a relation between dependent variable Y and 5-tuples of Independent variables using python statistical packages. Performed residual analysis using Q-Q plot and scatter plot.',
    techStack: ['Python', 'StatsModels', 'Regression Analysis', 'Matplotlib'],
    liveDemoUrl: '#',
    githubUrl: '#',
    image: 'project-3',
  },
  {
    id: 'project-4',
    title: 'Android apk analysis using Flowdroid',
    description:
      'Successfully analyzed 50 android apk files for privacy leaks using Flowdroid taint analysis tool. Created scripts using Java for automating analysis and to deduce relations between various privacy violations.',
    techStack: ['Java', 'Flowdroid', 'Static Analysis', 'Android Security'],
    liveDemoUrl: '#',
    githubUrl: '#',
    image: 'project-4',
  },
  {
    id: 'project-5',
    title: 'Writing Integration test cases using RSpec',
    description:
      "Contributed to the Expertiza project by writing integration test cases for the 'Response controller' using RSpec, helping to ensure the software's quality and reliability.",
    techStack: ['Ruby', 'RSpec', 'Testing', 'Rails'],
    liveDemoUrl: '#',
    githubUrl: '#',
    image: 'project-5',
  },
  {
    id: 'project-6',
    title: 'Resource conainers - Memory',
    description:
      'Introduced a new abstraction called Resource containers for memory sharing in the Linux kernel using C. Tasks within the same container can share a pool of memory locations, while tasks in different containers cannot.',
    techStack: ['C', 'Linux Kernel', 'Operating Systems', 'Memory Management'],
    liveDemoUrl: '#',
    githubUrl: '#',
    image: 'project-6',
  },
  {
    id: 'project-7',
    title: 'Resource containers - processor',
    description:
      'Introduced a new abstraction for resource allocation in the Linux kernel by creating resource containers. Each thread can be assigned to a container with its own scheduling policy and lock, allowing for better resource utilization.',
    techStack: ['C', 'Linux Kernel', 'Operating Systems', 'CPU Scheduling'],
    liveDemoUrl: '#',
    githubUrl: '#',
    image: 'project-7',
  },
  {
    id: 'project-8',
    title: 'Hotel Chain Management System',
    description:
      'A fully functional Swing-based application for managing a hotel chain. Developed a 3-layered MVC architecture using Java and was responsible for the full-stack development of the manager view.',
    techStack: ['Java', 'Swing', 'MVC', 'SQL', 'JDBC'],
    liveDemoUrl: '#',
    githubUrl: '#',
    image: 'project-8',
  },
  {
    id: 'project-9',
    title: 'PCAP File Analysis',
    description:
      'Analyzed PCAP files for attacks and network characteristics using tools like Wireshark and Bro. Wrote Python scripts to analyze packet frequency and plotted statistics using Gnuplot.',
    techStack: ['Python', 'Wireshark', 'Bro (Zeek)', 'Gnuplot', 'Network Security'],
    liveDemoUrl: '#',
    githubUrl: '#',
    image: 'project-9',
  },
  {
    id: 'project-10',
    title: 'Secure Netcat using AES-GCM Encryption',
    description:
      'Simulated the Netcat utility in Python and embedded encryption/decryption through AES-GCM using the pycryptodome library to create a secure communication channel.',
    techStack: ['Python', 'AES-GCM', 'Cryptography', 'pycryptodome'],
    liveDemoUrl: '#',
    githubUrl: '#',
    image: 'project-10',
  },
  {
    id: 'project-11',
    title: 'Slack based bot application - UtiloBot',
    description:
      "A bot designed using Node.js and Agile methodologies to ease the process of fetching pull-requests, emails, issues and meeting invites. Designed algorithm for analysis of Travis build status for each 'pull request' email.",
    techStack: ['Node.js', 'Slack API', 'Trello', 'Agile'],
    liveDemoUrl: '#',
    githubUrl: '#',
    image: 'project-11',
  },
  {
    id: 'project-12',
    title: 'Car Rental Web Application - GoMILES',
    description:
      'A car rental web application designed and developed using Ruby on Rails along with Bootstrap. Designed the front-end (view) and controllers for user permissions and car reservations.',
    techStack: ['Ruby on Rails', 'Bootstrap', 'MVC', 'SQL'],
    liveDemoUrl: '#',
    githubUrl: '#',
    image: 'project-12',
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

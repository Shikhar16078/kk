'use client';

import { SectionWrapper, SectionTitle } from '../layout/section-wrapper';
import { Badge } from '@/components/ui/badge';

const allSkills = [
  'HTML',
  'Cascading Style Sheets (CSS)',
  'Bootstrap',
  'User Interface Design',
  'Software Design',
  'Software Infrastructure',
  'Core Java',
  'Java Enterprise Edition',
  'Jee',
  'Enterprise JavaBeans (EJB)',
  'JPA',
  'Microservices',
  'Distributed Systems',
  'Representational State Transfer (REST)',
  'Back-End Web Development',
  'Object Oriented Design',
  'Object-Oriented Programming (OOP)',
  'Java',
  'Python (Programming Language)',
  'Go (Programming Language)',
  'C (Programming Language)',
  'Powershell',
  'C#',
  'Spring Boot',
  'Spring MVC',
  'Distributed tracing',
  'SQL',
  'MySQL',
  'Snowflake',
  'Database Management System (DBMS)',
  'Azure Cosmos DB',
  'Database Design',
  'BCDR',
  'Git',
  'Linux',
  'Microsoft Office',
  'Software Development',
  'Programming',
  'Windows',
  'algorithms',
  'Ruby',
  'JUnit',
  'TestNG',
  'Agile Methodologies',
  'Cryptography',
  'Jenkins',
  'docker',
  'Cloud Computing',
  'Microsoft Azure',
];

export function Skills() {
  return (
    <SectionWrapper id="skills">
      <SectionTitle>Skills</SectionTitle>
      <div className="flex flex-wrap justify-center gap-2">
        {allSkills.map((skill) => (
          <Badge
            key={skill}
            variant="secondary"
            className="border-primary/20 bg-primary/10 px-4 py-2 text-md text-primary hover:bg-primary/20"
          >
            {skill}
          </Badge>
        ))}
      </div>
    </SectionWrapper>
  );
}

'use client';

import { useState } from 'react';
import { SectionWrapper, SectionTitle } from '../layout/section-wrapper';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ChevronDown, ChevronUp } from 'lucide-react';

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

const half = Math.ceil(allSkills.length / 2);
const skills1 = allSkills.slice(0, half);
const skills2 = allSkills.slice(half);

const duplicatedSkills1 = [...skills1, ...skills1];
const duplicatedSkills2 = [...skills2, ...skills2];

export function Skills() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <SectionWrapper id="skills">
      <div className="flex items-center justify-center">
        <SectionTitle>Skills</SectionTitle>
      </div>
      <div
        className={cn(
          'relative w-full overflow-hidden transition-all duration-500 ease-in-out',
          isExpanded ? 'h-auto' : 'h-[7.5rem]'
        )}
      >
        <div
          className={cn(
            'flex flex-col gap-2 transition-opacity duration-500',
            isExpanded ? 'opacity-0' : 'opacity-100'
          )}
        >
          <div className="group relative w-full overflow-hidden">
            <div className="flex w-max animate-scroll-horizontal group-hover:[animation-play-state:paused]">
              {duplicatedSkills1.map((skill, index) => (
                <Badge
                  key={`${skill}-${index}`}
                  variant="secondary"
                  className="mx-2 whitespace-nowrap border-primary/20 bg-primary/10 px-4 py-2 text-md text-primary hover:bg-primary/20"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
          <div className="group relative w-full overflow-hidden">
            <div
              className="flex w-max animate-scroll-horizontal group-hover:[animation-play-state:paused]"
              style={{ animationDirection: 'reverse' }}
            >
              {duplicatedSkills2.map((skill, index) => (
                <Badge
                  key={`${skill}-${index}`}
                  variant="secondary"
                  className="mx-2 whitespace-nowrap border-primary/20 bg-primary/10 px-4 py-2 text-md text-primary hover:bg-primary/20"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
        <div
          className={cn(
            'absolute top-0 left-0 w-full flex flex-wrap justify-center gap-2 transition-opacity duration-500',
            isExpanded ? 'opacity-100' : 'opacity-0 pointer-events-none'
          )}
        >
          {allSkills.map((skill) => (
            <Badge
              key={skill}
              variant="secondary"
              className="mx-2 whitespace-nowrap border-primary/20 bg-primary/10 px-4 py-2 text-md text-primary hover:bg-primary/20"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </div>
      <div className="mt-8 flex justify-center">
        <Button
          variant="ghost"
          onClick={() => setIsExpanded(!isExpanded)}
          className="group"
        >
          {isExpanded ? 'Show Less' : 'Show All'}
          {isExpanded ? (
            <ChevronUp className="ml-2 h-4 w-4 transition-transform group-hover:-translate-y-1" />
          ) : (
            <ChevronDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
          )}
        </Button>
      </div>
    </SectionWrapper>
  );
}

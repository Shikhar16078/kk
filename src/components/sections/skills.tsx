'use client';

import { SectionWrapper, SectionTitle } from '../layout/section-wrapper';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '../ui/card';
import { BrainCircuit, Code, Database, Server, Star } from 'lucide-react';

const categorizedSkills = {
  frontendSkills: [
    'HTML',
    'Cascading Style Sheets (CSS)',
    'Bootstrap',
    'User Interface Design',
  ],
  backendSkills: [
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
  ],
  aiSkills: ['Distributed tracing'],
  databaseSkills: [
    'SQL',
    'MySQL',
    'Snowflake',
    'Database Management System (DBMS)',
    'Azure Cosmos DB',
    'Database Design',
  ],
  generalSkills: [
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
  ],
};

const categoryIcons = {
  frontendSkills: <Code className="mr-2 h-5 w-5 text-primary" />,
  backendSkills: <Server className="mr-2 h-5 w-5 text-primary" />,
  aiSkills: <BrainCircuit className="mr-2 h-5 w-5 text-primary" />,
  databaseSkills: <Database className="mr-2 h-5 w-5 text-primary" />,
  generalSkills: <Star className="mr-2 h-5 w-5 text-primary" />,
};

const categoryLabels = {
  frontendSkills: 'Frontend',
  backendSkills: 'Backend',
  aiSkills: 'AI/ML',
  databaseSkills: 'Databases',
  generalSkills: 'General',
};

export function Skills() {
  const renderSkills = (skillList: string[] | undefined) => {
    if (!skillList || skillList.length === 0) {
      return (
        <p className="text-center text-muted-foreground">
          No skills listed for this category.
        </p>
      );
    }
    return (
      <div className="flex flex-wrap justify-center gap-2">
        {skillList.map((skill) => (
          <Badge
            key={skill}
            variant="secondary"
            className="border-primary/20 bg-primary/10 px-4 py-2 text-md text-primary hover:bg-primary/20"
          >
            {skill}
          </Badge>
        ))}
      </div>
    );
  };

  return (
    <SectionWrapper id="skills">
      <SectionTitle>My Skills</SectionTitle>
      <Tabs defaultValue="backendSkills" className="w-full">
        <TabsList className="grid h-auto w-full grid-cols-2 flex-wrap justify-center border bg-card sm:grid-cols-3 md:flex md:h-10">
          {Object.keys(categoryLabels).map((key) => (
            <TabsTrigger key={key} value={key} className="flex items-center">
              {categoryIcons[key as keyof typeof categoryIcons]}
              {categoryLabels[key as keyof typeof categoryLabels]}
            </TabsTrigger>
          ))}
        </TabsList>

        {Object.entries(categoryLabels).map(([key]) => (
          <TabsContent key={key} value={key}>
            <Card className="border-0 bg-transparent shadow-none">
              <CardContent className="pt-6">
                {renderSkills(
                  categorizedSkills[
                    key as keyof typeof categorizedSkills
                  ] as string[]
                )}
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </SectionWrapper>
  );
}

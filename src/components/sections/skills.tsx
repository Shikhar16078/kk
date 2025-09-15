'use client';

import { useState, useEffect } from 'react';
import { SectionWrapper, SectionTitle } from '../layout/section-wrapper';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  generateCategorizedSkills,
  GenerateCategorizedSkillsOutput,
} from '@/ai/flows/generate-categorized-skills';
import { workExperience, projects } from '@/lib/data';
import { Skeleton } from '@/components/ui/skeleton';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

type SkillCategory =
  | 'frontendSkills'
  | 'backendSkills'
  | 'aiSkills'
  | 'databaseSkills'
  | 'generalSkills';

const categoryTitles: Record<SkillCategory, string> = {
  frontendSkills: 'Frontend',
  backendSkills: 'Backend',
  aiSkills: 'AI/ML',
  databaseSkills: 'Databases',
  generalSkills: 'General',
};

export function Skills() {
  const [skills, setSkills] =
    useState<GenerateCategorizedSkillsOutput | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchSkills = async () => {
      setIsLoading(true);
      try {
        const experienceDescription = workExperience
          .map((job) => job.accomplishments.join(' '))
          .join(' ');
        const projectDescriptions = projects
          .map((project) => project.description)
          .join(' ');

        const result = await generateCategorizedSkills({
          experienceDescription,
          projectDescriptions,
        });
        setSkills(result);
      } catch (error) {
        console.error('Error generating skills:', error);
        setSkills({
          frontendSkills: [
            'React',
            'Next.js',
            'TypeScript',
            'Tailwind CSS',
            'HTML5 & CSS3',
          ],
          backendSkills: [
            'Node.js',
            'Python',
            'Express',
            'Flask',
            'REST APIs',
          ],
          aiSkills: [
            'TensorFlow',
            'PyTorch',
            'scikit-learn',
            'Genkit',
            'LLM Integration',
          ],
          databaseSkills: [
            'PostgreSQL',
            'MongoDB',
            'Redis',
            'SQL',
            'NoSQL',
          ],
          generalSkills: [
            'CI/CD',
            'Docker',
            'Git',
            'Agile Methodologies',
            'Problem Solving',
          ],
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchSkills();
  }, []);

  return (
    <SectionWrapper id="skills">
      <SectionTitle>Skills</SectionTitle>
      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 5 }).map((_, index) => (
            <Card key={index}>
              <CardHeader>
                <Skeleton className="h-6 w-1/2" />
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {Array.from({ length: 5 }).map((_, skillIndex) => (
                  <Skeleton key={skillIndex} className="h-8 w-24" />
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills &&
            (
              Object.keys(skills) as Array<keyof typeof skills>
            ).map((category) => (
              <Card
                key={category}
                className="flex flex-col transition-transform duration-300 ease-in-out hover:-translate-y-1"
              >
                <CardHeader>
                  <CardTitle className="font-headline text-xl">
                    {categoryTitles[category as SkillCategory]}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  {skills[category].map((skill: string) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="whitespace-nowrap border-primary/20 bg-primary/10 px-3 py-1 text-sm text-primary hover:bg-primary/20"
                    >
                      {skill}
                    </Badge>
                  ))}
                </CardContent>
              </Card>
            ))}
        </div>
      )}
    </SectionWrapper>
  );
}

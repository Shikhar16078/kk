'use client';

import { SectionWrapper, SectionTitle } from '../layout/section-wrapper';
import { Badge } from '@/components/ui/badge';
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

const staticSkills = {
  frontendSkills: [
    'React',
    'Next.js',
    'TypeScript',
    'Tailwind CSS',
    'HTML5 & CSS3',
  ],
  backendSkills: ['Node.js', 'Python', 'Go', 'Java', 'REST APIs', 'gRPC'],
  aiSkills: [
    'TensorFlow',
    'PyTorch',
    'scikit-learn',
    'OpenAI',
    'LLM Integration',
  ],
  databaseSkills: ['PostgreSQL', 'MongoDB', 'Redis', 'SQL', 'NoSQL'],
  generalSkills: [
    'CI/CD',
    'Docker',
    'Git',
    'Agile Methodologies',
    'Problem Solving',
  ],
};

export function Skills() {
  return (
    <SectionWrapper id="skills">
      <SectionTitle>Skills</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {(Object.keys(staticSkills) as Array<keyof typeof staticSkills>).map(
          (category) => (
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
                {staticSkills[category].map((skill: string) => (
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
          )
        )}
      </div>
    </SectionWrapper>
  );
}

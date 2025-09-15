'use client';

import { useState, useEffect } from 'react';
import {
  generateCategorizedSkills,
  GenerateCategorizedSkillsOutput,
} from '@/ai/flows/generate-categorized-skills';
import { workExperience, projects } from '@/lib/data';
import { SectionWrapper, SectionTitle } from '../layout/section-wrapper';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '../ui/card';
import { BrainCircuit, Code, Database, Server, Star } from 'lucide-react';
import { Skeleton } from '../ui/skeleton';

const defaultSkills: GenerateCategorizedSkillsOutput = {
  frontendSkills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML5 & CSS3'],
  backendSkills: ['Node.js', 'Python', 'Express', 'Flask', 'REST APIs'],
  aiSkills: ['TensorFlow', 'PyTorch', 'scikit-learn', 'Genkit', 'LLM Integration'],
  databaseSkills: ['PostgreSQL', 'MongoDB', 'Redis', 'SQL', 'NoSQL'],
  generalSkills: ['CI/CD', 'Docker', 'Git', 'Agile Methodologies', 'Problem Solving'],
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
  const [skills, setSkills] =
    useState<GenerateCategorizedSkillsOutput | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSkills = async () => {
      setLoading(true);
      const experienceDescription = workExperience
        .map(
          (w) =>
            `${w.role} at ${w.company}: ${w.accomplishments.join(' ')}`
        )
        .join('\n');
      const projectDescriptions = projects
        .map(
          (p) =>
            `${p.title}: ${p.description} using ${p.techStack.join(
              ', '
            )}`
        )
        .join('\n');

      try {
        const result = await generateCategorizedSkills({
          experienceDescription,
          projectDescriptions,
        });
        setSkills(result);
      } catch (error) {
        console.error('Failed to generate skills, using default skills:', error);
        setSkills(defaultSkills);
      } finally {
        setLoading(false);
      }
    };
    fetchSkills();
  }, []);

  const renderSkills = (skillList: string[] | undefined) => {
    if (!skillList || skillList.length === 0) {
      return (
        <p className="text-muted-foreground">
          No skills listed for this category.
        </p>
      );
    }
    return (
      <div className="flex flex-wrap gap-2">
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

  const renderSkeletons = () => (
    <div className="flex flex-wrap gap-2">
      {Array.from({ length: 8 }).map((_, i) => (
        <Skeleton key={i} className="h-10 w-28 rounded-full" />
      ))}
    </div>
  );

  return (
    <SectionWrapper id="skills">
      <SectionTitle>My Skills</SectionTitle>
      <Tabs defaultValue="frontendSkills" className="w-full">
        <TabsList className="grid w-full grid-cols-2 h-auto flex-wrap justify-center border bg-card sm:grid-cols-3 md:flex md:h-10">
          {Object.keys(categoryLabels).map((key) => (
            <TabsTrigger key={key} value={key} className="flex items-center">
              {categoryIcons[key as keyof typeof categoryIcons]}
              {categoryLabels[key as keyof typeof categoryLabels]}
            </TabsTrigger>
          ))}
        </TabsList>

        {Object.entries(categoryLabels).map(([key]) => (
          <TabsContent key={key} value={key}>
            <Card className="border-0 shadow-none">
              <CardContent className="pt-6">
                {loading
                  ? renderSkeletons()
                  : renderSkills(
                      skills?.[
                        key as keyof GenerateCategorizedSkillsOutput
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

import Link from 'next/link';
import { projects } from '@/lib/data';
import { SectionWrapper, SectionTitle } from '../layout/section-wrapper';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react';

export function Projects() {
  return (
    <SectionWrapper id="projects">
      <SectionTitle>Projects</SectionTitle>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Card
            key={project.id}
            className="flex h-full flex-col transition-transform duration-300 ease-in-out hover:-translate-y-1"
          >
            <CardHeader>
              <CardTitle className="font-headline text-xl">
                {project.title}
              </CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex gap-4">
              <Button asChild variant="outline">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github /> Source
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}

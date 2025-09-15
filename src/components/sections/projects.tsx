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
import { Github, ExternalLink, Code } from 'lucide-react';

export function Projects() {
  return (
    <SectionWrapper id="projects">
      <SectionTitle>Projects</SectionTitle>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <Card
            key={project.id}
            className="group relative flex h-full flex-col overflow-hidden transition-transform duration-300 ease-in-out hover:-translate-y-1"
          >
            <CardHeader className="relative z-10">
              <div className="relative mb-4 flex h-32 items-center justify-center overflow-hidden rounded-lg bg-card/50 backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <Code className="h-16 w-16 text-primary/50 transition-colors duration-300 group-hover:text-primary" />
                <div className="absolute -bottom-4 -right-4 h-16 w-16 rounded-full bg-primary/20 blur-2xl transition-all duration-300 group-hover:h-24 group-hover:w-24 group-hover:blur-3xl" />
              </div>
              <CardTitle className="font-headline text-xl">
                {project.title}
              </CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="z-10 flex-grow">
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="z-10 flex gap-4">
              <Button asChild variant="outline">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github /> Source
                </a>
              </Button>
              <Button asChild>
                <a
                  href={project.liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink /> Live Demo
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}

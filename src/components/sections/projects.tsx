import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
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
import { Github, ExternalLink } from 'lucide-react';

export function Projects() {
  return (
    <SectionWrapper id="projects">
      <SectionTitle>Projects</SectionTitle>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {projects.map((project) => {
          const projectImage = PlaceHolderImages.find(
            (p) => p.id === project.image
          );
          return (
            <Card key={project.id} className="flex flex-col">
              <CardHeader>
                {projectImage && (
                  <div className="relative mb-4 aspect-video overflow-hidden rounded-t-lg">
                    <Image
                      src={projectImage.imageUrl}
                      alt={projectImage.description}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      data-ai-hint={projectImage.imageHint}
                    />
                  </div>
                )}
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
          );
        })}
      </div>
    </SectionWrapper>
  );
}

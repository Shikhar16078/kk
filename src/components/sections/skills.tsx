'use client';

import { useState } from 'react';
import { SectionWrapper, SectionTitle } from '../layout/section-wrapper';
import { Badge } from '@/components/ui/badge';
import { Button } from '../ui/button';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

const staticSkills = {
  frontendSkills: [
    'React',
    'Next.js',
    'TypeScript',
    'JavaScript (ES6+)',
    'Tailwind CSS',
    'HTML5 & CSS3',
    'Framer Motion',
  ],
  backendSkills: [
    'Node.js',
    'Python',
    'Go',
    'Java',
    'REST APIs',
    'gRPC',
    'Microservices',
  ],
  aiSkills: [
    'Genkit',
    'TensorFlow',
    'PyTorch',
    'scikit-learn',
    'OpenAI',
    'LLM Integration',
    'LangChain',
  ],
  databaseSkills: [
    'PostgreSQL',
    'MongoDB',
    'Redis',
    'SQL',
    'NoSQL',
    'Snowflake',
  ],
  generalSkills: [
    'CI/CD',
    'Docker',
    'Git',
    'Agile Methodologies',
    'Problem Solving',
    'Distributed Systems',
    'Cloud Computing (Azure)',
  ],
};

const allSkills = Object.values(staticSkills).flat();

export function Skills() {
  const [showAll, setShowAll] = useState(false);

  return (
    <SectionWrapper id="skills">
      <SectionTitle>Skills</SectionTitle>
      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-4">
        <div
          className={cn(
            'group relative w-full overflow-hidden',
            !showAll && 'h-24'
          )}
        >
          <AnimatePresence>
            {!showAll && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="pointer-events-none absolute inset-0 z-10 w-full bg-gradient-to-r from-background via-transparent to-background"
              />
            )}
          </AnimatePresence>
          <div
            className={cn(
              'flex flex-wrap gap-2 transition-all duration-500',
              !showAll
                ? 'animate-scroll-horizontal absolute left-0 top-0 w-[200%] justify-start will-change-transform group-hover:[animation-play-state:paused]'
                : 'justify-center'
            )}
          >
            {[...allSkills, ...allSkills].map((skill, index) => (
              <Badge
                key={`${skill}-${index}`}
                variant="secondary"
                className="cursor-pointer select-none whitespace-nowrap border-primary/20 bg-primary/10 px-4 py-2 text-base text-primary shadow-sm transition-all hover:bg-primary/20 hover:shadow-md"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
        <Button
          variant="ghost"
          onClick={() => setShowAll(!showAll)}
          className="group"
        >
          {showAll ? 'Show Less' : 'Show All'}
          {showAll ? (
            <ChevronUp className="ml-2 h-4 w-4 transition-transform group-hover:-translate-y-1" />
          ) : (
            <ChevronDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
          )}
        </Button>
      </div>
    </SectionWrapper>
  );
}

'use client';

import { education } from '@/lib/data';
import { SectionWrapper, SectionTitle } from '../layout/section-wrapper';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from '@/components/ui/card';
import { CalendarDays, CheckCircle, Award } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Image from 'next/image';

const educationLogos: { [key: string]: string } = {
  'North Carolina State University': '/images/ncstate.jpg',
  'Guru Gobind Singh Indraprastha University': '/images/ggsipu.jpg',
};

export function Education() {
  return (
    <SectionWrapper id="education">
      <SectionTitle>Education</SectionTitle>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {education.map((edu, index) => (
          <Accordion key={index} type="single" collapsible className="w-full">
            <AccordionItem value={`item-${index}`} asChild>
              <Card className="flex h-full flex-col">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 p-1">
                      <Image
                        src={educationLogos[edu.institution]}
                        alt={`${edu.institution} logo`}
                        width={40}
                        height={40}
                        className="rounded-full object-cover"
                      />
                    </div>
                    <div>
                      <CardTitle className="font-headline text-xl">
                        {edu.degree}
                      </CardTitle>
                      <CardDescription className="pt-1">
                        {edu.institution}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex flex-grow flex-col">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-2">
                      <CalendarDays className="h-4 w-4" />
                      <span>
                        {edu.startDate} - {edu.endDate}
                      </span>
                    </span>
                    {edu.gpa && (
                      <span className="flex items-center gap-2">
                        <Award className="h-4 w-4" />
                        <span>{edu.gpa}</span>
                      </span>
                    )}
                  </div>
                  <p className="mt-4 flex-grow text-muted-foreground">
                    {edu.description}
                  </p>
                  <div className="mt-auto">
                    <AccordionTrigger className="mt-4 text-sm hover:no-underline">
                      Relevant Courses
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="grid grid-cols-1 gap-2 pt-4">
                        {edu.courses.map((course) => (
                          <li key={course} className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 shrink-0 text-primary" />
                            <span className="text-muted-foreground">
                              {course}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </div>
                </CardContent>
              </Card>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </SectionWrapper>
  );
}

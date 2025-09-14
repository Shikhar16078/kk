import { education } from '@/lib/data';
import { SectionWrapper, SectionTitle } from '../layout/section-wrapper';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from '@/components/ui/card';
import { GraduationCap, CalendarDays, CheckCircle } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export function Education() {
  return (
    <SectionWrapper id="education">
      <SectionTitle>Education</SectionTitle>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {education.map((edu, index) => (
          <Accordion
            key={index}
            type="single"
            collapsible
            className="w-full"
          >
            <AccordionItem value={`item-${index}`} asChild>
              <Card className="flex h-full flex-col">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-primary/10 p-3">
                      <GraduationCap className="h-6 w-6 text-primary" />
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
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CalendarDays className="h-4 w-4" />
                    <span>
                      {edu.startDate} - {edu.endDate}
                    </span>
                  </div>
                  <p className="mt-4 text-muted-foreground">
                    {edu.description}
                  </p>
                  <div className="mt-auto">
                    <AccordionTrigger className="mt-4 text-sm hover:no-underline">
                      Relevant Courses
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="grid grid-cols-1 gap-2 pt-4 sm:grid-cols-2">
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

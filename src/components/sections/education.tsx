import { education } from '@/lib/data';
import { SectionWrapper, SectionTitle } from '../layout/section-wrapper';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from '@/components/ui/card';
import { GraduationCap, CalendarDays } from 'lucide-react';
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
      <Accordion type="single" collapsible className="grid gap-8 md:grid-cols-2">
        {education.map((edu, index) => (
          <AccordionItem key={index} value={`item-${index}`} asChild>
            <Card>
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
              <CardContent>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CalendarDays className="h-4 w-4" />
                  <span>
                    {edu.startDate} - {edu.endDate}
                  </span>
                </div>
                <AccordionTrigger className="mt-4 text-sm hover:no-underline">
                  Show More
                </AccordionTrigger>
                <AccordionContent>
                  <p className="pt-4 text-muted-foreground">
                    {edu.description}
                  </p>
                </AccordionContent>
              </CardContent>
            </Card>
          </AccordionItem>
        ))}
      </Accordion>
    </SectionWrapper>
  );
}

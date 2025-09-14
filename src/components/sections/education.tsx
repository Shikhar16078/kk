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

export function Education() {
  return (
    <SectionWrapper id="education">
      <SectionTitle>Education</SectionTitle>
      <div className="grid gap-8 md:grid-cols-2">
        {education.map((edu, index) => (
          <Card key={index}>
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
              <p className="mb-4 text-muted-foreground">{edu.description}</p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CalendarDays className="h-4 w-4" />
                <span>
                  {edu.startDate} - {edu.endDate}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}

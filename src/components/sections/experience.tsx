import { workExperience } from '@/lib/data';
import { SectionWrapper, SectionTitle } from '../layout/section-wrapper';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from '@/components/ui/card';
import { Building, CalendarDays, CheckCircle } from 'lucide-react';

export function Experience() {
  return (
    <SectionWrapper id="experience">
      <SectionTitle>Work Experience</SectionTitle>
      <div className="grid gap-8 md:grid-cols-1">
        {workExperience.map((job, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="font-headline text-xl">
                {job.role}
              </CardTitle>
              <CardDescription className="flex flex-col gap-2 pt-1 sm:flex-row sm:items-center">
                <span className="flex items-center gap-2">
                  <Building className="h-4 w-4" /> {job.company}
                </span>
                <span className="hidden sm:inline">|</span>
                <span className="flex items-center gap-2">
                  <CalendarDays className="h-4 w-4" /> {job.startDate} -{' '}
                  {job.endDate}
                </span>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {job.accomplishments.map((accomplishment, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="mt-1 h-4 w-4 shrink-0 text-primary" />
                    <span className="text-muted-foreground">
                      {accomplishment}
                    </span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}

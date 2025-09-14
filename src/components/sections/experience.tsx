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
      <div className="relative flex flex-col gap-8 before:absolute before:left-[1.45rem] before:top-0 before:h-full before:w-0.5 before:bg-border md:before:left-1/2 md:before:-translate-x-1/2">
        {workExperience.map((job, index) => (
          <div
            key={index}
            className="relative self-end pl-16 md:w-1/2 md:pl-16 odd:md:self-start odd:md:pl-0 odd:md:pr-16"
          >
            <div className="absolute left-[0.7rem] top-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary md:left-1/2 md:-translate-x-1/2">
              <Building className="h-4 w-4 text-primary-foreground" />
            </div>
            <Card className="ml-12 md:ml-0">
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
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}

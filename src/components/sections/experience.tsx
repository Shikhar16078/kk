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
      <div className="relative flex flex-col gap-y-12">
        <div className="absolute left-3 top-0 h-full w-0.5 bg-border"></div>
        {workExperience.map((job, index) => (
          <div key={index} className="relative pl-12">
            <div className="absolute -left-5 top-1 flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary bg-background">
              <Building className="h-5 w-5 text-primary" />
            </div>
            <Card>
              <CardHeader>
                <CardTitle className="font-headline text-xl">
                  {job.role}
                </CardTitle>
                <CardDescription>
                  <div className="flex flex-col gap-2 pt-1 sm:flex-row sm:items-center">
                    <span className="flex items-center gap-2">
                      <Building className="h-4 w-4" /> {job.company}
                    </span>
                    <span className="hidden sm:inline">|</span>
                    <span className="flex items-center gap-2">
                      <CalendarDays className="h-4 w-4" /> {job.startDate} -{' '}
                      {job.endDate}
                    </span>
                  </div>
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

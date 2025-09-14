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
      <div className="relative">
        <div className="absolute left-1/2 hidden h-full w-px -translate-x-1/2 transform bg-border md:block"></div>
        {workExperience.map((job, index) => (
          <div
            key={index}
            className="group relative mb-8 flex items-center md:items-start"
          >
            <div className="absolute left-1/2 hidden h-4 w-4 -translate-x-1/2 transform rounded-full border-2 border-primary bg-background md:block"></div>
            <div
              className={`flex w-full flex-col items-start md:w-1/2 ${
                index % 2 === 0 ? 'md:pr-8 md:items-end' : 'md:pl-8 md:items-start'
              }`}
            >
              <div
                className={`w-full md:max-w-md ${
                  index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                }`}
              >
                <Card>
                  <CardHeader
                    className={`${
                      index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                    }`}
                  >
                    <CardTitle className="font-headline text-xl">
                      {job.role}
                    </CardTitle>
                    <CardDescription
                      className={`flex flex-col gap-2 pt-1 sm:flex-row sm:items-center ${
                        index % 2 === 0
                          ? 'sm:justify-start md:justify-end'
                          : 'sm:justify-start'
                      }`}
                    >
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
                  <CardContent
                    className={`${
                      index % 2 === 0 ? 'md:text-left' : 'md:text-left'
                    }`}
                  >
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
            </div>
            <div
              className={`hidden md:flex md:w-1/2 ${
                index % 2 === 0 ? 'md:pl-8' : 'md:pr-8'
              }`}
            ></div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}

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
import Image from 'next/image';

const companyLogos: { [key: string]: string } = {
  Microsoft: '/images/microsoft.png',
  FactSet: '/images/factset.jpeg',
  PayPal: '/images/paypal.jpeg',
  Aricent: '/images/aricent.jpeg',
};

export function Experience() {
  return (
    <SectionWrapper id="experience">
      <SectionTitle>Work Experience</SectionTitle>
      <div className="relative flex flex-col gap-y-12">
        <div className="absolute left-3 top-5 -z-10 h-[calc(100%-2rem)] w-0.5 bg-border md:left-5"></div>
        {workExperience.map((job, index) => (
          <div key={index} className="relative pl-12 md:pl-16">
            <div className="absolute -left-2 top-3 flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary bg-background p-2 md:left-0">
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
                      {companyLogos[job.company] ? (
                        <Image
                          src={companyLogos[job.company]}
                          alt={`${job.company} logo`}
                          width={16}
                          height={16}
                          className="h-4 w-4 object-contain"
                        />
                      ) : (
                        <Building className="h-4 w-4" />
                      )}{' '}
                      {job.company}
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

import Image from 'next/image';
import { personalData } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function Hero() {
  const profileImage = PlaceHolderImages.find((p) => p.id === personalData.image);

  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Hi, I&apos;m{' '}
              <span className="text-primary">{personalData.name}</span>
            </h1>
            <h2 className="mt-2 font-headline text-2xl font-medium text-foreground/80 sm:text-3xl">
              {personalData.title}
            </h2>
            <p className="mt-6 max-w-xl text-lg text-foreground/70">
              {personalData.bio}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href="#contact">Contact Me</Link>
              </Button>
              <div className="flex items-center gap-4">
                {personalData.contact.social.map((social) => (
                  <Button
                    key={social.name}
                    asChild
                    variant="ghost"
                    size="icon"
                    className="h-12 w-12"
                  >
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                    >
                      <social.icon className="h-6 w-6 text-foreground/70 transition-colors hover:text-primary" />
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </div>
          <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
            {profileImage && (
              <div className="relative h-72 w-72 overflow-hidden rounded-full border-4 border-primary/50 shadow-2xl shadow-primary/20 sm:h-96 sm:w-96">
                <Image
                  src={profileImage.imageUrl}
                  alt={profileImage.description}
                  fill
                  priority
                  className="object-cover"
                  data-ai-hint={profileImage.imageHint}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

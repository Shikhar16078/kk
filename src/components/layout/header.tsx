'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { navLinks } from '@/lib/data';
import { cn } from '@/lib/utils';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '../ui/button';
import { ThemeToggleButton } from '../ui/theme-toggle-button';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href');
    if (targetId && targetId.startsWith('#')) {
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const navLinkItems = navLinks.map((link) => (
    <a
      key={link.href}
      href={link.href}
      onClick={handleLinkClick}
      className="font-medium text-foreground/70 transition-colors hover:text-primary"
    >
      {link.label}
    </a>
  ));

  const mobileNavLinkItems = navLinks.map((link) => (
    <a
      key={link.href}
      href={link.href}
      onClick={handleLinkClick}
      className="text-lg font-medium text-foreground/70 transition-colors hover:text-primary"
    >
      {link.label}
    </a>
  ));

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        isScrolled
          ? 'border-b bg-background/80 backdrop-blur-sm'
          : 'bg-transparent'
      )}
    >
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/profile.jpg"
            alt="Kshittiz profile photo"
            width={32}
            height={32}
            className="rounded-full"
          />
          <span className="font-headline text-2xl font-bold">Kshittiz</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinkItems}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggleButton />
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="mt-8 flex flex-col gap-6">
                  {mobileNavLinkItems}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}

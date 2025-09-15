'use client';

import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { SectionWrapper, SectionTitle } from '../layout/section-wrapper';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { personalData } from '@/lib/data';
import { Mail, Send } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  message: z
    .string()
    .min(10, { message: 'Message must be at least 10 characters.' }),
});

export function Contact() {
  const { toast } = useToast();
  const recipientEmail = personalData.contact.email;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const subject = encodeURIComponent(`New message from ${values.name}`);
    const body = encodeURIComponent(
      `${values.message}\n\nFrom: ${values.name}\nEmail: ${values.email}`
    );
    const mailtoLink = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;

    window.location.href = mailtoLink;

    toast({
      title: 'Message Ready to Send!',
      description: 'Your email client should now be open.',
    });
    form.reset();
  }

  return (
    <SectionWrapper id="contact" className="bg-card">
      <SectionTitle>Contact Me</SectionTitle>
      <div className="grid gap-12 md:grid-cols-2">
        <div>
          <h3 className="font-headline text-2xl font-semibold">Get in Touch</h3>
          <p className="mt-2 text-muted-foreground">
            Have a project in mind or just want to say hi? Fill out the form or
            send me an email.
          </p>
          <div className="mt-8 space-y-4">
            <a
              href={`mailto:${recipientEmail}`}
              className="group flex items-center gap-3"
            >
              <Mail className="h-5 w-5 text-primary" />
              <span className="text-lg text-muted-foreground transition-colors group-hover:text-primary">
                {recipientEmail}
              </span>
            </a>
            <div className="flex items-center gap-4 pt-4">
              {personalData.contact.social.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  <social.icon className="h-7 w-7" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="your.email@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Your message here..."
                      {...field}
                      rows={5}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" size="lg" className="w-full md:w-auto">
              Send Message <Send className="ml-2 h-4 w-4" />
            </Button>
          </form>
        </Form>
      </div>
    </SectionWrapper>
  );
}

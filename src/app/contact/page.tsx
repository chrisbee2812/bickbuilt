'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
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
import { useToast } from '@/hooks/use-toast';
import { sendInquiry } from './actions';
import { Mail, Phone } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  message: z.string().min(10, {
    message: 'Message must be at least 10 characters.',
  }),
});

export default function ContactPage() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const result = await sendInquiry(values);
    if (result.success) {
      toast({
        title: 'Message Sent!',
        description: "Thanks for reaching out. We'll get back to you shortly.",
      });
      form.reset();
    } else {
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description: result.error || 'There was a problem with your request.',
      });
    }
  }

  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl">Contact Us</h1>
          <p className="mt-4 text-muted-foreground md:text-lg">
            Have a project in mind or just want to say hello? We'd love to hear from you.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-5 gap-12">
            <div className='md:col-span-2 space-y-8'>
                <div>
                    <h2 className='text-2xl font-semibold font-headline'>Get in Touch</h2>
                    <p className='text-muted-foreground mt-2'>Fill out the form and we'll get back to you as soon as possible.</p>
                </div>
                <div className='space-y-4'>
                    <div className='flex items-center gap-4'>
                        <Mail className='h-5 w-5 text-primary' />
                        <a href='mailto:hello@bickbuilt.com' className='text-muted-foreground hover:text-primary'>hello@bickbuilt.com</a>
                    </div>
                    <div className='flex items-center gap-4'>
                        <Phone className='h-5 w-5 text-primary' />
                        <span className='text-muted-foreground'>+1 (555) 123-4567</span>
                    </div>
                </div>
            </div>
            <div className="md:col-span-3">
                <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                            <Input placeholder="John Doe" {...field} />
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
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                            <Input placeholder="you@example.com" {...field} />
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
                        <FormLabel>Project Details</FormLabel>
                        <FormControl>
                            <Textarea
                            placeholder="Tell us a little bit about your project..."
                            className="min-h-[150px]"
                            {...field}
                            />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                    <Button type="submit" size="lg" disabled={form.formState.isSubmitting}>
                        {form.formState.isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                </form>
                </Form>
            </div>
        </div>
      </div>
    </div>
  );
}

import Image from 'next/image';
import Link from 'next/link';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Code, ServerCog, TrendingUp, Quote, ArrowRight } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const services = [
  {
    icon: <Code className="h-10 w-10 text-primary" />,
    title: 'Web Development',
    description: 'We build fast, responsive, and secure websites tailored to your business needs, from stunning portfolios to complex e-commerce platforms.',
  },
  {
    icon: <TrendingUp className="h-10 w-10 text-primary" />,
    title: 'SEO Optimization',
    description: 'Boost your online visibility and rank higher on search engines with our proven SEO strategies, driving organic traffic to your site.',
  },
  {
    icon: <ServerCog className="h-10 w-10 text-primary" />,
    title: 'Website Maintenance',
    description: 'Keep your website running smoothly with our reliable maintenance services, including updates, security checks, and performance tuning.',
  },
];

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    company: 'CEO, Tech Innovators',
    quote: "BickBuilt transformed our online presence. Their attention to detail and commitment to quality is unparalleled. We saw a 200% increase in engagement.",
    avatar: PlaceHolderImages.find((img) => img.id === 'testimonial-1')?.imageUrl || '',
  },
  {
    id: 2,
    name: 'Michael Chen',
    company: 'Founder, Creative Co.',
    quote: "Working with BickBuilt was a dream. They are not just developers; they are partners who genuinely care about your success. Highly recommended!",
    avatar: PlaceHolderImages.find((img) => img.id === 'testimonial-2')?.imageUrl || '',
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    company: 'Marketing Director, StyleHub',
    quote: "The team at BickBuilt is incredibly talented. They delivered a beautiful, high-performing website on time and on budget. We couldn't be happier.",
    avatar: PlaceHolderImages.find((img) => img.id === 'testimonial-3')?.imageUrl || '',
  },
  {
    id: 4,
    name: 'Emily Rodriguez',
    company: 'Marketing Director, StyleHub',
    quote: "The team at BickBuilt is incredibly talented. They delivered a beautiful, high-performing website on time and on budget. We couldn't be happier.",
    avatar: PlaceHolderImages.find((img) => img.id === 'testimonial-3')?.imageUrl || '',
  },
];

const heroImage = PlaceHolderImages.find((img) => img.id === 'hero');

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="relative w-full py-20 md:py-32 lg:py-40 bg-card">
        <Image
          src='/fb-cover.webp'
          alt='Hero image of glowing orange nodes interconnected and a green plant growing within the network'
          fill
          className="object-cover opacity-80"
          priority
          data-ai-hint='interconnected orange nodes with small green plant growing'
        />
        <div className="absolute inset-0" />
        <div className="relative grid z-10 mx-auto grid-cols-7 px-4 md:px-6 text-center">
          <div className="max-w-3xl col-span-5 mx-auto">
            <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.foreground),theme(colors.foreground),theme(colors.foreground),theme(colors.foreground),theme(colors.orange.500),theme(colors.foreground),theme(colors.foreground),theme(colors.foreground))] bg-[length:200%_auto] animate-gradient">
              Building the Digital Future, Together.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              BickBuilt is a premier web development agency dedicated to crafting exceptional digital experiences. We combine cutting-edge technology with modern design to help your business thrive online.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" className="relative bg-white/0 border-2 border-primary/10 md:text-lg text-primary overflow-hidden transition-all duration-600 hover:border-primary/10 hover:shadow-xl hover:scale-110 group">
                <Link href="/services" className="flex items-center relative z-10">
                  Explore Our Services
                  <ArrowRight className="ml-1 h-5 w-5" />
                </Link>
                <span className="absolute inset-0 bg-primary/10 scale-0 group-hover:scale-150 transition-transform duration-1000 ease-out"></span>
              </Button>
              <Button variant="outline" className="relative bg-white/0 border-2 border-primary/10 md:text-lg text-primary overflow-hidden transition-all duration-600 hover:border-primary/10 hover:shadow-xl hover:scale-110 group">
                <Link href="/portfolio" className="flex items-center relative z-10">
                  View Our Work
                  <ArrowRight className="ml-1 h-5 w-5" />
                </Link>
                <span className="absolute inset-0 bg-primary/10 scale-0 group-hover:scale-150 transition-transform duration-1000 ease-out"></span>
              </Button>
            </div>
          </div>
          <div className="col-span-2" />
        </div>
      </section>

      <section id="services" className="w-full py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl">Our Expertise</h2>
            <p className="mt-4 text-muted-foreground md:text-lg">
              We offer a comprehensive suite of services to build and grow your online presence.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {services.map((service) => (
              <Card key={service.title} className="flex flex-col items-center text-center p-8 transition-transform transform hover:-translate-y-2">
                <CardHeader>{service.icon}</CardHeader>
                <CardContent>
                  <h3 className="text-xl font-bold font-headline">{service.title}</h3>
                  <p className="mt-2 text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="mission" className="w-full py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl">Our Mission & Values</h2>
              <p className="mt-4 text-muted-foreground md:text-lg">
                Our mission is to empower businesses by creating powerful, elegant, and effective web solutions. We are driven by a passion for innovation, a commitment to quality, and a desire to build lasting partnerships with our clients. Your success is our success.
              </p>
              <ul className="mt-6 space-y-2 text-muted-foreground">
                <li className="flex items-center"><ArrowRight className="h-4 w-4 mr-2 text-primary"/> Client-Centric Approach</li>
                <li className="flex items-center"><ArrowRight className="h-4 w-4 mr-2 text-primary"/> Uncompromising Quality</li>
                <li className="flex items-center"><ArrowRight className="h-4 w-4 mr-2 text-primary"/> Innovation and Technology</li>
              </ul>
            </div>
            {heroImage && (
              <div className="relative h-64 md:h-96 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={heroImage.imageUrl}
                  alt={heroImage.description}
                  fill
                  style={{ objectFit: 'cover' }}
                  data-ai-hint={heroImage.imageHint}
                />
              </div>
            )}
          </div>
        </div>
      </section>

      <section id="testimonials" className="w-full py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl">What Our Clients Say</h2>
            <p className="mt-4 text-muted-foreground md:text-lg">
              We're proud to have partnered with amazing businesses. Here's what they think of our work.
            </p>
          </div>
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full max-w-4xl mx-auto mt-12"
          >
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1 h-full">
                    <Card className="h-full flex flex-col justify-between p-6">
                      <div>
                        <Quote className="h-8 w-8 text-primary/50" />
                        <p className="mt-4 text-muted-foreground">{testimonial.quote}</p>
                      </div>
                      <div className="mt-6 flex items-center">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          width={48}
                          height={48}
                          className="rounded-full"
                          data-ai-hint="profile person"
                        />
                        <div className="ml-4">
                          <p className="font-semibold text-foreground">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                        </div>
                      </div>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      <section className="w-full py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4 md:px-6 text-center">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl">Ready to build something amazing?</h2>
                <p className="mt-4 text-muted-foreground md:text-lg">
                    Let's talk about your project and how we can help you achieve your goals.
                </p>
                <div className="mt-8">
                    <Button variant="outline" className="relative bg-white/0 border-2 border-primary/10 md:text-lg text-primary overflow-hidden transition-all duration-600 hover:border-primary/10 hover:shadow-xl hover:scale-110 group">
                        <Link href="/services" className="flex items-center relative z-10">Get in Touch <ArrowRight className="ml-2 h-5 w-5" /></Link>
                        <span className="absolute inset-0 bg-primary/10 scale-0 group-hover:scale-150 transition-transform duration-1000 ease-out"></span>
                    </Button>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
}

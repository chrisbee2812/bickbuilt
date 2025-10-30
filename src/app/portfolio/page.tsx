import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio | BickBuilt Hub',
  description: 'View a selection of our best work and successful projects.',
};

const projects = [
  {
    id: 1,
    title: 'E-commerce Platform "ShopSphere"',
    description: 'A full-featured e-commerce platform with a custom CMS, payment gateway integration, and advanced product filtering. Built for scalability and a seamless user experience.',
    technologies: ['Next.js', 'Stripe', 'Firebase', 'Algolia'],
    image: PlaceHolderImages.find((img) => img.id === 'portfolio-1'),
  },
  {
    id: 2,
    title: 'SaaS Dashboard "Analytica"',
    description: 'A data visualization dashboard for a SaaS company, providing users with real-time analytics and reporting tools. Features a highly interactive and responsive interface.',
    technologies: ['React', 'D3.js', 'Node.js', 'PostgreSQL'],
    image: PlaceHolderImages.find((img) => img.id === 'portfolio-2'),
  },
  {
    id: 3,
    title: 'Corporate Website "Innovate Inc."',
    description: 'A modern and professional corporate website designed to reflect the company\'s brand and values. Optimized for lead generation and performance.',
    technologies: ['Gatsby', 'Contentful', 'GraphQL', 'Netlify'],
    image: PlaceHolderImages.find((img) => img.id === 'portfolio-3'),
  },
  {
    id: 4,
    title: 'Mobile App Landing Page "ConnectApp"',
    description: 'A sleek and persuasive landing page to drive downloads for a new mobile application. Features engaging animations and a clear call-to-action.',
    technologies: ['HTML5', 'Tailwind CSS', 'JavaScript', 'Framer Motion'],
    image: PlaceHolderImages.find((img) => img.id === 'portfolio-4'),
  },
];

export default function PortfolioPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl">Our Work</h1>
          <p className="mt-4 text-muted-foreground md:text-lg">
            We take pride in our work. Here's a selection of projects that showcase our skills and dedication to quality.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mt-16">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden group transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              {project.image && (
                <CardHeader className="p-0">
                  <div className="aspect-video relative overflow-hidden">
                    <Image
                      src={project.image.imageUrl}
                      alt={project.image.description}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      data-ai-hint={project.image.imageHint}
                    />
                  </div>
                </CardHeader>
              )}
              <CardContent className="p-6">
                <CardTitle className="font-headline text-2xl">{project.title}</CardTitle>
                <p className="mt-3 text-muted-foreground">{project.description}</p>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">{tech}</Badge>
                  ))}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

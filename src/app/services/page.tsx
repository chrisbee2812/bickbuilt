import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, TrendingUp, ServerCog, Check } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services | BickBuilt Hub',
  description: 'Explore the web development, SEO, and maintenance services offered by BickBuilt.',
};

const services = [
  {
    icon: <Code className="h-12 w-12 text-primary" />,
    title: 'Custom Web Development',
    description: 'We specialize in building bespoke web applications from the ground up. Our process ensures your website is scalable, secure, and perfectly aligned with your business objectives. From corporate sites to complex web platforms, we deliver excellence.',
    benefits: [
      'Tailored to your exact specifications',
      'Scalable architecture for future growth',
      'Optimized for performance and speed',
      'Mobile-first, responsive design',
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'Node.js', 'Firebase'],
  },
  {
    icon: <TrendingUp className="h-12 w-12 text-primary" />,
    title: 'SEO & Digital Strategy',
    description: 'A great website needs to be seen. Our SEO services are designed to increase your visibility on search engines, attract qualified leads, and grow your business. We focus on sustainable, long-term results.',
    benefits: [
      'Improved search engine rankings',
      'Increased organic traffic',
      'In-depth keyword research and analysis',
      'Comprehensive on-page and off-page SEO',
    ],
    technologies: ['Google Analytics', 'SEMrush', 'Ahrefs', 'Content Strategy'],
  },
  {
    icon: <ServerCog className="h-12 w-12 text-primary" />,
    title: 'Maintenance & Support',
    description: 'Keep your digital assets in top condition with our ongoing maintenance and support plans. We handle everything from security updates and backups to performance monitoring, so you can focus on your business.',
    benefits: [
      'Proactive security monitoring',
      'Regular backups and updates',
      '24/7 performance monitoring',
      'Dedicated technical support',
    ],
    technologies: ['Uptime Monitoring', 'CI/CD', 'Automated Backups', 'Security Scanning'],
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl">Our Services</h1>
          <p className="mt-4 text-muted-foreground md:text-lg">
            We deliver comprehensive web solutions designed for performance, growth, and long-term success.
          </p>
        </div>

        <div className="mt-16 space-y-12">
          {services.map((service, index) => (
            <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="grid md:grid-cols-2">
                <div className="p-8 md:p-12">
                  <div className="flex items-center gap-4">
                    {service.icon}
                    <CardTitle className="text-3xl font-headline">{service.title}</CardTitle>
                  </div>
                  <CardContent className="pt-6">
                    <p className="text-muted-foreground">{service.description}</p>
                    <h4 className="font-semibold mt-6 mb-2">Key Benefits:</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start">
                          <Check className="h-5 w-5 mr-2 mt-0.5 text-primary flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </div>
                 <div className="bg-secondary/50 p-8 md:p-12 flex flex-col justify-center">
                    <h4 className="font-semibold text-lg">Technologies We Use</h4>
                    <p className="text-muted-foreground text-sm mt-1 mb-4">A selection of tools and frameworks we leverage.</p>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, i) => (
                         <div key={i} className="py-1 px-3 bg-primary/10 text-primary rounded-full text-sm font-medium">
                            {tech}
                        </div>
                      ))}
                    </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

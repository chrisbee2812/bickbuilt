import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { FileQuestion } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-24 md:py-32">
      <div className="flex flex-col items-center text-center">
        <FileQuestion className="w-24 h-24 text-primary/50 mb-6" />
        <h1 className="text-4xl font-bold font-headline tracking-tighter sm:text-5xl">404 - Page Not Found</h1>
        <p className="max-w-[600px] text-muted-foreground md:text-xl mt-4">
          Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
        </p>
        <div className="mt-8">
          <Button asChild size="lg">
            <Link href="/">Return to Homepage</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

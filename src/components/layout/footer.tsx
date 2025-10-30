import Image from 'next/image';
import { Code } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t">
      <div className="container mx-auto py-6 px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2">
            <Image
              src="/bb-orangeonwhite-nobg.png"
              alt="BickBuilt logo"
              width={700}
              height={300}
              data-ai-hint="BickBuilt logo"
              className="w-36"
            />
          </div>
          <p className="text-sm text-muted-foreground mt-4 md:mt-0">
            © {currentYear} BickBuilt. All rights reserved.
          </p>
          <nav className="flex gap-4 mt-4 md:mt-0">
             <Link href="/services" className="text-sm text-muted-foreground hover:text-primary">Services</Link>
             <Link href="/portfolio" className="text-sm text-muted-foreground hover:text-primary">Portfolio</Link>
             <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">Contact</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}

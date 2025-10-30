"use client";

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Code, Menu, Phone, Mail } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const NavLink = ({ href, label }: { href: string; label: string }) => {
    const isActive = pathname === href;
    return (
      <Link
        href={href}
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary",
          isActive ? "text-primary cursor-default" : "text-muted-foreground"
        )}
        onClick={() => setMobileMenuOpen(false)}
      >
        <div>
          <Button 
            className={cn(
              "relative bg-white/0 border-2 border-primary/10 md:text-xl text-primary overflow-hidden transition-all duration-600 hover:border-primary/10 hover:shadow-xl hover:scale-110 group",
              isActive ? "text-accent-foreground" : "text-primary"
            )}
            variant="outline"
            disabled={isActive}
          >
            <span className="relative z-10">{label}</span>
            <span className="absolute inset-0 bg-primary/10 scale-0 group-hover:scale-150 transition-transform duration-1000 ease-out"></span>
          </Button>
        </div>
      </Link>
    );
  };
  
  return (
    <header className="sticky flex flex-col items-center justify-evenly h-24 top-0 z-50 w-full border-b-2 border-primary/10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="hidden w-full border-b-2 border-primary/10 text-muted-foreground h-8 md:flex">
        <div className="flex justify-end gap-8 w-3/5 m-auto">
          <div className="flex items-center gap-2">
            <Phone className="h-5 w-5 text-primary" />
            07515 718874
          </div>
          <div className="flex items-center gap-2">
            <Mail className="h-5 w-5 text-primary" />
            info@bickbuilt.com
          </div>
        </div>
      </div>
      <div className="container flex h-20 items-center">
        <div className="mr-4 flex items-center">
          <Link href="/" className={cn(
            "flex items-center space-x-2",
          )}
            >
            <Image
              src="/bb-orangeonwhite-textright-nobg.png"
              alt="BickBuilt logo"
              width={700}
              height={300}
              data-ai-hint="BickBuilt logo"
              className="w-36"
            />
          </Link>
        </div>
        <nav className="hidden items-center space-x-4 text-sm font-medium md:flex md:ml-28">
          {navLinks.map((link) => (
            <NavLink key={link.href} {...link} />
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Open Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <div className="p-4">
                  <Link href="/" className="flex items-center space-x-2 mb-8">
                     <Code className="h-6 w-6 text-primary" />
                     <span className="font-bold">BickBuilt</span>
                  </Link>
                  <nav className="flex flex-col space-y-4">
                    {navLinks.map((link) => (
                      <NavLink key={link.href} {...link} />
                    ))}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
          <Button 
            className="relative bg-white/0 border-2 border-primary/10 md:text-xl text-primary overflow-hidden  hover:border-primary/10 hover:scale-110 hover:shadow-xl group"
            variant="outline"
          >
            <span className="relative z-10">Request A Quote</span>
            <span className="absolute inset-0 bg-primary/10 scale-0 group-hover:scale-150 transition-transform duration-1000 ease-out"></span>
          </Button>
        </div>
      </div>
    </header>
  );
}

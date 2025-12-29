'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { Button } from '../ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { ShineBorder } from '../magicui/shine-border';
import { menuItems } from '../../lib/constants';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed max-w-[100vw] top-2 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-md shadow-md md:shadow-none'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:hidden">
          <Link 
            href="/" 
            className="flex items-center gap-2 hover:opacity-80 transition-opacity outline-none rounded-lg"
            aria-label="Home"
          >
            <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center">
              <span className="text-xl">👨</span>
            </div>
            <span className="text-xl font-semibold">Hicham</span>
          </Link>

          <Dialog>
            <DialogTrigger asChild>
              <Button variant="ghost" size="icon" className="h-10 w-10">
                <Menu className="h-5 w-5" />
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] bg-background/95 backdrop-blur-lg">
              <nav className="grid gap-4" role="navigation" aria-label="Mobile navigation">
                {menuItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="flex items-start gap-2 p-3 rounded-lg hover:bg-muted transition-all duration-200 outline-none active:scale-95"
                    aria-label={`${item.title}: ${item.description}`}
                  >
                    <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                      <span className="text-2xl">{item.icon}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-lg font-semibold">
                        {item.title}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {item.description}
                      </span>
                    </div>
                  </Link>
                ))}
              </nav>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <ShineBorder
        className="mx-auto h-12 mt-4 hidden md:block"
        color={'#ff00e5'}
        borderRadius={100}
      >
        <div className="hidden md:flex items-center gap-0 px-2 pointer-events-auto">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="flex items-center gap-2 p-2 rounded-lg hover:bg-muted hover:scale-105 transition-all duration-200 outline-none"
              aria-label={`Navigate to ${item.title}`}
            >
              <div className="w-6 h-6 rounded-lg bg-muted flex items-center justify-center">
                <span className="text-sm">{item.icon}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm">{item.title}</span>
              </div>
            </Link>
          ))}
        </div>
      </ShineBorder>
    </motion.header>
  );
};

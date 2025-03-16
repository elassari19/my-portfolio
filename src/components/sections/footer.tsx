'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { menuItems } from '../../lib/constants';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/50 py-12 mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="md:col-span-2">
            <Link href="/" className="text-2xl font-bold mb-4 inline-block">
              <span className="text-primary">Hicham</span>
              <span className="text-primary/80">El Assari</span>
            </Link>
            <p className="text-foreground/80 mb-6 max-w-md">
              Full Stack Engineer specializing in building exceptional digital
              experiences with modern web technologies.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" asChild>
                <a
                  href="https://github.com/elassari19"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a
                  href="https://www.linkedin.com/in/hicham-el-assari-1257ba227/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a
                  href="https://www.upwork.com/freelancers/~018428f7dc02885658"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Upwork</span>
                  <span className="sr-only">Twitter</span>
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="mailto:elassari19@gmail.com">
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </a>
              </Button>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {menuItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-foreground/80 hover:text-primary transition-colors"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2 lg:px-6">
            <h3 className="font-semibold mb-4">
              Feel free to reach out to me for any inquiries or collaboration
              opportunities.
            </h3>
            <ul className="space-y-2">
              {/* <li className="text-foreground/80">Tangier, Morocco</li> */}
              <li className="text-foreground/80">elassari19@gmail.com</li>
              <li className="text-foreground/80">+212 615-638-249</li>
            </ul>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="border-t border-border mt-12 pt-8 text-center text-foreground/70"
        >
          <p>© {currentYear} Hicham El Assari. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}

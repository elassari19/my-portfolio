import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Hicham El Assari',
  description: 'Hicham El Assari - Software Engineer Portfolio',
};

import { Header } from '@/components/shared/Header';
import { Footer } from '../components/sections/footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

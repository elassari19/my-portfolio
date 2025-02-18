'use client';

import Link from 'next/link';
import { User, Folder, Library, MessageCircle, Twitter } from 'lucide-react';
import Image from 'next/image';

const menuItems = [
  {
    title: 'ABOUT ME',
    icon: <User className="w-8 h-8" />,
    href: '/about',
  },
  {
    title: 'PROJECTS',
    icon: <Folder className="w-8 h-8" />,
    href: '/projects',
  },
  {
    title: 'LIBRARY',
    icon: <Library className="w-8 h-8" />,
    href: '/library',
  },
  {
    title: 'DROPPABLE',
    icon: <Image src="/icons/droppable.svg" width={32} height={32} alt="Droppable" />,
    href: '/droppable',
  },
  {
    title: 'CONTACT',
    icon: <MessageCircle className="w-8 h-8" />,
    href: '/contact',
  },
  {
    title: 'TWITTER/X',
    icon: <Twitter className="w-8 h-8" />,
    href: 'https://twitter.com/yourusername',
  },
];

export const MenuGrid = () => {
  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {menuItems.map((item) => (
        <Link
          key={item.title}
          href={item.href}
          className="flex flex-col items-center justify-center p-6 rounded-3xl bg-zinc-800/50 hover:bg-zinc-800/70 transition-colors"
        >
          <div className="w-16 h-16 rounded-2xl bg-zinc-700/50 flex items-center justify-center mb-4">
            {item.icon}
          </div>
          <span className="text-sm font-medium text-white">{item.title}</span>
        </Link>
      ))}
    </div>
  );
};
import Image from 'next/image';
import HeroSection from '../components/sections/HeroSection';

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <HeroSection />
      <div className="bg-red-500 h-[50vh] w-full">technology section</div>
    </div>
  );
}

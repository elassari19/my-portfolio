import EducationSection from '../components/sections/EducationSection';
import ExperienceSection from '../components/sections/ExperienceSection';
import HeroSection from '../components/sections/HeroSection';
import ProjectsSection from '../components/sections/projects-section';
import TechStack from '../components/sections/tech-stack';

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)] mt-28 p-4 md:p-20 grid gap-32">
      <HeroSection />
      <TechStack />
      <ProjectsSection />
      <ExperienceSection />
      <EducationSection />
    </div>
  );
}

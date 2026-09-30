import HeroSection from '../components/Hero/HeroSection';
import ExperienceSection from '../components/Experience/ExperienceSection';
import ProjectsSection from '../components/ProjectsSection';
import HomeAboutSection from '../components/About/HomeAboutSection';
import TechStack from '../components/TechStack/TechStack';
import CTASection from '../components/CTA/CTASection';

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <ExperienceSection />
      <ProjectsSection />
      <TechStack />
      <HomeAboutSection />
      <CTASection />
    </div>
  );
}

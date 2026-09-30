import ProjectsSection from '../components/ProjectsSection';
import TechStack from '../components/TechStack/TechStack';
import CTASection from '../components/CTA/CTASection';

export default function Projects() {
  return (
    <div className="flex flex-col">
      <ProjectsSection />
      <TechStack />
      <CTASection />
    </div>
  );
}

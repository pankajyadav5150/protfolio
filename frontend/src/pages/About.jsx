import AboutHero from '../components/About/AboutHero';
import ExperienceSection from '../components/Experience/ExperienceSection';
import EducationSection from '../components/Education/EducationSection';
import TechStack from '../components/TechStack/TechStack';
import CTASection from '../components/CTA/CTASection';

export default function About() {
    return (
        <div className="flex flex-col">
            <AboutHero />
            <ExperienceSection />
            <EducationSection />
            <TechStack />
            <CTASection />
        </div>
    );
}

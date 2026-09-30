import React from 'react';
import SectionHeader from "./SectionHeader";
import ProjectsGrid from "./ProjectsGrid";

export default function ProjectsSection() {
    return (
        <section className="px-4 md:px-10 py-4 md:py-6 bg-transparent relative">
            <div className="
        px-4 sm:px-8 py-12 md:py-20
        bg-gray-100/50 backdrop-blur-3xl
        rounded-[2rem] border border-white/40
        shadow-xl shadow-gray-200/50
        max-w-7xl mx-auto
        relative overflow-hidden
      ">

                {/* subtle gradient overlay */}
                <div className="absolute inset-0
                        bg-gradient-to-br
                        from-white/10 via-transparent to-white/10
                        pointer-events-none" />

                <SectionHeader
                    title="Featured Projects"
                    subtitle="AI, real-time and full-stack products I've designed and built end to end."
                />

                <ProjectsGrid />
            </div>
        </section>
    );
}

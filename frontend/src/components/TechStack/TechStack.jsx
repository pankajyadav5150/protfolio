import SectionHeader from '../SectionHeader';
import Icon from '../common/Icon';
import TagList from '../common/TagList';
import { techGroups } from '../../data/portfolio';

export default function TechStack() {
    return (
        <section className="px-4 md:px-10 py-4 md:py-6 bg-transparent">
            <div className="
        px-4 sm:px-8 md:px-12 py-12 md:py-16
        bg-gray-100/50 backdrop-blur-3xl
        rounded-[2rem] md:rounded-[3rem]
        border border-white/40
        shadow-xl shadow-gray-200/50
        max-w-7xl mx-auto
      ">
                <SectionHeader
                    title="Tech Stack"
                    subtitle="The languages, frameworks and cloud tools I use to ship production systems."
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {techGroups.map((group) => (
                        <div
                            key={group.name}
                            className="bg-white/80 rounded-2xl border border-gray-200 p-5 md:p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <span className={`w-10 h-10 rounded-xl text-white flex items-center justify-center shrink-0 ${group.color}`}>
                                    <Icon name={group.icon} />
                                </span>
                                <h3 className="font-bold text-lg text-gray-900">{group.name}</h3>
                            </div>
                            <TagList tags={group.items} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

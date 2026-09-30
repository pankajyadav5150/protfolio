import SectionHeader from '../SectionHeader';
import Icon from '../common/Icon';
import { education, contacts, stats } from '../../data/portfolio';

export default function EducationSection() {
    const leetcode = contacts.find((c) => c.icon === 'leetcode');
    const solved = stats.find((s) => s.label === 'LeetCode solved').value;

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
                <SectionHeader title="Education & Achievements" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-5xl mx-auto">
                    <article className="bg-white/80 rounded-2xl border border-gray-200 p-5 md:p-8 shadow-sm transition-shadow duration-300 hover:shadow-lg">
                        <span className="w-12 h-12 rounded-xl bg-sky-600 text-white flex items-center justify-center mb-5">
                            <Icon name="cap" className="w-6 h-6" />
                        </span>
                        <p className="text-sm font-semibold text-gray-500 mb-1">{education.period}</p>
                        <h3 className="text-lg md:text-xl font-bold text-gray-900">{education.degree}</h3>
                        <p className="text-gray-600 font-medium mt-1">{education.school}</p>
                        <p className="mt-4 inline-flex text-sm font-semibold bg-gray-100 border border-gray-200 px-3 py-1 rounded-full">
                            {education.score}
                        </p>
                    </article>

                    <article className="bg-white/80 rounded-2xl border border-gray-200 p-5 md:p-8 shadow-sm transition-shadow duration-300 hover:shadow-lg">
                        <span className="w-12 h-12 rounded-xl bg-amber-500 text-white flex items-center justify-center mb-5">
                            <Icon name="leetcode" className="w-6 h-6" />
                        </span>
                        <p className="text-sm font-semibold text-gray-500 mb-1">Problem solving</p>
                        <h3 className="text-lg md:text-xl font-bold text-gray-900">{solved} problems solved on LeetCode</h3>
                        <p className="text-gray-600 font-medium mt-1">Consistent practice in data structures and algorithms.</p>
                        <a
                            href={leetcode.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-gray-900 underline underline-offset-4 hover:text-gray-600"
                        >
                            View LeetCode profile
                            <Icon name="external" className="w-4 h-4" />
                        </a>
                    </article>
                </div>
            </div>
        </section>
    );
}

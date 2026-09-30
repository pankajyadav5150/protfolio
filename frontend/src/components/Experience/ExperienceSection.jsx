import SectionHeader from '../SectionHeader';
import Icon from '../common/Icon';
import TagList from '../common/TagList';
import CheckList from '../common/CheckList';
import { experience } from '../../data/portfolio';

export default function ExperienceSection() {
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
                <SectionHeader title="Experience" subtitle="Where I've worked and what I've built." />

                <ol className="max-w-4xl mx-auto">
                    {experience.map((job, index) => {
                        const isLast = index === experience.length - 1;

                        return (
                            <li
                                key={job.company}
                                className={`relative pl-11 sm:pl-14 md:pl-20 ${isLast ? '' : 'pb-6 md:pb-10'}`}
                            >
                                {/* Timeline line (dot ke neeche se agle dot tak) */}
                                {!isLast && (
                                    <span
                                        aria-hidden="true"
                                        className="absolute left-[15px] sm:left-[19px] md:left-[23px] top-8 sm:top-10 md:top-12 bottom-0 w-0.5 bg-gray-300"
                                    />
                                )}

                                <span
                                    className={`absolute left-0 top-0 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12
                                    rounded-full flex items-center justify-center text-white ring-4 ring-white
                                    ${job.current ? 'bg-indigo-600' : 'bg-gray-900'}`}
                                >
                                    <Icon name="briefcase" className="w-4 h-4 sm:w-5 sm:h-5" />
                                </span>

                                <article className="bg-white/80 rounded-2xl border border-gray-200 p-4 sm:p-6 md:p-8 shadow-sm transition-shadow duration-300 hover:shadow-lg">
                                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-5">
                                        <div>
                                            <h3 className="text-lg md:text-xl font-bold text-gray-900">{job.role}</h3>
                                            <p className="text-gray-500 font-medium">
                                                {job.company} · {job.location}
                                            </p>
                                        </div>
                                        <div className="flex flex-wrap items-center gap-2 shrink-0">
                                            {job.current && (
                                                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded-full">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                                                    Current
                                                </span>
                                            )}
                                            <span className="text-xs sm:text-sm font-semibold text-gray-700 bg-gray-100 border border-gray-200 px-3 py-1 rounded-full whitespace-nowrap">
                                                {job.period}
                                            </span>
                                        </div>
                                    </div>

                                    <CheckList items={job.points} />
                                    <TagList tags={job.tags} className="mt-5" />
                                </article>
                            </li>
                        );
                    })}
                </ol>
            </div>
        </section>
    );
}

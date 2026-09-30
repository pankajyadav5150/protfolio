import Icon from './common/Icon';
import TagList from './common/TagList';
import CheckList from './common/CheckList';
import { projects } from '../data/portfolio';

function ProjectCover({ project }) {
    if (project.image) {
        return (
            <img
                src={project.image}
                alt={`${project.name} screenshot`}
                loading="lazy"
                className="aspect-video w-full object-cover rounded-2xl border border-gray-200"
            />
        );
    }

    // Screenshot add hone tak colored cover
    return (
        <div className={`aspect-video w-full rounded-2xl flex flex-col items-center justify-center text-center px-6 text-white ${project.cover}`}>
            <span className="text-3xl md:text-4xl font-extrabold tracking-tight">{project.name}</span>
            <span className="mt-2 text-sm md:text-base font-medium text-white/80">{project.tagline}</span>
        </div>
    );
}

function ProjectLinks({ project }) {
    return (
        <div className="flex flex-wrap gap-3">
            {project.live ? (
                <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gray-900 text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                    <Icon name="external" className="w-4 h-4" />
                    Live Demo
                </a>
            ) : (
                <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gray-100 text-gray-500 border border-dashed border-gray-300 font-semibold">
                    Live demo coming soon
                </span>
            )}
            {project.github && (
                <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-gray-900 border border-gray-300 font-semibold transition-all duration-300 hover:scale-105"
                >
                    <Icon name="github" className="w-4 h-4" />
                    GitHub
                </a>
            )}
        </div>
    );
}

function LiveBadge() {
    return (
        <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
            Live
        </span>
    );
}

export default function ProjectsGrid() {
    const featured = projects.find((project) => project.featured);
    const others = projects.filter((project) => !project.featured);

    return (
        <div className="relative z-10 flex flex-col gap-6 md:gap-8">
            {featured && (
                <article className="bg-white/80 rounded-2xl border border-gray-200 p-4 sm:p-6 md:p-8 shadow-sm grid lg:grid-cols-2 gap-6 md:gap-10 items-center">
                    <ProjectCover project={featured} />
                    <div className="flex flex-col gap-5">
                        <div>
                            <div className="flex flex-wrap items-center gap-2 mb-2">
                                <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">Featured</span>
                                {featured.live && <LiveBadge />}
                            </div>
                            <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight text-gray-900">{featured.name}</h3>
                            <p className="text-gray-500 font-medium">{featured.tagline}</p>
                        </div>
                        <CheckList items={featured.points} />
                        <TagList tags={featured.tags} />
                        <ProjectLinks project={featured} />
                    </div>
                </article>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {others.map((project) => (
                    <article
                        key={project.name}
                        className="bg-white/80 rounded-2xl border border-gray-200 p-4 sm:p-6 shadow-sm flex flex-col gap-5 transition-shadow duration-300 hover:shadow-lg"
                    >
                        <ProjectCover project={project} />
                        <div>
                            <div className="flex flex-wrap items-center gap-2 mb-1">
                                <h3 className="text-xl font-bold text-gray-900">{project.name}</h3>
                                {project.live && <LiveBadge />}
                            </div>
                            <p className="text-gray-500 font-medium text-sm">{project.tagline}</p>
                        </div>
                        <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{project.description}</p>
                        <TagList tags={project.tags} />
                        <div className="mt-auto">
                            <ProjectLinks project={project} />
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
}

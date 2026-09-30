import { Link } from 'react-router-dom';
import Icon from '../common/Icon';
import { profile, stats } from '../../data/portfolio';

const buttonBase =
    'inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105';

export default function HeroSection() {
    return (
        <section className="px-4 md:px-10 pb-4 md:pb-6 bg-transparent relative">
            <div className="text-center px-5 sm:px-8 md:px-10 py-14 md:py-20
                        bg-gray-300/40 backdrop-blur-2xl
                        rounded-xl border border-gray-300/40
                        shadow-2xl shadow-gray-900/5
                        max-w-7xl mx-auto">

                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl
                         font-bold tracking-tight text-black leading-[1.1]">
                    Hi, I'm <span className="text-gray-600">{profile.name}</span>
                </h1>

                <p className="mt-4 text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-gray-800">
                    Full Stack <span className="text-indigo-600">AI</span> Developer
                </p>

                <p className="mt-5 text-base md:text-xl text-black/70 max-w-3xl mx-auto leading-relaxed">
                    {profile.summary}
                </p>

                <dl className="mt-10 grid grid-cols-3 gap-2 sm:gap-3 max-w-xl mx-auto">
                    {stats.map((stat) => (
                        <div
                            key={stat.label}
                            className="flex flex-col-reverse bg-white/70 rounded-2xl border border-gray-200 py-3 sm:py-4 px-2"
                        >
                            <dt className="text-[11px] sm:text-sm text-gray-500 font-medium">{stat.label}</dt>
                            <dd className="text-xl sm:text-3xl font-extrabold text-gray-900">{stat.value}</dd>
                        </div>
                    ))}
                </dl>

                <div className="mt-10 flex flex-col sm:flex-row sm:flex-wrap justify-center gap-3 md:gap-4">
                    <Link to="/projects" className={`${buttonBase} bg-gray-900 text-white hover:shadow-lg`}>
                        View Projects
                        <Icon name="arrowRight" className="w-4 h-4" strokeWidth={2.5} />
                    </Link>
                    <Link to="/resume" className={`${buttonBase} bg-white/80 text-gray-900 border border-gray-300 hover:bg-white`}>
                        <Icon name="download" className="w-4 h-4" />
                        Resume
                    </Link>
                    <Link to="/connect" className={`${buttonBase} bg-white/80 text-gray-900 border border-gray-300 hover:bg-white`}>
                        Let's Connect
                    </Link>
                </div>
            </div>
        </section>
    );
}

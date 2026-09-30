import { useNavigate } from 'react-router-dom';
import Avatar from '../common/Avatar';
import Icon from '../common/Icon';
import { profile } from '../../data/portfolio';

export default function AboutHero() {
    const navigate = useNavigate();

    const whatIDo = [
        "Scalable backends with Node.js, NestJS and microservices",
        "Real-time apps with WebSocket, Socket.IO, Redis and RabbitMQ",
        "AI features with LangChain, RAG, agents and Gemini",
        "Cloud-native deployments on AWS with Docker"
    ];

    return (
        <section className="px-4 md:px-10 py-4 md:py-6 bg-transparent">
            <div className="
        max-w-7xl mx-auto
        bg-gray-100/50 backdrop-blur-3xl
        rounded-[2rem] md:rounded-[2.5rem] border border-white/40
        shadow-2xl shadow-gray-200/50
        overflow-hidden
      ">
                {/* Top Content: Image and Bio */}
                <div className="p-6 sm:p-10 md:p-16 lg:p-20">
                    <div className="flex flex-col md:flex-row items-center gap-10 lg:gap-20">
                        {/* Profile Image */}
                        <div className="relative group shrink-0">
                            <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-white shadow-2xl transition-transform duration-700 group-hover:scale-105">
                                <Avatar textSize="text-6xl md:text-7xl" />
                            </div>
                            <div className="absolute -inset-2 bg-gradient-to-tr from-gray-200/50 to-transparent rounded-full blur-2xl -z-10 animate-pulse"></div>
                        </div>

                        {/* Bio Text */}
                        <div className="flex-1 text-center md:text-left">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight leading-tight">
                                Meet the Developer
                            </h1>
                            <p className="text-gray-500 text-base sm:text-lg md:text-xl font-medium leading-relaxed max-w-2xl">
                                Hello, I'm <span className="text-gray-900 font-bold">{profile.name}</span>, a {profile.title} with
                                1.5+ years of experience building scalable Node.js and NestJS microservices, real-time systems
                                and AI-powered features. Currently at <span className="text-gray-900 font-bold">MicrocosmWorks</span>,
                                I work on media streaming and AI video platforms on AWS.
                            </p>
                        </div>
                    </div>

                    {/* Separator Line */}
                    <div className="my-12 md:my-16 h-px bg-gradient-to-r from-transparent via-gray-300/50 to-transparent"></div>

                    {/* Bottom Grid: Three Columns */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">

                        {/* What I Do */}
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-6 tracking-tight">What I Do</h3>
                            <ul className="space-y-4">
                                {whatIDo.map((item) => (
                                    <li key={item} className="flex items-start gap-3 group">
                                        <div className="mt-1 w-5 h-5 flex items-center justify-center rounded-full bg-gray-900 text-white shrink-0 transition-transform group-hover:scale-110">
                                            <Icon name="check" className="w-3 h-3" strokeWidth={4} />
                                        </div>
                                        <span className="text-gray-600 font-medium leading-tight">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Core Values */}
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-6 tracking-tight">Core Values</h3>
                            <p className="text-gray-500 font-medium leading-relaxed">
                                I believe in clarity, simplicity and reliability.
                                Systems should not just work, they should scale, recover and be easy to reason about.
                                Great software is a blend of precision and intuition.
                            </p>
                        </div>

                        {/* Let's Collaborate */}
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-6 tracking-tight">Let's Collaborate</h3>
                            <p className="text-gray-500 font-medium leading-relaxed mb-8">
                                Have a backend, real-time or AI project in mind?
                                Let's build something valuable together.
                            </p>
                            <button
                                type="button"
                                onClick={() => navigate('/connect')}
                                className="flex items-center gap-3 px-6 py-3.5
                           bg-gray-900 text-white font-bold rounded-2xl
                           shadow-xl shadow-gray-400/20
                           transition-all duration-300
                           hover:scale-105 active:scale-95 group mx-auto md:mx-0"
                            >
                                <span>Let's Connect</span>
                                <Icon name="mail" className="w-5 h-5 transition-transform group-hover:translate-x-1" strokeWidth={2.5} />
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}

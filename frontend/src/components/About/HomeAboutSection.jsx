import { Link } from 'react-router-dom';
import Avatar from '../common/Avatar';
import { profile } from '../../data/portfolio';

export default function HomeAboutSection() {
    return (
        <section className="px-4 md:px-10 py-4 md:py-6 bg-transparent relative">
            <div className="
                px-5 sm:px-8 md:px-12 py-12 md:py-20
                bg-gray-100/50 backdrop-blur-3xl
                rounded-[2rem] md:rounded-[3rem]
                border border-white/40
                shadow-xl shadow-gray-200/50
                max-w-7xl mx-auto
                text-center
            ">
                <div className="flex flex-col items-center">
                    {/* Profile Image */}
                    <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white shadow-lg mb-8 transition-transform duration-500 hover:scale-105">
                        <Avatar textSize="text-4xl md:text-5xl" />
                    </div>

                    {/* Heading */}
                    <h2 className="text-3xl md:text-5xl font-extrabold mb-8 text-gray-900 tracking-tight">
                        About Me
                    </h2>

                    {/* Bio Paragraphs */}
                    <div className="max-w-3xl mx-auto text-gray-500 text-base md:text-lg font-medium leading-relaxed space-y-6 mb-10">
                        <p>
                            I'm <span className="text-gray-900 font-bold">{profile.name}</span>, a {profile.title} from Delhi
                            who loves building backends that scale: microservices, REST APIs, real-time systems and
                            cloud-native workflows on AWS.
                        </p>
                        <p>
                            I've worked on media streaming, payments, real-time bookings and AI chatbots using Node.js,
                            NestJS, Redis, RabbitMQ, LangChain and Gemini. I hold a B.Tech in Computer Science and keep
                            sharpening my problem solving on LeetCode.
                        </p>
                    </div>

                    {/* Know More Link */}
                    <Link
                        to="/about"
                        className="text-gray-900 font-bold text-lg underline decoration-2 underline-offset-8 transition-all hover:text-gray-600 hover:decoration-gray-400"
                    >
                        know more
                    </Link>
                </div>
            </div>
        </section>
    );
}

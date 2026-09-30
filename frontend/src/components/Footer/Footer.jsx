import { Link } from 'react-router-dom';
import Icon from '../common/Icon';
import { profile, navLinks, socials } from '../../data/portfolio';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="px-4 md:px-10 pb-6 md:pb-10 pt-4">
            <div className="
        max-w-7xl mx-auto
        px-6 sm:px-8 md:px-12 py-12 md:py-16
        bg-gray-100/50 backdrop-blur-3xl
        rounded-[2rem] md:rounded-[2.5rem] border border-white/40
        shadow-xl shadow-gray-200/50
      ">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-10 md:gap-12">

                    {/* Brand & Bio */}
                    <div className="sm:col-span-2 md:col-span-6">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center shrink-0">
                                <span className="text-white text-xs font-bold">{profile.initials}</span>
                            </div>
                            <h3 className="text-lg sm:text-xl font-bold text-gray-900 tracking-tight">
                                {profile.name} — {profile.title}
                            </h3>
                        </div>
                        <p className="text-gray-500 text-base leading-relaxed max-w-md font-medium">
                            I build scalable backends, real-time systems and AI-powered products with
                            Node.js, NestJS, AWS and LangChain. Always happy to talk about interesting
                            projects and ideas.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="md:col-span-3">
                        <h4 className="text-lg font-bold text-gray-900 mb-5">Quick Links</h4>
                        <ul className="space-y-3">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        to={link.path}
                                        className="text-gray-500 font-medium hover:text-gray-900 transition-colors duration-300"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Follow Me */}
                    <div className="md:col-span-3">
                        <h4 className="text-lg font-bold text-gray-900 mb-5">Follow Me</h4>
                        <div className="flex flex-wrap gap-3">
                            {socials.map((social) => (
                                <a
                                    key={social.title}
                                    href={social.href}
                                    {...(social.href.startsWith('http') && { target: '_blank', rel: 'noopener noreferrer' })}
                                    className="w-11 h-11 bg-gray-900 text-white rounded-lg flex items-center justify-center
                             transition-all duration-300 hover:scale-110 hover:shadow-lg active:scale-95"
                                    aria-label={social.title}
                                >
                                    <Icon name={social.icon} className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Line */}
                <div className="mt-12 md:mt-16 pt-8 border-t border-gray-200/50 flex flex-col md:flex-row justify-between items-center gap-3 text-center">
                    <p className="text-gray-400 text-sm font-medium">
                        © {currentYear} {profile.name}. All rights reserved.
                    </p>
                    <p className="text-gray-400 text-sm font-medium">
                        Designed & built by <span className="text-gray-900 border-b border-gray-900/10">{profile.name}</span>.
                    </p>
                </div>
            </div>
        </footer>
    );
}

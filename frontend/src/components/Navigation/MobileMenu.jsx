import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../common/Icon';
import { navLinks, socials } from '../../data/portfolio';

export default function MobileMenu({ isOpen, onClose }) {
    // Escape dabane par menu band
    useEffect(() => {
        if (!isOpen) return;
        const onKeyDown = (e) => e.key === 'Escape' && onClose();
        window.addEventListener('keydown', onKeyDown);
        return () => window.removeEventListener('keydown', onKeyDown);
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-start justify-center p-4 md:p-10 pointer-events-none">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/20 backdrop-blur-sm pointer-events-auto"
                onClick={onClose}
            />

            {/* Menu Card */}
            <div
                role="dialog"
                aria-modal="true"
                aria-label="Menu"
                className="
        relative w-full max-w-7xl max-h-[calc(100dvh-2rem)] overflow-y-auto
        bg-white/95 backdrop-blur-2xl
        rounded-[2rem] md:rounded-[2.5rem] border border-white/40
        shadow-2xl shadow-gray-900/10
        pointer-events-auto
      ">
                {/* Header */}
                <div className="flex items-center justify-between p-5 px-6 md:px-8 bg-gray-100/50 border-b border-gray-200/50">
                    <h2 className="text-2xl font-bold text-gray-900">Menu</h2>
                    <button
                        type="button"
                        onClick={onClose}
                        aria-label="Close menu"
                        className="p-2 hover:bg-gray-200/50 rounded-xl transition-colors"
                    >
                        <Icon name="close" className="w-6 h-6" strokeWidth={2.5} />
                    </button>
                </div>

                {/* Navigation Links */}
                <div className="p-3 md:p-8">
                    <ul className="space-y-1 md:space-y-2">
                        {navLinks.map((item) => (
                            <li key={item.name}>
                                <Link
                                    to={item.path}
                                    onClick={onClose}
                                    className="flex items-center justify-between p-4 md:p-5 px-5 md:px-6
                             rounded-2xl hover:bg-gray-100 transition-all duration-300
                             group text-gray-900"
                                >
                                    <span className="text-xl md:text-2xl font-bold">{item.name}</span>
                                    <Icon
                                        name="arrowRight"
                                        className="w-6 h-6 text-gray-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-gray-900"
                                        strokeWidth={2.5}
                                    />
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Social Icons */}
                <div className="p-6 md:p-8 pt-2 md:pt-4 flex justify-center gap-4">
                    {socials.map((social) => (
                        <a
                            key={social.title}
                            href={social.href}
                            {...(social.href.startsWith('http') && { target: '_blank', rel: 'noopener noreferrer' })}
                            aria-label={social.title}
                            className="w-12 h-12 bg-gray-900 text-white rounded-2xl flex items-center justify-center
                         transition-all duration-300 hover:scale-110 active:scale-95"
                        >
                            <Icon name={social.icon} className="w-6 h-6" />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}

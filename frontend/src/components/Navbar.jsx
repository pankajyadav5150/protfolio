import { useState } from 'react';
import { Link } from 'react-router-dom';
import MobileMenu from './Navigation/MobileMenu';
import Icon from './common/Icon';
import { profile } from '../data/portfolio';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <header className="px-4 md:px-10 py-4 md:py-6 sticky top-0 z-40">
                <nav className="px-3 sm:px-4 py-3 md:py-5 mx-auto max-w-7xl flex items-center justify-between gap-3 bg-gray-300/40 border border-gray-300/40 rounded-xl shadow-2xl backdrop-blur-xl">
                    <Link to="/" className="flex items-center gap-2 sm:gap-3 min-w-0">
                        <div className="w-9 h-9 md:w-10 md:h-10 bg-black rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0">
                            {profile.initials}
                        </div>
                        <span className="text-lg sm:text-xl md:text-2xl font-bold truncate">{profile.name}</span>
                    </Link>
                    <div className="flex gap-3 md:gap-4 items-center shrink-0">
                        <Link
                            to="/connect"
                            className="hidden md:block px-6 py-2.5 bg-black text-white font-bold border rounded-xl cursor-pointer shadow-2xl transition-all hover:scale-105 duration-300 hover:shadow-lg"
                        >
                            Let's connect
                        </Link>
                        <button
                            type="button"
                            onClick={() => setIsMenuOpen(true)}
                            aria-expanded={isMenuOpen}
                            aria-label="Open menu"
                            className="text-black font-bold border border-gray-300/40 rounded-xl px-3 py-2.5 shadow-2xl transition-all hover:scale-105 duration-300 hover:shadow-lg flex items-center gap-2"
                        >
                            <span className="hidden sm:inline">Menu</span>
                            <Icon name="menu" className="w-5 h-5" strokeWidth={2.5} />
                        </button>
                    </div>
                </nav>
            </header>

            <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
        </>
    );
}

import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function CTASection() {
    const navigate = useNavigate();

    return (
        <section className="px-4 md:px-10 py-4 md:py-6 bg-transparent">
            <div className="
        px-6 md:px-12 py-10 md:py-16
        bg-gray-100/50 backdrop-blur-3xl
        rounded-[2rem] md:rounded-[3rem] 
        border border-white/40
        shadow-xl shadow-gray-200/50
        max-w-7xl mx-auto
        text-center
      ">
                <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-gray-900 tracking-tight leading-tight">
                    Ready to build something exceptional?
                </h2>

                <p className="text-gray-500 text-base md:text-xl max-w-2xl mx-auto mb-10 font-medium leading-relaxed">
                    Whether it's a scalable backend, a real-time app or an AI-powered
                    product, let's collaborate and bring it to life with clean, reliable code.
                </p>

                <button
                    onClick={() => navigate('/connect')}
                    className="inline-flex items-center gap-3 px-8 py-4 
                     bg-[#1a1a1a] text-white font-bold rounded-2xl
                     shadow-2xl shadow-gray-900/20
                     transition-all duration-300
                     hover:scale-105 hover:bg-black active:scale-95"
                >
                    <span>Let's Connect</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20" height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </svg>
                </button>
            </div>
        </section>
    );
}

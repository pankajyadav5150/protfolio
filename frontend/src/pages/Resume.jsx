import Icon from '../components/common/Icon';
import { profile } from '../data/portfolio';

export default function Resume() {
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
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                    <div>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">Resume</h1>
                        <p className="text-gray-500 text-base md:text-lg font-medium mt-2">
                            {profile.name} · {profile.title}
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3">
                        <a
                            href={profile.resume}
                            download="Pankaj_Kumar_Resume.pdf"
                            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gray-900 text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
                        >
                            <Icon name="download" className="w-4 h-4" />
                            Download PDF
                        </a>
                        <a
                            href={profile.resume}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white/80 text-gray-900 border border-gray-300 font-semibold transition-all duration-300 hover:scale-105 hover:bg-white"
                        >
                            <Icon name="external" className="w-4 h-4" />
                            Open in new tab
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

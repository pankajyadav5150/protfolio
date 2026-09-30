import Icon from '../common/Icon';

export default function ContactItem({ title, value, href, icon, color }) {
    const opensNewTab = href.startsWith('http');

    return (
        <a
            href={href}
            {...(opensNewTab && { target: '_blank', rel: 'noopener noreferrer' })}
            className="group flex items-center gap-3 sm:gap-4 p-4 md:p-5 min-w-0
                 bg-white/80 border border-gray-200 rounded-2xl shadow-sm
                 transition-all duration-300
                 hover:shadow-xl hover:shadow-gray-200/50 hover:-translate-y-1 active:scale-[0.98]"
        >
            <span className={`w-12 h-12 flex items-center justify-center rounded-xl text-white shrink-0
                      transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 ${color}`}>
                <Icon name={icon} className="w-5 h-5" />
            </span>

            <span className="min-w-0">
                <span className="block text-gray-500 font-medium text-xs md:text-sm mb-0.5">{title}</span>
                <span className="block text-gray-900 font-bold text-[13px] sm:text-sm md:text-base break-all">{value}</span>
            </span>
        </a>
    );
}

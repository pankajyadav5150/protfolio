import Icon from "./Icon";

export default function CheckList({ items }) {
    return (
        <ul className="space-y-2.5">
            {items.map((item) => (
                <li key={item} className="flex gap-3 text-sm sm:text-base text-gray-600 leading-relaxed">
                    <span className="mt-0.5 w-5 h-5 rounded-full bg-gray-900 text-white flex items-center justify-center shrink-0">
                        <Icon name="check" className="w-3 h-3" strokeWidth={4} />
                    </span>
                    <span>{item}</span>
                </li>
            ))}
        </ul>
    );
}

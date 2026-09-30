export default function TagList({ tags, className = "" }) {
    return (
        <ul className={`flex flex-wrap gap-2 ${className}`}>
            {tags.map((tag) => (
                <li
                    key={tag}
                    className="text-xs md:text-sm font-semibold px-2.5 py-1 rounded-full bg-gray-100 border border-gray-200 text-gray-600"
                >
                    {tag}
                </li>
            ))}
        </ul>
    );
}

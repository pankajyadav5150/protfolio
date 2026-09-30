export default function SectionHeader({ title, subtitle }) {
  return (
    <div className="text-center mb-10 md:mb-16 relative z-10">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-gray-900 tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-500 text-base sm:text-lg md:text-xl max-w-2xl mx-auto font-medium">
          {subtitle}
        </p>
      )}
    </div>
  );
}

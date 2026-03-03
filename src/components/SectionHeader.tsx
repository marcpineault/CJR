interface SectionHeaderProps {
  label?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeader({
  label,
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionHeaderProps) {
  return (
    <div className={`mb-10 md:mb-12 ${centered ? "text-center" : ""}`}>
      {label && (
        <span
          className={`inline-block text-xs font-bold uppercase tracking-widest mb-3 ${
            light ? "text-brand-green-light" : "text-brand-green"
          }`}
        >
          {label}
        </span>
      )}
      <h2
        className={`font-heading text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-heading ${
          light ? "text-white" : "text-brand-black"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-lg max-w-2xl ${centered ? "mx-auto" : ""} ${
            light ? "text-gray-400" : "text-gray-600"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

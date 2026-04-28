interface Props {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeading({ title, subtitle, centered = true, light = false }: Props) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <h2
        className={`text-3xl sm:text-4xl font-heading font-bold leading-tight ${
          light ? 'text-white' : 'text-navy-900'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-3 text-lg max-w-2xl ${centered ? 'mx-auto' : ''} ${
            light ? 'text-navy-200' : 'text-navy-500'
          }`}
        >
          {subtitle}
        </p>
      )}
      <div
        className={`mt-4 h-1 w-16 rounded-full ${centered ? 'mx-auto' : ''} ${
          light ? 'bg-white/30' : 'bg-navy-200'
        }`}
      />
    </div>
  );
}

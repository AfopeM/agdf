interface SectionHeadingProp {
  title: string;
  content?: string;
  isLight?: boolean;
}

export function SectionHeading({
  title,
  content,
  isLight,
}: SectionHeadingProp) {
  const isLightStyling = isLight ? "text-white" : "text-black";
  return (
    <div className="flex w-full flex-col items-center justify-between gap-6 text-center lg:flex-row">
      <h2
        className={`${isLightStyling} relative text-3xl font-bold capitalize lg:self-start lg:text-start lg:text-4xl`}
      >
        {title}
        <span className="bg-brand absolute -bottom-2 left-1/2 h-1 w-28 -translate-x-1/2 lg:-bottom-4 lg:left-0 lg:translate-x-0" />
      </h2>

      <p className="text-base text-gray-400 lg:max-w-md lg:text-end lg:text-lg">
        {content}
      </p>
    </div>
  );
}

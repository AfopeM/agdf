interface SectionHeadingProp {
  title: string;
  content?: string;
  isLight?: boolean;
  isReverse?: boolean;
}

export function SectionHeading({
  title,
  content,
  isLight,
  isReverse,
}: SectionHeadingProp) {
  const isLightStyling = isLight ? "text-white" : "text-black";
  const isReverseStylng = isReverse ? "lg:flex-row-reverse" : "lg:flex-row ";
  return (
    <div
      className={`${isReverse ? "lg:flex-row-reverse" : "lg:flex-row"} mb-16 flex w-full flex-col items-center justify-between gap-6 text-center`}
    >
      <h2
        className={`${isLightStyling} ${isReverse ? "lg:self-end lg:text-end" : "lg:self-start lg:text-start"} relative text-3xl font-bold capitalize lg:text-4xl`}
      >
        {title}
        <span
          className={`${isReverse ? "lg:right-0" : "lg:left-0"} bg-brand absolute -bottom-2 left-1/2 h-1 w-28 -translate-x-1/2 lg:-bottom-4 lg:translate-x-0`}
        />
      </h2>

      <p
        className={`${isReverse ? "lg:text-start" : "lg:text-end"} text-base text-gray-400 lg:max-w-md lg:text-lg`}
      >
        {content}
      </p>
    </div>
  );
}

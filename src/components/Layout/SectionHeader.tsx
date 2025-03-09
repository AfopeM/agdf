interface SectionHeadingProp {
  title: string;
  content?: string | null;
  isLight?: boolean;
  isCenter?: boolean;
  isReverse?: boolean;
}

export default function SectionHeader({
  title,
  content = null,
  isLight = true,
  isCenter,
  isReverse,
}: SectionHeadingProp) {
  const isLightStyling = isLight ? "text-white" : "text-black";
  return (
    <>
      {content === null ? (
        <h2
          className={`${isLightStyling} ${isCenter ? "text-center lg:text-start" : "text-start"} relative mb-8 text-3xl font-black uppercase lg:text-4xl`}
        >
          {title}
          <span
            className={`${isCenter ? "left-1/2 -translate-x-1/2 lg:left-0" : "left-0"} bg-brand absolute -bottom-2 h-1 w-28 lg:-bottom-4 lg:translate-x-0`}
          />
        </h2>
      ) : (
        <div
          className={`${isReverse ? "lg:flex-row-reverse" : "lg:flex-row"} mb-16 flex w-full flex-col items-center justify-between gap-8 text-center`}
        >
          <h2
            className={`${isLightStyling} ${isReverse ? "lg:text-end" : "lg:text-start"} relative text-3xl font-black uppercase lg:self-start lg:text-4xl`}
          >
            {title}
            <span
              className={`${isReverse ? "lg:right-0" : "lg:left-0"} bg-brand absolute -bottom-2 left-1/2 h-1 w-28 -translate-x-1/2 lg:-bottom-4 lg:translate-x-0`}
            />
          </h2>
          <p
            className={`${isReverse ? "lg:text-start" : "lg:text-end"} text-base text-gray-400 lg:max-w-xl lg:text-lg`}
          >
            {content}
          </p>
        </div>
      )}
    </>
  );
}

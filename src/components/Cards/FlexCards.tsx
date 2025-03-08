"use client";
import { useState, useMemo } from "react";
import useResponsive from "@/hooks/useResponsive";
import PrimaryButton from "../Buttons/PrimaryButton";

interface FlexCardProp {
  id: string;
  title: string;
  tag: string;
  desc: string;
}

interface FlexCardsProp {
  projects: FlexCardProp[];
}

export default function FlexCards({ projects }: FlexCardsProp) {
  const { isLgScreen } = useResponsive();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  const chunkedCardContent = useMemo(() => {
    return isLgScreen
      ? projects.reduce((acc, item, index) => {
          if (index % 4 === 0) acc.push([]);
          acc[acc.length - 1].push(item);
          return acc;
        }, [] as FlexCardProp[][])
      : [projects];
  }, [isLgScreen, projects]);

  return (
    <div className="flex flex-col gap-4">
      {chunkedCardContent.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className={
            isLgScreen
              ? "flex flex-wrap justify-center gap-4"
              : "mx-auto flex max-w-sm min-w-xs flex-col gap-4"
          }
        >
          {row.map((project, index) => {
            const itemIndex = rowIndex * 4 + index;
            const isActive = activeIndex === itemIndex;

            return (
              <article
                key={project.title}
                onMouseEnter={() => isLgScreen && setActiveIndex(itemIndex)}
                onMouseLeave={() => isLgScreen && setActiveIndex(null)}
                onClick={() => !isLgScreen && handleClick(itemIndex)}
                className={`group brand-animate relative h-32 w-full cursor-pointer overflow-hidden rounded bg-no-repeat text-center text-white lg:hover:bg-cover ${
                  isLgScreen
                    ? activeIndex === itemIndex
                      ? "lg:flex-[2]"
                      : activeIndex !== null &&
                          Math.floor(activeIndex / 4) === rowIndex
                        ? "lg:flex-[0.7]"
                        : "lg:flex-[1]"
                    : activeIndex === itemIndex
                      ? "h-[35vh]"
                      : "h-[20vh]"
                } lg:h-[400px]`}
                style={{
                  backgroundImage: `url('/projects/${project.id}.png')`,
                }}
              >
                <div
                  className={`brand-animate absolute inset-0 flex flex-col items-center justify-center bg-black/70 p-4 opacity-0 backdrop-blur ${isLgScreen ? "group-hover:opacity-100" : isActive ? "opacity-100" : "pointer-events-none opacity-0"}`}
                >
                  <h4 className="text-lg font-black uppercase md:text-xl lg:text-2xl">
                    {project.title}
                  </h4>
                  <p className="mt-1 mb-6 max-w-sm text-sm text-gray-400 md:max-w-md md:text-base">
                    {project.desc}
                  </p>

                  <PrimaryButton
                    newTab
                    size="sm"
                    text="learn more"
                    link={`/projects/${project.id}`}
                  />
                </div>
              </article>
            );
          })}
        </div>
      ))}
    </div>
  );
}

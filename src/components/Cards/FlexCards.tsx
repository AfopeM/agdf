"use client";
import { useState, useMemo } from "react";
import useResponsive from "@/hooks/useResponsive";
import PrimaryButton from "../Buttons/PrimaryButton";

export interface IFlexCard {
  id: string;
  title: string;
  tag: string;
  tagline: string;
  project_involved: string[];
  desc: string;
  full_desc: string;
  client: string;
  date: string;
}

interface IFlexCards {
  projects: IFlexCard[];
}

export default function FlexCards({ projects }: IFlexCards) {
  const { isLgScreen } = useResponsive();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  const chunkArray = (arr: IFlexCard[], size: number): IFlexCard[][] => {
    return Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
      arr.slice(i * size, i * size + size),
    );
  };

  const chunkedProjects = useMemo(() => {
    return isLgScreen ? chunkArray(projects, 4) : [projects];
  }, [projects, isLgScreen]);

  return (
    <div className="flex flex-col gap-4">
      {chunkedProjects.map((row, rowIndex) => (
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
                className={`group brand-animate relative h-32 w-full cursor-pointer overflow-hidden rounded bg-cover text-center text-white hover:bg-cover lg:bg-center ${
                  isLgScreen
                    ? isActive
                      ? "lg:flex-[2]"
                      : activeIndex !== null &&
                          Math.floor(activeIndex / 4) === rowIndex
                        ? "lg:flex-[0.7]"
                        : "lg:flex-1"
                    : isActive
                      ? "h-[35vh]"
                      : "h-[20vh]"
                } lg:h-[400px]`}
                style={{
                  backgroundImage: `url('/projects/${project.id}.png')`,
                }}
              >
                <div
                  className={`brand-animate absolute inset-0 flex flex-col items-center justify-center bg-black/70 p-4 opacity-0 backdrop-blur transition-opacity duration-300 ${
                    isLgScreen
                      ? "group-hover:opacity-100"
                      : isActive
                        ? "opacity-100"
                        : "pointer-events-none opacity-0"
                  }`}
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
          {isLgScreen &&
            row.length < 4 &&
            Array.from({ length: 4 - row.length }).map((_, i) => (
              <div key={`placeholder-${i}`} className="lg:flex-1" />
            ))}
        </div>
      ))}
    </div>
  );
}

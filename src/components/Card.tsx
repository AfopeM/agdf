"use client";
import React, { useState, useMemo } from "react";
import useResponsive from "@/hooks/useResponsive";
import Link from "next/link";

export function FlexCardWrapper() {
  const nums = [1, 2, 3, 4, 5, 6, 7];
  const { isLgScreen } = useResponsive();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  const chunkedNums = useMemo(() => {
    return isLgScreen
      ? nums.reduce((acc, item, index) => {
          if (index % 4 === 0) acc.push([]);
          acc[acc.length - 1].push(item);
          return acc;
        }, [] as number[][])
      : [nums];
  }, [isLgScreen]);

  return (
    <div className="flex flex-col gap-4">
      {chunkedNums.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className={
            isLgScreen
              ? "flex flex-wrap justify-center gap-4"
              : "flex w-full flex-col gap-4"
          }
        >
          {row.map((num, index) => {
            const itemIndex = rowIndex * 4 + index;
            const isActive = activeIndex === itemIndex;

            return (
              <article
                key={num}
                onMouseEnter={() => isLgScreen && setActiveIndex(itemIndex)}
                onMouseLeave={() => isLgScreen && setActiveIndex(null)}
                onClick={() => !isLgScreen && handleClick(itemIndex)}
                className={`group brand-animate relative h-32 w-full cursor-pointer rounded bg-[url('/hero.jpeg')] bg-cover text-center text-white ${
                  isLgScreen
                    ? activeIndex === itemIndex
                      ? "lg:flex-[2]"
                      : activeIndex !== null &&
                          Math.floor(activeIndex / 4) === rowIndex
                        ? "lg:flex-[0.7]"
                        : "lg:flex-[1]"
                    : activeIndex === itemIndex
                      ? "h-[30vh]"
                      : "h-[20vh]"
                } lg:h-[400px]`}
              >
                <Link
                  href="/"
                  className={`absolute inset-0 flex flex-col items-center justify-center bg-black/50 p-4 opacity-0 transition-opacity duration-300 ${isLgScreen ? "group-hover:opacity-100" : isActive ? "opacity-100" : "pointer-events-none opacity-0"}`}
                >
                  <h4 className="text-lg font-black uppercase">Title</h4>
                  <p className="text-sm text-gray-400">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                  <span className="capitalize">learn more</span>
                </Link>
              </article>
            );
          })}
        </div>
      ))}
    </div>
  );
}

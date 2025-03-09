import React from "react";

interface IHeading {
  height?: string;
  children: React.ReactNode;
}

export default function Heading({ height = "500px", children }: IHeading) {
  return (
    <header
      style={{ height }}
      className="relative flex w-full items-center justify-center bg-[url('/hero.jpeg')] bg-cover bg-center"
    >
      {children}
    </header>
  );
}

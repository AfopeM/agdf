"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import FadeInBackground from "../Layout/FadeInBackground";

interface MemberCardProp {
  name: string;
  image: string;
}
interface TeamCardsProp {
  children: React.ReactNode;
}

export function TeamCards({ children }: TeamCardsProp) {
  return (
    <div className="relative flex w-full overflow-hidden">
      <FadeInBackground direction="left" />
      <FadeInBackground direction="right" />
      <motion.div
        className="flex items-center gap-12"
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export function MemberCard({ name, image }: MemberCardProp) {
  return (
    <div
      key={name}
      className="relative h-72 w-80 flex-shrink-0 overflow-hidden rounded"
    >
      <Image
        fill
        src={`/team/${image}.png`}
        alt={`${name}'s image`}
        className="object-cover"
      />

      <p className="brand-animate ring-brand absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-4 rounded bg-black/10 px-4 py-2 text-center text-sm text-white capitalize ring-2 backdrop-blur-xl lg:text-base">
        {name}
      </p>
    </div>
  );
}

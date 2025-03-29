"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import FadeInBackground from "../Layout/FadeInBackground";

interface IMemberCard {
  name: string;
  image: string;
}
interface ITeamCards {
  children: React.ReactNode;
}

export function TeamCards({ children }: ITeamCards) {
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

export function MemberCard({ name, image }: IMemberCard) {
  return (
    <div
      key={name}
      className="relative h-80 w-80 flex-shrink-0 overflow-hidden rounded-full"
    >
      <Image
        fill
        alt={`${name}'s image`}
        className="object-cover"
        src={`/team/${image}.png`}
      />

      <p className="bg-brand/10 absolute bottom-0 left-1/2 h-1/5 w-full -translate-x-1/2 pt-4 text-center text-white capitalize backdrop-blur-xl lg:text-base">
        {name}
      </p>
    </div>
  );
}

"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import FadeInBackground from "../Layout/FadeInBackground";

interface IMemberCard {
  name: string;
  image: string;
  role: string;
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
            duration: 45,
            ease: "linear",
          },
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export function MemberCard({ name, image, role }: IMemberCard) {
  console.log(image);
  return (
    <div
      key={name}
      className="relative h-96 w-80 flex-shrink-0 overflow-hidden rounded-xl"
    >
      <Image
        fill
        alt={`${name}'s image`}
        className="object-cover"
        src={`/team/${image}.png`}
      />

      <div className="bg-brand/10 absolute bottom-0 flex h-1/4 w-full flex-col items-center justify-center gap-y-1 pt-4 text-center backdrop-blur-xl">
        <p className="bg-brand rounded px-4 py-1 text-xs tracking-wider capitalize">
          {role}
        </p>
        <p className="font-bold text-white uppercase lg:text-lg">
          {name.includes(".") ? name.replace(".", ". ") : name}
        </p>
      </div>
    </div>
  );
}

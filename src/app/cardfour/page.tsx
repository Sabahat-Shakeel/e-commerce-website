"use client";
import React from "react";
import { BackgroundGradient } from "@/app/components/ui/background-gradient";
// import { IconAppWindow } from "@tabler/icons-react";

import Image from "next/image";

export function BackgroundGradientDemofour() {
  return (
    <div className="inline-table bg-slate-100 rounded-2xl ">
      <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
        <Image
          src="/je.jpg"
          alt="jewllery gallery"
          height="500"
          width="500"
          className="object-contain"
        />
        <p className="text-xs sm:text-base text-black mt-4 mb-2 dark:text-neutral-200">
        Jewllery Arrivals Collections
        </p>

        <p className=" text-neutral-600 dark:text-neutral-400 text-xs sm:text-xs">
        The pretty gorgeous jewlllery Bred will release on Saturday,
          February 17, 2024. Your best opportunity to get these right now is by
          entering raffles and waiting for the official releases.
        </p>
        <button className="hover:text-white hover:bg-black rounded-full pl-4 pr-1 py-1  flex items-center space-x-1  mt-4 text-xs font-bold  bg-white  text-black dark:bg-zinc-50">
          <span>Buy now </span>
          <span className="bg-red-500   rounded-full text-[0.6rem] px-2 py-0 text-white">
            $100
          </span>
        </button>
      </BackgroundGradient>
    </div>
  );
}

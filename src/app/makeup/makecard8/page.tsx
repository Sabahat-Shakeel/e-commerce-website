"use client";
import React from "react";
import  BackgroundGradient  from "@/app/components/ui/background-gradient";
// import { IconAppWindow } from "@tabler/icons-react";

import Image from "next/image";
import Link from "next/link";

export function Makeup8() {
  return (
    <div className="sm:inline-table lg:ml-16  lg:px-4 inline-table  ">
      <BackgroundGradient className="rounded-[22px] max-w-lg p-4 sm:p-10 bg-white dark:bg-zinc-900">
        <Link href = "/makeup">
        <Image
          src="/s4.jpg"
          alt="makeup gallery"
          height="500"
          width="500"
          className="object-contain"
        />
        </Link>
        <Link href= "/makeup">
        <p className="text-base  text-black mt-4 mb-2 dark:text-neutral-200">
        Makeup&apos;s Arrivals Collections
        </p>
        </Link>
        <p className="text-xs text-neutral-600 dark:text-neutral-400">
          The pretty Organic Makeup Bred will release on Saturday,
          February 17, 2024. Your best opportunity to get these right now is by
          entering raffles and waiting for the official releases.
        </p>
        <button className="text-xs hover:text-white hover:bg-black rounded-full pl-4 pr-1 py-1  flex items-center space-x-1 mt-4  font-bold bg-white  text-black dark:bg-zinc-50">
          <span>Buy now </span>
          <span className=" bg-red-500 rounded-full text-[0.6rem] px-2 py-0 text-white ">
            $100
          </span>
        </button>
      </BackgroundGradient>
    </div>
  );
}

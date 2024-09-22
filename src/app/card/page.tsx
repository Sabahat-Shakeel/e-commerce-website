"use client";
import React from "react";
import  BackgroundGradient  from "@/app/components/ui/background-gradient";
import Image from "next/image";
import Link from "next/link";

function BackgroundGradientDemo() {
  return (
    <div className=" inline-table  bg-slate-100 rounded-2xl">
      <BackgroundGradient className="rounded-[22px]  max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
        <Link href="/menscollections">
          <Image
            src="/jun.jpg"
            alt="men clothes gallery"
            height="500"
            width="500"
            className="object-contain"
          />
        </Link>
        <Link href="/menscollections">
          <p className="text-base sm:text-base text-black mt-4 mb-2 dark:text-neutral-200">
            Men&apos;s New Collections
          </p>
        </Link>

        <p className="sm:text-xs text-neutral-600 dark:text-neutral-400">
          The just-in style for the new session. Explore the new classics. Your
          best opportunity to get these right now is by entering raffles and
          waiting for the official releases.
        </p>
        <button className=" hover:text-white hover:bg-black rounded-full pl-4 pr-1 py-1 text-black flex items-center space-x-1 bg-white mt-4 text-xs font-bold dark:bg-zinc-50">
          <span>Buy now </span>
          <span className=" bg-red-500  rounded-full text-[0.6rem] px-2 py-0 text-white ">
            $ 500
          </span>
        </button>
      </BackgroundGradient>
    </div>
  );
}
export default BackgroundGradientDemo;

"use client";
import React from "react";
import  BackgroundGradient  from "@/app/components/ui/background-gradient";
import Image from "next/image";
import Link from "next/link";

export default function MensCard9() {
  return (
    <div className="lg:ml-6 sm:inline-table inline-table">
      <BackgroundGradient className="rounded-[22px]  max-w-lg  p-4 sm:p-10 bg-white dark:bg-zinc-900">
        <Image
          src="/j9.jpg"
          alt="men clothes gallery"
          height="500"
          width="500"
          className="object-contain"
        />

        <Link href="/menscollections">
          <p className="text-sm font-bold sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
          Men&apos;s New Collections
          </p>
        </Link>

        <p className="text-xs text-neutral-600 dark:text-neutral-400">
          The just-in style for the new session. Explore the new classics. Your
          best opportunity to get these right now is by entering raffles and
          waiting for the official releases.
        </p>
        <button className="rounded-full hover:bg-black hover:text-white pl-4 pr-1 py-1 text-black flex items-center space-x-1 bg-white mt-4 text-xs font-bold dark:bg-zinc-50">
          <span>Buy now </span>
          <span className="bg-red-500 rounded-full text-[0.6rem] px-2 py-0 text-white">
            $ 500
          </span>
        </button>
      </BackgroundGradient>
    </div>
  );
}

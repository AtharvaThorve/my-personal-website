"use client";
import React from "react";
import { TypewriterEffectSmooth } from "./typewriter-effect";
import { cn } from "../utils/cn";
import Social from "./socials";
import Link from "next/link";

export function Name() {
  const words = [
    {
      text: "Software",
      className: "text-neutral-300",
    },
    {
      text: "Developer.",
      className: "text-black",
    },
  ];

  return (
    <>
      <div className="flex flex-col items-center justify-center  ">
        <h1 className={cn("md:text-6xl text-xl text-white relative z-20")}>
          Atharva Thorve
        </h1>
        <TypewriterEffectSmooth words={words} />
        <p className="text-lg md:text-xl text-white relative z-20">
          Masters in Computer Science
        </p>
        <br />
        <Social />
        <br />
        <div className="flex justify-center space-x-4">
          <Link href="/projects">
            <button className="p-[3px] relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
              <div className="px-8 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent">
                Projects
              </div>
            </button>
          </Link>
          <a
            href="https://drive.google.com/file/d/12nEwRnwXHPD9hWQlBnlavKNcHoghudqS/view"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="p-[3px] relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
              <div className="px-8 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent">
                Resume
              </div>
            </button>
          </a>
        </div>
      </div>
    </>
  );
}

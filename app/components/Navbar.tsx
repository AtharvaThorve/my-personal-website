"use client";
import React from "react";
import { FloatingNav } from "./floating-navbar";

export function Navbar() {
  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Projects",
      link: "/projects",
    },
    {
      name: "Resume",
      link: "https://drive.google.com/file/d/12nEwRnwXHPD9hWQlBnlavKNcHoghudqS/view",
    },
  ];
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}

"use client";
import React, { useRef } from 'react';
import { Info } from "./components/Info";
import { Lamp } from "./components/lamp";

export default function Home() {
  const infoRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Lamp infoRef={infoRef} />
      <Info ref={infoRef} />
    </>
  );
}
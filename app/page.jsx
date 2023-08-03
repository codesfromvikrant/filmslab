import React from "react";
import Image from "next/image";
import apiSettings from "@/api";
import HeroSection from "@/components/HeroSection";
import SlidesSections from "@/components/SlidesSections";

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <SlidesSections />
    </main>
  );
}

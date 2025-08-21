"use client";

import { HeroSection } from "@/app/_components/HeroSection";
import { ServicesSection } from "@/app/_components/ServicesSection";
import { TestimonialsSection } from "@/app/_components/TestimonialsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <TestimonialsSection />
    </>
  );
}

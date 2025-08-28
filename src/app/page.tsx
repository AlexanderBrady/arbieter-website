"use client";

import { HeroSection } from "@/app/_components/HeroSection";
import { ServicesSection } from "@/app/_components/ServicesSection";
import { TestimonialsSection } from "@/app/_components/TestimonialsSection";
import { FlowDiagram, userOnboardingFlow } from "./_components/automation-flows";
import AutomationSection from "./_components/AutomationSection";

export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <HeroSection />
      <ServicesSection />
      <AutomationSection />
      <TestimonialsSection />
    </div>
  );
}

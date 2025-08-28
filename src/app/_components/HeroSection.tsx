"use client";

import { Button } from "./ui/button";
import { ArrowRight, Play } from "lucide-react";
import { useRouter } from "next/navigation";
import GradientBg from "./GradientBg";
import Orb from "@/app/_components/Orb/Orb"; // ✅ Orb import

export function HeroSection() {
  const router = useRouter();

  return (
    <section className="relative overflow-hidden md:h-[calc(100vh-5vh)]">
      {/* Orb Background */}
      <div className="absolute inset-0 -z-10 ">
        <Orb
          hoverIntensity={0.7}
          rotateOnHover={true}
          hue={180}
          forceHoverState={false}
        />
      </div>

      {/* Gradient overlay on top of Orb to soften it */}
      <div className="absolute inset-0 -z-10 pointer-events-none bg-gradient-to-b from-background/70 to-muted/30" />

      {/* Hero Content (centered) */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:pb-28 lg:mt-[15vh] z-[10] relative">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm mb-6">
            <div className="relative mr-4">
              <div className="w-2 h-2 rounded-full bg-indigo-400"></div>
              <div className="absolute top-0 right-0 -mr-1 -mt-1 w-4 h-4 rounded-full bg-indigo-400 animate-ping"></div>
            </div>
            Trusted by industry leaders
          </div>

          {/* Heading */}
          <h1 className="text-[55px] md:text-[75px] tracking-tight mb-6 inset-shadow">
            Transforming Industries with{" "}
            <span className="clip-gradient">AI Solutions</span>
          </h1>

          {/* Subtext */}
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            We deliver cutting-edge AI integrations and custom development
            solutions that streamline operations, reduce costs, and accelerate
            growth for forward-thinking businesses.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <Button
              size="lg"
              className="text-base px-8"
              onClick={() => router.push("/contact")}
            >
              Get Started Today
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-base px-8"
              onClick={() => router.push("/case-studies")}
            >
              <Play className="mr-2 h-4 w-4" />
              See Projects
            </Button>
          </div>

          {/* Stats */}
          {/* <div className="grid grid-cols-3 gap-8 pt-8 border-t">
            <div>
              <div className="text-2xl font-bold text-primary">50+</div>
              <div className="text-sm text-muted-foreground">
                Projects Delivered
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">98%</div>
              <div className="text-sm text-muted-foreground">
                Client Satisfaction
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">24/7</div>
              <div className="text-sm text-muted-foreground">
                Support Available
              </div>
            </div>
          </div> */}
        </div>
      </div>

      <GradientBg />
    </section>
  );
}

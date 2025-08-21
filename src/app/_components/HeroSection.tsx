"use client";

import { Button } from "./ui/button";
import { ArrowRight, Play, ChevronDown } from "lucide-react";
import { useRouter } from "next/navigation";
import NeuralBackdrop from "./NeuralBackdrop";

export function HeroSection() {
  const router = useRouter();

  return (
    <section className="relative overflow-hidden">
      {/* Full-section animated background */}
      <NeuralBackdrop className="absolute inset-0 w-full h-full -z-10 pointer-events-none" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/60 to-muted/20" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm mb-6">
              <span className="w-2 h-2 bg-primary rounded-full mr-2" />
              Trusted by industry leaders
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight mb-6">
              Transforming Industries with{" "}
              <span className="text-primary">AI Solutions</span>
            </h1>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We deliver cutting-edge AI integrations and custom development
              solutions that streamline operations, reduce costs, and accelerate
              growth for forward-thinking businesses.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
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
                onClick={() => router.push("/demo")}
              >
                <Play className="mr-2 h-4 w-4" />
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t">
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
            </div>
          </div>

          {/* Right column badges */}
          <div className="relative lg:ml-8 min-h-[300px]">
            <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground rounded-lg p-4 shadow-lg">
              <div className="text-sm font-medium">AI Powered</div>
              <div className="text-xs opacity-90">Solutions</div>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-background/90 backdrop-blur border rounded-lg p-4 shadow-lg">
              <div className="text-sm font-medium">99.9% Uptime</div>
              <div className="text-xs text-muted-foreground">Guaranteed</div>
            </div>
          </div>
        </div>
      </div>

      {/* Cool bouncing + flipping arrow */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
        <ChevronDown className="h-10 w-10 text-primary animate-flip-bounce" />
      </div>
    </section>
  );
}

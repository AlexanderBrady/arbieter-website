"use client";

import { Button } from "./ui/button";
import { ArrowRight, Play, Zap, Shield, Clock, Cpu, Globe, Rocket, ChevronDown } from "lucide-react";
import { useRouter } from "next/navigation";
import { motion } from "motion/react";
import GradientBg from "./GradientBg";
import NeuralBackdrop from "./NeuralBackdrop";
import { ImageWithFallback } from "./figma/ImageWithFallback";

// Feature tabs data
const featureTabs = [
  {
    id: 1,
    title: "AI Powered",
    subtitle: "Solutions",
    icon: Zap,
    color: "bg-primary/20",
  },
  {
    id: 2,
    title: "99.9% Uptime",
    subtitle: "Guaranteed",
    icon: Shield,
    color: "bg-background/20",
  },
  {
    id: 3,
    title: "24/7 Support",
    subtitle: "Available",
    icon: Clock,
    color: "bg-primary/20",
  },
  {
    id: 4,
    title: "Smart Analytics",
    subtitle: "Insights",
    icon: Cpu,
    color: "bg-background/20",
  },
  {
    id: 5,
    title: "Global Scale",
    subtitle: "Infrastructure",
    icon: Globe,
    color: "bg-primary/20",
  },
  {
    id: 6,
    title: "Fast Deploy",
    subtitle: "Solutions",
    icon: Rocket,
    color: "bg-background/20",

  },
];

// FloatingFeatureTabs component with true infinite marquee animation
function FloatingFeatureTabs() {
  return (
    <div className="absolute bottom-4 left-0 right-0 h-16 overflow-hidden pointer-events-none">
      <div className="flex h-full">
        {/* First marquee track */}
        <motion.div
          className="flex items-center gap-6 h-full flex-shrink-0"
          animate={{
            x: ["0%", "-100%"]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {featureTabs.map((feature, index) => {
            const Icon = feature.icon;
            
            return (
              <motion.div
                key={`track1-${feature.id}`}
                className={`${feature.color} rounded-lg p-3 pointer-events-auto cursor-pointer flex-shrink-0 backdrop-blur-md shadow-lg text-primary-foreground `}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.5,
                }}
              >
                <div className="flex items-center gap-2 whitespace-nowrap">
                  <Icon className="h-4 w-4 flex-shrink-0" />
                  <div>
                    <div className="text-sm font-medium">{feature.title}</div>
                    <div className="text-xs opacity-90">{feature.subtitle}</div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Second marquee track (duplicate) - starts where first ends */}
        <motion.div
          className="flex items-center gap-6 h-full flex-shrink-0 ml-6"
          
          animate={{
            x: ["0%", "-100%"]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {featureTabs.map((feature) => {
            const Icon = feature.icon;
            
            return (
              <motion.div
                key={`track2-${feature.id}`}
                className={`${feature.color} rounded-lg p-3 pointer-events-auto cursor-pointer flex-shrink-0 backdrop-blur-md shadow-sm text-primary-foreground `}
              >
                <div className="flex items-center gap-2 whitespace-nowrap">
                  <Icon className="h-4 w-4 flex-shrink-0" />
                  <div>
                    <div className="text-sm font-medium">{feature.title}</div>
                    <div className="text-xs opacity-90">{feature.subtitle}</div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Third marquee track for even more seamless effect */}
        <motion.div
          className="flex items-center gap-6 h-full flex-shrink-0"
          animate={{
            x: ["0%", "-100%"]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {featureTabs.map((feature) => {
            const Icon = feature.icon;
            
            return (
              <div
                key={`track3-${feature.id}`}
                className={`${feature.color} rounded-lg p-3 shadow-lg pointer-events-auto cursor-pointer flex-shrink-0`}
              >
                <div className="flex items-center gap-2 whitespace-nowrap">
                  <Icon className="h-4 w-4 flex-shrink-0" />
                  <div>
                    <div className="text-sm font-medium">{feature.title}</div>
                    <div className="text-xs opacity-90">{feature.subtitle}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}

export function HeroSection() {
  const router = useRouter();

  return (
    <section className="relative overflow-hidden">
      {/* Full-section animated background */}
      {/* <NeuralBackdrop className="absolute inset-0 w-full h-full -z-10 pointer-events-none" /> */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/60 to-muted/20" />

      {/* Gradient Background Element */}
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 z-[10] relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm mb-6">

            <div className="relative mr-4">
              <div className="w-2 h-2 rounded-full bg-indigo-400"></div>
              <div className="absolute top-0 right-0 -mr-1 -mt-1 w-4 h-4 rounded-full bg-indigo-400 animate-ping"></div>
            </div>

              Trusted by industry leaders
            </div>

            <h1 className="text-[55px] md:text-[75px] tracking-tight mb-6 inset-shadow">
              <span className="whitespace-nowrap">Transforming</span>{" "}
              <span className="whitespace-nowrap">Industries with</span>{" "}
              <span className="clip-gradient">AI Solutions</span>
            </h1>
            {/* <h1 className="relative z-10 flex flex-col bg-[linear-gradient(183deg,rgba(236,241,253,0)_13.9%,rgba(236,241,253,0.3)_121.71%),linear-gradient(0deg,#2E3038,#2E3038)] bg-clip-text font-forma text-[49px] leading-tight text-transparent filter-[url(#inset-shadow)] md:text-[80px] lg:text-[96px] xl:text-[96px]"><span className="whitespace-nowrap">It's like Googling</span><span className="whitespace-nowrap -mt-2 md:-mt-2.5 lg:-mt-3.5">Mid-Sentence</span></h1> */}

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
                onClick={() => router.push("/case-studies")}
              >
                <Play className="mr-2 h-4 w-4" />
                See Projects
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

          {/* Hero Image with Animated Floating Feature Tabs */}
          <div className="relative lg:ml-8">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="/cute-robot-1.png"
                alt="AI-powered robot with advanced capabilities"
                className="w-full h-[500px] object-cover"
              />
            </div>

            {/* Animated Floating Feature Tabs */}
            <FloatingFeatureTabs />
          </div>
        </div>
      </div>
      <GradientBg />

    </section>
  );
}
"use client";
import { useRouter } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import {
  Brain,
  Building2,
  Code,
  Users,
  Target,
  ArrowRight,
  Zap,
  Shield,
  TrendingUp,
  Coffee,
  Lightbulb,
} from "lucide-react";
import GradientBg from "./GradientBg";

export function AboutPage() {
  const router = useRouter();
  const approach = [
    {
      title: "Technical-First Methodology",
      description:
        "We start with architecture, not marketing. Every solution is built on solid engineering principles.",
    },
    {
      title: "Real-World Testing",
      description:
        "Our systems are battle-tested across diverse industries before we recommend them to clients.",
    },
    {
      title: "Measurable Outcomes",
      description:
        "We focus on ROI, time savings, and operational efficiency—not buzzwords or vanity metrics.",
    },
    {
      title: "Industry Expertise",
      description:
        "Deep understanding of construction, real estate, hospitality, and technology sector challenges.",
    },
  ];

  const industries = [
    {
      icon: Building2,
      name: "Construction",
      description:
        "Project management, safety protocols, resource optimization",
      color: "bg-blue-500",
    },
    {
      icon: Building2,
      name: "Real Estate",
      description: "Property management, market analysis, client relationships",
      color: "bg-green-500",
    },
    {
      icon: Coffee,
      name: "Hospitality",
      description:
        "Operations automation, guest experience, revenue optimization",
      color: "bg-orange-500",
    },
    {
      icon: Code,
      name: "Technology",
      description:
        "Software development, AI integration, digital transformation",
      color: "bg-purple-500",
    },
    {
      icon: Target,
      name: "Startups",
      description: "MVP development, scaling solutions, technical consulting",
      color: "bg-pink-500",
    },
    {
      icon: Shield,
      name: "Service Providers",
      description:
        "Process automation, client management, operational efficiency",
      color: "bg-teal-500",
    },
  ];

  const teamMembers = [
    {
      name: "Technical Leadership",
      role: "Computer Science & Engineering",
      description:
        "Advanced degrees in CS with focus on machine learning, distributed systems, and software architecture.",
      expertise: [
        "Machine Learning",
        "System Architecture",
        "Full-Stack Development",
      ],
    },
    {
      name: "Design & UX",
      role: "Architecture & Human-Centered Design",
      description:
        "Background in architectural design principles applied to digital interfaces and user experiences.",
      expertise: ["UX Design", "Information Architecture", "Design Systems"],
    },
    {
      name: "AI Research",
      role: "Neuroscience & Cognitive Computing",
      description:
        "PhD-level expertise in neuroscience informing AI model design and human-computer interaction.",
      expertise: ["AI Research", "Cognitive Computing", "Neural Networks"],
    },
  ];

  const differentiators = [
    {
      icon: Brain,
      title: "Academic Rigor",
      description:
        "Our solutions are grounded in computer science fundamentals, not marketing hype.",
    },
    {
      icon: Zap,
      title: "Proven Systems",
      description:
        "We deploy tested technologies that have delivered results across multiple industries.",
    },
    {
      icon: Users,
      title: "Technical Depth",
      description:
        "Led by developers and researchers, not sales teams or account managers.",
    },
    {
      icon: TrendingUp,
      title: "Measurable ROI",
      description:
        "Every solution is designed to cut admin time, unlock growth, and deliver quantifiable results.",
    },
  ];

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-primary/5 to-muted/20">
        <GradientBg />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4">
                About Arbieter
              </Badge>
              <h1 className="text-4xl lg:text-6xl mb-6 inset-shadow">
                We&apos;re Not Another AI Agency
              </h1>
              <div className="text-lg text-muted-foreground mb-8 leading-relaxed space-y-4">
                <p>
                  Arbieter is led by developers, designers, and technologists
                  with academic grounding in computer science, architecture, and
                  neuroscience, plus real-world experience improving operations
                  across industries — from hospitality to construction, from
                  startups to established service providers.
                </p>
                <p>
                  We don&apos;t throw buzzwords at problems. We deploy tested
                  systems that cut admin, unlock growth, and deliver measurable
                  ROI.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="text-base px-8"
                  onClick={() => router.push("/case-studies")}
                >
                  View Case Studies
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-base px-8"
                  onClick={() => router.push("/ai-integrations")}
                >
                  Explore AI Solutions
                </Button>
              </div>
            </div>
            <div className="relative">
              <ImageWithFallback
                src="/construction.avif"
                alt="University research lab with modern technology and computers"
                className="md:ml-10 w-full md:w-[550px] h-[400px] object-cover rounded-2xl shadow-2xl scale-110"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl lg:text-5xl mb-6 inset-shadow">
                Our Approach
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Unlike typical agencies that lead with marketing promises, we
                start with engineering principles and academic rigor. Our
                methodology is built on decades of combined experience in both
                theoretical computer science and practical implementation across
                diverse industries.
              </p>
              <div className="space-y-6">
                {approach.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1682084252808-7b147ffbdbb9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBibHVlcHJpbnR8ZW58MXx8fHwxNzU1MDkyMTYwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Modern architecture blueprint"
                className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-5xl mb-6 inset-shadow">
              What Sets Us Apart
            </h2>
            <p className="text-lg text-muted-foreground">
              The difference between Arbieter and typical agencies isn&apos;t
              just our technical expertise—it&apos;s our fundamental approach to
              problem-solving.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {differentiators.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <Card
                  key={index}
                  className="text-center p-6 bg-background hover:shadow-md transition-shadow"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-3">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-5xl mb-6 inset-shadow">
              Industries We&apos;ve Transformed
            </h2>
            <p className="text-lg text-muted-foreground">
              From startups to established enterprises, we&apos;ve deployed AI
              and development solutions across diverse sectors with measurable
              results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => {
              const IconComponent = industry.icon;
              return (
                <Card
                  key={index}
                  className="p-6 hover:shadow-lg transition-shadow group"
                >
                  <CardHeader className="pb-4">
                    <div
                      className={`w-12 h-12 ${industry.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                    >
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-lg">{industry.name}</CardTitle>
                    <CardDescription>{industry.description}</CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Expertise */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-5xl mb-6 inset-shadow">
              Leadership &amp; Expertise
            </h2>
            <p className="text-lg text-muted-foreground">
              Our interdisciplinary team brings together computer science,
              architecture, and neuroscience to create uniquely effective
              solutions.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="p-6 bg-background">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 rounded-full flex  border border-muted items-center justify-center mx-auto mb-4">
                    <Lightbulb className="h-12 w-12 text-muted inset-shadow" />
                  </div>
                  <CardTitle className="text-lg text-center">
                    {member.name}
                  </CardTitle>
                  <CardDescription className="text-center font-medium text-primary">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0 space-y-4">
                  <p className="text-sm text-muted-foreground text-center">
                    {member.description}
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm">Core Expertise:</h4>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {member.expertise.map((skill, skillIndex) => (
                        <Badge
                          key={skillIndex}
                          variant="secondary"
                          className="text-xs"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28  bg-radial-[at_50%_25%] from-slate-100 to-slate-300 to-105%">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center rounded-2xl p-12">
            <h2 className="text-3xl lg:text-4xl mb-6 inset-shadow">
              Ready to Work with Real Technologists?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Skip the sales pitch. Let&apos;s have a technical conversation
              about your challenges and explore solutions that actually work.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="text-base px-12 py-6"
                onClick={() => router.push("/contact")}
              >
                Let&apos;s Build
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-base px-8 py-6"
                onClick={() => router.push("/case-studies")}
              >
                View Our Work
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

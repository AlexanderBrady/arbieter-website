import { useState } from "react";
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
  Target,
  TrendingUp,
  Clock,
  DollarSign,
  Users,
  ArrowRight,
  Filter,
  CheckCircle,
  BarChart3,
} from "lucide-react";

export function CaseStudiesPage() {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const filters = [
    { id: "all", name: "All Projects" },
    { id: "construction", name: "Construction" },
    { id: "real-estate", name: "Real Estate" },
    { id: "hospitality", name: "Hospitality" },
    { id: "technology", name: "Technology" },
  ];

  const caseStudies = [
    {
      id: 1,
      title: "Smart Construction Scheduling System",
      industry: "construction",
      category: "Construction",
      client: "BuildTech Solutions",
      problem:
        "TEST project scheduling causing 30% delays and resource conflicts across 50+ active construction sites.",
      solution:
        "AI-powered scheduling platform with real-time resource optimization and predictive delay prevention.",
      image: "/caseStudy1.png",
      results: [
        { metric: "40%", label: "Reduction in project delays", icon: Clock },
        { metric: "$2.3M", label: "Annual cost savings", icon: DollarSign },
        { metric: "95%", label: "Resource utilization rate", icon: BarChart3 },
      ],
      technologies: ["Python", "TensorFlow", "React", "PostgreSQL", "AWS"],
      duration: "4 months",
      featured: true,
    },
    {
      id: 2,
      title: "Real Estate Analytics Platform",
      industry: "real-estate",
      category: "Real Estate",
      client: "PropertyFlow Investments",
      problem:
        "Inefficient property analysis leading to poor investment decisions and missed opportunities.",
      solution:
        "Comprehensive analytics dashboard with AI-powered market predictions and investment scoring.",
      image:
        "https://images.unsplash.com/photo-1720442617080-c25f9955194c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFsJTIwZXN0YXRlJTIwbW9kZXJuJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzU1MDkwNjU1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      results: [
        { metric: "60%", label: "Faster decision making", icon: TrendingUp },
        { metric: "35%", label: "ROI improvement", icon: DollarSign },
        { metric: "90%", label: "Investment accuracy", icon: Target },
      ],
      technologies: [
        "Vue.js",
        "Python",
        "scikit-learn",
        "PostgreSQL",
        "Docker",
      ],
      duration: "6 months",
      featured: false,
    },
    {
      id: 3,
      title: "Hotel Operations Automation",
      industry: "hospitality",
      category: "Hospitality",
      client: "Grand Hotels Group",
      problem:
        "Manual guest service processes and inefficient staff scheduling across 12 hotel properties.",
      solution:
        "Integrated automation platform for guest services, housekeeping, and staff management.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHN1Y2Nlc3MlMjBtZXRyaWNzJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc1NTAyMjQ0OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      results: [
        { metric: "50%", label: "Admin time reduction", icon: Clock },
        { metric: "25%", label: "Staff efficiency gain", icon: Users },
        { metric: "4.8/5", label: "Guest satisfaction score", icon: Target },
      ],
      technologies: ["React", "Node.js", "MongoDB", "Redis", "Stripe"],
      duration: "5 months",
      featured: false,
    },
    {
      id: 4,
      title: "SaaS Platform MVP Development",
      industry: "technology",
      category: "Technology",
      client: "InnovateTech Startup",
      problem:
        "Need to rapidly develop and launch MVP for AI-powered project management tool.",
      solution:
        "Full-stack development of MVP with AI features, user authentication, and payment processing.",
      image:
        "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwdGVhbXxlbnwxfHx8fDE3NTUwNjY5MzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      results: [
        { metric: "3 months", label: "Time to market", icon: Clock },
        { metric: "$1.2M", label: "Seed funding raised", icon: DollarSign },
        { metric: "5,000+", label: "Beta users acquired", icon: Users },
      ],
      technologies: [
        "Next.js",
        "TypeScript",
        "Supabase",
        "OpenAI API",
        "Tailwind",
      ],
      duration: "3 months",
      featured: true,
    },
    {
      id: 5,
      title: "Retail Chain Inventory AI",
      industry: "technology",
      category: "Technology",
      client: "SmartRetail Corp",
      problem:
        "Inventory management across 200+ stores causing stockouts and overstock situations.",
      solution:
        "AI-driven inventory prediction and automated reordering system with demand forecasting.",
      image:
        "https://images.unsplash.com/photo-1614680376739-414d95ff43df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMGNoYXRib3QlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzU1MDkyMTYwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      results: [
        { metric: "70%", label: "Stockout reduction", icon: TrendingUp },
        { metric: "$800K", label: "Annual savings", icon: DollarSign },
        { metric: "98%", label: "Forecast accuracy", icon: Target },
      ],
      technologies: [
        "Python",
        "TensorFlow",
        "Apache Kafka",
        "BigQuery",
        "Kubernetes",
      ],
      duration: "7 months",
      featured: false,
    },
    {
      id: 6,
      title: "Property Management Automation",
      industry: "real-estate",
      category: "Real Estate",
      client: "Metro Property Management",
      problem:
        "Manual tenant communications and maintenance requests for 500+ rental properties.",
      solution:
        "Automated tenant portal with AI chatbot for instant support and intelligent maintenance routing.",
      image:
        "https://images.unsplash.com/photo-1645459994498-44bb95c87b17?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwdGVjaCUyMHRlYW0lMjBjb2xsYWJvcmF0aW9ufGVufDF8fHx8MTc1NTA5MjE1OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      results: [
        {
          metric: "80%",
          label: "Query resolution automation",
          icon: CheckCircle,
        },
        { metric: "45%", label: "Staff time savings", icon: Clock },
        { metric: "92%", label: "Tenant satisfaction", icon: Users },
      ],
      technologies: ["React", "FastAPI", "OpenAI", "PostgreSQL", "AWS Lambda"],
      duration: "4 months",
      featured: false,
    },
  ];

  const filteredStudies =
    selectedFilter === "all"
      ? caseStudies
      : caseStudies.filter((study) => study.industry === selectedFilter);

  const featuredStudy =
    caseStudies.find((study) => study.featured) || caseStudies[0];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-primary/5 to-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-4">
              Case Studies
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Real Projects, Measurable Results
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Explore how we&apos;ve helped businesses across construction, real
              estate, hospitality, and technology achieve significant
              improvements in efficiency, cost reduction, and growth.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Featured Success Story
            </h2>
          </div>

          <Card className="overflow-hidden shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative h-64 lg:h-auto">
                <ImageWithFallback
                  src={featuredStudy.image}
                  alt={featuredStudy.title}
                  className="w-full h-full object-cover object-left"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-primary text-primary-foreground">
                    Featured
                  </Badge>
                </div>
              </div>
              <div className="p-8 lg:p-12">
                <Badge variant="outline" className="mb-4">
                  {featuredStudy.category}
                </Badge>
                <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                  {featuredStudy.title}
                </h3>
                <div className="space-y-4 mb-8">
                  <div>
                    <h4 className="font-semibold mb-2 text-sm text-muted-foreground uppercase tracking-wide">
                      Problem
                    </h4>
                    <p className="text-sm">{featuredStudy.problem}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-sm text-muted-foreground uppercase tracking-wide">
                      Solution
                    </h4>
                    <p className="text-sm">{featuredStudy.solution}</p>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {featuredStudy.results.map((result, index) => {
                    const IconComponent = result.icon;
                    return (
                      <div
                        key={index}
                        className="text-center p-3 bg-muted/50 rounded-lg"
                      >
                        <IconComponent className="h-5 w-5 text-primary mx-auto mb-2" />
                        <div className="text-lg font-bold text-primary">
                          {result.metric}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {result.label}
                        </div>
                      </div>
                    );
                  })}
                </div>
                <Button className="w-full">
                  View Full Case Study
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-2">
            <Filter className="h-4 w-4 text-muted-foreground mr-2" />
            {filters.map((filter) => (
              <Button
                key={filter.id}
                variant={selectedFilter === filter.id ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedFilter(filter.id)}
                className="text-sm"
              >
                {filter.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {filteredStudies.map((study) => (
              <Card
                key={study.id}
                className="overflow-hidden group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary">{study.category}</Badge>
                  </div>
                  {study.featured && (
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-primary text-primary-foreground">
                        Featured
                      </Badge>
                    </div>
                  )}
                </div>
                <CardHeader>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {study.title}
                  </CardTitle>
                  <CardDescription className="text-sm">
                    {study.client} • {study.duration}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-sm text-muted-foreground">
                    <strong>Challenge:</strong> {study.problem.substring(0, 80)}
                    ...
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {study.results.slice(0, 3).map((result, index) => {
                      const IconComponent = result.icon;
                      return (
                        <div
                          key={index}
                          className="text-center p-2 bg-muted/30 rounded"
                        >
                          <IconComponent className="h-4 w-4 text-primary mx-auto mb-1" />
                          <div className="text-sm font-semibold text-primary">
                            {result.metric}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {result.label}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {study.technologies.slice(0, 4).map((tech, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {study.technologies.length > 4 && (
                      <Badge variant="outline" className="text-xs">
                        +{study.technologies.length - 4} more
                      </Badge>
                    )}
                  </div>
                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  >
                    Read Full Case Study
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center bg-primary/5 rounded-2xl p-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Be Our Next Success Story?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how we can deliver similar results for your
              business. Every project starts with understanding your unique
              challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="text-base px-12 py-6"
                onClick={() => (window.location.hash = "contact")}
              >
                Work With Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-base px-8 py-6"
                onClick={() => (window.location.hash = "demo")}
              >
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

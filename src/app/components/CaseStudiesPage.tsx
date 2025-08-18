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
  ShieldCheck,
  Star,
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
      title: "RFI Management Dashboard",
      industry: "construction",
      category: "Construction",
      client: "Internal Dashboard",
      problem:
        "Construction teams were wasting hours managing RFIs manually, with delays, missed deadlines, and no clear visibility on SLA compliance.",
      solution:
        "An AI-powered RFI management dashboard with real-time tracking, SLA compliance monitoring, automated intake, and visual reporting, designed for web, tablet, and mobile use.",
      image: "/RFI.png",
      results: [
        {
          metric: "60%",
          label: "Admin time reduced per RFI",
          icon: TrendingUp,
        },
        { metric: "94%", label: "SLA compliance achieved", icon: ShieldCheck },
        { metric: "2x", label: "Faster project reporting", icon: BarChart3 },
      ],
      technologies: ["React", "TypeScript", "Tailwind CSS", "Python"],
      duration: "2 months",
      featured: false,
      link: "/RfiCS.pdf",
    },
    {
      id: 2,
      title: "Smart Construction Scheduling System",
      industry: "construction",
      category: "Construction",
      client: "GB Construction",
      problem:
        "Outdated systems slowed down scheduling, reporting, and coordination across multiple construction sites. Manual processes led to delays, missed updates, and rising operational costs.",
      solution:
        "A full stack digital platform built for scale. We delivered an integrated system covering project scheduling, resource tracking, and live dashboards. This gave GB Construction real time control and measurable savings across every site.",
      image: "/caseStudy1.png",
      results: [
        { metric: "40%", label: "Reduction in project delays", icon: Clock },
        { metric: "25%", label: "Staff efficiency gain", icon: Users },
        { metric: "95%", label: "Resource utilisation rate", icon: BarChart3 },
      ],
      technologies: ["Python", "TensorFlow", "React", "PostgreSQL", "AWS"],
      duration: "4 months",
      featured: true,
      link: "https://gbconstruction.in/",
    },
    {
      id: 3,
      title: "Full Stack Web Rebuild with Ads + GA4",
      industry: "hospitality",
      category: "Hospitality",
      client: "Off-Piste Ski and Snowboard",
      problem:
        "Outdated website with poor mobile experience, unclear messaging, and no proper conversion tracking—leading to low online bookings and missed growth opportunities.",
      solution:
        "Rebuilt the website with sharper UX, streamlined booking flow, mobile-first performance, and clearer brand storytelling. Implemented GA4 conversion tracking and integrated Google Ads retargeting campaigns to maximize ROI.",
      image: "/Off-piste1.png",
      results: [
        { metric: "2.9%", label: "Click-to-sale rate", icon: TrendingUp },
        { metric: "42%", label: "New customer acquisition lift", icon: Users },
        {
          metric: "18%",
          label: "Year-on-year online sales growth",
          icon: DollarSign,
        },
      ],
      technologies: ["React", "Node.js", "GA4", "Google Ads", "Stripe"],
      duration: "3 months",
      featured: false,
      link: "/OffpisteCS.pdf",
    },
    {
      id: 4,
      title: "SaaS Platform MVP Development",
      industry: "technology",
      category: "Technology",
      client: "Gearyo Startup",
      problem:
        "Need to rapidly develop and launch MVP for AI-powered adventure gear rental tool.",
      solution:
        "Full-stack development of MVP with AI features, user authentication, and payment processing.",
      image: "/gearyo1.png",
      results: [
        { metric: "3 months", label: "Time to market", icon: Clock },
        { metric: "97%", label: "Positive UX feedback", icon: TrendingUp },
        { metric: "100+", label: "Beta users acquired", icon: Users },
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
      link: "/GearyoCS.pdf",
    },
    {
      id: 5,
      title: "Immersive 3D Web Experience",
      industry: "technology",
      category: "Technology",
      client: "Coralis Inc",
      problem:
        "Traditional online stores lacked engagement and failed to replicate the in-store shopping experience, leading to low customer retention and conversion rates.",
      solution:
        "Developed a 3D immersive e-commerce platform where users can navigate virtual showrooms, interact with products in real-time, and personalize their shopping journey with AR/VR integration.",
      image: "/Coralis1.png",
      results: [
        {
          metric: "2.5x",
          label: "Increase in user engagement",
          icon: TrendingUp,
        },
        {
          metric: "40%",
          label: "Boost increase in conversion rates",
          icon: DollarSign,
        },
        { metric: "4.8/5", label: "Average customer satisfaction", icon: Star },
      ],
      technologies: ["Python", "React", "Unity WebGL", "AWS", "Node.js"],
      duration: "3 months",
      featured: false,
      link: "https://www.coralis.in/home",
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
      image: "/PMA.png",
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
      link: "/PMA.pdf",
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
      {/* Featured Case Study */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="overflow-hidden shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative h-64 lg:h-auto">
                <ImageWithFallback
                  src={featuredStudy.image}
                  alt={featuredStudy.title}
                  className="w-full h-full object-cover object-left"
                />
              </div>
              <div className="p-8 lg:p-12">
                <Badge variant="outline" className="mb-4">
                  {featuredStudy.category}
                </Badge>
                <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                  {featuredStudy.title}
                </h3>
                <div className="space-y-4 mb-8">
                  <p className="text-sm">{featuredStudy.problem}</p>
                  <p className="text-sm">{featuredStudy.solution}</p>
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
                <a
                  href={featuredStudy.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block"
                >
                  <Button className="w-full">
                    View Full Case Study
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
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
                  <a
                    href={study.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full block"
                  >
                    <Button
                      variant="outline"
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                    >
                      See Full Case Study
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

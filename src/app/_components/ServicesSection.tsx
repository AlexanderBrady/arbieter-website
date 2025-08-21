import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Bot, Code, Building2, ArrowRight, Users } from "lucide-react";

export function ServicesSection() {
  const services = [
    {
      icon: Bot,
      title: "AI Integrations",
      description:
        "Intelligent automation solutions that optimize workflows and decision-making processes across your business operations.",
      image: "/AI.avif",
      link: "#ai-integrations",
      features: [
        "Machine Learning Models",
        "Predictive Analytics",
        "Process Automation",
        "Data Intelligence",
      ],
    },
    {
      icon: Code,
      title: "Case Studies",
      description:
        "Real-world examples of successful AI implementations and custom solutions across various industries.",
      image: "/caseStudy1.png",
      link: "#case-studies",
      features: [
        "Proven Results",
        "ROI Examples",
        "Industry Insights",
        "Success Stories",
      ],
    },
    {
      icon: Users,
      title: "Consulting",
      description:
        "Strategic AI consulting to identify opportunities, map solutions, and create implementation roadmaps for your business.",
      image:
        "https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJhdGVnaWMlMjBwbGFubmluZyUyMHdvcmtzaG9wJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc1NTEwNTg2NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      link: "#consulting",
      features: [
        "Discovery Sessions",
        "Solution Mapping",
        "Implementation Roadmaps",
        "ROI Planning",
      ],
      isConsulting: true,
    },
  ];

  const industries = [
    {
      icon: Building2,
      title: "Construction",
      description:
        "Project management, safety monitoring, and resource optimisation solutions.",
      color: "bg-blue-500",
    },
    {
      icon: Building2,
      title: "Real Estate",
      description:
        "Property management, market analysis, and client relationship tools.",
      color: "bg-green-500",
    },
    {
      icon: Code,
      title: "Technology",
      description:
        "Software development, AI integration, and digital transformation.",
      color: "bg-purple-500",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Solutions That Drive Results
          </h2>
          <p className="text-lg text-muted-foreground">
            We specialize in AI integrations and custom development solutions
            designed specifically for construction, real estate, and technology
            companies.
          </p>
        </div>

        {/* Main Services */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card
                key={index}
                className="overflow-hidden group hover:shadow-lg transition-shadow"
              >
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={service.image}
                    alt={
                      service.title === "Consulting"
                        ? "Strategic AI planning workshop with professionals"
                        : service.title
                    }
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="bg-primary text-primary-foreground p-2 rounded-lg">
                      <IconComponent className="h-6 w-6" />
                    </div>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="text-sm text-muted-foreground flex items-center"
                      >
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="space-y-3">
                    {!service.isConsulting && (
                      <Button
                        variant="outline"
                        className="w-full group hover:scale-105 transition-all duration-200"
                        onClick={() =>
                          (window.location.hash = service.link.replace("#", ""))
                        }
                      >
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    )}
                    {service.isConsulting && (
                      <Button
                        className="w-full hover:scale-105 transition-all duration-200"
                        onClick={() => (window.location.hash = "consulting")}
                      >
                        Learn About AI Consulting
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Industries We Serve */}
        <div className="text-center mb-12">
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">
            Industries We Serve
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Specialized expertise across key sectors with deep understanding of
            industry challenges and opportunities.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {industries.map((industry, index) => {
            const IconComponent = industry.icon;
            return (
              <Card
                key={index}
                className="text-center p-6 hover:shadow-md transition-shadow"
              >
                <div
                  className={`w-12 h-12 ${industry.color} rounded-lg mx-auto mb-4 flex items-center justify-center`}
                >
                  <IconComponent className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-semibold mb-2">{industry.title}</h4>
                <p className="text-sm text-muted-foreground">
                  {industry.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

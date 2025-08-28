"use client";
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
  MessageCircle,
  Users,
  Wrench,
  Database,
  CheckCircle,
  ArrowRight,
  Zap,
  Target,
  Lightbulb,
  Settings,
  BarChart3,
  FileText,
} from "lucide-react";
import { useRouter } from "next/navigation";
import GradientBg from "./GradientBg";
import AutomationSection from "./AutomationSection";
import { FlowDiagram, socialMediaFlow } from "./automation-flows";

const solutions = [
  {
    icon: MessageCircle,
    title: "Lead-Chasing Chatbots",
    description:
      "AI chat agents that instantly engage with hot leads, answer questions, and book calls or viewings without human delay.",
    features: [
      "Instant lead response (< 30 seconds)",
      "Automated appointment scheduling",
      "Qualification questionnaires",
      "CRM integration and lead scoring",
    ],
    benefits: [
      "80% faster lead response time",
      "45% increase in qualified leads",
      "24/7 availability",
    ],
    useCases: [
      "Real estate property inquiries",
      "Construction project consultations",
      "Service bookings and quotes",
    ],
  },
  {
    icon: Users,
    title: "Internal Copilots",
    description:
      "AI assistants that help your team process data, draft reports, and manage workflows with intelligent automation.",
    features: [
      "Document analysis and summarization",
      "Report generation and formatting",
      "Data processing and insights",
      "Workflow automation and reminders",
    ],
    benefits: [
      "60% reduction in admin time",
      "Consistent report quality",
      "Error reduction in data processing",
    ],
    useCases: [
      "Project status reports",
      "Financial analysis summaries",
      "Compliance documentation",
    ],
  },
  {
    icon: Wrench,
    title: "Industry-Specific Tools",
    description:
      "Tailored AI solutions for construction, real estate, and service businesses to reduce admin and speed up decision-making.",
    features: [
      "Custom AI models for your industry",
      "Specialized workflows and processes",
      "Industry compliance integration",
      "Predictive analytics and forecasting",
    ],
    benefits: [
      "Domain-specific accuracy",
      "Regulatory compliance built-in",
      "Faster decision making",
    ],
    useCases: [
      "Construction safety monitoring",
      "Property valuation automation",
      "Resource allocation optimization",
    ],
  },
  {
    icon: Database,
    title: "Data Integrations",
    description:
      "AI systems that connect seamlessly with your CRM, ERP, and other business tools for unified intelligent operations.",
    features: [
      "Multi-platform data synchronization",
      "Real-time analytics and dashboards",
      "Automated data cleansing",
      "Custom API development",
    ],
    benefits: [
      "Single source of truth",
      "Real-time business insights",
      "Eliminated data silos",
    ],
    useCases: [
      "CRM and project management sync",
      "Financial and operational reporting",
      "Customer journey tracking",
    ],
  },
];

const buildProcess = [
  {
    step: "01",
    title: "Problem Analysis",
    description:
      "We start by deeply understanding your specific business challenges and workflow pain points.",
    icon: Target,
  },
  {
    step: "02",
    title: "Technical Design",
    description:
      "Our engineers design AI solutions grounded in proven algorithms and your existing tech stack.",
    icon: Brain,
  },
  {
    step: "03",
    title: "Rapid Prototyping",
    description:
      "We build working prototypes quickly to validate concepts before full development.",
    icon: Zap,
  },
  {
    step: "04",
    title: "Integration & Testing",
    description:
      "Seamless integration with your existing systems followed by rigorous testing and optimization.",
    icon: Settings,
  },
  {
    step: "05",
    title: "Deployment & Support",
    description:
      "We deploy your AI system and provide ongoing monitoring, updates, and technical support.",
    icon: CheckCircle,
  },
];

const realWorldExamples = [
  {
    title: "Construction Lead Bot",
    industry: "Construction",
    result: "300% increase in qualified leads",
    description:
      "AI chatbot that qualifies construction leads and books site consultations automatically.",
    icon: MessageCircle,
  },
  {
    title: "Property Analysis Copilot",
    industry: "Real Estate",
    result: "70% faster property reports",
    description:
      "Internal AI that analyzes market data and generates comprehensive property investment reports.",
    icon: FileText,
  },
  {
    title: "Hotel Operations AI",
    industry: "Hospitality",
    result: "50% admin time savings",
    description:
      "Industry-specific tool that automates guest services and optimizes housekeeping schedules.",
    icon: Wrench,
  },
  {
    title: "Multi-System Dashboard",
    industry: "Technology",
    result: "Unified data across 5 platforms",
    description:
      "Data integration connecting CRM, project management, and financial systems in real-time.",
    icon: Database,
  },
];

export function AIIntegrationsPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-primary/5 to-muted/20">
        <GradientBg />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* LEFT: text + buttons */}
            <div className="relative z-10">
              <Badge variant="secondary" className="mb-4">
                AI & Automation
              </Badge>
              <h1 className="text-4xl lg:text-6xl mb-6 inset-shadow">
                Custom AI & Automation Solutions That Work in the Real World
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We build AI systems that solve actual business problems—not just
                impressive demos...
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="text-base px-8 hover:scale-105 transition-all duration-200"
                  onClick={() => router.push("/contact")}
                >
                  Let&rsquo;s Build Your AI System
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="text-base px-8 hover:scale-105 hover:border-primary hover:text-primary transition-all duration-200"
                  onClick={() => router.push("/consulting")}
                >
                  Learn About AI Consulting
                </Button>
              </div>
            </div>

            {/* RIGHT: image */}
            <div className="relative z-0 mt-8 lg:mt-0 shadow-2xl">
             <FlowDiagram flow={socialMediaFlow} scale={2} className="max-h-[400px]"/>
            </div>
          </div>
        </div>
      </section>

      {/* AI Solutions Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-5xl mb-6 inset-shadow">
              Four Types of AI Solutions We Build
            </h2>
            <p className="text-lg text-muted-foreground">
              Each solution type is designed to address specific business
              challenges with proven AI technologies and seamless integration
              capabilities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => {
              const IconComponent = solution.icon;
              return (
                <Card
                  key={index}
                  className="p-6 hover:shadow-lg transition-shadow h-full"
                >
                  <CardHeader className="pb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{solution.title}</CardTitle>
                    <CardDescription className="text-base">
                      {solution.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0 space-y-6">
                    <div>
                      <h4 className="font-medium mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {solution.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="flex items-start text-sm"
                          >
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-3">Business Benefits:</h4>
                      <div className="space-y-2">
                        {solution.benefits.map((benefit, benefitIndex) => (
                          <div
                            key={benefitIndex}
                            className="flex items-center p-2 bg-green-50 rounded-lg"
                          >
                            <BarChart3 className="h-4 w-4 text-green-600 mr-2" />
                            <span className="text-sm font-medium text-green-700">
                              {benefit}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium mb-3">Common Use Cases:</h4>
                      <div className="space-y-1">
                        {solution.useCases.map((useCase, useCaseIndex) => (
                          <div
                            key={useCaseIndex}
                            className="text-sm text-muted-foreground"
                          >
                            • {useCase}
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Real World Examples */}
     <AutomationSection />

      {/* How We Build Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl lg:text-5xl mb-6 inset-shadow">
                How We Build AI Solutions
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our development process combines rigorous engineering with rapid
                iteration. We start with your business problem, not the latest
                AI trend, ensuring every solution delivers practical value.
              </p>
              <div className="space-y-6">
                {buildProcess.map((step, index) => {
                  const IconComponent = step.icon;
                  return (
                    <div key={index} className="flex items-start">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <div className="flex items-center mb-2">
                          <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded mr-3">
                            {step.step}
                          </span>
                          <h3 className="font-semibold">{step.title}</h3>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1682084252808-7b147ffbdbb9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBibHVlcHJpbnR8ZW58MXx8fHwxNzU1MDkyMTYwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Technical architecture blueprint"
                className="w-full h-[500px] object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Technical Approach */}
      {/* <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Technical Excellence
            </h2>
            <p className="text-lg text-muted-foreground">
              Our AI solutions are built on proven technologies and engineering
              best practices.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 text-center bg-background">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-3">Advanced ML Models</h3>
              <p className="text-sm text-muted-foreground">
                Custom machine learning models trained on your specific data and
                use cases for maximum accuracy and relevance.
              </p>
            </Card>

            <Card className="p-6 text-center bg-background">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Settings className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold mb-3">Seamless Integration</h3>
              <p className="text-sm text-muted-foreground">
                API-first architecture that connects with your existing systems
                without disrupting current workflows.
              </p>
            </Card>

            <Card className="p-6 text-center bg-background">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-semibold mb-3">Production Ready</h3>
              <p className="text-sm text-muted-foreground">
                Enterprise-grade security, scalability, and monitoring built in
                from day one.
              </p>
            </Card>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center bg-primary/5 rounded-2xl p-12">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Lightbulb className="h-10 w-10 text-primary" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Let&rsquo;s Build Your AI System
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Ready to deploy AI that actually works? Let&rsquo;s discuss your
              specific challenges and design a solution that delivers real
              business value.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="text-base px-12 py-6"
                onClick={() => router.push("/contact")}
              >
                Start Your AI Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-base px-8 py-6"
                onClick={() => router.push("/demo")}
              >
                Schedule Technical Discussion
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

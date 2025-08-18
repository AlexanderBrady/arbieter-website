import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import {
  CheckCircle,
  ArrowRight,
  Mail,
  Calendar,
  Globe,
  Shield,
  Copy,
  Check,
} from "lucide-react";

export function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    role: "",
    phone: "",
    services: [] as string[],
    industry: "",
    timeline: "",
    budget: "",
    summary: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [loading, setLoading] = useState(false);

  const serviceOptions = [
    "AI Chatbots for Leads",
    "Internal Copilots",
    "Data Integrations",
    "Automation",
    "Custom Development",
    "Other",
  ];

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.company.trim()) {
      newErrors.company = "Company is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleServiceToggle = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (result.ok) {
        setIsSubmitted(true);
      } else {
        alert("Error: " + result.error);
      }
    } catch (err) {
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  const isFormValid =
    formData.fullName.trim() &&
    formData.email.trim() &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) &&
    formData.company.trim();

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("alex@arbieter.com");
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch {
      console.log("Copy failed");
    }
  };

  const faqItems = [
    {
      question: "How quickly can you start?",
      answer: "Discovery within 3–5 days; most builds begin in 2 weeks.",
    },
    {
      question: "Do you integrate with our tools?",
      answer: "Yes — CRM, ERP, property portals, project tools, data lakes.",
    },
    {
      question: "What does working together look like?",
      answer: "Define, prototype, validate, ship, iterate.",
    },
    {
      question: "What is your typical project timeline?",
      answer:
        "Most AI integrations take 4-12 weeks. Custom development varies based on complexity, but we provide detailed timelines during discovery.",
    },
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background">
        {/* Success State */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
                <CheckCircle className="h-10 w-10 text-green-600" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Thanks — we&apos;re on it.
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                You&apos;ll hear from us within one business day. Want to move
                faster? Book a live demo.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-base px-8">
                  Book a Demo
                  <Calendar className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-base px-8"
                  onClick={() => (window.location.hash = "")}
                >
                  Back to Home
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-primary/5 to-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-4">
              Contact Us
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Let&apos;s Build Something That Actually Ships
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Tell us about your goals. We&apos;ll propose a pragmatic plan,
              timeline, and budget.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Contact Form */}
            <div className="lg:col-span-2">
              <Card className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name and Email Row */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="fullName" className="text-sm font-medium">
                        Full Name *
                      </Label>
                      <Input
                        id="fullName"
                        value={formData.fullName}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            fullName: e.target.value,
                          }))
                        }
                        className={`mt-2 ${
                          errors.fullName ? "border-destructive" : ""
                        }`}
                        placeholder="Your full name"
                      />
                      {errors.fullName && (
                        <p className="text-sm text-destructive mt-1">
                          {errors.fullName}
                        </p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-sm font-medium">
                        Work Email *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            email: e.target.value,
                          }))
                        }
                        className={`mt-2 ${
                          errors.email ? "border-destructive" : ""
                        }`}
                        placeholder="your@company.com"
                      />
                      {errors.email && (
                        <p className="text-sm text-destructive mt-1">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Company and Role Row */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="company" className="text-sm font-medium">
                        Company *
                      </Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            company: e.target.value,
                          }))
                        }
                        className={`mt-2 ${
                          errors.company ? "border-destructive" : ""
                        }`}
                        placeholder="Your company name"
                      />
                      {errors.company && (
                        <p className="text-sm text-destructive mt-1">
                          {errors.company}
                        </p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="role" className="text-sm font-medium">
                        Role/Title
                      </Label>
                      <Input
                        id="role"
                        value={formData.role}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            role: e.target.value,
                          }))
                        }
                        className="mt-2"
                        placeholder="e.g., CTO, Operations Manager"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <Label htmlFor="phone" className="text-sm font-medium">
                      Phone (Optional)
                    </Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          phone: e.target.value,
                        }))
                      }
                      className="mt-2"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>

                  {/* Services Multi-Select */}
                  <div>
                    <Label className="text-sm font-medium">
                      Select Services (Choose all that apply)
                    </Label>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {serviceOptions.map((service) => (
                        <button
                          key={service}
                          type="button"
                          onClick={() => handleServiceToggle(service)}
                          className={`px-3 py-2 text-sm rounded-lg border transition-colors ${
                            formData.services.includes(service)
                              ? "bg-primary text-primary-foreground border-primary"
                              : "bg-background border-border hover:border-primary"
                          }`}
                        >
                          {service}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Industry and Timeline Row */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="industry" className="text-sm font-medium">
                        Industry
                      </Label>
                      <Select
                        onValueChange={(value) =>
                          setFormData((prev) => ({ ...prev, industry: value }))
                        }
                      >
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Select your industry" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="construction">
                            Construction
                          </SelectItem>
                          <SelectItem value="real-estate">
                            Real Estate
                          </SelectItem>
                          <SelectItem value="hospitality">
                            Hospitality
                          </SelectItem>
                          <SelectItem value="professional-services">
                            Professional Services
                          </SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label className="text-sm font-medium">
                        Project Timeline
                      </Label>
                      <RadioGroup
                        value={formData.timeline}
                        onValueChange={(value) =>
                          setFormData((prev) => ({ ...prev, timeline: value }))
                        }
                        className="mt-3 space-y-2"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="asap" id="asap" />
                          <Label htmlFor="asap" className="text-sm">
                            ASAP
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="1-3-months" id="1-3-months" />
                          <Label htmlFor="1-3-months" className="text-sm">
                            1–3 months
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="3-6-months" id="3-6-months" />
                          <Label htmlFor="3-6-months" className="text-sm">
                            3–6 months
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="exploring" id="exploring" />
                          <Label htmlFor="exploring" className="text-sm">
                            Exploring
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>
                  </div>

                  {/* Project Summary */}
                  <div>
                    <Label htmlFor="summary" className="text-sm font-medium">
                      Project Summary
                    </Label>
                    <p className="text-xs text-muted-foreground mt-1 mb-2">
                      What problem are we solving? Current tools, data sources,
                      success metric.
                    </p>
                    <Textarea
                      id="summary"
                      value={formData.summary}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          summary: e.target.value,
                        }))
                      }
                      className="mt-1 min-h-[100px]"
                      placeholder="Tell us about your current challenges, what tools you're using, and how you'll measure success..."
                    />
                  </div>

                  {/* Privacy Note */}
                  <div className="text-xs text-muted-foreground">
                    We only use this info to contact you about your project.
                  </div>

                  {/* Submit Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Button
                      type="submit"
                      size="lg"
                      className="text-base px-8"
                      disabled={!isFormValid || loading}
                    >
                      {loading ? "Sending..." : "Request Proposal"}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <Button
                      type="button"
                      variant="ghost"
                      size="lg"
                      className="text-base"
                      onClick={() => (window.location.hash = "demo")}
                    >
                      Book a Demo
                    </Button>
                  </div>
                </form>
              </Card>
            </div>

            {/* Direct Contact Sidebar */}
            <div className="space-y-6">
              <Card className="p-6">
                <CardHeader className="px-0 pt-0">
                  <CardTitle className="text-lg">Direct Contact</CardTitle>
                </CardHeader>
                <CardContent className="px-0 space-y-4">
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Mail className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">alex@arbieter.com</span>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={copyEmail}
                        className="h-8 w-8 p-0"
                      >
                        {copiedEmail ? (
                          <Check className="h-4 w-4 text-green-600" />
                        ) : (
                          <Copy className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                  </div>

                  {/*
                  <Button className="w-full" variant="outline">
                    <Calendar className="mr-2 h-4 w-4" />
                    Book a 20-min call
                  </Button>
                  */}

                  <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                    <Globe className="h-4 w-4" />
                    <span>Operating globally</span>
                  </div>

                  <div className="flex items-start space-x-3 text-xs text-muted-foreground">
                    <Shield className="h-4 w-4 mt-0.5 flex-shrink-0" />
                    <span>
                      NDA-friendly. We work with startups and established firms.
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border rounded-lg px-6"
                >
                  <AccordionTrigger className="hover:no-underline py-4">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-12 border-t">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-muted-foreground mb-4">Prefer examples?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="outline"
                onClick={() => (window.location.hash = "case-studies")}
              >
                See Case Studies
              </Button>
              <Button
                variant="outline"
                onClick={() => (window.location.hash = "ai-integrations")}
              >
                Explore AI Solutions
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

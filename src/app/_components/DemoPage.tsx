"use client";

import { useState, useMemo } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  Play,
  Calendar,
  CheckCircle,
  ArrowRight,
  Clock,
  Users,
  Video,
  PhoneCall,
} from "lucide-react";
import { useRouter } from "next/navigation";
import ThreeBlob from "./ThreeBlob";

export function DemoPage() {
  const [isScheduled, setIsScheduled] = useState(false);
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedDate, setSelectedDate] = useState(""); // YYYY-MM-DD
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // NEW: contact fields
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");

  const demoOptions = [
    {
      title: "Live Demo Call",
      duration: "20 minutes",
      description:
        "Personal walkthrough with our team showing AI solutions tailored to your industry",
      icon: Video,
      features: [
        "Custom demo based on your needs",
        "Live Q&A with our experts",
        "See real implementations",
        "Discuss your specific use case",
      ],
    },
    {
      title: "Quick Product Tour COMING SOON",
      duration: "5 minutes",
      description:
        "Interactive self-guided tour of our key AI integration capabilities",
      icon: Play,
      features: [
        "Immediate access",
        "Interactive walkthrough",
        "Key feature highlights",
        "No commitment required",
      ],
    },
  ];

  const timeSlots = [
    "9:00 AM GMT",
    "11:00 AM GMT",
    "2:00 PM GMT",
    "4:00 PM GMT",
    "6:00 PM GMT",
  ];

  const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;

  // Today in LOCAL timezone -> YYYY-MM-DD (prevents past dates)
  const todayISO = useMemo(() => {
    const d = new Date();
    d.setMinutes(d.getMinutes() - d.getTimezoneOffset()); // shift to local
    return d.toISOString().split("T")[0];
  }, []);

  // "9:00 AM GMT" -> "09:00"
  function to24Hour(slot: string) {
    const clean = slot.replace(/\s*GMT/i, "").trim(); // "9:00 AM"
    const m = clean.match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i);
    if (!m) return "";
    const [, hh, mm, ap] = m; // use const + skip the first match
    let h = parseInt(hh, 10);
    const isPM = ap.toUpperCase() === "PM";
    if (h === 12) h = isPM ? 12 : 0; // 12AM => 00, 12PM => 12
    else if (isPM) h += 12;
    return `${String(h).padStart(2, "0")}:${mm}`;
  }

  async function scheduleDemo() {
    if (!fullName || !email) {
      alert("Please enter your name and email.");
      return;
    }
    if (!selectedDate || !selectedTime) {
      alert("Please pick a date and time.");
      return;
    }
    const time24 = to24Hour(selectedTime);
    if (!time24) {
      alert("Time format not recognized.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          email,
          company,
          preferredDateISO: selectedDate, // YYYY-MM-DD
          preferredTime: time24, // HH:mm (24h)
          timezone: tz,
        }),
      });
      const j = await res.json();
      if (!res.ok || !j.ok) throw new Error(j.error || "Failed to send");
      setIsScheduled(true);
    } catch (e) {
      alert((e as Error).message || "Failed to schedule. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  const canSubmit =
    !!fullName && !!email && !!selectedDate && !!selectedTime && !loading;

  if (isScheduled) {
    return (
      <div className="min-h-screen bg-background">
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
                <CheckCircle className="h-10 w-10 text-green-600" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Demo Scheduled Successfully
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Your demo is confirmed for {selectedDate} at {selectedTime}.
                We&apos;ll send you a calendar invite and meeting link shortly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="text-base px-8"
                  onClick={() => router.push("/contact")}
                >
                  Contact Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-base px-8"
                  onClick={() => router.push("/")}
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
      {/*
      {/* Hero Section */}
      {/*
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-primary/5 to-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-4">
              Product Demo
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              See Arbieter AI in Action
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Experience how our AI solutions transform construction, real
              estate, and tech operations. Choose your preferred demo format
              below.
            </p>
          </div>
        </div>
      </section>
      */}

      {/* Demo Options */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {demoOptions.map((option, index) => {
              const IconComponent = option.icon;
              const isPrimary = index === 0;

              return (
                <Card
                  key={index}
                  className={`p-8  ${
                    isPrimary
                      ? "ring-2 ring-primary relative overflow-hidden "
                      : ""
                  } hover:shadow-lg transition-shadow`}
                >
                  {isPrimary && <ThreeBlob />}
                  <CardHeader
                    className={`pb-6 ${isPrimary ? "relative z-10" : ""}`}
                  >
                    <div
                      className={`w-16 h-16 ${
                        isPrimary ? "bg-primary" : "bg-muted"
                      } rounded-lg flex items-center justify-center mb-4`}
                    >
                      <IconComponent
                        className={`h-8 w-8 ${
                          isPrimary
                            ? "text-primary-foreground"
                            : "text-foreground"
                        }`}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl">{option.title}</CardTitle>
                      <Badge
                        variant={isPrimary ? "secondary" : "secondary"}
                        className={
                          isPrimary
                            ? "bg-black/20 text-white border-white/30 backdrop-blur-md"
                            : ""
                        }
                      >
                        <Clock className="w-3 h-3 mr-1" />
                        {option.duration}
                      </Badge>
                    </div>
                    <CardDescription className="text-base">
                      {option.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent
                    className={`space-y-6 ${isPrimary ? "relative z-10" : ""}`}
                  >
                    <div>
                      <h4 className="font-medium mb-3">
                        What&apos;s included:
                      </h4>
                      <ul className="space-y-2">
                        {option.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="text-sm text-muted-foreground flex items-center"
                          >
                            <CheckCircle className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {isPrimary ? (
                      <div className="space-y-4">
                        {/* NEW: Required contact fields */}
                        <Label className="font-medium">Full Name *</Label>
                        <Input
                          type="text"
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          placeholder="Your name"
                          required
                        />

                        <Label className="font-medium">Email *</Label>
                        <Input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="you@company.com"
                          required
                        />

                        <Label className="font-medium">Company</Label>
                        <Input
                          type="text"
                          value={company}
                          onChange={(e) => setCompany(e.target.value)}
                          placeholder="Company name (optional)"
                        />

                        <Label className="font-medium mt-2">
                          Select preferred date:
                        </Label>
                        <Input
                          type="date"
                          value={selectedDate}
                          min={todayISO} // 🚫 prevents past dates
                          onChange={(e) => setSelectedDate(e.target.value)}
                        />
                        <div className="text-xs text-muted-foreground">
                          Your timezone: <b>{tz}</b>
                        </div>

                        <Label className="font-medium mt-4 block">
                          Select preferred time:
                        </Label>
                        <div className="grid grid-cols-2 gap-2">
                          {timeSlots.map((slot) => (
                            <button
                              key={slot}
                              type="button"
                              onClick={() => setSelectedTime(slot)}
                              className={`p-3 text-sm rounded-lg border transition-colors ${
                                selectedTime === slot
                                  ? "bg-primary text-primary-foreground border-primary"
                                  : "bg-background border-border hover:border-primary"
                              }`}
                            >
                              {slot}
                            </button>
                          ))}
                        </div>

                        <Button
                          className={`w-full ${
                            isPrimary
                              ? "bg-white/20 text-black border-black hover:bg-white/30 backdrop-blur-sm"
                              : ""
                          }`}
                          size="lg"
                          disabled={!canSubmit}
                          onClick={scheduleDemo}
                        >
                          <Calendar className="mr-2 h-4 w-4" />
                          {loading ? "Scheduling..." : "Schedule Live Demo"}
                        </Button>
                      </div>
                    ) : (
                      <Button variant="outline" className="w-full" size="lg">
                        <Play className="mr-2 h-4 w-4" />
                        Start Interactive Tour COMING SOON
                      </Button>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Demo Section */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Why Schedule a Demo?
              </h2>
              <p className="text-lg text-muted-foreground">
                See exactly how Arbieter&apos;s AI solutions can transform your
                specific business processes.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Personalized Experience</h3>
                <p className="text-sm text-muted-foreground">
                  Tailored demonstration focusing on your industry challenges
                  and specific use cases.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <PhoneCall className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Expert Guidance</h3>
                <p className="text-sm text-muted-foreground">
                  Direct access to our technical team for real-time questions
                  and insights.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Proven Results</h3>
                <p className="text-sm text-muted-foreground">
                  See real case studies and ROI examples from similar businesses
                  in your sector.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center bg-primary/5 rounded-2xl p-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Transform Your Operations?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join hundreds of businesses already leveraging AI to streamline
              operations, reduce costs, and accelerate growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
                View Case Studies
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

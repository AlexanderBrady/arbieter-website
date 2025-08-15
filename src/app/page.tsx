"use client";

import { useEffect, useMemo, useState } from "react";

// Adjust these imports to your actual paths
import { Header } from "@/app/components/Header";
import { HeroSection } from "@/app/components/HeroSection";
import { ServicesSection } from "@/app/components/ServicesSection";
import { TestimonialsSection } from "@/app/components/TestimonialsSection";
import { Footer } from "@/app/components/Footer";
import { AIIntegrationsPage } from "@/app/components/AIIntegrationsPage";
import { CaseStudiesPage } from "@/app/components/CaseStudiesPage";
import { AboutPage } from "@/app/components/AboutPage";
import { ContactPage } from "@/app/components/ContactPage";
import { DemoPage } from "@/app/components/DemoPage";
import { ConsultingPage } from "@/app/components/ConsultingPage";
import { BlogPage } from "@/app/components/BlogPage";
import { LegalPage } from "@/app/components/LegalPage";

type HashPage =
  | "home"
  | "ai-integrations"
  | "case-studies"
  | "about"
  | "contact"
  | "demo"
  | "consulting"
  | "blog"
  | "legal";

const KNOWN: HashPage[] = [
  "home",
  "ai-integrations",
  "case-studies",
  "about",
  "contact",
  "demo",
  "consulting",
  "blog",
  "legal",
];

export default function Home() {
  // Avoid reading window during SSR; set initial on mount
  const [currentPage, setCurrentPage] = useState<HashPage>("home");

  // Parse current hash -> page (defaults to home)
  const readHash = () => {
    const raw = (typeof window !== "undefined" ? window.location.hash : "")
      .replace(/^#/, "")
      .trim();
    return (KNOWN.includes(raw as HashPage) ? raw : "home") as HashPage;
  };

  // Set initial page + listen for changes
  useEffect(() => {
    setCurrentPage(readHash());
    const onHash = () => {
      setCurrentPage(readHash());
      window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Map internal links to hash equivalents (keeps your current nav working)
  const linkMap = useMemo<Record<string, string>>(
    () => ({
      "/": "#",
      "/ai-integrations": "#ai-integrations",
      "/case-studies": "#case-studies",
      "/about": "#about",
      "/contact": "#contact",
      "/demo": "#demo",
      "/consulting": "#consulting",
      "/blog": "#blog",
      "/legal": "#legal",
    }),
    []
  );

  useEffect(() => {
    const rewrite = () => {
      document
        .querySelectorAll<HTMLAnchorElement>('a[href^="/"]')
        .forEach((a) => {
          const href = a.getAttribute("href") || "";
          const to = linkMap[href];
          if (to && a.getAttribute("href") !== to) a.setAttribute("href", to);
        });
    };
    rewrite();
    // Run again after child components mount
    const t = setTimeout(rewrite, 50);
    return () => clearTimeout(t);
  }, [currentPage, linkMap]);

  const renderPage = () => {
    switch (currentPage) {
      case "ai-integrations":
        return <AIIntegrationsPage />;
      case "case-studies":
        return <CaseStudiesPage />;
      case "about":
        return <AboutPage />;
      case "contact":
        return <ContactPage />;
      case "demo":
        return <DemoPage />;
      case "consulting":
        return <ConsultingPage />;
      case "blog":
        return <BlogPage />;
      case "legal":
        return <LegalPage />;
      case "home":
      default:
        return (
          <>
            <HeroSection />
            <ServicesSection />
            <TestimonialsSection />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>{renderPage()}</main>
      <Footer />
    </div>
  );
}

"use client";

import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ChevronUp, Shield, FileText, Cookie, Globe } from "lucide-react";

export function LegalPage() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const sections = [
    { id: "privacy", title: "Privacy Policy", icon: Shield },
    { id: "terms", title: "Terms of Service", icon: FileText },
    { id: "cookies", title: "Cookie Policy", icon: Cookie },
    { id: "gdpr", title: "GDPR Compliance", icon: Globe },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-primary/5 to-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-4">
              Legal Information
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Legal Policies & Terms
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our commitment to transparency, privacy, and compliance. Find all
              legal information and policies governing our services.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-12 bg-muted/30 border-b sticky top-16 z-40 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {sections.map((section) => {
              const IconComponent = section.icon;
              return (
                <Button
                  key={section.id}
                  variant="outline"
                  size="sm"
                  onClick={() =>
                    document
                      .getElementById(section.id)
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="hover:scale-105 transition-all duration-200"
                >
                  <IconComponent className="h-4 w-4 mr-2" />
                  {section.title}
                </Button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Legal Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Privacy Policy */}
          <section id="privacy" className="scroll-mt-32">
            <div className="flex items-center mb-8">
              <Shield className="h-8 w-8 text-primary mr-4" />
              <h2 className="text-3xl lg:text-4xl font-bold">Privacy Policy</h2>
            </div>

            <div className="prose prose-lg max-w-none space-y-6">
              <p className="text-muted-foreground">
                <strong>Last updated:</strong> 1st January 2025
              </p>

              <div>
                <h3 className="text-xl font-semibold mb-4">
                  1. Information We Collect
                </h3>
                <p>
                  We collect information you provide directly to us, such as
                  when you create an account, contact us, or use our services.
                  This may include:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>
                    Contact information (name, email address, phone number)
                  </li>
                  <li>Business information (company name, industry, role)</li>
                  <li>Communication preferences and enquiry details</li>
                  <li>
                    Usage data and analytics from our website and services
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">
                  2. How We Use Your Information
                </h3>
                <p>We use the information we collect to:</p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process transactions and send related information</li>
                  <li>Send technical notices, updates, and support messages</li>
                  <li>
                    Respond to your enquiries and provide customer support
                  </li>
                  <li>
                    Monitor and analyse usage and trends to improve user
                    experience
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">
                  3. Information Sharing
                </h3>
                <p>
                  We do not sell, trade, or otherwise transfer your personal
                  information to third parties without your consent, except as
                  described in this policy. We may share information with:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>
                    Service providers who assist us in operating our business
                  </li>
                  <li>Professional advisers such as lawyers and accountants</li>
                  <li>Regulatory authorities when required by law</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">4. Data Security</h3>
                <p>
                  We implement appropriate technical and organisational measures
                  to protect your personal information against unauthorised
                  access, alteration, disclosure, or destruction.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">5. Your Rights</h3>
                <p>
                  You have the right to access, update, or delete your personal
                  information. You may also object to certain processing
                  activities. Contact us to exercise these rights.
                </p>
              </div>
            </div>
          </section>

          {/* Terms of Service */}
          <section id="terms" className="scroll-mt-32">
            <div className="flex items-center mb-8">
              <FileText className="h-8 w-8 text-primary mr-4" />
              <h2 className="text-3xl lg:text-4xl font-bold">
                Terms of Service
              </h2>
            </div>

            <div className="prose prose-lg max-w-none space-y-6">
              <p className="text-muted-foreground">
                <strong>Last updated:</strong> 1st January 2025
              </p>

              <div>
                <h3 className="text-xl font-semibold mb-4">
                  1. Agreement to Terms
                </h3>
                <p>
                  By accessing or using our services, you agree to be bound by
                  these Terms of Service and our Privacy Policy. If you disagree
                  with any part of these terms, you may not access our services.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">
                  2. Description of Services
                </h3>
                <p>
                  Arbieter provides AI consulting, development, and integration
                  services. We help businesses identify, implement, and optimise
                  AI solutions tailored to their specific needs.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">
                  3. User Responsibilities
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>
                    Provide accurate and complete information when using our
                    services
                  </li>
                  <li>Comply with all applicable laws and regulations</li>
                  <li>Respect intellectual property rights</li>
                  <li>
                    Not use our services for illegal or unauthorised purposes
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">
                  4. Intellectual Property
                </h3>
                <p>
                  All content, features, and functionality of our services are
                  owned by Arbieter and are protected by copyright, trademark,
                  and other intellectual property laws.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">
                  5. Limitation of Liability
                </h3>
                <p>
                  To the maximum extent permitted by law, Arbieter shall not be
                  liable for any indirect, incidental, special, or consequential
                  damages arising from your use of our services.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">6. Termination</h3>
                <p>
                  We may terminate or suspend your access to our services
                  immediately, without prior notice, for any reason whatsoever,
                  including breach of these Terms.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">7. Governing Law</h3>
                <p>
                  These Terms shall be governed and construed in accordance with
                  the laws of England and Wales, without regard to its conflict
                  of law provisions.
                </p>
              </div>
            </div>
          </section>

          {/* Cookie Policy */}
          <section id="cookies" className="scroll-mt-32">
            <div className="flex items-center mb-8">
              <Cookie className="h-8 w-8 text-primary mr-4" />
              <h2 className="text-3xl lg:text-4xl font-bold">Cookie Policy</h2>
            </div>

            <div className="prose prose-lg max-w-none space-y-6">
              <p className="text-muted-foreground">
                <strong>Last updated:</strong> 1st January 2025
              </p>

              <div>
                <h3 className="text-xl font-semibold mb-4">What Are Cookies</h3>
                <p>
                  Cookies are small text files that are stored on your computer
                  or mobile device when you visit our website. They help us
                  provide you with a better experience by remembering your
                  preferences and understanding how you use our site.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">
                  How We Use Cookies
                </h3>
                <p>We use cookies for the following purposes:</p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>
                    <strong>Essential Cookies:</strong> Required for basic
                    website functionality
                  </li>
                  <li>
                    <strong>Analytics Cookies:</strong> Help us understand how
                    visitors use our website
                  </li>
                  <li>
                    <strong>Functional Cookies:</strong> Remember your
                    preferences and settings
                  </li>
                  <li>
                    <strong>Marketing Cookies:</strong> Used to show you
                    relevant advertisements
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Managing Cookies</h3>
                <p>
                  You can control and manage cookies in your browser settings.
                  Please note that disabling cookies may affect the
                  functionality of our website.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">
                  Third-Party Cookies
                </h3>
                <p>
                  We may use third-party services such as Google Analytics that
                  set their own cookies. These cookies are governed by the
                  respective third-party privacy policies.
                </p>
              </div>
            </div>
          </section>

          {/* GDPR Compliance */}
          <section id="gdpr" className="scroll-mt-32">
            <div className="flex items-center mb-8">
              <Globe className="h-8 w-8 text-primary mr-4" />
              <h2 className="text-3xl lg:text-4xl font-bold">
                GDPR Compliance
              </h2>
            </div>

            <div className="prose prose-lg max-w-none space-y-6">
              <p className="text-muted-foreground">
                <strong>Last updated:</strong> 1st January 2025
              </p>

              <div>
                <h3 className="text-xl font-semibold mb-4">Our Commitment</h3>
                <p>
                  Arbieter is committed to protecting your personal data in
                  accordance with the General Data Protection Regulation (GDPR).
                  We ensure that your data is processed lawfully, fairly, and
                  transparently.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Your GDPR Rights</h3>
                <p>
                  Under GDPR, you have the following rights regarding your
                  personal data:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>
                    <strong>Right to be informed:</strong> Clear information
                    about how we use your data
                  </li>
                  <li>
                    <strong>Right of access:</strong> Request copies of your
                    personal data
                  </li>
                  <li>
                    <strong>Right to rectification:</strong> Request correction
                    of inaccurate data
                  </li>
                  <li>
                    <strong>Right to erasure:</strong> Request deletion of your
                    personal data
                  </li>
                  <li>
                    <strong>Right to restrict processing:</strong> Request
                    limitation of data processing
                  </li>
                  <li>
                    <strong>Right to data portability:</strong> Request transfer
                    of your data
                  </li>
                  <li>
                    <strong>Right to object:</strong> Object to certain types of
                    processing
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">
                  Legal Basis for Processing
                </h3>
                <p>We process your personal data based on:</p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Consent for marketing communications</li>
                  <li>Contract performance for service delivery</li>
                  <li>Legitimate interests for business operations</li>
                  <li>Legal obligations for compliance requirements</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Data Retention</h3>
                <p>
                  We retain personal data only for as long as necessary to
                  fulfil the purposes for which it was collected, comply with
                  legal obligations, and resolve disputes.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">
                  Contact Our Data Protection Officer
                </h3>
                <p>
                  If you have any questions about our GDPR compliance or wish to
                  exercise your rights, please contact our Data Protection
                  Officer at:{" "}
                  <a
                    href="mailto:dpo@arbieter.com"
                    className="text-primary hover:underline"
                  >
                    dpo@arbieter.com
                  </a>
                </p>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="bg-primary/5 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">
              Questions About Our Legal Policies?
            </h2>
            <p className="text-muted-foreground mb-6">
              If you have any questions about these policies or need
              clarification on how we handle your data, please don&apos;t
              hesitate to contact us.
            </p>
            <Button
              onClick={() => (window.location.hash = "contact")}
              className="hover:scale-105 transition-all duration-200"
            >
              Contact Us
            </Button>
          </section>
        </div>
      </div>

      {/* Back to Top Button */}
      {showBackToTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 rounded-full w-12 h-12 p-0 shadow-lg hover:scale-110 transition-all duration-200"
          aria-label="Back to top"
        >
          <ChevronUp className="h-5 w-5" />
        </Button>
      )}
    </div>
  );
}

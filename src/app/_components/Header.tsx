"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false); // Close mobile menu after navigation
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo: Jera icon + wordmark */}
          <div className="flex items-center">
            <Link
              href="/"
              className="group flex items-center gap-2 text-xl font-semibold text-primary hover:opacity-80 hover:scale-105 transition-all duration-200"
              aria-label="Go to home"
            >
              <Image
                src="/jera.svg" // put your file in /public/jera.svg
                alt="Arbieter logo"
                width={24}
                height={24}
                className="shrink-0 transition-transform group-hover:scale-105"
                priority
              />
              <span className="leading-none">Arbieter</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-sm transition-all duration-200 hover:text-primary hover:-translate-y-0.5 relative group"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></span>
            </Link>
            <Link
              href="/about"
              className="text-sm transition-all duration-200 hover:text-primary hover:-translate-y-0.5 relative group"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></span>
            </Link>
            <Link
              href="/ai-integrations"
              className="text-sm transition-all duration-200 hover:text-primary hover:-translate-y-0.5 relative group"
            >
              AI Solutions
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></span>
            </Link>
            <Link
              href="/case-studies"
              className="text-sm transition-all duration-200 hover:text-primary hover:-translate-y-0.5 relative group"
            >
              Case Studies
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></span>
            </Link>
            <Link
              href="/contact"
              className="text-sm transition-all duration-200 hover:text-primary hover:-translate-y-0.5 relative group"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></span>
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              asChild
              className="hover:scale-105 hover:border-primary hover:text-primary transition-all duration-200"
            >
              <Link href="/contact">Get Quote</Link>
            </Button>
            <Button
              size="sm"
              asChild
              className="hover:scale-105 hover:shadow-lg transition-all duration-200"
            >
              <Link href="/demo">Book Demo</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/"
                onClick={closeMenu}
                className="block w-full text-left px-3 py-2 text-sm transition-colors hover:text-primary"
              >
                Home
              </Link>
              <Link
                href="/about"
                onClick={closeMenu}
                className="block w-full text-left px-3 py-2 text-sm transition-colors hover:text-primary"
              >
                About
              </Link>
              <Link
                href="/ai-integrations"
                onClick={closeMenu}
                className="block w-full text-left px-3 py-2 text-sm transition-colors hover:text-primary"
              >
                AI Solutions
              </Link>
              <Link
                href="/case-studies"
                onClick={closeMenu}
                className="block w-full text-left px-3 py-2 text-sm transition-colors hover:text-primary"
              >
                Case Studies
              </Link>
              <Link
                href="/contact"
                onClick={closeMenu}
                className="block w-full text-left px-3 py-2 text-sm transition-colors hover:text-primary"
              >
                Contact
              </Link>
              <div className="px-3 py-2 space-y-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full"
                  asChild
                >
                  <Link href="/contact" onClick={closeMenu}>Get Quote</Link>
                </Button>
                <Button
                  size="sm"
                  className="w-full"
                  asChild
                >
                  <Link href="/demo" onClick={closeMenu}>Book Demo</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

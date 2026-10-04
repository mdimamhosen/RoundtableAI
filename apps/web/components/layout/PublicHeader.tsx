"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { Sparkles, Menu, X, ArrowRight, Bot, Users } from "lucide-react";
import { useAuth } from "@/lib/auth/session";

const NAV_LINKS = [
  { href: "/products", label: "Capabilities" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/pricing", label: "Pricing & Credits" },
  { href: "/demo", label: "Solar AI Interviewer", highlight: true },
  { href: "/faq", label: "FAQ" },
  { href: "/about", label: "About" },
];

export function PublicHeader() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, logout } = useAuth();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-background/85 backdrop-blur-xl transition-all">
      <Container size="xl">
        <div className="flex h-16 items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-amber-600 via-amber-500 to-yellow-400 text-slate-950 shadow-glow group-hover:scale-105 transition-transform font-bold">
              <Bot className="h-5 w-5 stroke-[2.5]" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight text-white flex items-center gap-1.5">
                Roundtable
                <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-amber-500/15 text-amber-400 border border-amber-500/30 font-bold">
                  AI
                </span>
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? "text-white bg-white/10 shadow-sm"
                      : link.highlight
                      ? "text-amber-400 hover:text-white hover:bg-amber-500/10 flex items-center gap-1.5"
                      : "text-slate-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.highlight && <Sparkles className="h-3.5 w-3.5 text-amber-400 animate-pulse" />}
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action CTAs */}
          <div className="hidden md:flex items-center gap-3">
            {user ? (
              <div className="flex items-center gap-3">
                <Link href="/app">
                  <Button variant="secondary" size="sm">
                    Recruiter Portal
                  </Button>
                </Link>
                <Button variant="ghost" size="sm" onClick={() => logout()}>
                  Sign Out
                </Button>
              </div>
            ) : (
              <>
                <Link href="/sign-in">
                  <Button variant="ghost" size="sm">
                    Sign In
                  </Button>
                </Link>
                <Link href="/sign-up">
                  <Button variant="glow" size="sm">
                    Start Free Trial
                    <ArrowRight className="h-3.5 w-3.5 ml-1" />
                  </Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile hamburger button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-white/10 space-y-2 animate-in fade-in slide-in-from-top-2 duration-200">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-2.5 rounded-lg text-base font-medium ${
                  pathname === link.href ? "bg-white/10 text-white" : "text-slate-300 hover:bg-white/5 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-white/10 flex flex-col gap-2 px-2">
              {user ? (
                <>
                  <Link href="/app" onClick={() => setMobileMenuOpen(false)}>
                    <Button variant="secondary" className="w-full">
                      Recruiter Portal
                    </Button>
                  </Link>
                  <Button variant="ghost" className="w-full" onClick={() => logout()}>
                    Sign Out
                  </Button>
                </>
              ) : (
                <>
                  <Link href="/sign-in" onClick={() => setMobileMenuOpen(false)}>
                    <Button variant="outline" className="w-full">
                      Sign In
                    </Button>
                  </Link>
                  <Link href="/sign-up" onClick={() => setMobileMenuOpen(false)}>
                    <Button variant="glow" className="w-full">
                      Start Free Trial (50 Credits)
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}

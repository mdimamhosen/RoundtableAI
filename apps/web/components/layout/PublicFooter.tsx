import Link from "next/link";
import { Container } from "../ui/Container";
import { Bot, Globe, Share2, MessageSquare } from "lucide-react";

export function PublicFooter() {
  return (
    <footer className="border-t border-white/10 bg-surface-50/50 backdrop-blur-md pt-16 pb-12 mt-24">
      <Container size="xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 pb-12 border-b border-white/10">
          {/* Brand info */}
          <div className="sm:col-span-2 lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-tr from-amber-600 to-amber-400 text-slate-950 font-bold shadow-glow">
                <Bot className="h-4 w-4 stroke-[2.5]" />
              </div>
              <span className="text-lg font-bold tracking-tight text-white">
                Roundtable <span className="text-amber-400 font-mono">AI</span>
              </span>
            </Link>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Autonomous live conversational interview platform. Conduct technical and behavioral screenings at scale with empathetic vocal AI and human hiring panel dossiers.
            </p>
            <div className="flex items-center gap-3 pt-2 text-slate-400">
              <a href="#" className="p-2 rounded-lg bg-surface-100 hover:text-white hover:bg-surface-200 transition-colors">
                <Globe className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-surface-100 hover:text-white hover:bg-surface-200 transition-colors">
                <Share2 className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-surface-100 hover:text-white hover:bg-surface-200 transition-colors">
                <MessageSquare className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Navigation columns */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-300 mb-4">Platform</h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li><Link href="/products" className="hover:text-white transition-colors">Interview Capabilities</Link></li>
              <li><Link href="/how-it-works" className="hover:text-white transition-colors">How It Works</Link></li>
              <li>
                <Link href="/demo" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  Live AI Interviewer <span className="text-[10px] bg-amber-500/20 text-amber-400 px-1 rounded font-mono">3D</span>
                </Link>
              </li>
              <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing & Plans</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-300 mb-4">Resources</h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li><Link href="/faq" className="hover:text-white transition-colors">Candidate & Recruiter FAQ</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li>
                <a href="http://localhost:4000/health" target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  API System Status
                </a>
              </li>
              <li><span className="text-slate-500 text-xs font-mono">Engine v1.0.0</span></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-300 mb-4">Hiring Team</h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li><Link href="/sign-in" className="hover:text-white transition-colors">Recruiter Sign In</Link></li>
              <li><Link href="/sign-up" className="hover:text-white transition-colors">Start Free Trial</Link></li>
              <li><Link href="/app" className="hover:text-white transition-colors">Hiring Portal</Link></li>
              <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy & Compliance</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Roundtable AI Inc. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Engineered for high-volume technical & behavioral hiring with Next.js & NestJS
          </p>
        </div>
      </Container>
    </footer>
  );
}

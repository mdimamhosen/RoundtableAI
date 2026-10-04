"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/lib/auth/session";
import { apiClient } from "@/lib/api/client";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import {
  Bot,
  LogOut,
  UploadCloud,
  Coins,
  Layers,
  Sparkles,
  ShieldCheck,
  Clock,
  FolderPlus,
  RefreshCw,
  UserCheck,
  FileCheck2,
  Users
} from "lucide-react";

export default function AppDashboardPage() {
  const router = useRouter();
  const { user, loading, logout } = useAuth();
  const [balance, setBalance] = useState<{ balance: number; currency: string } | null>(null);
  const [interviews, setInterviews] = useState<any[]>([]);
  const [sessionStatus, setSessionStatus] = useState<string | null>(null);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    if (!loading && !user) {
      router.push("/sign-in");
    }
  }, [loading, user, router]);

  const loadData = async () => {
    if (!user) return;
    setRefreshing(true);
    try {
      const [creditsRes, projectsRes] = await Promise.all([
        apiClient<{ balance: number; currency: string }>("/credits/balance").catch(() => ({
          balance: 50,
          currency: "CREDITS",
        })),
        apiClient<any[]>("/projects").catch(() => []),
      ]);
      setBalance(creditsRes);
      setInterviews(projectsRes);
    } catch {
      // Ignore
    } finally {
      setRefreshing(false);
    }
  };

  useEffect(() => {
    if (user) {
      loadData();
    }
  }, [user]);

  const handleSimulateInterviewSession = async () => {
    setSessionStatus("Initiating candidate AI interview session...");
    try {
      const res = await apiClient<{ uploadUrl: string; objectKey: string }>("/media/presign-upload", {
        method: "POST",
        body: JSON.stringify({ filename: `candidate_session_eval_${Date.now()}.wav` }),
      });
      setSessionStatus(`AI Interview stream initialized: ${res.objectKey}`);
      setTimeout(() => setSessionStatus(null), 5000);
    } catch (err: any) {
      setSessionStatus(`Session error: ${err?.message || "Check API service"}`);
    }
  };

  if (loading || !user) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="w-12 h-12 rounded-full border-2 border-amber-500/20 border-t-amber-400 animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Top Header */}
      <header className="border-b border-white/10 bg-surface-50/80 backdrop-blur-md sticky top-0 z-40">
        <Container size="xl">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-3">
              <Link href="/" className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-tr from-amber-600 to-amber-400 text-slate-950 font-bold shadow-glow">
                  <Bot className="h-4 w-4 stroke-[2.5]" />
                </div>
                <span className="font-bold text-base text-white">
                  Roundtable <span className="text-amber-400 font-mono text-xs">RECRUITER</span>
                </span>
              </Link>
              <span className="text-slate-600">/</span>
              <span className="text-xs font-mono text-slate-400">Hiring Workspace</span>
            </div>

            <div className="flex items-center gap-4">
              <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface-100 border border-white/5 text-xs font-mono">
                <Coins className="h-3.5 w-3.5 text-amber-400" />
                <span className="text-white font-bold">{balance?.balance ?? 50}</span>
                <span className="text-slate-400">Interview Credits</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs font-medium text-slate-300 hidden md:inline">
                  {user.name} ({user.email})
                </span>
                <Badge variant={user.role === "ADMIN" ? "primary" : "amber"}>{user.role}</Badge>
              </div>

              <Button
                variant="ghost"
                size="sm"
                onClick={async () => {
                  await logout();
                  router.push("/");
                }}
                className="text-xs"
              >
                <LogOut className="h-3.5 w-3.5 sm:mr-1" />
                <span className="hidden sm:inline">Sign Out</span>
              </Button>
            </div>
          </div>
        </Container>
      </header>

      {/* Main Body */}
      <main className="flex-1 py-10">
        <Container size="xl" className="space-y-8">
          {/* Welcome Banner */}
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-surface-100 via-surface-200 to-amber-950/30 border border-white/10 relative overflow-hidden">
            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="gold">Recruiter Portal Active</Badge>
                  {user.emailVerified ? (
                    <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
                      <ShieldCheck className="h-3 w-3" /> Verified Hiring Team
                    </span>
                  ) : (
                    <span className="text-[11px] font-mono text-amber-400">Email Unverified (Dev Mode)</span>
                  )}
                </div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Welcome to Roundtable AI, {user.name}
                </h1>
                <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl leading-relaxed">
                  Your autonomous hiring platform is ready. Launch 24/7 vocal screening sessions, view 360° candidate assessment rubrics, and collaborate on executive panel debriefs.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <Button
                  variant="glow"
                  onClick={handleSimulateInterviewSession}
                  className="flex items-center gap-2"
                >
                  <Sparkles className="h-4 w-4" />
                  Simulate Candidate Interview
                </Button>
                <Link href="/demo">
                  <Button variant="outline" className="flex items-center gap-2">
                    <Bot className="h-4 w-4 text-amber-400" />
                    Open Solar AI Interviewer
                  </Button>
                </Link>
              </div>
            </div>

            {sessionStatus && (
              <div className="mt-4 p-3 rounded-xl bg-amber-500/15 border border-amber-500/30 text-xs font-mono text-amber-300">
                {sessionStatus}
              </div>
            )}
          </div>

          {/* Quick Metrics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card className="p-5 bg-surface-100/60 border-white/5">
              <span className="text-xs text-slate-400">Available Interview Credits</span>
              <p className="text-2xl font-black text-amber-400 mt-1">
                {balance?.balance ?? 50} <span className="text-xs text-slate-400 font-mono">Credits</span>
              </p>
              <div className="text-[11px] text-slate-400 mt-2 flex items-center gap-1">
                <Clock className="h-3 w-3 text-emerald-400" /> 1 Credit = 1 Candidate Screen
              </div>
            </Card>

            <Card className="p-5 bg-surface-100/60 border-white/5">
              <span className="text-xs text-slate-400">Hiring Role</span>
              <p className="text-2xl font-black text-white mt-1">{user.role}</p>
              <div className="text-[11px] text-slate-400 mt-2 font-mono">
                Assigned at registration
              </div>
            </Card>

            <Card className="p-5 bg-surface-100/60 border-white/5">
              <span className="text-xs text-slate-400">AI Voice Synthesizer</span>
              <p className="text-2xl font-black text-emerald-400 mt-1">Online</p>
              <div className="text-[11px] text-slate-400 mt-2 font-mono">
                Conversational Model v4
              </div>
            </Card>

            <Card className="p-5 bg-surface-100/60 border-white/5">
              <span className="text-xs text-slate-400">Active Candidates</span>
              <p className="text-2xl font-black text-white mt-1">{interviews.length}</p>
              <div className="text-[11px] text-slate-400 mt-2 font-mono">
                Ready for screening
              </div>
            </Card>
          </div>

          {/* Recent Candidate Sessions */}
          <div className="rounded-2xl border border-white/10 bg-surface-100/60 p-6 sm:p-8 backdrop-blur-md">
            <div className="flex items-center justify-between pb-6 border-b border-white/10">
              <div>
                <h3 className="text-lg font-bold text-white">Candidate Interview Sessions</h3>
                <p className="text-xs text-slate-400 mt-0.5">Manage live AI audio transcripts, rubric scores, and panel approvals</p>
              </div>

              <Button
                variant="secondary"
                size="sm"
                onClick={loadData}
                disabled={refreshing}
                className="flex items-center gap-1.5 text-xs"
              >
                <RefreshCw className={`h-3.5 w-3.5 ${refreshing ? "animate-spin" : ""}`} />
                Refresh
              </Button>
            </div>

            {interviews.length === 0 ? (
              <div className="py-16 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-surface-200 text-slate-400 mx-auto flex items-center justify-center border border-white/5">
                  <Users className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-base font-semibold text-white">No active candidate sessions</h4>
                  <p className="text-xs text-slate-400 max-w-sm mx-auto mt-1">
                    Your candidate pipeline is ready. Use your 50 trial credits to launch an autonomous conversational interview session.
                  </p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleSimulateInterviewSession}
                  className="mt-2"
                >
                  <FolderPlus className="h-4 w-4 mr-1.5 text-amber-400" />
                  Test AI Interview Session
                </Button>
              </div>
            ) : (
              <div className="divide-y divide-white/5">
                {interviews.map((item) => (
                  <div key={item.id} className="py-4 flex items-center justify-between text-xs">
                    <span className="font-mono text-white">{item.id}</span>
                    <Badge variant="amber">{item.status}</Badge>
                  </div>
                ))}
              </div>
            )}
          </div>
        </Container>
      </main>
    </div>
  );
}

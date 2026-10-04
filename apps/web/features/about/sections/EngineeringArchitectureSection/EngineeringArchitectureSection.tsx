import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function EngineeringArchitectureSection() {
  const stack = [
    {
      title: "NestJS Modular Monolith",
      desc: "Clean boundary separation between Auth, Roles, Media Ingest, Projects, and Credits with zero microservice latency overhead.",
      tag: "Backend Core",
    },
    {
      title: "PostgreSQL & Prisma Engine",
      desc: "Strictly typed relational schema with transactional integrity, user session management, and granular role-based access control.",
      tag: "System of Record",
    },
    {
      title: "MinIO & S3 Blob Pipeline",
      desc: "High-throughput object storage supporting 16-bit linear RAW files up to 100 megapixels with presigned direct streaming.",
      tag: "Media Ingest",
    },
    {
      title: "Next.js App Router & Three.js",
      desc: "SSR performance, glassmorphism design tokens, and real-time WebGL interactive 3D simulations for client previewing.",
      tag: "Web Experience",
    },
  ];

  return (
    <section className="py-20 bg-background border-t border-white/5 relative">
      <Container size="xl">
        <SectionHeading
          badge="Infrastructure & Reliability"
          title="Architected For High-Throughput Media"
          subtitle="A modern TypeScript monolith built to process tens of thousands of RAW studio assets reliably without distributed sync failures."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stack.map((item, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-surface-100/60 border border-white/10 flex flex-col justify-between">
              <div>
                <span className="text-[10px] uppercase font-mono font-bold px-2 py-0.5 rounded bg-amber-500/15 text-amber-300 border border-amber-500/30">
                  {item.tag}
                </span>
                <h4 className="text-base font-bold text-white mt-3 mb-2">{item.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

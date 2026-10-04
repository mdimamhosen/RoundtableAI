import { Container } from "@/components/ui/Container";
import { Database, Cloud, Terminal } from "lucide-react";

export function StudioIntegrationSection() {
  const integrations = [
    {
      icon: <Cloud className="h-6 w-6 text-amber-400" />,
      title: "MinIO & AWS S3 Ingest",
      desc: "Connect your on-premise studio NAS or cloud bucket. Ingest folders automatically when tethered shots are captured.",
    },
    {
      icon: <Terminal className="h-6 w-6 text-amber-500" />,
      title: "REST & Webhook APIs",
      desc: "Trigger retouching jobs programmatically from your catalog CMS, Shopify admin, or Capture One post-export scripts.",
    },
    {
      icon: <Database className="h-6 w-6 text-orange-400" />,
      title: "Metadata & IPTC Preservation",
      desc: "EXIF, copyright, barcode labels, and color space ICC profiles are preserved bit-for-bit through the entire pipeline.",
    },
  ];

  return (
    <section className="py-20 bg-background relative border-t border-white/5">
      <Container size="xl">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-mono text-amber-400 uppercase tracking-wider">Enterprise Ingest</span>
          <h3 className="text-2xl sm:text-3xl font-bold text-white mt-1">Plugs directly into your tethering rig</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {integrations.map((item, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-surface-100/60 border border-white/5 space-y-3">
              <div className="p-3 rounded-xl bg-surface-200/80 w-fit">{item.icon}</div>
              <h4 className="text-base font-bold text-white">{item.title}</h4>
              <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

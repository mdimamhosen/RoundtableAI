import { FeatureCard } from "./FeatureCard";
import { Sparkles, Layers, Sliders, Shield, Zap, Eye, RefreshCw, Smartphone } from "lucide-react";

export function FeatureGrid() {
  const features = [
    {
      icon: <Sparkles className="h-5 w-5" />,
      title: "Micro-Frequency Skin Finesse",
      description: "Separates high-frequency skin textures from low-frequency skin tones. Eliminates blemishes while 100% preserving genuine skin pore anatomy.",
      badge: "Patented AI",
    },
    {
      icon: <Layers className="h-5 w-5" />,
      title: "Multi-Layer PSD Deliverables",
      description: "Get full nondestructive layered Photoshop documents with distinct alpha masks for subject, skin, garments, and drop-shadows.",
      badge: "Industry First",
    },
    {
      icon: <Sliders className="h-5 w-5" />,
      title: "Strict Color Chart Calibration",
      description: "Target standardized X-Rite / SpyderCheckr color swatches automatically in raw batch to guarantee true-to-fabric color replication on screens.",
      badge: "Delta-E < 0.8",
    },
    {
      icon: <Eye className="h-5 w-5" />,
      title: "Jewelry Reflection Clean",
      description: "Neutralizes studio glare and light modifier reflections in diamonds, gold, polished chrome, and watch bezels.",
      badge: "Luxury Grade",
    },
    {
      icon: <RefreshCw className="h-5 w-5" />,
      title: "Ghost Mannequin Stitching",
      description: "Seamlessly joins collar backing shots with front mannequin shots for clean 3D apparel presentations.",
      badge: "Apparel Ready",
    },
    {
      icon: <Smartphone className="h-5 w-5" />,
      title: "Omnichannel Multi-Crop Export",
      description: "Automatically renders square 1:1, vertical 4:5, story 9:16, and landscape banners with intelligent subject centering.",
      badge: "Instant Sync",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {features.map((feat, idx) => (
        <FeatureCard key={idx} {...feat} />
      ))}
    </div>
  );
}

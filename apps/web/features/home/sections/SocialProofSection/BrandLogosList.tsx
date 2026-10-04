export function BrandLogosList() {
  const brands = [
    "VOGUE LABS",
    "NORDIC APPAREL",
    "STUDIO AURA",
    "MONOCHROME",
    "CATALOG X",
    "LUMIERE ECOM",
  ];

  return (
    <div className="space-y-4 text-center">
      <p className="text-xs uppercase tracking-widest text-slate-500 font-semibold">
        Trusted by commercial photo directors & catalog production teams worldwide
      </p>
      <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14 opacity-60 grayscale hover:grayscale-0 transition-all duration-300">
        {brands.map((brand) => (
          <span
            key={brand}
            className="font-mono text-sm tracking-widest font-black text-slate-300 hover:text-white transition-colors"
          >
            {brand}
          </span>
        ))}
      </div>
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { siteData } from "@/content/siteData";
import { IconArrowRight } from "@/components/ui/icons";

export default function Hero() {
  const { hero } = siteData;
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const currentImage = isMobile ? hero.images.mobile : hero.images.desktop;

  return (
    <section className="relative h-screen min-h-[700px] overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div
        className="absolute inset-0"
        style={{ transform: "scale(1.0)", transition: "transform 1500ms cubic-bezier(0.25,0.4,0.25,1)" }}
      >
        <img
          src={currentImage}
          alt="Sacred Valley of Peru"
          className="w-full h-full object-cover object-center"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60" />
        
        {/* Film Grain Texture */}
        <div 
          className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-end">
        <div className="w-full max-w-[1400px] mx-auto px-6 lg:px-12 pb-20 lg:pb-32">
          <div className="max-w-2xl">
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white leading-[1.1] mb-6 animate-[jayaFadeIn_700ms_ease-out]">
              {hero.headline}
            </h1>
            
            <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-10 max-w-lg animate-[jayaFadeIn_900ms_ease-out]">
              {hero.subheadline}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-[jayaFadeIn_1100ms_ease-out]">
              <Link
                href={hero.cta.primary.href}
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-[#1A1A1A] text-sm tracking-widest uppercase hover:bg-[#B8956C] hover:text-white transition-all duration-300"
              >
                {hero.cta.primary.label}
                <IconArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                href={hero.cta.secondary.href}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-white/40 text-white text-sm tracking-widest uppercase hover:bg-white/10 transition-all duration-300"
              >
                {hero.cta.secondary.label}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:block">
        <div className="w-px h-12 bg-gradient-to-b from-white/0 via-white/50 to-white/0 animate-[jayaBob_2s_ease-in-out_infinite]" />
      </div>
    </section>
  );
}
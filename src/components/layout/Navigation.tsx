"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteData } from "@/content/siteData";
import { IconMenu, IconX } from "@/components/ui/icons";

export default function Navigation() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Pages with a dark hero image (white nav text when at top)
  const hasDarkHero = pathname === "/" || pathname.startsWith("/story") || pathname.startsWith("/wholesale");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu on navigation
    setMobileOpen(false);
    // Scroll to top on route change (matches the Base44 feel)
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);

  const textColor = scrolled ? "text-[#1A1A1A]" : hasDarkHero ? "text-white" : "text-[#1A1A1A]";

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-[#F8F6F1]/90 backdrop-blur-md shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className={`font-serif text-2xl tracking-wide transition-colors duration-300 ${textColor}`}>
              Jaya
            </Link>

            <div className="hidden md:flex items-center gap-10">
              {siteData.navigation.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`text-sm tracking-widest uppercase transition-colors duration-300 hover:opacity-60 ${textColor}`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <button
              onClick={() => setMobileOpen(true)}
              className={`md:hidden p-2 transition-colors ${textColor}`}
              aria-label="Open menu"
            >
              <IconMenu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {mobileOpen && (
        <div className="fixed inset-0 z-[60] bg-[#F8F6F1] animate-[jayaFadeIn_200ms_ease-out]">
          <div className="p-6">
              <div className="flex items-center justify-between mb-16">
                <span className="font-serif text-2xl tracking-wide text-[#1A1A1A]">Jaya</span>
                <button onClick={() => setMobileOpen(false)} className="p-2 text-[#1A1A1A]" aria-label="Close menu">
                  <IconX size={24} />
                </button>
              </div>

              <nav className="flex flex-col gap-8">
                {siteData.navigation.map((item) => (
                  <div key={item.label}>
                    <Link
                      href={item.href}
                      className="text-3xl font-serif text-[#1A1A1A] hover:text-[#B8956C] transition-colors"
                    >
                      {item.label}
                    </Link>
                  </div>
                ))}
              </nav>
          </div>
        </div>
      )}
    </>
  );
}

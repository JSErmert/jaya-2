"use client";

import { useState } from "react";
import { siteData } from "@/content/siteData";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { IconArrowRight, IconCheck } from "@/components/ui/icons";

export default function WholesalePage() {
  const { wholesale } = siteData;
  const [formData, setFormData] = useState<any>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (name: string, value: any) => {
    setFormData((prev: any) => ({ ...prev, [name]: value }));
  };

  return (
    <main className="bg-[#F8F6F1]">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <img src={wholesale.hero.image} alt="Wholesale Partnership" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-[#F8F6F1]" />
        </div>

        <div className="relative h-full flex items-center">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="animate-[jayaFadeIn_800ms_ease-out]">
              <span className="text-xs tracking-[0.3em] uppercase text-white/70 mb-4 block">Partnership</span>
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white leading-tight max-w-2xl">
                {wholesale.hero.headline}
              </h1>
              <p className="text-xl text-white/80 mt-6 max-w-lg">{wholesale.hero.subheadline}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <ScrollReveal>
            <p className="font-serif text-2xl md:text-3xl text-[#1A1A1A] leading-relaxed max-w-3xl">
              {wholesale.intro}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Who It's For & Packaging */}
      <section className="bg-white py-24 lg:py-40">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <ScrollReveal>
              <div>
                <h2 className="font-serif text-4xl md:text-5xl text-[#1A1A1A] mb-6">{wholesale.whoItsFor.headline}</h2>
                <p className="text-[#1A1A1A]/60 text-lg leading-relaxed mb-10">{wholesale.whoItsFor.description}</p>
                <ul className="space-y-5">
                  {wholesale.whoItsFor.items.map((item: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-3 text-[#1A1A1A]/70">
                      <IconCheck size={20} className="text-[#B8956C] mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div>
                <h2 className="font-serif text-4xl md:text-5xl text-[#1A1A1A] mb-6">{wholesale.packaging.headline}</h2>
                <p className="text-[#1A1A1A]/60 text-lg leading-relaxed mb-10">{wholesale.packaging.description}</p>

                <div className="space-y-6">
                  {wholesale.packaging.options.map((opt: any, idx: number) => (
                    <div key={idx} className="border border-[#1A1A1A]/10 p-6">
                      <h3 className="text-sm tracking-widest uppercase text-[#B8956C] mb-2">{opt.label}</h3>
                      <p className="text-[#1A1A1A]/70">{opt.details}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="py-24 lg:py-40">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <ScrollReveal>
              <div>
                <span className="text-xs tracking-[0.3em] uppercase text-[#B8956C] mb-4 block">Inquiry</span>
                <h2 className="font-serif text-4xl md:text-5xl text-[#1A1A1A] mb-6">{wholesale.form.headline}</h2>
                <p className="text-[#1A1A1A]/60 text-lg leading-relaxed">{wholesale.form.description}</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="bg-white p-8 lg:p-10">
                {submitted ? (
                  <div className="text-center py-10">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#B8956C]/10 mb-6">
                      <IconCheck size={32} className="text-[#B8956C]" />
                    </div>
                    <h3 className="font-serif text-3xl text-[#1A1A1A] mb-3">Request received</h3>
                    <p className="text-[#1A1A1A]/60">We’ll follow up within 1–2 business days.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {wholesale.form.fields.map((field: any) => (
                      <div key={field.name}>
                        <label className="text-xs tracking-widest uppercase text-[#1A1A1A]/60 mb-2 block">
                          {field.label}
                        </label>
                        <input
                          type={field.type || "text"}
                          required={field.required}
                          value={formData[field.name] || ""}
                          onChange={(e) => handleChange(field.name, (e as any).target.value)}
                          className="w-full border border-[#1A1A1A]/20 bg-transparent px-4 py-3 text-[#1A1A1A] placeholder:text-[#1A1A1A]/30 focus:outline-none focus:border-[#B8956C]"
                          placeholder={field.placeholder}
                        />
                      </div>
                    ))}

                    <button
                      type="submit"
                      className="w-full py-4 bg-[#1A1A1A] text-white text-sm tracking-widest uppercase hover:bg-[#B8956C] transition-colors inline-flex items-center justify-center gap-3"
                    >
                      Submit Inquiry
                      <IconArrowRight size={16} />
                    </button>
                  </form>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </main>
  );
}

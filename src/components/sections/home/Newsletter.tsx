"use client";

import { useState } from "react";
import { siteData } from "@/content/siteData";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { IconArrowRight, IconCheck } from "@/components/ui/icons";

export default function Newsletter() {
  const { newsletter } = siteData;
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <ScrollReveal>
          <div className="max-w-xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-[#1A1A1A] mb-4">
              {newsletter.headline}
            </h2>
            <p className="text-[#1A1A1A]/60 mb-10">
              {newsletter.description}
            </p>

            {submitted ? (
              <div className="flex items-center justify-center gap-3 text-[#B8956C]">
                <IconCheck size={20} />
                <span className="text-sm tracking-wide">Thank you for subscribing.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4" suppressHydrationWarning>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={newsletter.placeholder}
                  required
                  className="flex-1 px-6 py-4 border border-[#1A1A1A]/10 bg-transparent text-[#1A1A1A] placeholder:text-[#1A1A1A]/30 focus:outline-none focus:border-[#B8956C] transition-colors"
                  suppressHydrationWarning
                />
                <button
                  type="submit"
                  className="group flex items-center justify-center gap-3 px-8 py-4 bg-[#1A1A1A] text-white text-sm tracking-widest uppercase hover:bg-[#B8956C] transition-colors"
                  suppressHydrationWarning
                >
                  {newsletter.buttonText}
                  <IconArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
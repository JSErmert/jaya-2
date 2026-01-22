// src/app/story/page.tsx
import Image from "next/image";
import { siteData } from "@/content/siteData";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function StoryPage() {
  const { story } = siteData;

  return (
    <main className="bg-[#F8F6F1] min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <ScrollReveal>
            <span className="text-xs tracking-[0.3em] uppercase text-[#B8956C] mb-4 block">
              Heritage
            </span>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-[#1A1A1A] mb-6">
              {story.hero.headline}
            </h1>
            <p className="text-lg text-[#1A1A1A]/60 max-w-2xl">
              {story.hero.subheadline}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Sections */}
      <section className="pb-24 lg:pb-40">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 space-y-16 lg:space-y-24">
          {story.sections.map((section, idx) => {
            if (section.type === "text") {
              return (
                <ScrollReveal key={idx}>
                  <div className="max-w-3xl">
                    {section.headline && (
                      <h2 className="font-serif text-3xl md:text-4xl text-[#1A1A1A] mb-6">
                        {section.headline}
                      </h2>
                    )}
                    <div className="text-lg leading-relaxed text-[#1A1A1A]/70">
                      <p>{section.content}</p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            }

            if (section.type === "image") {
              return (
                <ScrollReveal key={idx}>
                  <figure className="space-y-4">
                    <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#EEE9DF]">
                      <Image
                        src={section.image}
                        alt={section.caption ?? "Story image"}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 1400px"
                        priority={idx === 0}
                      />
                    </div>
                    {section.caption && (
                      <figcaption className="text-sm text-[#1A1A1A]/50">
                        {section.caption}
                      </figcaption>
                    )}
                  </figure>
                </ScrollReveal>
              );
            }

            return null;
          })}
        </div>
      </section>

      {/* Method */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <ScrollReveal>
            <h2 className="font-serif text-4xl md:text-5xl text-[#1A1A1A] mb-10">
              {story.method.headline}
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
            {story.method.steps.map((step, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1}>
                <div className="border border-[#1A1A1A]/10 p-8 bg-[#F8F6F1]">
                  <div className="text-xs tracking-[0.2em] uppercase text-[#B8956C] mb-3">
                    {step.number}
                  </div>
                  <h3 className="font-serif text-2xl text-[#1A1A1A] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-[#1A1A1A]/60 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

import { siteData } from "@/content/siteData";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Markdown from "@/components/ui/Markdown";

export default function PrivacyPage() {
  const { legal } = siteData;

  return (
    <main className="bg-[#F8F6F1] min-h-screen">
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-12">
          <ScrollReveal>
            <span className="text-xs tracking-[0.3em] uppercase text-[#B8956C] mb-4 block">
              Legal
            </span>
            <h1 className="font-serif text-5xl md:text-6xl text-[#1A1A1A] mb-6">Privacy Policy</h1>
          </ScrollReveal>
        </div>
      </section>

      <section className="pb-24 lg:pb-40">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-12">
          <div className="text-[#1A1A1A]/70 leading-relaxed space-y-5">
            <Markdown markdown={legal.privacy.content} />
          </div>
        </div>
      </section>
    </main>
  );
}

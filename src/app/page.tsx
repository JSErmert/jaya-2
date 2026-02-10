import Hero from "@/components/sections/home/Hero";
import ProofOfOrigin from "@/components/sections/home/ProofOfOrigin";
import Collection from "@/components/sections/home/Collection";
import Terraces from "@/components/sections/home/Terraces";
import Testimonials from "@/components/sections/home/Testimonials";
import Newsletter from "@/components/sections/home/Newsletter";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <ProofOfOrigin />
      <Terraces />
      <Collection />
      <Testimonials />
      <Newsletter />
    </main>
  );
}

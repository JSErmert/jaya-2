"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";

export default function ProductCard({ product, onClick, index }: any) {
  return (
    <ScrollReveal delay={index * 0.08}>
      <article onClick={onClick} className="group cursor-pointer">
        <div className="relative aspect-[4/5] mb-6 overflow-hidden bg-[#F8F6F1]">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-[#1A1A1A]/0 group-hover:bg-[#1A1A1A]/10 transition-colors duration-500 flex items-center justify-center">
            <span className="text-white text-sm tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              View Details
            </span>
          </div>
        </div>

        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-serif text-xl text-[#1A1A1A] mb-1 group-hover:text-[#B8956C] transition-colors">
              {product.name}
            </h3>
            <p className="text-sm text-[#1A1A1A]/50">{product.subtitle}</p>
          </div>
          <div className="text-right">
            <span className="text-lg text-[#1A1A1A]">${product.price}</span>
            <span className="text-xs text-[#1A1A1A]/40 block">{product.weight}</span>
          </div>
        </div>
      </article>
    </ScrollReveal>
  );
}

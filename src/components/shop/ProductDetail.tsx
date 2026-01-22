"use client";

import { useEffect, useMemo, useState } from "react";
import { IconChevronDown, IconMinus, IconPlus, IconX } from "@/components/ui/icons";

export default function ProductDetail({ product, onClose }: any) {
  const [quantity, setQuantity] = useState(1);
  const [openSection, setOpenSection] = useState<string | null>(null);

  const subtotal = useMemo(() => {
    const price = Number(product?.price || 0);
    return (price * quantity).toFixed(2);
  }, [product, quantity]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose?.();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  if (!product) return null;

  return (
    <div className="fixed inset-0 z-[70]">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />

      <div className="absolute inset-0 overflow-y-auto">
        <div className="min-h-full flex items-end lg:items-center justify-center p-4 lg:p-10">
          <div className="w-full max-w-5xl bg-white animate-[jayaFadeIn_200ms_ease-out]">
            <div className="flex justify-end p-4">
              <button onClick={onClose} className="p-2 text-[#1A1A1A]/60 hover:text-[#1A1A1A]" aria-label="Close">
                <IconX size={22} />
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 px-6 pb-10 lg:px-10 lg:pb-14">
              <div className="bg-[#F8F6F1] aspect-square overflow-hidden">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
              </div>

              <div>
                <h2 className="font-serif text-4xl text-[#1A1A1A] mb-2">{product.name}</h2>
                <p className="text-[#1A1A1A]/50 mb-6">{product.subtitle}</p>

                <div className="flex items-end justify-between mb-6">
                  <div>
                    <span className="text-2xl text-[#1A1A1A]">${product.price}</span>
                    <span className="text-sm text-[#1A1A1A]/40 ml-3">{product.weight}</span>
                  </div>
                  <span className="text-sm text-[#1A1A1A]/50">Subtotal: ${subtotal}</span>
                </div>

                <p className="text-[#1A1A1A]/70 leading-relaxed mb-8">{product.description}</p>

                <div className="flex items-center gap-4 mb-10">
                  <div className="inline-flex items-center border border-[#1A1A1A]/15">
                    <button
                      type="button"
                      onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                      className="p-3 text-[#1A1A1A]/70 hover:text-[#1A1A1A]"
                      aria-label="Decrease quantity"
                    >
                      <IconMinus size={18} />
                    </button>
                    <div className="w-12 text-center text-[#1A1A1A]">{quantity}</div>
                    <button
                      type="button"
                      onClick={() => setQuantity((q) => q + 1)}
                      className="p-3 text-[#1A1A1A]/70 hover:text-[#1A1A1A]"
                      aria-label="Increase quantity"
                    >
                      <IconPlus size={18} />
                    </button>
                  </div>

                  <button
                    type="button"
                    className="flex-1 py-4 bg-[#1A1A1A] text-white text-sm tracking-widest uppercase hover:bg-[#B8956C] transition-colors"
                    onClick={() => {
                      // Placeholder: wire to a cart/checkout later
                      alert("Cart/checkout not wired yet. This is a design prototype.");
                    }}
                  >
                    Add to Cart
                  </button>
                </div>

                {/* Accordions */}
                <div className="border-t border-[#1A1A1A]/10">
                  {[
                    {
                      key: "sensory",
                      title: "Sensory Notes",
                      body: (
                        <ul className="space-y-2 text-[#1A1A1A]/70">
                          <li>
                            <span className="text-[#1A1A1A]">Texture:</span> {product.sensory?.texture}
                          </li>
                          <li>
                            <span className="text-[#1A1A1A]">Finish:</span> {product.sensory?.finish}
                          </li>
                          <li>
                            <span className="text-[#1A1A1A]">Best uses:</span> {product.sensory?.bestUses}
                          </li>
                        </ul>
                      ),
                    },
                    {
                      key: "details",
                      title: "Details",
                      body: (
                        <ul className="list-disc list-inside space-y-2 text-[#1A1A1A]/70">
                          {(product.details || []).map((d: string, idx: number) => (
                            <li key={idx}>{d}</li>
                          ))}
                        </ul>
                      ),
                    },
                  ].map((s) => {
                    const isOpen = openSection === s.key;
                    return (
                      <div key={s.key} className="border-b border-[#1A1A1A]/10">
                        <button
                          type="button"
                          onClick={() => setOpenSection(isOpen ? null : s.key)}
                          className="w-full flex items-center justify-between py-5 text-left"
                        >
                          <span className="text-sm tracking-widest uppercase text-[#1A1A1A]">{s.title}</span>
                          <IconChevronDown
                            size={18}
                            className={`text-[#1A1A1A]/60 transition-transform ${isOpen ? "rotate-180" : ""}`}
                          />
                        </button>
                        {isOpen && <div className="pb-6">{s.body}</div>}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

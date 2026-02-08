
import React from 'react';
import { Check } from 'lucide-react';

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-32 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <div className="w-12 h-1 bg-[#2C0D36] mx-auto mb-8"></div>
          <h2 className="text-3xl lg:text-[40px] font-bold text-black mb-8 font-marketing">Enterprise Value.</h2>
          <p className="text-black/60 text-lg lg:text-[18px] font-normal max-w-2xl mx-auto font-neue body-copy">Flexible investment plans designed to grow with your retail operations.</p>
        </div>
        
        <div className="max-w-4xl mx-auto bg-[#2C0D36] rounded-[60px] p-12 lg:p-20 text-white text-center relative overflow-hidden shadow-[0_40px_100px_-15px_rgba(44,13,54,0.4)]">
          <div className="relative z-10">
            <h3 className="text-2xl lg:text-[28px] font-bold mb-6 font-marketing tracking-tight">Bespoke Solutions</h3>
            <p className="text-white/40 mb-12 max-w-lg mx-auto font-normal leading-relaxed text-[16px] font-neue body-copy">
              We provide tailored pricing based on hardware selection, multi-location support, and specific AI integration requirements.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 text-left font-neue">
              {[
                "Unlimited Volume",
                "Verified MPESA Sync",
                "Full ETIMS Compliance",
                "Real-time Inventory",
                "Cloud Portal Access",
                "All AI Agents Included"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-5 h-5 bg-white rounded flex items-center justify-center">
                    <Check size={12} className="text-black font-bold" />
                  </div>
                  <span className="text-[12px] font-semibold uppercase tracking-widest text-white/70">{item}</span>
                </div>
              ))}
            </div>
            
            <button className="bg-[#2D9B9B] text-white px-14 py-6 rounded-full font-semibold text-[15px] cta-text transition-all transform hover:scale-105 active:scale-95 font-neue uppercase tracking-widest">
              Contact Sales for Quote
            </button>
            <p className="mt-10 text-[11px] font-medium uppercase tracking-[0.3em] text-white/30 font-neue">Includes 24/7 dedicated support.</p>
          </div>
        </div>
      </div>
    </section>
  );
};


import React, { useState } from 'react';
import { Plus, Minus, ArrowRight } from 'lucide-react';

const faqItems = [
  { 
    q: "Is Veira the best POS system in Kenya for small shops?", 
    a: "Yes, Veira is specifically designed for the Kenyan market with native MPESA integration, ETIMS compliance, and local-first technology that works even without the internet, making it the most reliable choice for small retail shops." 
  },
  { 
    q: "How does the MPESA integration work?", 
    a: "Our POS system features a native MPESA STK push. When a customer pays, the request is sent directly to their phone. Once they enter their PIN, the transaction is verified and settled in your reports instantly." 
  },
  { 
    q: "Is Veira KRA ETIMS compliant?", 
    a: "Absolutely. Veira is fully integrated with KRA's ETIMS protocol. Every transaction is automatically validated and reported, ensuring you remain compliant without any manual effort or risk of penalties." 
  },
  { 
    q: "What are the costs of your POS software in Kenya?", 
    a: "We offer bespoke pricing based on your shop's needs. We provide free hardware setups in select packages and a scalable subscription model that includes all AI agents, cloud storage, and 24/7 support." 
  },
  { 
    q: "Can I manage multiple shops from one dashboard?", 
    a: "Yes. Veira's Cloud architecture allows you to see real-time performance across all your branches from a single Owner Portal. You get consolidated reports and branch-specific insights automatically." 
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // FAQ Schema for SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map(item => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.a
      }
    }))
  };

  return (
    <section className="py-32 bg-white" id="faq">
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <div className="w-12 h-1 bg-black mx-auto mb-8"></div>
          <h2 className="text-3xl lg:text-[40px] font-bold text-black font-marketing">Frequently Asked Questions</h2>
          <p className="mt-4 text-black/50 font-neue">Everything you need to know about the best retail software in Kenya.</p>
        </div>
        
        <div className="space-y-6">
          {faqItems.map((item, i) => (
            <div key={i} className="border-b border-black/5 last:border-0">
              <button 
                className="w-full flex items-center justify-between py-8 text-left group"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className={`text-[18px] lg:text-[20px] font-semibold transition-colors font-marketing ${openIndex === i ? 'text-black' : 'text-black/60 group-hover:text-black'}`}>{item.q}</span>
                {openIndex === i ? <Minus size={20} className="text-black" /> : <Plus size={20} className="text-black/20 group-hover:text-black" />}
              </button>
              {openIndex === i && (
                <div className="pb-8 text-black/50 font-normal leading-relaxed italic text-[16px] lg:text-[18px] animate-in fade-in slide-in-from-top-2 font-marketing">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-32 p-16 bg-black rounded-[60px] text-white text-center relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-3xl lg:text-[48px] font-bold text-white mb-6 font-marketing">Transition to Clarity.</h3>
            <p className="mb-12 text-white/50 font-normal text-lg font-neue body-copy">Experience the next generation of retail management in Nairobi.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <button className="px-14 py-6 bg-[#2D9B9B] text-white rounded-full font-semibold cta-text text-[14px] shadow-2xl transition-all hover:bg-[#268484] font-neue">Get Free POS</button>
              <a href="#stories" className="px-14 py-6 border border-white/20 text-white rounded-full font-semibold cta-text text-[14px] hover:bg-white/10 transition-all flex items-center justify-center gap-2 font-neue">Case Study <ArrowRight size={16} /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

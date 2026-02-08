
import React from 'react';
import { Heart, ShieldCheck, Eye, Zap, HandHelping, ArrowRight } from 'lucide-react';
import { WaveBackground } from './WaveBackground';

const OurStory: React.FC = () => {
  const values = [
    { name: "Be Kind", desc: "Empathy drives every interaction.", icon: <Heart size={20} /> },
    { name: "Be Trusted", desc: "Security, reliability, and data safety.", icon: <ShieldCheck size={20} /> },
    { name: "Be Clear", desc: "Communicate simply, honestly, and directly.", icon: <Eye size={20} /> },
    { name: "Be Bold", desc: "Innovate fearlessly and challenge norms.", icon: <Zap size={20} /> },
    { name: "Be Helpful", desc: "Anticipate problems before users feel them.", icon: <HandHelping size={20} /> }
  ];

  return (
    <div id="our-story" className="bg-[#2C0D36] text-white relative overflow-hidden selection:bg-white selection:text-black min-h-screen">
      {/* 
        Generative Silk Background 
        Reference: Rolls-Royce brand identity (T0314766EN)
        Base: Deep Plum #2C0D36
        Waves: Vibrant Magenta #D946EF 
      */}
      <WaveBackground color="#D946EF" /> 
      
      {/* Hero Section - Layered on the waves */}
      <section className="py-32 border-b border-white/5 relative z-10 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="w-12 h-1 bg-[#D946EF] mb-10 shadow-[0_0_20px_#D946EF]"></div>
            <h1 className="text-4xl lg:text-[72px] font-bold text-white mb-10 font-marketing leading-tight">
              Certainty in <br/>
              <span className="font-didot italic text-[#D946EF]">Every Sale.</span>
            </h1>
            <div className="space-y-8 text-xl lg:text-2xl text-white/80 font-normal font-marketing leading-relaxed">
              <p>
                Businesses are powerful. They move money, shape communities, and create stability. But most technology stops at efficiency and profit.
              </p>
              <p>
                Veira exists to do more. We give retail owners complete control, visibility, and certainty over their operations—so they can focus on growth, not guesswork.
              </p>
              <p className="text-white font-semibold">
                We believe that when businesses are run better, they create safer, more stable communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Structural Commitment */}
      <section className="py-32 relative overflow-hidden bg-black/20 z-10 backdrop-blur-[1px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <span className="text-[#D946EF] font-bold tracking-[0.3em] text-[11px] uppercase block mb-6 font-neue">Social Impact Architecture</span>
              <h2 className="text-4xl lg:text-6xl font-bold mb-10 font-marketing leading-tight">Our Commitment</h2>
              <div className="space-y-6 text-lg text-white/70 font-neue body-copy">
                <p>
                  We dedicate <span className="text-white font-bold underline decoration-[#D946EF] decoration-2">10% of our annual net profit</span> to organizations that work to prevent gender-based violence and support survivors.
                </p>
                <ul className="space-y-4 pt-4">
                  <li className="flex items-center gap-4">
                    <div className="w-2 h-2 bg-[#D946EF] rounded-full shadow-[0_0_10px_#D946EF]"></div>
                    <span>Structural, ongoing commitment.</span>
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="w-2 h-2 bg-[#D946EF] rounded-full shadow-[0_0_10px_#D946EF]"></div>
                    <span>Not a campaign, but a core mission.</span>
                  </li>
                  <li className="flex items-center gap-4 text-white font-semibold">
                    <div className="w-2 h-2 bg-[#D946EF] rounded-full shadow-[0_0_10px_#D946EF]"></div>
                    <span>Growth fuels sustainable good.</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-72 h-72 border border-[#D946EF]/30 bg-[#2C0D36]/40 rounded-full flex flex-col items-center justify-center text-white orb-float text-center p-8 backdrop-blur-xl shadow-[0_0_50px_rgba(217,70,239,0.15)]">
                 <span className="text-6xl font-black font-marketing mb-2 text-[#D946EF]">10%</span>
                 <span className="text-[10px] font-bold uppercase tracking-widest font-neue text-white/60">Annual Net Profit <br/>Dedicated to Prevention</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-32 bg-transparent border-y border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-3xl lg:text-[48px] font-bold text-white mb-6 font-marketing">Our Values</h2>
            <p className="text-white/40 font-neue body-copy max-w-2xl mx-auto">Principles that guide the design of our infrastructure.</p>
          </div>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
            {values.map((val, i) => (
              <div key={i} className="p-10 rounded-[32px] border border-white/10 hover:border-[#D946EF]/50 transition-all group bg-[#2C0D36]/40 backdrop-blur-md">
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-[#D946EF] mb-8 group-hover:scale-110 group-hover:bg-[#D946EF]/10 transition-all border border-white/10">
                  {val.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4 font-marketing">{val.name}</h3>
                <p className="text-sm text-white/50 font-neue leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Callout */}
      <section className="py-32 bg-transparent relative z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white text-[#2C0D36] p-20 rounded-[80px] flex flex-col items-center text-center shadow-2xl relative overflow-hidden group">
             <div className="absolute top-0 right-0 w-96 h-96 bg-[#D946EF]/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform duration-700"></div>
             <h3 className="text-4xl lg:text-6xl font-bold mb-8 font-marketing leading-tight">
               Veira is a mission. <br/>
               <span className="font-didot italic text-[#783D77]">Not just a tool.</span>
             </h3>
             <p className="text-[#2C0D36]/60 mb-12 font-neue leading-relaxed max-w-2xl text-xl">
               When you scale with Veira, you’re fueling a system that protects people. We turn retail excellence into lasting social impact.
             </p>
             <button className="flex items-center gap-3 font-bold uppercase tracking-[0.3em] text-[12px] font-neue hover:gap-6 transition-all text-[#2C0D36] group">
               Explore our impact <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
             </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurStory;


import React from 'react';
import { Cloud as CloudIcon, RefreshCw, ShieldCheck, Layers, Smartphone, WifiOff, Database, Zap, ArrowRight, Share2 } from 'lucide-react';

const Cloud: React.FC = () => {
  const capabilities = [
    {
      title: "Always on, always synced",
      desc: "Your data updates in real time across devices, locations, and users.",
      icon: <RefreshCw size={24} />
    },
    {
      title: "Automatic backups",
      desc: "Your business data is backed up continuously. No manual exports. No panic when a device fails.",
      icon: <Database size={24} />
    },
    {
      title: "Multi-location ready",
      desc: "One business or ten branches, Veira Cloud keeps everything centralized and visible.",
      icon: <Layers size={24} />
    },
    {
      title: "Secure by default",
      desc: "Data is encrypted and access is controlled by granular roles and permissions.",
      icon: <ShieldCheck size={24} />
    }
  ];

  const useCases = [
    {
      title: "Device failure",
      problem: "A POS device breaks or gets stolen.",
      solution: "No data is lost. Another device logs in and continues instantly with all records intact."
    },
    {
      title: "Owner not on site",
      problem: "You are away from the business and need an update.",
      solution: "Veira Cloud keeps data flowing so Tiri can still send daily WhatsApp sales and alerts."
    },
    {
      title: "Multiple branches",
      problem: "Managing different locations feels fragmented.",
      solution: "Sales from all locations sync into one view. You see total performance without calling managers."
    },
    {
      title: "Connectivity interruptions",
      problem: "The internet goes down during a busy shift.",
      solution: "Veira handles temporary disruptions gracefully and syncs data once connectivity is restored."
    }
  ];

  return (
    <div id="cloud" className="bg-white overflow-hidden">
      {/* Cloud Hero Section */}
      <section className="py-32 border-b border-black/5 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <div className="w-12 h-1 bg-black mb-10"></div>
              <h1 className="text-4xl lg:text-[56px] font-bold text-black mb-10 font-marketing leading-tight">
                The backbone <br/>
                <span className="font-didot italic text-black/80">behind everything.</span>
              </h1>
              <div className="space-y-6 text-lg text-black/60 font-neue body-copy">
                <p>
                  Veira Cloud is what connects your business, your data, and your AI agents into one reliable system.
                </p>
                <p className="text-black font-semibold">
                  It runs quietly in the background, making sure nothing is lost, nothing is delayed, and everything stays in sync.
                </p>
                <p>
                  You never think about servers, backups, or uptime. Veira Cloud handles it.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="w-full aspect-square bg-white rounded-[80px] shadow-2xl border border-black/5 flex items-center justify-center p-20 overflow-hidden relative">
                <div className="absolute top-0 right-0 w-80 h-80 bg-black/[0.02] rounded-full blur-3xl orb-animation"></div>
                <CloudIcon size={300} className="text-black/5 absolute -bottom-20 -left-10 rotate-12" />
                <div className="relative z-10 text-center">
                  <div className="w-24 h-24 bg-black rounded-3xl flex items-center justify-center mx-auto mb-8 orb-glow shadow-2xl">
                    <CloudIcon className="text-white" size={40} />
                  </div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.4em] text-black/30 font-neue">Infrastructure Core</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What it does */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-32 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid sm:grid-cols-2 gap-12">
                {capabilities.map((cap, i) => (
                  <div key={i} className="group">
                    <div className="w-14 h-14 bg-black rounded-2xl flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform">
                      {cap.icon}
                    </div>
                    <h3 className="text-xl font-bold text-black mb-4 font-marketing">{cap.title}</h3>
                    <p className="text-sm text-black/50 font-neue leading-relaxed">{cap.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl lg:text-[40px] font-bold text-black mb-10 font-marketing">Quiet performance. <br/>Total reliability.</h2>
              <p className="text-black/60 text-[18px] font-neue body-copy leading-relaxed">
                Veira Cloud securely stores and syncs all your business data in real time. Every sale, every stock movement, every customer interaction, and every report flows through the cloud automatically.
              </p>
              <div className="mt-12 p-10 bg-black rounded-[40px] text-white">
                <p className="text-xl font-marketing italic mb-6">"This is what allows Glenn, Achi, and Tiri to work accurately and continuously."</p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-px bg-white/30"></div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white/40 font-neue">System Architecture</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cloud Use Cases */}
      <section className="py-32 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-3xl lg:text-[40px] font-bold text-black mb-6 font-marketing">Reliable by Design.</h2>
            <p className="text-black/50 font-neue max-w-2xl mx-auto">How Veira Cloud solves real operational challenges for Kenyan business owners.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((uc, i) => (
              <div key={i} className="bg-white p-12 rounded-[48px] border border-black/5 hover:border-black/20 transition-all flex flex-col justify-between">
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-widest text-black/30 mb-8 font-neue">Use Case {i+1}: {uc.title}</div>
                  <p className="text-xl font-marketing text-black mb-6 leading-relaxed">
                    <span className="text-black/30 line-through mr-2">Scenario:</span> {uc.problem}
                  </p>
                </div>
                <div className="flex items-start gap-4 p-8 bg-slate-50 rounded-3xl">
                  <Zap size={20} className="text-black mt-1 flex-shrink-0" />
                  <p className="text-[15px] font-semibold text-black font-neue leading-relaxed">{uc.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cloud & AI Synergy */}
      <section className="py-32 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-10 font-marketing leading-tight">Shared Memory <br/>for Intelligence.</h2>
              <p className="text-white/60 text-lg mb-12 font-neue body-copy">
                Without reliable cloud infrastructure, AI is blind. Veira Cloud makes the intelligence trustworthy.
              </p>
              
              <div className="space-y-10">
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-white">G</span>
                  </div>
                  <div>
                    <h4 className="font-bold font-marketing text-lg mb-2">Glenn pulls accurate answers</h4>
                    <p className="text-white/40 text-sm font-neue">Staff get instant support based on current inventory and pricing data.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-white">A</span>
                  </div>
                  <div>
                    <h4 className="font-bold font-marketing text-lg mb-2">Achi runs active campaigns</h4>
                    <p className="text-white/40 text-sm font-neue">Drives revenue using real-time sales trends and customer history.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-white">T</span>
                  </div>
                  <div>
                    <h4 className="font-bold font-marketing text-lg mb-2">Tiri monitors performance</h4>
                    <p className="text-white/40 text-sm font-neue">Detects anomalies and sends reports on WhatsApp in real time.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="w-80 h-80 relative">
                <div className="absolute inset-0 bg-white/10 rounded-full blur-[80px] orb-animation"></div>
                <div className="relative z-10 w-full h-full border border-white/20 rounded-full flex items-center justify-center flex-col p-10 text-center">
                   <Share2 size={64} className="mb-6 text-white/50" />
                   <p className="text-[11px] font-bold uppercase tracking-widest font-neue">Unified Sync</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Summary Footer */}
      <section className="py-32 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <div className="w-12 h-1 bg-black mx-auto mb-10"></div>
          <p className="text-2xl lg:text-3xl font-bold font-marketing leading-tight mb-12">
            Your business data is safe, accessible, and always working for you.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {["No manual backups", "No broken reports", "No guessing", "No device dependency"].map((text, i) => (
              <div key={i} className="flex flex-col items-center gap-3">
                <ShieldCheck size={20} className="text-black/20" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-black font-neue">{text}</span>
              </div>
            ))}
          </div>
          <p className="text-xl text-black/60 font-marketing italic">
            The agents run the business. The cloud keeps everything connected and safe.
          </p>
          <button className="mt-16 px-14 py-6 bg-[#2D9B9B] text-white rounded-full font-semibold cta-text text-[15px] shadow-2xl transition-all hover:bg-[#268484] flex items-center justify-center gap-3 mx-auto group font-neue">
            Request Cloud Demo <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Cloud;


import React from 'react';
import { Smartphone, FileText, Wifi, ArrowRight } from 'lucide-react';

const POSFeature = ({ title, desc, icon: Icon }: { title: string, desc: string, icon: any }) => (
  <div className="group border-t border-black/10 pt-10 hover:border-[#2C0D36] transition-colors">
    <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-8 group-hover:bg-[#2C0D36] transition-all shadow-lg">
      <Icon className="text-white" size={24} />
    </div>
    <h3 className="text-lg lg:text-[24px] font-bold text-black mb-4 font-marketing tracking-tight">{title}</h3>
    <p className="text-[16px] text-black/50 font-normal font-neue body-copy leading-relaxed">
      {desc}
    </p>
  </div>
);

const POS: React.FC = () => {
  return (
    <div id="pos" className="bg-white overflow-hidden">
      {/* POS Intro */}
      <section className="py-32 border-b border-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <div className="w-12 h-1 bg-[#2C0D36] mb-10"></div>
              <h2 className="text-4xl lg:text-[56px] font-bold text-black mb-10 font-marketing leading-tight">
                Safe. Secure. <br/>
                <span className="font-didot italic text-[#2C0D36]">Natively Connected.</span>
              </h2>
              <div className="space-y-6 text-lg text-black/60 font-neue body-copy">
                <p>
                  Veira POS is built on the principle of absolute certainty. Every sale is safe, every number is clear. Boring equals trustworthy.
                </p>
                <p className="text-black font-semibold">
                  Natively integrated with MPESA and KRA ETIMS, our interface removes the stress of manual reporting and bookkeeping.
                </p>
                <p>
                  Built for the high-volume shops that move the community forward.
                </p>
              </div>
              <div className="mt-12 flex flex-wrap gap-4">
                 <button className="px-10 py-5 bg-[#2D9B9B] text-white rounded-full font-semibold text-[14px] flex items-center gap-2 hover:bg-[#268484] transition-all font-neue">
                   Get Started <ArrowRight size={16} />
                 </button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] bg-slate-50 rounded-[60px] p-12 relative border border-black/5 flex items-center justify-center">
                <div className="bg-white p-10 rounded-[40px] shadow-2xl border border-black/5 relative z-10 w-full max-w-md">
                   <div className="flex items-center gap-4 mb-6">
                      <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                      <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-black/40 font-neue">System State: Ready</span>
                   </div>
                   <div className="space-y-4">
                      <div className="h-4 bg-black/5 rounded-full w-full"></div>
                      <div className="h-4 bg-black/5 rounded-full w-3/4"></div>
                   </div>
                   <div className="mt-10 pt-10 border-t border-black/5">
                      <p className="text-3xl font-bold font-marketing text-[#2C0D36]">KSh 42,450.00</p>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-black/30 font-neue mt-1">Total Daily Revenue</p>
                      
                      <button className="w-full mt-8 py-4 bg-[#2D9B9B] text-white rounded-xl font-bold text-sm font-neue uppercase tracking-widest">
                        Complete Sale
                      </button>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-32 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16">
            <POSFeature 
              title="MPESA Native" 
              desc="Direct STK push and instant verification. Payments reflect in your reports within seconds."
              icon={Smartphone}
            />
            <POSFeature 
              title="ETIMS Automations" 
              desc="Native compliance protocol built into the core. No manual uploads or KRA penalties."
              icon={FileText}
            />
            <POSFeature 
              title="Local-First Tech" 
              desc="Sync occurs in the background. Your shop stays operational even when the internet is down."
              icon={Wifi}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default POS;

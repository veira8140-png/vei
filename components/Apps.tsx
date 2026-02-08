
import React from 'react';
import { Smartphone, Layout, UserCheck, RefreshCw, Layers, ShieldCheck, Zap, ArrowRight, Monitor, AppWindow } from 'lucide-react';

const Apps: React.FC = () => {
  return (
    <div id="apps" className="bg-white overflow-hidden">
      {/* Apps Hero */}
      <section className="py-32 border-b border-black/5 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <div className="w-12 h-1 bg-black mb-10"></div>
              <h1 className="text-4xl lg:text-[56px] font-bold text-black mb-10 font-marketing leading-tight">
                Modern apps <br/>
                <span className="font-didot italic">built and maintained for you.</span>
              </h1>
              <div className="space-y-6 text-lg text-black/60 font-neue body-copy">
                <p>
                  Retail businesses in Nairobi need technology that works looks modern and stays up to date with MPESA and ETIMS standards.
                </p>
                <p className="text-black font-semibold">
                  We design build and maintain your business apps on your behalf. You get a reliable inventory management system without hiring developers.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-white rounded-[60px] shadow-2xl border border-black/5 flex items-center justify-center p-12 overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-black/[0.02] rounded-full blur-3xl orb-animation"></div>
                <Smartphone size={240} className="text-black/5 absolute rotate-12 -bottom-20 -right-10" />
                <div className="relative z-10 text-center">
                  <AppWindow size={80} className="mx-auto mb-6 text-black orb-glow rounded-2xl" />
                  <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-black/40 font-neue">Managed Ecosystem</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Apps */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-24">
            <h2 className="text-3xl lg:text-[40px] font-bold text-black mb-6 font-marketing">The Veira Ecosystem.</h2>
            <p className="text-black/50 font-neue max-w-2xl">Tailored retail experiences for your shop staff and customers.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Owner App */}
            <div className="group">
              <div className="aspect-[4/5] bg-black rounded-[40px] overflow-hidden mb-8 relative">
                <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800" alt="Veira Owner App" className="w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                <div className="absolute bottom-10 left-10 text-white">
                  <Layout size={32} className="mb-4" />
                  <h3 className="text-2xl font-bold font-marketing">Owner Portal</h3>
                </div>
              </div>
              <h4 className="font-bold text-lg mb-4 font-marketing">Visibility and control anywhere.</h4>
              <ul className="space-y-3 text-sm text-black/60 font-neue mb-8">
                <li>• Daily sales and performance summaries</li>
                <li>• Alerts and insights from Tiri AI</li>
                <li>• Multi location visibility across branches</li>
                <li>• Remote access from any device</li>
              </ul>
              <p className="text-[11px] font-bold uppercase tracking-widest text-black/30 font-neue">Always modern. Always maintained.</p>
            </div>

            {/* Staff App */}
            <div className="group">
              <div className="aspect-[4/5] bg-slate-100 rounded-[40px] overflow-hidden mb-8 relative border border-black/5">
                <img src="https://images.unsplash.com/photo-1556740734-7f95626903fb?auto=format&fit=crop&q=80&w=800" alt="Veira Staff Hub" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
                <div className="absolute bottom-10 left-10 text-white">
                  <UserCheck size={32} className="mb-4" />
                  <h3 className="text-2xl font-bold font-marketing">Staff Hub</h3>
                </div>
              </div>
              <h4 className="font-bold text-lg mb-4 font-marketing">Fast simple and error free.</h4>
              <ul className="space-y-3 text-sm text-black/60 font-neue mb-8">
                <li>• Intuitive sales and stock workflows</li>
                <li>• Built in guidance from Glenn AI Agent</li>
                <li>• Role based permissions and shift logs</li>
                <li>• Continuous UI improvements automatically</li>
              </ul>
              <p className="text-[11px] font-bold uppercase tracking-widest text-black/30 font-neue">No training required.</p>
            </div>

            {/* Customer App */}
            <div className="group">
              <div className="aspect-[4/5] bg-[#F8F9FA] rounded-[40px] overflow-hidden mb-8 relative border border-black/5">
                <img src="https://images.unsplash.com/photo-1523824921871-d6f1a15151f1?auto=format&fit=crop&q=80&w=800" alt="Veira Customer Interface" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-10 left-10 text-white">
                  <Zap size={32} className="mb-4" />
                  <h3 className="text-2xl font-bold font-marketing">Customer App</h3>
                </div>
              </div>
              <h4 className="font-bold text-lg mb-4 font-marketing">Built for retention.</h4>
              <ul className="space-y-3 text-sm text-black/60 font-neue mb-8">
                <li>• Instant order tracking and MPESA receipts</li>
                <li>• Loyalty programs and automated outreach</li>
                <li>• AI powered support from Achi Agent</li>
                <li>• Premium clean user experience</li>
              </ul>
              <p className="text-[11px] font-bold uppercase tracking-widest text-black/30 font-neue">Your brand our tech.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance & Modernization */}
      <section className="py-32 bg-black text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <span className="text-white/40 font-bold tracking-[0.3em] text-[11px] uppercase block mb-6 font-neue">Future Proofed</span>
              <h2 className="text-4xl lg:text-5xl font-bold mb-10 font-marketing leading-tight">Ongoing Maintenance <br/>& Modernization</h2>
              <p className="text-white/60 text-lg mb-12 font-neue body-copy">
                The best POS in Kenya does not just work today it evolves. We continuously update your software to stay ahead of KRA and MPESA changes.
              </p>
              <div className="grid sm:grid-cols-2 gap-10">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <RefreshCw size={20} className="text-white" />
                    <span className="font-bold font-marketing">Regular improvements</span>
                  </div>
                  <p className="text-white/40 text-sm font-neue">New features added every month at no extra cost to your business.</p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <ShieldCheck size={20} className="text-white" />
                    <span className="font-bold font-marketing">Security updates</span>
                  </div>
                  <p className="text-white/40 text-sm font-neue">Automated performance tuning and proactive threat monitoring.</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-80 h-80 bg-white/5 rounded-full orb-animation orb-glow flex items-center justify-center p-10 border border-white/10">
                <div className="text-center">
                   <RefreshCw size={48} className="mx-auto mb-6 text-white opacity-50" />
                   <p className="text-[10px] font-bold uppercase tracking-widest font-neue">100% Fully Managed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Connection to Veira System */}
      <section className="py-32 bg-[#F8F9FA]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-[40px] font-bold text-black mb-12 font-marketing">Apps powered by the Veira Core.</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="p-10 bg-white rounded-[40px] border border-black/5 shadow-sm">
              <h4 className="font-bold mb-4 font-marketing">Glenn Supports</h4>
              <p className="text-sm text-black/50 font-neue">Guides staff in real time within the Staff Hub to prevent errors.</p>
            </div>
            <div className="p-10 bg-white rounded-[40px] border border-black/5 shadow-sm">
              <h4 className="font-bold mb-4 font-marketing">Achi Engages</h4>
              <p className="text-sm text-black/50 font-neue">Messages customers directly through the app to drive retention.</p>
            </div>
            <div className="p-10 bg-white rounded-[40px] border border-black/5 shadow-sm">
              <h4 className="font-bold mb-4 font-marketing">Tiri Monitors</h4>
              <p className="text-sm text-black/50 font-neue">Analyzes mobile activity and sends performance alerts to the Owner Portal.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Close Message */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="w-12 h-1 bg-black mx-auto mb-10"></div>
          <p className="text-3xl lg:text-4xl font-bold font-marketing leading-tight mb-12">
            You do not buy software. You get modern apps built and managed for you.
          </p>
          <button className="mt-16 bg-[#2D9B9B] text-white px-12 py-5 rounded-full font-semibold cta-text text-[14px] flex items-center justify-center gap-3 mx-auto group font-neue">
            Request Demo <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Apps;


import React from 'react';
import { ArrowRight, Globe, Shield, Activity, Cloud, Smartphone, Briefcase, PhoneCall, Calendar, Target } from 'lucide-react';

const Enterprise: React.FC = () => {
  return (
    <div id="enterprise" className="bg-white overflow-hidden">
      {/* Enterprise Hero Section - Clean & Minimal */}
      <section className="relative pt-48 pb-32 border-b border-black/5 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-bold text-black mb-8 max-w-5xl mx-auto leading-[1.1] font-marketing">
            Enterprise retail management <br/> 
            <span className="font-didot italic font-bold text-[#531753]">with absolute control.</span>
          </h1>
          <p className="text-lg lg:text-[20px] text-black/60 mb-12 max-w-3xl mx-auto font-normal leading-relaxed font-neue body-copy">
            Scale your retail business across Kenya with Veira. Our enterprise grade POS system offers centralized data fraud prevention and real time visibility across all branches.
          </p>
          <button className="px-14 py-6 bg-[#2D9B9B] text-white rounded-full font-semibold cta-text text-[15px] shadow-sm transition-all hover:bg-[#268484] flex items-center justify-center gap-3 mx-auto group font-neue">
            Talk to Us <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* Section 1: Why Veira for Enterprise - Structured & Clear */}
      <section className="py-32 bg-[#FBFBFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-3xl lg:text-[40px] font-bold text-black mb-6 font-marketing">Strategic Performance</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              {
                title: "Centralized Oversight Across Branches",
                desc: "Monitor multiple shops and departments in real time with consolidated performance data and resource allocation metrics.",
                icon: <Target size={22} className="text-black" />
              },
              {
                title: "AI Decisions & Voice Communications",
                desc: "Enterprise ready AI agents reduce operational errors and handle high volume inbound calls at scale across your network.",
                icon: <Activity size={22} className="text-black" />
              },
              {
                title: "Scalable Cloud Architecture",
                desc: "Secure real time sync ensures your inventory and sales data is up to date across all locations in Nairobi and beyond.",
                icon: <Cloud size={22} className="text-black" />
              },
              {
                title: "Loss Prevention & Compliance",
                desc: "Automated anomaly detection and native ETIMS compliance protect your enterprise from financial leakage and penalties.",
                icon: <Shield size={22} className="text-black" />
              }
            ].map((item, i) => (
              <div key={i} className="group border-l border-black/5 pl-8">
                <div className="w-10 h-10 bg-transparent flex items-center justify-start mb-8">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-black mb-4 font-marketing leading-snug">{item.title}</h3>
                <p className="text-[15px] text-black/50 font-neue body-copy leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: AI Agents for Enterprise */}
      <section className="py-32 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-4xl lg:text-[56px] font-bold text-white mb-8 font-marketing leading-tight">Autonomous Intelligence</h2>
            <p className="text-white/40 text-lg max-w-2xl mx-auto font-neue">Sophisticated agents designed to scale your retail productivity.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                name: "Glenn",
                role: "Operations Support",
                features: ["Real time workflow training", "Site specific troubleshooting", "Automated staff guidance"]
              },
              {
                name: "Achi",
                role: "Sales & Engagement",
                features: ["Mass customer outreach", "Personalized loyalty campaigns", "MPESA linked rewards"]
              },
              {
                name: "Tiri",
                role: "Management & Risk",
                features: ["Fraud & shrinkage detection", "Consolidated P&L reporting", "Branch performance ranking"]
              }
            ].map((agent, idx) => (
              <div key={idx} className="bg-white/[0.03] border border-white/10 p-12 rounded-3xl hover:bg-white/[0.05] transition-all group">
                <h3 className="text-3xl font-bold mb-2 font-marketing tracking-tight">{agent.name}</h3>
                <p className="text-white/30 font-semibold text-[10px] uppercase tracking-[0.25em] mb-12 font-neue">{agent.role}</p>
                <ul className="space-y-4">
                  {agent.features.map((f, i) => (
                    <li key={i} className="text-white/60 font-neue text-[15px] flex gap-3 items-start">
                      <span className="text-white/20 mt-1">•</span> {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Apps for Enterprise */}
      <section className="py-32 bg-[#FBFBFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-24">
             <h2 className="text-4xl lg:text-[48px] font-bold text-black mb-6 font-marketing">Managed Retail Infrastructure.</h2>
             <p className="text-black/40 max-w-xl mx-auto font-neue body-copy">The most advanced inventory management software in Kenya.</p>
           </div>

           <div className="grid lg:grid-cols-3 gap-10">
              {[
                {
                  title: "Executive Portal",
                  desc: "Global oversight predictive analytics and branch audit tools for leaders.",
                  img: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?auto=format&fit=crop&q=80&w=600"
                },
                {
                  title: "Staff Hub",
                  desc: "Simplified workflows with integrated support from Glenn AI Agent.",
                  img: "https://images.pexels.com/photos/5926462/pexels-photo-5926462.jpeg?auto=compress&cs=tinysrgb&w=600"
                },
                {
                  title: "Partner App",
                  desc: "Manage supplier relationships and stock deliveries automatically.",
                  img: "https://images.pexels.com/photos/6169033/pexels-photo-6169033.jpeg?auto=compress&cs=tinysrgb&w=600"
                }
              ].map((app, i) => (
                <div key={i} className="bg-white rounded-[32px] overflow-hidden border border-black/5 hover:shadow-lg transition-all">
                   <div className="p-10">
                      <h3 className="text-2xl font-bold mb-4 font-marketing">{app.title}</h3>
                      <p className="text-[15px] text-black/50 font-neue mb-10 leading-relaxed">{app.desc}</p>
                   </div>
                   <div className="px-10 pb-10">
                      <img src={app.img} alt={app.title} className="w-full h-48 object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-700" />
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-40 bg-black text-white text-center">
         <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-4xl lg:text-[56px] font-bold mb-12 font-marketing leading-tight">Scale your operations with clarity.</h2>
            <button className="px-16 py-7 bg-[#2D9B9B] text-white rounded-full font-bold cta-text text-[15px] transition-all hover:bg-[#268484] shadow-2xl mx-auto font-neue uppercase tracking-widest">
              Request Enterprise Quote
            </button>
         </div>
      </section>
    </div>
  );
};

export default Enterprise;

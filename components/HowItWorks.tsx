
import React from 'react';

const steps = [
  {
    num: "01",
    title: "Fast Setup",
    desc: "We set up your Veira POS and connect it to your shop infrastructure. We handle the heavy lifting."
  },
  {
    num: "02",
    title: "Start Selling",
    desc: "Start selling immediately with native MPESA and cash support. Offline mode keeps you running during downtime."
  },
  {
    num: "03",
    title: "Data Sync",
    desc: "Veira tracks every sale and syncs data to the secure cloud. You don't have to back up anything manually."
  },
  {
    num: "04",
    title: "Monitor & Grow",
    desc: "View reports, AI insights, and real-time alerts from your phone. Make decisions based on truth."
  }
];

export const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[#531753] font-bold text-sm tracking-widest uppercase font-neue">The Process</span>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mt-4 mb-8 font-marketing">How it works</h2>
            <p className="text-lg text-slate-600 mb-10 font-neue">
              Setup is fast and training is simple. Most shops are fully operational the same day our team arrives.
            </p>
            
            <div className="space-y-12">
              {steps.map((step, idx) => (
                <div key={idx} className="flex gap-6">
                  <div className="flex-shrink-0 w-14 h-14 bg-[#F8F9FA] border border-black/5 rounded-2xl flex items-center justify-center text-black font-bold text-xl font-neue shadow-sm">
                    {step.num}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2 font-marketing">{step.title}</h3>
                    <p className="text-slate-600 leading-relaxed font-neue">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative h-[600px]">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#2C0D36] rounded-[60px] transform rotate-3 -z-10"></div>
            <img 
              src="https://images.pexels.com/photos/5926238/pexels-photo-5926238.jpeg?auto=compress&cs=tinysrgb&w=1200" 
              alt="Successful Kenyan Shop Owner" 
              className="w-full h-full object-cover rounded-[60px] shadow-2xl relative z-10 grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

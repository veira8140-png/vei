
import React from 'react';

export const WhatVeiraDoes: React.FC = () => {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div>
            <div className="w-12 h-1 bg-black mb-8"></div>
            <h2 className="text-3xl lg:text-[40px] font-bold text-black mb-10 leading-tight font-marketing">
              Total visibility. <br/>Zero guesswork.
            </h2>
            <div className="space-y-8 text-[16px] lg:text-[18px] text-black/60 font-normal font-neue body-copy">
              <p>
                Veira replaces legacy systems with a streamlined workflow for real-time sales tracking, automated compliance, and intelligent growth insights.
              </p>
              <p>
                Designed for the demands of Kenyan retail, every transaction is synchronized, every payment accounted for, and every decision backed by audited data.
              </p>
            </div>
            
            <div className="mt-14 grid grid-cols-2 gap-8">
              <div className="p-8 bg-black rounded-3xl text-white">
                <div className="text-3xl lg:text-[28px] font-semibold mb-2 tracking-tight font-neue">99.9%</div>
                <div className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/50 font-neue">System Reliability</div>
              </div>
              <div className="p-8 bg-[#F8F9FA] rounded-3xl border border-black/5">
                <div className="text-3xl lg:text-[28px] font-semibold mb-2 tracking-tight font-neue">Instant</div>
                <div className="text-[11px] font-medium uppercase tracking-[0.2em] text-black/40 font-neue">MPESA Settlement</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-[4/5] bg-[#F8F9FA] rounded-[60px] relative overflow-hidden p-6 border border-black/5">
               <img 
                 src="https://images.pexels.com/photos/3894377/pexels-photo-3894377.jpeg?auto=compress&cs=tinysrgb&w=1200" 
                 alt="Mercy, Founder @ MiniMart" 
                 className="w-full h-full object-cover rounded-[40px] transition-all duration-700 hover:scale-105"
               />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-white p-10 rounded-[40px] shadow-[0_40px_100px_-15px_rgba(0,0,0,0.1)] max-w-sm z-20 border border-black/5">
              <p className="text-black font-semibold text-lg leading-snug italic mb-4 font-marketing">
                "Veira redefined how we handle inventory. It's the cleanest POS I've used in ten years."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-0.5 bg-black"></div>
                <p className="text-[11px] font-bold uppercase tracking-widest font-neue">Mercy, Founder @ MiniMart</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

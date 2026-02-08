
import React from 'react';
import { MapPin, ExternalLink } from 'lucide-react';
import Logo3D from './Logo3D';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-24 border-t border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-20 mb-20">
          <div className="md:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-10">
              <Logo3D className="w-12 h-12" />
              <span className="text-2xl font-bold tracking-tighter text-black font-didot">veira</span>
            </div>
            <p className="text-black/40 max-w-sm leading-relaxed mb-10 font-normal text-[15px] font-neue body-copy">
              Precision retail infrastructure for the modern Kenyan merchant. Built for performance security and absolute clarity.
            </p>
            <div className="flex flex-wrap gap-x-8 gap-y-4">
              {['Nairobi', 'Mombasa', 'Kisumu', 'Nakuru'].map(city => (
                <span key={city} className="text-[11px] font-bold uppercase tracking-[0.2em] text-black/20 font-neue">{city}</span>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-black mb-10 uppercase text-[11px] tracking-[0.3em] font-neue">Solutions</h4>
            <ul className="space-y-5 text-black/50 font-normal text-[14px] font-neue ui-text">
              <li><a href="/#pos" className="hover:text-black transition-colors">Best POS System Kenya</a></li>
              <li><a href="/#case-studies" className="hover:text-black transition-colors">Retail Case Studies</a></li>
              <li><a href="/#cloud" className="hover:text-black transition-colors">Cloud POS Software Nairobi</a></li>
              <li><a href="/#ai-agents" className="hover:text-black transition-colors">AI Inventory Insights</a></li>
              <li><a href="/#enterprise" className="hover:text-black transition-colors">ETIMS Compliant Software</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-black mb-10 uppercase text-[11px] tracking-[0.3em] font-neue">Quick Links</h4>
            <ul className="space-y-5 text-black/50 font-normal text-[14px] font-neue ui-text">
              <li><a href="#pos" className="hover:text-black transition-colors">MPESA Integrated POS</a></li>
              <li><a href="#faq" className="hover:text-black transition-colors">POS Pricing Kenya</a></li>
              <li><a href="#our-story" className="hover:text-black transition-colors">About Veira Infrastructure</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-black mb-10 uppercase text-[11px] tracking-[0.3em] font-neue">Find Us</h4>
            <div className="bg-[#F8F9FA] p-6 rounded-3xl border border-black/5 group hover:border-black/10 transition-all">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center text-white shrink-0 shadow-lg">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="font-bold text-black text-sm mb-1 font-marketing">Headquarters</p>
                  <p className="text-black/40 text-[12px] font-neue">Westlands Nairobi Kenya</p>
                </div>
              </div>
              <a 
                href="https://share.google/OwZ9A4xiyb7Z2TI8x" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-4 bg-white border border-black/5 rounded-2xl text-[12px] font-bold uppercase tracking-widest text-black hover:bg-black hover:text-white transition-all group/btn shadow-sm"
              >
                View on Map <ExternalLink size={14} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-12 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-black/20 text-[11px] font-medium uppercase tracking-[0.3em] font-neue">
            © {new Date().getFullYear()} VEIRA INFRASTRUCTURE. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-10 font-neue">
             {['TW', 'IN', 'FB'].map(social => (
               <a key={social} href="#" className="text-[11px] font-bold uppercase tracking-[0.3em] text-black/20 hover:text-black transition-colors">{social}</a>
             ))}
          </div>
        </div>
      </div>
    </footer>
  );
};


import React from 'react';
import { Star } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-slate-900 mb-6 font-marketing">Trusted by Shop Owners</h2>
          <div className="flex justify-center gap-1">
            {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="#10b981" className="text-emerald-500" />)}
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-10 bg-emerald-50 rounded-[40px] border border-emerald-100">
            <p className="text-xl text-slate-800 leading-relaxed italic mb-8 font-marketing">
              "Since switching to Veira, I finally know exactly how much my shop in Mombasa makes every day. MPESA and ETIMS just work, and I no longer spend hours on manual books."
            </p>
            <div className="flex items-center gap-4">
              <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150&h=150" alt="David Mwangi" className="w-14 h-14 rounded-full border-2 border-white shadow-md object-cover" />
              <div>
                <h4 className="font-bold text-slate-900 font-neue">David Mwangi</h4>
                <p className="text-sm text-slate-500 font-neue">Retailer, Nyali Mombasa</p>
              </div>
            </div>
          </div>
          
          <div className="p-10 bg-slate-50 rounded-[40px] border border-slate-100">
            <p className="text-xl text-slate-800 leading-relaxed italic mb-8 font-marketing">
              "Veira helped me catch inventory losses I didn't even know were happening at my Kisumu branch. The reports are clear and simple, even for my staff who aren't tech-savvy."
            </p>
            <div className="flex items-center gap-4">
              <img src="https://images.unsplash.com/photo-1531123414780-f74242c2b052?auto=format&fit=crop&q=80&w=150&h=150" alt="Sarah Otieno" className="w-14 h-14 rounded-full border-2 border-white shadow-md object-cover" />
              <div>
                <h4 className="font-bold text-slate-900 font-neue">Sarah Otieno</h4>
                <p className="text-sm text-slate-500 font-neue">Mini-Supermarket Owner, Kisumu</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

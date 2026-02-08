
import React from 'react';
import { Apple, ShoppingBag, Wine, Pill, Hammer } from 'lucide-react';

const cases = [
  { name: "Grocery Shops", icon: <Apple size={20} />, desc: "Track fast-moving items, manage stock, and handle high volumes." },
  { name: "Mini Supermarkets", icon: <ShoppingBag size={20} />, desc: "Monitor margins, suppliers, and daily performance across departments." },
  { name: "Liquor Stores", icon: <Wine size={20} />, desc: "Control pricing, reduce shrinkage, and track sales by staff shift." },
  { name: "Pharmacies", icon: <Pill size={20} />, desc: "Ensure accurate records, fast checkout, and reliable reporting." },
  { name: "Hardware Shops", icon: <Hammer size={20} />, desc: "Manage large inventories and track sales by product category." }
];

export const UseCases: React.FC = () => {
  return (
    <section id="apps" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-slate-900 mb-6 font-marketing">Who Veira is for</h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto font-neue body-copy">Different shops have different challenges. We've built solutions for all of them.</p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {cases.map((c, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl border border-slate-100 hover:shadow-xl transition-all text-center">
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white mx-auto mb-6">
                {c.icon}
              </div>
              <h3 className="font-bold text-slate-900 mb-3 font-marketing">{c.name}</h3>
              <p className="text-sm text-slate-500 leading-relaxed font-neue">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

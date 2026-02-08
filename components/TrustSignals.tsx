
import React from 'react';

export const TrustSignals: React.FC = () => {
  return (
    <section className="py-12 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold text-slate-400 uppercase tracking-widest mb-8">
          Used by growing shops across Kenya
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 grayscale opacity-60">
          <div className="text-2xl font-black italic text-slate-800">QuickShop</div>
          <div className="text-2xl font-black italic text-slate-800">MiniMart+</div>
          <div className="text-2xl font-black italic text-slate-800">NairobiGrocer</div>
          <div className="text-2xl font-black italic text-slate-800">LiquorHub</div>
          <div className="text-2xl font-black italic text-slate-800">PharmaCore</div>
        </div>
      </div>
    </section>
  );
};

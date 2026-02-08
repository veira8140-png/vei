import React from 'react';

const LogoArtcaffe = () => (
  <div className="flex items-center gap-2">
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-black">
      <path d="M18 8h1a4 4 0 0 1 0 8h-1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6 1v3M10 1v3M14 1v3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
    <span className="text-[24px] font-marketing font-bold tracking-tight text-slate-900">Artcaffé</span>
  </div>
);

const LogoJava = () => (
  <div className="flex items-center gap-2">
    <div className="w-10 h-10 rounded-full border-[3px] border-slate-900 flex items-center justify-center">
      <span className="text-[18px] font-black text-slate-900 -mb-0.5">J</span>
    </div>
    <div className="flex flex-col leading-none">
      <span className="text-[22px] font-didot font-black tracking-tighter text-slate-900 uppercase">Java House</span>
      <span className="text-[8px] font-bold text-slate-400 tracking-[0.4em] uppercase mt-1">Nairobi</span>
    </div>
  </div>
);

const LogoQuickmart = () => (
  <div className="flex items-center gap-1.5">
    <div className="bg-slate-900 px-3 py-1 rounded-md transform -skew-x-12">
      <span className="text-white font-black text-[20px] italic">Q</span>
    </div>
    <span className="text-[26px] font-neue font-black tracking-tighter text-slate-900">Quickmart</span>
  </div>
);

const LogoChandarana = () => (
  <div className="flex items-center gap-3">
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-black">
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4H6z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3 6h18M16 10a4 4 0 0 1-8 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
    <div className="flex flex-col leading-none">
      <span className="text-[20px] font-neue font-black text-slate-900 uppercase tracking-tight">Chandarana</span>
      <span className="text-[11px] font-bold text-slate-500 tracking-[0.2em] uppercase">Foodplus</span>
    </div>
  </div>
);

const LogoGoodlife = () => (
  <div className="flex items-center gap-3">
    <div className="relative">
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-black">
        <path d="M12 2v20M2 12h20" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
      </svg>
      <div className="absolute inset-0 border-2 border-slate-900 rounded-lg -m-1 opacity-20"></div>
    </div>
    <div className="flex flex-col leading-none">
      <span className="text-[22px] font-neue font-extrabold tracking-tight text-slate-900">Goodlife</span>
      <span className="text-[9px] font-bold text-slate-400 tracking-[0.1em] uppercase">Pharmacy & Health</span>
    </div>
  </div>
);

export const TrustSignals: React.FC = () => {
  return (
    <section className="py-20 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-4 mb-14">
            <div className="h-px w-12 bg-slate-200"></div>
            <p className="text-center text-[11px] font-bold text-slate-400 uppercase tracking-[0.5em]">
              The infrastructure of choice for elite merchants
            </p>
            <div className="h-px w-12 bg-slate-200"></div>
          </div>
          <div className="w-full flex flex-wrap justify-center items-center gap-x-20 gap-y-16 grayscale opacity-30 hover:opacity-100 transition-all duration-1000 ease-in-out cursor-default">
            <div className="hover:scale-110 transition-transform duration-500"><LogoArtcaffe /></div>
            <div className="hover:scale-110 transition-transform duration-500"><LogoJava /></div>
            <div className="hover:scale-110 transition-transform duration-500"><LogoQuickmart /></div>
            <div className="hover:scale-110 transition-transform duration-500"><LogoChandarana /></div>
            <div className="hover:scale-110 transition-transform duration-500"><LogoGoodlife /></div>
          </div>
        </div>
      </div>
    </section>
  );
};
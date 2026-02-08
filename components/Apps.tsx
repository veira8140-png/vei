
import React, { useState } from 'react';
import { 
  Smartphone, Layout, UserCheck, RefreshCw, Zap, ArrowRight, 
  Monitor, AppWindow, TrendingUp, Package, Users, Bell, 
  ShoppingCart, Search, MessageSquare, Clock, ShieldCheck, 
  Store, ChevronRight, Star, Settings, DollarSign, PieChart,
  Home, Heart, CreditCard, ChevronLeft, Plus
} from 'lucide-react';

const OwnerPortalMock = () => {
  const [activeTab, setActiveTab] = useState('Overview');
  return (
    <div className="w-full h-[480px] bg-white rounded-[32px] overflow-hidden shadow-2xl border border-black/10 flex text-left font-neue group/portal">
      {/* Sidebar */}
      <div className="w-16 md:w-20 bg-[#2C0D36] flex flex-col items-center py-8 gap-8 shrink-0">
        <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white"><PieChart size={20} /></div>
        <div className="w-10 h-10 rounded-xl text-white/30 hover:text-white transition-colors flex items-center justify-center cursor-pointer"><Store size={20} /></div>
        <div className="w-10 h-10 rounded-xl text-white/30 hover:text-white transition-colors flex items-center justify-center cursor-pointer"><Users size={20} /></div>
        <div className="w-10 h-10 rounded-xl text-white/30 hover:text-white transition-colors mt-auto flex items-center justify-center cursor-pointer"><Settings size={20} /></div>
      </div>
      
      {/* Main Area */}
      <div className="flex-grow flex flex-col bg-slate-50 overflow-hidden">
        {/* Header */}
        <div className="h-20 bg-white border-b border-black/5 flex items-center justify-between px-8 shrink-0">
          <div>
            <h4 className="font-bold text-sm text-black">Business Intelligence</h4>
            <p className="text-[10px] text-black/40 font-bold uppercase tracking-widest">Real-time Global Sync</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 rounded-full bg-[#D946EF]/10 border border-[#D946EF]/20 flex items-center justify-center text-[10px] font-bold text-[#531753]">KW</div>
          </div>
        </div>

        {/* Dashboard Grid */}
        <div className="p-8 overflow-y-auto space-y-8 custom-scrollbar">
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-3xl border border-black/5 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <p className="text-[10px] font-bold text-black/30 uppercase tracking-[0.2em]">Total Sales</p>
                <TrendingUp size={14} className="text-emerald-500" />
              </div>
              <p className="text-2xl font-bold text-[#2C0D36] font-marketing">KES 142.5k</p>
              <p className="text-[10px] font-bold text-emerald-500 mt-2">↑ 14% this week</p>
            </div>
            <div className="bg-white p-6 rounded-3xl border border-black/5 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <p className="text-[10px] font-bold text-black/30 uppercase tracking-[0.2em]">Footfall</p>
                <Users size={14} className="text-blue-500" />
              </div>
              <p className="text-2xl font-bold text-[#2C0D36] font-marketing">2,482</p>
              <p className="text-[10px] font-bold text-black/30 mt-2">Across Nairobi</p>
            </div>
          </div>

          <div className="bg-white rounded-3xl border border-black/5 shadow-sm overflow-hidden">
            <div className="px-6 py-4 bg-slate-50 border-b border-black/5 flex justify-between items-center">
              <span className="text-[10px] font-black uppercase text-black/40 tracking-widest">Revenue by Branch</span>
              <button className="text-[10px] font-bold text-[#2D9B9B] hover:underline">Full Report</button>
            </div>
            <div className="p-6 space-y-5">
              {[
                { name: 'Westlands Hub', val: '84,000', perc: 75, color: 'bg-[#531753]' },
                { name: 'CBD Terminal', val: '42,000', perc: 45, color: 'bg-[#2D9B9B]' },
                { name: 'Mombasa Rd', val: '16,500', perc: 20, color: 'bg-[#D946EF]' },
              ].map((b, i) => (
                <div key={i} className="group/branch">
                  <div className="flex justify-between text-[11px] font-bold mb-2">
                    <span className="text-black/70">{b.name}</span>
                    <span className="text-black">KES {b.val}</span>
                  </div>
                  <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div className={`h-full ${b.color} transition-all duration-1000 delay-300 group-hover/portal:translate-x-0`} style={{ width: `${b.perc}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const StaffHubMock = () => (
  <div className="w-full h-[480px] bg-[#F4F5F7] rounded-[48px] overflow-hidden shadow-2xl border border-black/5 flex flex-col font-neue text-left max-w-[340px] mx-auto relative group/staff">
    {/* Device Notch */}
    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-5 bg-black rounded-full z-50"></div>
    
    {/* App Header */}
    <div className="bg-white px-8 pt-12 pb-6 flex justify-between items-center border-b border-black/5">
      <div>
        <p className="text-[9px] font-black text-black/20 uppercase tracking-[0.2em] mb-1">Floor Staff</p>
        <h5 className="text-[16px] font-bold text-black">Wambui K.</h5>
      </div>
      <div className="w-12 h-12 rounded-2xl bg-[#531753] flex items-center justify-center text-white shadow-lg shadow-purple-900/20">
        <UserCheck size={22} />
      </div>
    </div>

    {/* Quick Actions */}
    <div className="p-6 space-y-6 overflow-y-auto no-scrollbar pb-24">
      {/* AI Alert Card */}
      <div className="p-6 bg-black rounded-[32px] text-white shadow-2xl relative overflow-hidden group/alert">
        <div className="absolute -top-4 -right-4 p-8 opacity-5 group-hover/alert:opacity-10 transition-opacity"><Zap size={80} /></div>
        <div className="flex items-center gap-2 mb-3">
          <div className="w-2 h-2 bg-rose-500 rounded-full animate-pulse"></div>
          <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/40">Urgent: Glenn AI</p>
        </div>
        <h5 className="font-bold text-sm mb-4 leading-snug">Fridge 2 temperature is rising. Please check seal.</h5>
        <button className="w-full py-3 bg-white/10 hover:bg-white/20 rounded-2xl text-[10px] font-bold uppercase tracking-widest transition-all">Resolve Now</button>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white p-5 rounded-[28px] border border-black/5 flex flex-col items-center justify-center gap-3 hover:bg-white/80 transition-all cursor-pointer shadow-sm active:scale-95">
          <Clock size={20} className="text-[#2D9B9B]" />
          <span className="text-[10px] font-bold uppercase tracking-widest">Shift Log</span>
        </div>
        <div className="bg-white p-5 rounded-[28px] border border-black/5 flex flex-col items-center justify-center gap-3 hover:bg-white/80 transition-all cursor-pointer shadow-sm active:scale-95">
          <Package size={20} className="text-[#D946EF]" />
          <span className="text-[10px] font-bold uppercase tracking-widest">Stock-In</span>
        </div>
      </div>

      <div className="bg-[#2D9B9B]/5 p-6 rounded-[32px] border border-[#2D9B9B]/10">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-6 h-6 rounded-lg bg-black flex items-center justify-center text-white text-[10px] font-black">G</div>
          <span className="text-[10px] font-black uppercase tracking-widest text-[#2D9B9B]">Daily Task</span>
        </div>
        <p className="text-[12px] font-medium text-black/70 mb-5 leading-relaxed">Ensure all "Beef Samosa" prep is completed before 12:30 PM lunch rush.</p>
        <div className="flex items-center gap-2">
           <div className="w-full h-1.5 bg-black/5 rounded-full overflow-hidden">
              <div className="w-1/3 h-full bg-[#2D9B9B]"></div>
           </div>
           <span className="text-[9px] font-black text-black/30">30%</span>
        </div>
      </div>
    </div>

    {/* Nav Bar */}
    <div className="mt-auto bg-white/80 backdrop-blur-xl border-t border-black/5 p-6 flex justify-around items-center absolute bottom-0 left-0 right-0">
       <button className="p-2 text-[#531753]"><Layout size={20} /></button>
       <button className="p-2 text-black/20 hover:text-black transition-colors"><MessageSquare size={20} /></button>
       <button className="p-2 text-black/20 hover:text-black transition-colors"><Settings size={20} /></button>
    </div>
  </div>
);

const CustomerAppMock = () => {
  const [activeCat, setActiveCat] = useState('Burgers');
  return (
    <div className="w-full h-[480px] bg-white rounded-[48px] overflow-hidden shadow-2xl border border-black/10 flex flex-col font-neue text-left max-w-[340px] mx-auto relative">
      {/* App Bar */}
      <div className="px-8 pt-12 pb-4 flex justify-between items-center bg-white/80 backdrop-blur-md sticky top-0 z-20">
         <div>
            <p className="text-[9px] font-black text-[#D946EF] uppercase tracking-[0.3em] mb-1">Nairobi Delivery</p>
            <h5 className="text-[18px] font-bold text-black font-marketing">The Burger Lab</h5>
         </div>
         <div className="flex gap-4">
            <button className="p-2 text-black/30"><Search size={20} /></button>
            <div className="relative">
              <ShoppingCart size={22} className="text-black" />
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-black rounded-full text-white text-[8px] font-black flex items-center justify-center">2</div>
            </div>
         </div>
      </div>

      {/* Categories */}
      <div className="px-8 py-4 flex gap-3 overflow-x-auto no-scrollbar shrink-0">
         {['Burgers', 'Sides', 'Shakes', 'Deals'].map(c => (
           <button 
            key={c}
            onClick={() => setActiveCat(c)}
            className={`px-5 py-2 rounded-full text-[11px] font-bold transition-all border ${activeCat === c ? 'bg-black text-white border-black' : 'bg-slate-50 text-black/40 border-black/5 hover:border-black/10'}`}
           >
             {c}
           </button>
         ))}
      </div>

      {/* Product Feed */}
      <div className="flex-grow overflow-y-auto px-8 space-y-8 pb-32 custom-scrollbar">
         <div className="grid grid-cols-2 gap-4">
            {[
              { name: 'Double Smash', price: '850', emoji: '🍔', tag: 'Bestseller' },
              { name: 'Masala Fries', price: '450', emoji: '🍟', tag: 'Hot' },
            ].map((p, i) => (
              <div key={i} className="group/item flex flex-col bg-slate-50 p-5 rounded-[32px] border border-black/5 hover:bg-white hover:border-[#D946EF]/20 hover:shadow-xl transition-all">
                 <div className="text-4xl mb-4 group-hover/item:scale-110 transition-transform">{p.emoji}</div>
                 <div className="mt-auto">
                    <p className="text-[12px] font-bold text-black mb-1">{p.name}</p>
                    <p className="text-[10px] font-black text-[#D946EF]">KES {p.price}</p>
                 </div>
                 <button className="absolute bottom-2 right-2 p-2 bg-black text-white rounded-full opacity-0 group-hover/item:opacity-100 transition-opacity"><Plus size={14} /></button>
              </div>
            ))}
         </div>

         <div>
            <div className="flex justify-between items-center mb-4">
              <h5 className="text-[12px] font-bold uppercase tracking-widest text-black/30">Nearby Shops</h5>
              <button className="text-[10px] font-bold text-black/50">See all</button>
            </div>
            {[
              { name: 'Westlands Hub', dist: '1.2 km', rating: '4.8' },
              { name: 'CBD Branch', dist: '4.5 km', rating: '4.9' },
            ].map((s, i) => (
              <div key={i} className="flex items-center gap-4 p-4 hover:bg-slate-50 rounded-3xl transition-all cursor-pointer border border-transparent hover:border-black/5">
                 <div className="w-12 h-12 rounded-2xl bg-[#531753] flex items-center justify-center text-white"><Store size={20} /></div>
                 <div className="flex-grow">
                    <p className="text-[13px] font-bold text-black">{s.name}</p>
                    <p className="text-[10px] font-bold text-black/30">{s.dist}</p>
                 </div>
                 <div className="flex items-center gap-1">
                    <Star size={10} fill="currentColor" className="text-amber-400" />
                    <span className="text-[11px] font-bold">{s.rating}</span>
                 </div>
              </div>
            ))}
         </div>
      </div>

      {/* Tab Bar */}
      <div className="mt-auto bg-white/90 backdrop-blur-xl border-t border-black/5 p-6 flex justify-around items-center absolute bottom-0 left-0 right-0">
         <button className="p-2 text-black"><Home size={20} /></button>
         <button className="p-2 text-black/20"><Heart size={20} /></button>
         <button className="p-2 text-black/20"><CreditCard size={20} /></button>
         <button className="p-2 text-black/20"><UserCheck size={20} /></button>
      </div>
    </div>
  );
};

const Apps: React.FC = () => {
  return (
    <div id="apps" className="bg-white overflow-hidden">
      {/* Apps Hero */}
      <section className="py-32 border-b border-black/5 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <div className="w-12 h-1 bg-[#531753] mb-10"></div>
              <h1 className="text-4xl lg:text-[64px] font-bold text-black mb-10 font-marketing leading-[1.1]">
                Modern apps <br/>
                <span className="font-didot italic text-[#531753]">built for your scale.</span>
              </h1>
              <div className="space-y-6 text-lg text-black/60 font-neue body-copy leading-relaxed">
                <p>
                  Retail businesses in Nairobi need technology that works, looks modern, and stays up to date with MPESA and ETIMS standards.
                </p>
                <p className="text-black font-semibold">
                  We design, build, and maintain your business apps on your behalf. You get a reliable ecosystem without hiring developers.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-white rounded-[80px] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] border border-black/5 flex items-center justify-center p-12 overflow-hidden">
                <div className="absolute top-0 right-0 w-80 h-80 bg-black/[0.02] rounded-full blur-3xl orb-animation"></div>
                <Smartphone size={280} className="text-black/5 absolute rotate-12 -bottom-24 -right-12" />
                <div className="relative z-10 text-center">
                  <AppWindow size={96} className="mx-auto mb-8 text-[#2C0D36] orb-glow rounded-[32px] bg-slate-50 p-4" />
                  <p className="text-[11px] font-bold uppercase tracking-[0.4em] text-black/40 font-neue">The Managed Ecosystem</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Apps */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-24 text-center">
            <h2 className="text-4xl lg:text-[56px] font-bold text-black mb-8 font-marketing">One System. Three Experiences.</h2>
            <p className="text-black/50 font-neue max-w-2xl mx-auto text-lg">Tailored retail technology for your staff, your managers, and your customers.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-20">
            {/* Owner Portal */}
            <div className="group flex flex-col items-center lg:items-start">
              <div className="mb-12 w-full transform group-hover:-translate-y-2 transition-transform duration-700">
                <OwnerPortalMock />
              </div>
              <div className="mt-auto px-4">
                <div className="flex items-center gap-4 mb-6">
                   <div className="p-3 bg-black text-white rounded-2xl shadow-lg"><Layout size={24} /></div>
                   <h3 className="text-3xl font-bold font-marketing">Owner Portal</h3>
                </div>
                <h4 className="font-bold text-xl mb-6 font-marketing text-black/70 italic">Visibility from any location.</h4>
                <ul className="space-y-4 text-sm text-black/50 font-neue mb-10">
                  <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-[#D946EF] rounded-full"></div> Daily sales and performance summaries</li>
                  <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-[#D946EF] rounded-full"></div> Alerts and insights from Tiri AI Agent</li>
                  <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-[#D946EF] rounded-full"></div> Multi-location visibility for enterprise</li>
                </ul>
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-black/30 font-neue">100% Fully Managed Infrastructure</p>
              </div>
            </div>

            {/* Staff Hub */}
            <div className="group flex flex-col items-center lg:items-start">
              <div className="mb-12 w-full transform group-hover:-translate-y-2 transition-transform duration-700">
                <StaffHubMock />
              </div>
              <div className="mt-auto px-4">
                <div className="flex items-center gap-4 mb-6">
                   <div className="p-3 bg-black text-white rounded-2xl shadow-lg"><UserCheck size={24} /></div>
                   <h3 className="text-3xl font-bold font-marketing">Staff Hub</h3>
                </div>
                <h4 className="font-bold text-xl mb-6 font-marketing text-black/70 italic">Frictionless floor operations.</h4>
                <ul className="space-y-4 text-sm text-black/50 font-neue mb-10">
                  <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-[#2D9B9B] rounded-full"></div> Intuitive sales and stock counting</li>
                  <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-[#2D9B9B] rounded-full"></div> Built-in guidance from Glenn AI Agent</li>
                  <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-[#2D9B9B] rounded-full"></div> Role-based security and shift logs</li>
                </ul>
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-black/30 font-neue">Optimized for Retail Hardware</p>
              </div>
            </div>

            {/* Customer App */}
            <div className="group flex flex-col items-center lg:items-start">
              <div className="mb-12 w-full transform group-hover:-translate-y-2 transition-transform duration-700">
                <CustomerAppMock />
              </div>
              <div className="mt-auto px-4">
                <div className="flex items-center gap-4 mb-6">
                   <div className="p-3 bg-black text-white rounded-2xl shadow-lg"><Zap size={24} /></div>
                   <h3 className="text-3xl font-bold font-marketing">Customer App</h3>
                </div>
                <h4 className="font-bold text-xl mb-6 font-marketing text-black/70 italic">Elite consumer experience.</h4>
                <ul className="space-y-4 text-sm text-black/50 font-neue mb-10">
                  <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-[#531753] rounded-full"></div> Native e-commerce and loyalty flow</li>
                  <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-[#531753] rounded-full"></div> Instant order tracking & MPESA verification</li>
                  <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-[#531753] rounded-full"></div> AI-powered support from Achi Agent</li>
                </ul>
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-black/30 font-neue">Your Brand. Our Technology.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance & Modernization */}
      <section className="py-32 bg-black text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-32 items-center">
            <div>
              <span className="text-white/40 font-bold tracking-[0.4em] text-[10px] uppercase block mb-8 font-neue">The Managed Standard</span>
              <h2 className="text-4xl lg:text-6xl font-bold mb-10 font-marketing leading-tight">Ongoing Maintenance <br/>& Modernization</h2>
              <p className="text-white/60 text-lg mb-12 font-neue body-copy leading-relaxed">
                The best POS in Kenya doesn't just work today, it evolves. We continuously update your software to stay ahead of KRA and MPESA changes.
              </p>
              <div className="grid sm:grid-cols-2 gap-12">
                <div className="space-y-5 group">
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-white/5 rounded-xl text-[#D946EF] group-hover:bg-[#D946EF] group-hover:text-white transition-all"><RefreshCw size={20} /></div>
                    <span className="font-bold font-marketing text-xl">Monthly features</span>
                  </div>
                  <p className="text-white/40 text-[13px] font-neue leading-relaxed">New capabilities added every cycle at zero additional development cost.</p>
                </div>
                <div className="space-y-5 group">
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-white/5 rounded-xl text-[#2D9B9B] group-hover:bg-[#2D9B9B] group-hover:text-white transition-all"><ShieldCheck size={20} /></div>
                    <span className="font-bold font-marketing text-xl">KRA Alignment</span>
                  </div>
                  <p className="text-white/40 text-[13px] font-neue leading-relaxed">Automated ETIMS protocol tuning to ensure you never face a penalty.</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-80 h-80 md:w-[450px] md:h-[450px] bg-white/[0.03] rounded-full orb-animation orb-glow flex items-center justify-center p-12 border border-white/10 relative">
                <div className="absolute inset-0 bg-[#D946EF]/5 blur-[120px] rounded-full"></div>
                <div className="text-center relative z-10">
                   <div className="w-24 h-24 md:w-32 md:h-32 bg-white/5 rounded-[40px] flex items-center justify-center mx-auto mb-10 border border-white/10">
                      <RefreshCw size={56} className="text-white opacity-40 animate-spin duration-[15s]" />
                   </div>
                   <p className="text-[12px] font-black uppercase tracking-[0.5em] font-neue text-white/60">Fully Managed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Close Message */}
      <section className="py-40 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="w-16 h-1 bg-black mx-auto mb-12"></div>
          <p className="text-4xl lg:text-[64px] font-bold font-marketing leading-[1.05] mb-14">
            Do not buy software. <br/>
            <span className="font-didot italic text-[#2C0D36]">Get managed infrastructure.</span>
          </p>
          <button className="bg-[#2D9B9B] text-white px-16 py-7 rounded-full font-black cta-text text-[16px] flex items-center justify-center gap-6 mx-auto group font-neue uppercase tracking-[0.2em] shadow-2xl hover:bg-[#268484] hover:shadow-emerald-900/40 hover:-translate-y-1 transition-all">
            See the Apps in Action <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Apps;

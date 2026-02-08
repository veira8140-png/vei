
import React, { useState, useMemo, useEffect } from 'react';
import { CheckCircle, Zap, ArrowRight, Search, Plus, Minus, LayoutGrid, ClipboardList, Users, FileText, Trash2, Package, TrendingUp, DollarSign, Clock, User, X, Power, Settings, Coffee, Utensils, GlassWater, Monitor, CreditCard, Receipt } from 'lucide-react';
import { WaveBackground } from './WaveBackground';

const PRODUCTS = [
  { id: 1, name: 'Double Smash Burger', price: 850, category: 'Food', emoji: '🍔' },
  { id: 2, name: 'Loaded Masala Fries', price: 450, category: 'Food', emoji: '🍟' },
  { id: 3, name: 'Beef Samosa (Pair)', price: 150, category: 'Snacks', emoji: '🥟' },
  { id: 4, name: 'Authentic Masala Tea', price: 180, category: 'Drinks', emoji: '☕' },
  { id: 5, name: 'Fresh Passion Juice', price: 250, category: 'Drinks', emoji: '🍹' },
  { id: 6, name: 'Stoney Tangawizi', price: 120, category: 'Drinks', emoji: '🥤' },
  { id: 7, name: 'Mandazi Special', price: 80, category: 'Snacks', emoji: '🥯' },
  { id: 8, name: 'Kienyeji Chicken Platter', price: 1200, category: 'Food', emoji: '🍗' },
  { id: 9, name: 'Chocolate Muffin', price: 320, category: 'Snacks', emoji: '🧁' },
];

const CATEGORIES = [
  { name: 'All', icon: <LayoutGrid size={14} /> },
  { name: 'Food', icon: <Utensils size={14} /> },
  { name: 'Drinks', icon: <GlassWater size={14} /> },
  { name: 'Snacks', icon: <Coffee size={14} /> }
];

const TABLES = [
  { id: 'T1', status: 'active' },
  { id: 'T2', status: 'empty' },
  { id: 'T3', status: 'active' },
  { id: 'T4', status: 'empty' },
  { id: 'T5', status: 'reserved' },
  { id: 'Bar', status: 'active' }
];

const POSDashboardMock = () => {
  const [activeTab, setActiveTab] = useState('orders');
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeTable, setActiveTable] = useState('T1');
  const [searchQuery, setSearchQuery] = useState('');
  const [cart, setCart] = useState<{ id: number; qty: number }[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [terminalOn, setTerminalOn] = useState(true);
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(p => {
      const matchesCategory = activeCategory === 'All' || p.category === activeCategory;
      const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const addToCart = (id: number) => {
    if (!terminalOn) return;
    setCart(prev => {
      const existing = prev.find(item => item.id === id);
      if (existing) {
        return prev.map(item => item.id === id ? { ...item, qty: item.qty + 1 } : item);
      }
      return [...prev, { id, qty: 1 }];
    });
  };

  const updateQty = (id: number, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(0, item.qty + delta);
        return { ...item, qty: newQty };
      }
      return item;
    }).filter(item => item.qty > 0));
  };

  const subtotal = cart.reduce((acc, item) => {
    const product = PRODUCTS.find(p => p.id === item.id);
    return acc + (product?.price || 0) * item.qty;
  }, 0);

  const tax = subtotal * 0.16;
  const total = subtotal + tax;

  const handleCheckout = () => {
    if (cart.length === 0) return;
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
        setCart([]);
      }, 3000);
    }, 2500);
  };

  if (!terminalOn) {
    return (
      <div className="relative max-w-5xl mx-auto mt-20 group h-[750px] flex items-center justify-center bg-black rounded-[40px] border border-white/10 shadow-2xl overflow-hidden cursor-pointer" onClick={() => setTerminalOn(true)}>
        <div className="text-center">
          <Power size={48} className="text-white/20 mx-auto mb-6 animate-pulse" />
          <p className="text-white/40 font-bold uppercase tracking-[0.3em] text-[11px] font-neue">Terminal Hibernated</p>
          <p className="text-white/20 text-[10px] mt-2 font-neue">Click to wake Station 042</p>
        </div>
      </div>
    );
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'inventory':
        return (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-2xl font-bold font-marketing text-black mb-8">Stock Control</h2>
            <div className="bg-white rounded-[32px] border border-black/5 overflow-hidden shadow-sm">
              <table className="w-full text-left text-sm">
                <thead className="bg-[#F8F9FB] border-b border-black/5">
                  <tr>
                    <th className="px-8 py-5 font-bold uppercase tracking-widest text-[10px] text-black/40 font-neue">Product</th>
                    <th className="px-8 py-5 font-bold uppercase tracking-widest text-[10px] text-black/40 font-neue">Available</th>
                    <th className="px-8 py-5 font-bold uppercase tracking-widest text-[10px] text-black/40 font-neue">Sales</th>
                    <th className="px-8 py-5 font-bold uppercase tracking-widest text-[10px] text-black/40 font-neue">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-black/5 font-neue">
                  {PRODUCTS.slice(0, 6).map((item, i) => (
                    <tr key={i} className="hover:bg-slate-50 transition-colors cursor-pointer group/row">
                      <td className="px-8 py-5 font-bold text-black">{item.name}</td>
                      <td className="px-8 py-5 text-black/60 font-medium">{(50 - i * 6) + ' Units'}</td>
                      <td className="px-8 py-5 text-black/60">{(12 + i * 3) + ' Today'}</td>
                      <td className="px-8 py-5">
                        <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${i === 4 ? 'bg-rose-50 text-rose-500' : 'bg-emerald-50 text-emerald-600'}`}>
                          {i === 4 ? 'Low Stock' : 'Stable'}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );
      case 'customers':
        return (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-2xl font-bold font-marketing text-black mb-8">Elite Rewards Hub</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                { name: 'Zainab W.', spend: '24,850', visits: 12, avatar: 'https://images.unsplash.com/photo-1531123414780-f74242c2b052?auto=format&fit=crop&q=80&w=150&h=150', tag: 'Platinum' },
                { name: 'Kamau O.', spend: '15,200', visits: 9, avatar: 'https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?auto=format&fit=crop&q=80&w=150&h=150', tag: 'Black' },
                { name: 'Njeri A.', spend: '8,100', visits: 4, avatar: 'https://images. Low resolution images may break aesthetics.', tag: 'Gold' },
                { name: 'Grace M.', spend: '42,450', visits: 24, avatar: 'https://images.pexels.com/photos/4814460/pexels-photo-4814460.jpeg?auto=compress&cs=tinysrgb&w=150&h=150', tag: 'Ambassador' },
              ].map((c, i) => (
                <div key={i} className="bg-white p-7 rounded-[32px] border border-black/5 flex items-center gap-5 hover:border-[#531753]/30 transition-all cursor-pointer group/card shadow-sm hover:shadow-xl">
                  <div className="relative">
                    <img src={c.avatar} className="w-16 h-16 rounded-full border-2 border-white shadow-md object-cover group-hover/card:scale-105 transition-transform" alt={c.name} />
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-emerald-500 border-2 border-white rounded-full flex items-center justify-center text-[10px] text-white font-bold">✓</div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-bold text-black text-[16px] font-neue">{c.name}</h4>
                      <span className="px-2 py-0.5 bg-black/5 text-black/40 text-[9px] font-bold rounded uppercase tracking-tighter">{c.tag}</span>
                    </div>
                    <p className="text-[12px] text-black/40 font-medium font-neue">{c.visits} total interactions</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[#531753] font-bold text-sm font-neue">KES {c.spend}</p>
                    <ArrowRight size={14} className="ml-auto mt-2 text-black/20 group-hover/card:text-black transition-colors" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'reports':
        return (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-2xl font-bold font-marketing text-black mb-8">Intelligence Briefing</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {[
                { label: 'Net Revenue', val: '84,900', trend: '+22.4%', icon: <DollarSign size={20} className="text-blue-500" /> },
                { label: 'EBITDA (Est)', val: '32,150', trend: '+14.1%', icon: <TrendingUp size={20} className="text-emerald-500" /> },
                { label: 'Efficiency', val: '98.2%', trend: '+1.5%', icon: <CheckCircle size={20} className="text-[#531753]" /> },
              ].map((stat, i) => (
                <div key={i} className="bg-white p-8 rounded-[32px] border border-black/5 shadow-sm group/stat hover:border-black/10 transition-all">
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-black/5 flex items-center justify-center group-hover/stat:scale-110 transition-transform">{stat.icon}</div>
                    <span className={`text-[11px] font-bold font-neue px-2.5 py-1 rounded-full ${stat.trend.startsWith('+') ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-500'}`}>{stat.trend}</span>
                  </div>
                  <p className="text-[11px] font-bold uppercase tracking-widest text-black/30 font-neue">{stat.label}</p>
                  <p className="text-2xl font-bold text-black font-marketing mt-2">KES {stat.val}</p>
                </div>
              ))}
            </div>
            <div className="bg-white p-10 rounded-[40px] border border-black/5 shadow-sm h-72 flex flex-col justify-between">
               <div className="flex justify-between items-center mb-6">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-black/40 font-neue">Shift Optimization Flow</span>
                  <div className="flex gap-4">
                     <div className="flex items-center gap-2"><div className="w-2.5 h-2.5 bg-[#531753] rounded-full"></div><span className="text-[10px] font-bold text-black/40">Gross Sales</span></div>
                  </div>
               </div>
               <div className="flex items-end justify-between gap-5 h-full pt-4">
                  {[45, 80, 55, 98, 70, 90, 60, 92, 85].map((h, i) => (
                    <div key={i} className="flex-grow bg-slate-50 rounded-t-2xl relative group/bar cursor-pointer" style={{ height: `${h}%` }}>
                      <div className="absolute inset-0 bg-gradient-to-t from-[#531753] to-[#D946EF] opacity-0 group-hover/bar:opacity-100 transition-all duration-500 rounded-t-2xl shadow-xl"></div>
                      <div className="absolute -top-9 left-1/2 -translate-x-1/2 opacity-0 group-hover/bar:opacity-100 scale-90 group-hover:scale-100 transition-all text-[11px] font-bold text-black font-neue bg-white px-3 py-1 rounded-lg shadow-lg border border-black/5 z-20 whitespace-nowrap">{h * 1.5}k</div>
                    </div>
                  ))}
               </div>
            </div>
          </div>
        );
      default:
        return (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex items-center justify-between mb-10">
               <div className="flex items-center gap-3 p-2 bg-black/5 rounded-[22px] w-fit">
                  <span className="text-[11px] font-bold text-black/30 px-4 uppercase tracking-[0.2em] font-neue">Floor</span>
                  {TABLES.map(t => (
                    <button 
                      key={t.id}
                      onClick={() => setActiveTable(t.id)}
                      className={`px-5 py-2.5 rounded-2xl text-[13px] font-bold transition-all flex items-center gap-2 ${activeTable === t.id ? 'bg-white text-black shadow-lg ring-1 ring-black/5' : 'text-black/40 hover:text-black/70'}`}
                    >
                      {t.id}
                      <div className={`w-1.5 h-1.5 rounded-full ${t.status === 'active' ? 'bg-emerald-500' : t.status === 'reserved' ? 'bg-amber-400' : 'bg-black/10'}`}></div>
                    </button>
                  ))}
               </div>
               <div className="flex items-center gap-4">
                  <button className="p-3 bg-white border border-black/5 rounded-2xl text-black/30 hover:text-black shadow-sm transition-all"><Monitor size={20} /></button>
                  <button className="p-3 bg-white border border-black/5 rounded-2xl text-black/30 hover:text-black shadow-sm transition-all"><Receipt size={20} /></button>
               </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-10">
              <div className="flex gap-3 p-2 bg-black/5 rounded-[22px] overflow-x-auto no-scrollbar">
                {CATEGORIES.map(cat => (
                  <button 
                    key={cat.name} 
                    onClick={() => setActiveCategory(cat.name)}
                    className={`px-6 py-3 rounded-2xl text-[13px] font-bold transition-all flex items-center gap-3 whitespace-nowrap ${activeCategory === cat.name ? 'bg-white text-black shadow-lg border border-black/5' : 'text-black/40 hover:text-black/70'}`}
                  >
                    {cat.icon}
                    {cat.name}
                  </button>
                ))}
              </div>
              <div className="relative w-full sm:w-auto">
                <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-black/30" size={16} />
                <input 
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Scan or find item..." 
                  className="pl-12 pr-6 py-4 bg-white border border-black/5 rounded-[22px] text-sm w-full sm:w-64 focus:outline-none focus:border-[#531753]/30 font-neue shadow-sm transition-all placeholder:text-black/20" 
                />
              </div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((item) => {
                const inCart = cart.find(c => c.id === item.id);
                return (
                  <div 
                    key={item.id} 
                    onClick={() => addToCart(item.id)}
                    className={`bg-white p-7 rounded-[40px] border transition-all cursor-pointer relative group/item overflow-hidden ${inCart ? 'border-[#531753] ring-2 ring-[#531753]/10 shadow-xl' : 'border-black/5 hover:border-[#531753]/30 hover:shadow-2xl shadow-sm'}`}
                  >
                    {inCart && (
                      <div className="absolute top-5 right-5 text-white bg-gradient-to-r from-[#531753] to-[#D946EF] rounded-full w-8 h-8 flex items-center justify-center font-bold text-[12px] shadow-lg animate-in zoom-in-50">
                        {inCart.qty}
                      </div>
                    )}
                    <div className="text-5xl mb-6 group-hover/item:scale-110 group-hover/item:-rotate-3 transition-transform duration-500">{item.emoji}</div>
                    <h4 className="font-bold text-black text-[15px] mb-1 font-neue tracking-tight">{item.name}</h4>
                    <p className="text-[#531753] font-black text-[14px] font-neue">KES {item.price}</p>
                    <div className="absolute bottom-5 right-5 opacity-0 group-hover/item:opacity-100 transition-all translate-y-3 group-hover/item:translate-y-0 text-[#2D9B9B] bg-slate-50 p-2 rounded-xl">
                       <Plus size={20} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
    }
  };

  return (
    <div className="relative max-w-6xl mx-auto mt-20 group">
      <div className="absolute -inset-2 bg-gradient-to-r from-[#2C0D36] via-[#D946EF] to-[#2D9B9B] rounded-[48px] blur-2xl opacity-15 group-hover:opacity-30 transition duration-1000 group-hover:duration-500"></div>
      
      <div className="relative bg-[#F8F9FB] rounded-[44px] shadow-[0_60px_160px_-40px_rgba(44,13,54,0.2)] overflow-hidden border border-black/10 flex flex-col md:flex-row h-auto md:min-h-[850px] text-left">
        
        {/* Persistent Navigation */}
        <div className="w-full md:w-24 bg-[#E8E9FF]/90 backdrop-blur-xl flex md:flex-col items-center justify-between md:justify-start py-6 md:py-12 gap-10 border-b md:border-b-0 md:border-r border-black/5 shrink-0 z-30">
          <div className="flex md:flex-col gap-8 items-center px-6 md:px-0">
            {[
              { id: 'orders', icon: <LayoutGrid size={24} /> },
              { id: 'inventory', icon: <ClipboardList size={24} /> },
              { id: 'customers', icon: <Users size={24} /> },
              { id: 'reports', icon: <FileText size={24} /> }
            ].map(tab => (
              <div 
                key={tab.id}
                className={`p-4 rounded-[22px] cursor-pointer transition-all relative group/nav ${activeTab === tab.id ? 'bg-white text-[#531753] shadow-2xl scale-110' : 'text-black/30 hover:text-black/60 hover:bg-white/50'}`} 
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.icon}
                {activeTab === tab.id && <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-6 bg-[#531753] rounded-r-full hidden md:block"></div>}
              </div>
            ))}
          </div>
          
          <div className="flex md:flex-col items-center gap-10 mt-auto px-6 md:px-0 md:pb-8">
             <div className="p-3 text-black/20 hover:text-[#531753] transition-colors cursor-pointer hover:bg-white/70 rounded-2xl"><Settings size={22} /></div>
             <div className="p-3 text-rose-500/30 hover:text-rose-500 transition-colors cursor-pointer hover:bg-rose-50 rounded-2xl" onClick={() => setTerminalOn(false)}><Power size={22} /></div>
          </div>
        </div>

        {/* Dynamic Terminal Area */}
        <div className="flex-grow flex flex-col h-full overflow-hidden bg-white/50">
          {/* Enhanced Control Bar */}
          <div className="px-12 py-9 border-b border-black/5 bg-white/70 backdrop-blur-xl flex justify-between items-center z-20">
             <div className="group/brand cursor-default">
                <h2 className="text-2xl font-bold font-marketing text-black tracking-tight group-hover/brand:text-[#531753] transition-colors">The Burger Lab Westlands</h2>
                <div className="flex items-center gap-3 mt-1.5">
                   <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_10px_#10b981]"></div>
                   <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-black/30 font-neue">Secure Terminal 042 | Node-A</p>
                </div>
             </div>
             <div className="flex items-center gap-10">
                <div className="hidden md:flex flex-col text-right">
                   <p className="text-[10px] font-black uppercase tracking-[0.3em] text-black/40 font-neue leading-none mb-1.5">Active Server</p>
                   <p className="text-[14px] font-bold text-black font-neue">Wanjiku K. | Floor A</p>
                </div>
                <div className="flex items-center gap-4 bg-white border border-black/5 p-2 pr-6 rounded-[24px] shadow-sm hover:shadow-xl transition-all cursor-pointer group/user">
                   <img 
                    src="https://images.unsplash.com/photo-1531123414780-f74242c2b052?auto=format&fit=crop&q=80&w=150&h=150" 
                    className="w-11 h-11 rounded-full object-cover border-2 border-[#531753]/20 group-hover/user:border-[#531753] transition-colors" 
                    alt="Wanjiku K. - Kenyan Server" 
                   />
                   <div className="text-[11px] font-bold text-black/70 font-neue tracking-tight">{currentTime}</div>
                </div>
             </div>
          </div>

          <div className="flex-grow p-12 overflow-y-auto relative custom-scrollbar">
            {renderContent()}
          </div>
        </div>

        {/* Interactive Bill Console */}
        <div className="w-full md:w-[400px] bg-white border-t md:border-t-0 md:border-l border-black/5 p-10 md:p-12 flex flex-col h-full shrink-0 relative z-30">
          {isProcessing && (
            <div className="absolute inset-0 bg-white/95 backdrop-blur-md z-40 flex flex-col items-center justify-center text-center p-12 animate-in fade-in">
              <div className="w-20 h-20 border-[6px] border-[#2D9B9B] border-t-transparent rounded-full animate-spin mb-10 shadow-inner"></div>
              <h4 className="font-bold text-black text-2xl mb-4 font-marketing">Pushing MPESA STK</h4>
              <p className="text-sm text-black/40 font-neue leading-relaxed">Bill request transmitted to <br/><span className="text-black font-bold">+254 700 *** 123</span></p>
            </div>
          )}

          {showSuccess && (
            <div className="absolute inset-0 bg-white z-40 flex flex-col items-center justify-center text-center p-12 animate-in zoom-in-95">
              <div className="w-24 h-24 bg-emerald-50 text-emerald-500 rounded-[36px] flex items-center justify-center mb-10 shadow-xl scale-110">
                <CheckCircle size={48} />
              </div>
              <h4 className="font-bold text-black text-3xl mb-4 font-marketing">Bill Settled</h4>
              <p className="text-sm text-black/40 font-neue leading-relaxed">Receipt transmitted. ETIMS #VRA-9923X <br/>validated by KRA Gateway.</p>
              <button onClick={() => setShowSuccess(false)} className="mt-14 px-10 py-4 bg-black text-white rounded-full text-[12px] font-bold uppercase tracking-widest hover:bg-black/80 transition-all active:scale-95 shadow-lg">New Transaction</button>
            </div>
          )}

          <div className="flex items-center justify-between mb-12">
            <h3 className="font-bold font-marketing text-black text-2xl">Bill Console</h3>
            <div className="flex items-center gap-3">
               <span className="px-4 py-1.5 bg-[#531753] text-white rounded-2xl text-[11px] font-bold shadow-xl">{activeTable}</span>
               {cart.length > 0 && <button onClick={() => setCart([])} className="p-2.5 text-rose-400 hover:text-rose-600 transition-colors bg-rose-50 rounded-xl"><Trash2 size={18} /></button>}
            </div>
          </div>

          <div className="flex-grow space-y-8 overflow-y-auto mb-10 pr-2 custom-scrollbar">
            {cart.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full opacity-10 text-center py-10 grayscale">
                <Package size={72} className="mb-8" />
                <p className="text-[14px] font-bold uppercase tracking-[0.3em] font-neue">Console Clear</p>
              </div>
            ) : (
              cart.map((item) => {
                const product = PRODUCTS.find(p => p.id === item.id);
                if (!product) return null;
                return (
                  <div key={item.id} className="group/item flex justify-between items-start animate-in slide-in-from-right-8 duration-500">
                    <div className="flex-grow">
                      <p className="text-[17px] font-bold text-black font-neue leading-tight group-hover/item:text-[#531753] transition-colors">{product.name}</p>
                      <p className="text-[12px] text-black/40 font-black mt-1.5 font-neue">KES {product.price}</p>
                    </div>
                    <div className="flex flex-col items-end gap-4">
                      <div className="flex items-center bg-black/5 rounded-[20px] border border-black/5 p-1 group-hover/item:border-black/20 transition-all">
                        <button onClick={() => updateQty(item.id, -1)} className="p-2 hover:text-[#531753] transition-colors"><Minus size={14} /></button>
                        <span className="text-[14px] font-bold w-8 text-center font-neue">{item.qty}</span>
                        <button onClick={() => addToCart(item.id)} className="p-2 hover:text-[#531753] transition-colors"><Plus size={14} /></button>
                      </div>
                      <p className="text-[14px] font-black text-black/80 font-neue">KES {(product.price * item.qty).toLocaleString()}</p>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          <div className="pt-10 border-t border-black/5 space-y-5">
            <div className="flex justify-between text-[14px] text-black/40 font-neue font-medium">
              <span>Subtotal</span>
              <span className="font-bold">KES {subtotal.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-[14px] text-black/40 font-neue font-medium">
              <span>Service VAT (16%)</span>
              <span className="font-bold">KES {tax.toLocaleString()}</span>
            </div>
            <div className="flex justify-between font-bold text-4xl font-marketing mt-6 pt-8 border-t border-black/5 text-[#2C0D36] tracking-tight">
              <span>Total Bill</span>
              <span className="text-[#531753]">KES {total.toLocaleString()}</span>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mt-10">
               <button 
                onClick={handleCheckout}
                disabled={cart.length === 0}
                className={`col-span-2 py-6 rounded-3xl font-bold text-[12px] font-neue uppercase tracking-[0.3em] transition-all shadow-2xl active:scale-95 flex items-center justify-center gap-4 ${cart.length === 0 ? 'bg-slate-100 text-slate-400 cursor-not-allowed shadow-none' : 'bg-[#2D9B9B] text-white hover:bg-[#268484] hover:shadow-emerald-900/20 hover:-translate-y-1'}`}
              >
                {cart.length === 0 ? 'Select Table Items' : <><CreditCard size={20} /> MPESA Checkout</>}
               </button>
               <button 
                disabled={cart.length === 0}
                className="py-5 bg-black text-white rounded-[24px] font-bold text-[11px] font-neue uppercase tracking-widest hover:bg-black/80 transition-all active:scale-95 disabled:opacity-20 flex items-center justify-center gap-2 shadow-lg"
               >
                 <Receipt size={16} /> Cash
               </button>
               <button 
                disabled={cart.length === 0}
                className="py-5 bg-white border border-black/10 text-black rounded-[24px] font-bold text-[11px] font-neue uppercase tracking-widest hover:bg-slate-50 transition-all active:scale-95 disabled:opacity-20 shadow-sm"
               >
                 Split
               </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-40 pb-20 lg:pt-56 lg:pb-32 overflow-hidden bg-white">
      <WaveBackground color="#2C0D36" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-black/10 text-black text-[12px] font-bold tracking-[0.4em] uppercase mb-10 font-neue mx-auto bg-white/50 backdrop-blur-sm">
            <Zap size={14} fill="currentColor" />
            ABSOLUTE RETAIL CERTAINTY
          </div>
          
          <h1 className="text-4xl sm:text-6xl lg:text-[76px] font-bold text-black mb-10 leading-[1.05] font-marketing">
            Know exactly what your <br className="hidden lg:block"/> 
            business makes. <span className="font-didot italic font-bold text-[#531753]">Every day.</span>
          </h1>
          
          <p className="text-lg lg:text-[24px] text-black/60 mb-14 max-w-2xl mx-auto font-normal leading-relaxed font-neue">
            Veira gives shop owners total visibility, control, and eTIMS-compliant sales tracking with real-time alerts and proof you can trust.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-24">
            <button className="w-full sm:w-auto px-14 py-6 bg-[#2D9B9B] text-white rounded-full font-bold text-[16px] cta-text hover:bg-[#268484] transition-all transform hover:-translate-y-1 shadow-[0_20px_50px_rgba(45,155,155,0.3)] flex items-center justify-center gap-3 font-neue uppercase tracking-widest">
              Get Free POS <ArrowRight size={20} />
            </button>
            <a href="#case-studies" className="w-full sm:w-auto px-14 py-6 bg-white text-black border border-black/20 rounded-full font-bold text-[16px] cta-text hover:bg-black hover:text-white transition-all font-neue flex items-center justify-center uppercase tracking-widest shadow-sm">
              Case Study
            </a>
          </div>
        </div>

        <div className="mb-32">
          <POSDashboardMock />
        </div>

        <div className="max-w-4xl mx-auto p-12 bg-slate-50 border border-black/5 rounded-[60px] relative text-left shadow-2xl hover:shadow-3xl transition-shadow duration-700">
          <p className="text-black/80 font-marketing italic text-2xl lg:text-3xl leading-relaxed mb-10">
            "I replaced imported stock with locally sourced items. That single decision added <span className="text-[#531753] font-bold underline decoration-[#D946EF]/30 underline-offset-8">KES 180,000</span> to our audited bottom line."
          </p>
          <div className="flex items-center gap-6">
            <img 
              src="https://images.pexels.com/photos/4814460/pexels-photo-4814460.jpeg?auto=compress&cs=tinysrgb&w=1200" 
              alt="Grace Mwangi" 
              className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-xl"
            />
            <div>
              <h4 className="font-bold text-black text-xl font-neue">Grace Mwangi</h4>
              <p className="text-[13px] font-bold uppercase tracking-[0.25em] text-black/40 font-neue">Founder Amani Boutique</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

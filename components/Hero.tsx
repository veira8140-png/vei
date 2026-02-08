
import React, { useState } from 'react';
import { CheckCircle, Zap, ArrowRight, Search, Scan, Trash2, Plus, Minus, LayoutGrid, ClipboardList, Users, FileText, UtensilsCrossed, Package, TrendingUp, DollarSign } from 'lucide-react';
import { WaveBackground } from './WaveBackground';

const POSDashboardMock = () => {
  const [activeTab, setActiveTab] = useState('orders');

  const renderContent = () => {
    switch (activeTab) {
      case 'inventory':
        return (
          <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
            <h2 className="text-2xl font-bold font-marketing text-black mb-8">Inventory</h2>
            <div className="bg-white rounded-[24px] border border-black/5 overflow-hidden">
              <table className="w-full text-left text-sm">
                <thead className="bg-[#F8F9FB] border-b border-black/5">
                  <tr>
                    <th className="px-6 py-4 font-bold uppercase tracking-widest text-[10px] text-black/40 font-neue">Product</th>
                    <th className="px-6 py-4 font-bold uppercase tracking-widest text-[10px] text-black/40 font-neue">Stock</th>
                    <th className="px-6 py-4 font-bold uppercase tracking-widest text-[10px] text-black/40 font-neue">Price</th>
                    <th className="px-6 py-4 font-bold uppercase tracking-widest text-[10px] text-black/40 font-neue">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-black/5 font-neue">
                  {[
                    { name: 'Chicken Deluxe Burger', stock: 42, price: '320', status: 'In Stock' },
                    { name: 'Egg Burger', stock: 12, price: '400', status: 'Low Stock' },
                    { name: 'Fiery Chicken', stock: 0, price: '410', status: 'Out of Stock' },
                  ].map((item, i) => (
                    <tr key={i} className="hover:bg-black/[0.01] transition-colors">
                      <td className="px-6 py-4 font-bold text-black">{item.name}</td>
                      <td className="px-6 py-4 text-black/60">{item.stock} units</td>
                      <td className="px-6 py-4 text-black/60">KES {item.price}</td>
                      <td className="px-6 py-4">
                        <span className={`px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider ${
                          item.status === 'In Stock' ? 'bg-slate-100 text-slate-600' : 
                          item.status === 'Low Stock' ? 'bg-amber-50 text-amber-600' : 'bg-rose-50 text-rose-600'
                        }`}>
                          {item.status}
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
          <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
            <h2 className="text-2xl font-bold font-marketing text-black mb-8">Customers</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { name: 'Arya M.', spend: '12,450', visits: 8, avatar: 'https://images.unsplash.com/photo-1531123414780-f74242c2b052?auto=format&fit=crop&q=80&w=150&h=150' },
                { name: 'Zainab J.', spend: '4,200', visits: 3, avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=150&h=150' },
                { name: 'Kendi M.', spend: '2,100', visits: 1, avatar: 'https://images.unsplash.com/photo-1523824921871-d6f1a15151f1?auto=format&fit=crop&q=80&w=150&h=150' },
                { name: 'David K.', spend: '8,900', visits: 12, avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150&h=150' },
              ].map((c, i) => (
                <div key={i} className="bg-white p-6 rounded-[24px] border border-black/5 flex items-center gap-4 hover:border-black/20 transition-all cursor-pointer">
                  <img src={c.avatar} className="w-12 h-12 rounded-full border border-black/5 object-cover" alt={c.name} />
                  <div className="flex-grow">
                    <h4 className="font-bold text-black text-sm font-neue">{c.name}</h4>
                    <p className="text-[11px] text-black/40 font-medium font-neue">{c.visits} visits total</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[#531753] font-bold text-sm font-neue">KES {c.spend}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'reports':
        return (
          <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
            <h2 className="text-2xl font-bold font-marketing text-black mb-8">Business Insights</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {[
                { label: 'Net Sales', val: '42,450', trend: '+12%', icon: <DollarSign size={20} className="text-blue-500" /> },
                { label: 'Gross Profit', val: '18,200', trend: '+5%', icon: <TrendingUp size={20} className="text-[#531753]" /> },
                { label: 'Avg Order', val: '940', trend: '-2%', icon: <Package size={20} className="text-blue-500" /> },
              ].map((stat, i) => (
                <div key={i} className="bg-white p-6 rounded-[24px] border border-black/5">
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-10 h-10 rounded-xl bg-black/5 flex items-center justify-center">{stat.icon}</div>
                    <span className="text-[11px] font-bold font-neue text-slate-500">{stat.trend}</span>
                  </div>
                  <p className="text-[11px] font-bold uppercase tracking-widest text-black/30 font-neue">{stat.label}</p>
                  <p className="text-2xl font-bold text-black font-marketing mt-1">KES {stat.val}</p>
                </div>
              ))}
            </div>
          </div>
        );
      default:
        return (
          <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold font-marketing text-black">Orders</h2>
              <div className="flex gap-4">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-black/30" size={16} />
                  <input type="text" placeholder="Search..." className="pl-12 pr-4 py-2.5 bg-white border border-black/5 rounded-xl text-sm w-48 focus:outline-none focus:border-black/20 font-neue" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: 'Chicken Deluxe', price: '320', emoji: '🍔', checked: true },
                { name: 'Egg Burger', price: '400', emoji: '🍔' },
                { name: 'Mexican Burger', price: '300', emoji: '🍔' },
              ].map((item, i) => (
                <div key={i} className="bg-white p-6 rounded-3xl border border-black/5 hover:border-black/20 transition-all cursor-pointer relative group">
                  {item.checked && (
                    <div className="absolute top-4 right-4 text-[#531753] bg-purple-50 rounded-full p-0.5 shadow-sm">
                      <CheckCircle size={14} fill="currentColor" className="text-white" />
                    </div>
                  )}
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{item.emoji}</div>
                  <h4 className="font-bold text-black text-sm mb-1 font-neue">{item.name}</h4>
                  <p className="text-[#531753] font-bold text-sm font-neue">KES {item.price}</p>
                </div>
              ))}
            </div>
          </div>
        );
    }
  };

  return (
    <div className="relative max-w-5xl mx-auto mt-20 group">
      <div className="absolute -inset-1 bg-gradient-to-r from-[#2C0D36] via-[#D946EF] to-[#2D9B9B] rounded-[32px] blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
      <div className="relative bg-[#F8F9FB] rounded-[32px] shadow-[0_40px_100px_-15px_rgba(44,13,54,0.15)] overflow-hidden border border-black/10 flex flex-col md:flex-row h-auto md:h-[600px] text-left">
        <div className="w-full md:w-16 bg-[#E8E9FF] flex md:flex-col items-center justify-center md:justify-start py-4 md:py-8 gap-6 border-b md:border-b-0 md:border-r border-black/5 shrink-0">
          <div className={`p-2 rounded-xl cursor-pointer ${activeTab === 'orders' ? 'bg-white text-[#531753] shadow-sm' : 'text-black/40 hover:text-black/60'}`} onClick={() => setActiveTab('orders')}><LayoutGrid size={20} /></div>
          <div className={`p-2 rounded-xl cursor-pointer ${activeTab === 'inventory' ? 'bg-white text-[#531753] shadow-sm' : 'text-black/40 hover:text-black/60'}`} onClick={() => setActiveTab('inventory')}><ClipboardList size={20} /></div>
          <div className={`p-2 rounded-xl cursor-pointer ${activeTab === 'customers' ? 'bg-white text-[#531753] shadow-sm' : 'text-black/40 hover:text-black/60'}`} onClick={() => setActiveTab('customers')}><Users size={20} /></div>
          <div className={`p-2 rounded-xl cursor-pointer ${activeTab === 'reports' ? 'bg-white text-[#531753] shadow-sm' : 'text-black/40 hover:text-black/60'}`} onClick={() => setActiveTab('reports')}><FileText size={20} /></div>
        </div>
        <div className="flex-grow p-6 md:p-10 overflow-y-auto bg-white/50 backdrop-blur-sm">{renderContent()}</div>
        <div className="w-full md:w-[320px] bg-white border-t md:border-t-0 md:border-l border-black/5 p-6 md:p-8 flex flex-col h-full shrink-0">
          <h3 className="font-bold mb-6 font-marketing text-black">Checkout</h3>
          <div className="flex-grow space-y-4">
             <div className="flex justify-between items-center text-sm font-neue">
                <span className="font-bold">Chicken Deluxe</span>
                <span>KES 320</span>
             </div>
          </div>
          <div className="pt-6 border-t border-black/5">
            <div className="flex justify-between font-bold text-lg font-marketing mb-6">
              <span>Total</span>
              <span className="text-[#531753]">KES 320</span>
            </div>
            <button className="w-full py-4 bg-black text-white rounded-xl font-bold text-xs font-neue uppercase tracking-widest hover:bg-black/90 transition-all shadow-md">
              Complete Payment
            </button>
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
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-black/10 text-black text-[11px] font-semibold tracking-[0.3em] uppercase mb-8 font-neue mx-auto">
            <Zap size={12} fill="currentColor" />
            CERTAINTY IN EVERY SALE
          </div>
          
          <h1 className="text-4xl sm:text-6xl lg:text-[72px] font-bold text-black mb-8 leading-tight font-marketing">
            Best POS System in Kenya <br className="hidden lg:block"/> 
            <span className="font-didot italic font-bold">for Small Shops.</span>
          </h1>
          
          <p className="text-lg lg:text-[22px] text-black/60 mb-12 max-w-2xl mx-auto font-normal leading-relaxed font-neue">
            Veira gives shop owners complete control. Every sale every product every shilling managed with absolute clarity.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-20">
            <button className="w-full sm:w-auto px-12 py-5 bg-[#2D9B9B] text-white rounded-full font-semibold text-[15px] cta-text hover:bg-[#268484] transition-all transform hover:-translate-y-1 shadow-xl flex items-center justify-center gap-2 font-neue">
              Get Free POS <ArrowRight size={18} />
            </button>
            <a href="#stories" className="w-full sm:w-auto px-12 py-5 bg-white text-black border border-black/20 rounded-full font-semibold text-[15px] cta-text hover:bg-black hover:text-white transition-all font-neue flex items-center justify-center">
              Success Stories
            </a>
          </div>
        </div>

        {/* Dashboard Mock below CTA */}
        <div className="mb-24">
          <POSDashboardMock />
        </div>

        {/* Featured Testimonial below Mock */}
        <div className="max-w-3xl mx-auto p-10 bg-slate-50 border border-black/5 rounded-[48px] relative text-left">
          <p className="text-black/80 font-marketing italic text-xl lg:text-2xl leading-relaxed mb-8">
            "I replaced imported scarves with locally sourced accessories. That one change added <span className="text-[#531753] font-bold">KES 180,000</span> to our bottom line."
          </p>
          <div className="flex items-center gap-5">
            <img 
              src="https://images.pexels.com/photos/4814460/pexels-photo-4814460.jpeg?auto=compress&cs=tinysrgb&w=1200" 
              alt="Grace Mwangi" 
              className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-md"
            />
            <div>
              <h4 className="font-bold text-black text-lg font-neue">Grace Mwangi</h4>
              <p className="text-[12px] font-bold uppercase tracking-widest text-black/40 font-neue">Founder Amani Boutique</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

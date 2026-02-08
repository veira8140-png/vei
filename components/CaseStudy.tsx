
import React from 'react';
import { ArrowLeft, ArrowRight, TrendingUp, Clock, ShieldCheck, Zap, UserPlus, Sparkles, Plus, Minus } from 'lucide-react';
import { WaveBackground } from './WaveBackground';

interface CaseStudyProps {
  slug: string;
  onBack: () => void;
}

const CASE_STUDIES: Record<string, any> = {
  "best-pos-system-kenya-retail-amani": {
    title: "How Amani Boutique cut reconciliation time from 3 hours to 5 minutes and discovered KES 180,000 in hidden profit.",
    industry: "Fashion Retail",
    location: "Westlands, Nairobi",
    staff: "4 Employees",
    duration: "8 Months",
    heroImage: "https://images.pexels.com/photos/4814460/pexels-photo-4814460.jpeg?auto=compress&cs=tinysrgb&w=1200",
    stats: [
      { label: "18 Hours", desc: "Saved every single week on reconciliation.", icon: <Clock /> },
      { label: "23% Growth", desc: "Revenue increase in the first 6 months.", icon: <TrendingUp />, primary: true },
      { label: "KES 180K", desc: "Hidden profit uncovered in imported stock margins.", icon: <ShieldCheck />, secondary: true }
    ],
    problem: "Grace Mwangi runs Amani Boutique. Reconciliation was a 3 hour nightly nightmare stockouts cost her sales she did not know about and she had no clear picture of actual profit after costs.",
    problemQuote: "The breaking point was the December rush. My manual system completely collapsed. I had no idea which products were actually making money.",
    solutionSteps: [
      { t: "Day 1: Instant Reconciliation", d: "Every sale synced automatically. Cash M Pesa and card tracked separately. Recon time 5 minutes." },
      { t: "Week 1: Inventory Visibility", d: "Real time stock tracking across both locations. Automated reorder alerts fixed the supply gap." },
      { t: "Month 1: True Profitability", d: "Margin analysis per product. Decisions shifted from guesswork to audited data." }
    ],
    resultsText: "The impact went beyond just time. Grace discovered several products she thought were profitable were actually losing money once factoring in duties and hidden costs.",
    resultsQuote: "I replaced imported scarves with locally sourced accessories. That one change added KES 180,000 to our bottom line.",
    author: "Grace Mwangi",
    authorRole: "Founder Amani Boutique",
    avatarUrl: "https://images.pexels.com/photos/4814460/pexels-photo-4814460.jpeg?auto=compress&cs=tinysrgb&w=800",
    additionalBenefits: [
      { t: "Staff Accountability", d: "With every sale assigned to specific staff cash discrepancies dropped to zero." },
      { t: "Remote Control", d: "Grace monitors both shops from her phone while sourcing new stock." }
    ],
    unexpectedBenefit: "Grace discovered she could check sales from her phone while at either location or even at home. She is no longer tied to the shop floor."
  },
  "retail-inventory-management-software-nairobi-techhub": {
    title: "How TechHub Electronics stopped losing KES 320,000 annually to inventory shrinkage and finally knew what was actually in stock",
    industry: "Electronics Retail",
    location: "Tom Mboya Street, Nairobi CBD",
    staff: "6 Employees",
    duration: "11 Months",
    heroImage: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=1200",
    stats: [
      { label: "8.5 Hours", desc: "Saved per week on shift reconciliation.", icon: <Clock /> },
      { label: "24% Margin", desc: "Average margin increase through pricing accuracy.", icon: <TrendingUp />, primary: true },
      { label: "KES 278K", desc: "Saved in year one from shrinkage reduction.", icon: <ShieldCheck />, secondary: true }
    ],
    problem: "David Omondi's shop was busy but profit was unpredictable. He was losing KES 320,000 annually to shrinkage manual tracking of hundreds of small SKUs was impossible and pricing mistakes were common.",
    problemQuote: "I would do a physical count every month and find 30 to 40 items missing. I had no idea if it was theft supplier errors or just bad record keeping.",
    solutionSteps: [
      { t: "Day 1: Automated Tracking", d: "Barcode scanning for every sale. Every transaction tied to a specific staff member instantly." },
      { t: "Week 1: Profit Protection", d: "Veira pulls the correct price automatically. Cost tracking shows profit margin on every single sale." },
      { t: "Week 2: Staff Accountability", d: "Daily sales reports per staff member. Cash M Pesa and card tracked separately." }
    ],
    resultsText: "Inventory shrinkage reduced by 87 percent. David caught a staff member voiding sales and pocketing cash within two weeks of implementation.",
    resultsQuote: "I thought I knew my business after 6 years. But I was running it blind. Veira was like turning on the lights for the first time.",
    author: "David Omondi",
    authorRole: "Owner TechHub Electronics",
    avatarUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150&h=150",
    additionalBenefits: [
      { t: "Supplier Negotiations", d: "David uses Veira reports to negotiate better terms based on hard sales data." },
      { t: "Optimized Roles", d: "Data showed which staff were better at service vs high volume sales." }
    ],
    unexpectedBenefit: "David discovered he was pushing slow moving Samsung accessories that tied up cash. He shifted to fast moving generics increasing total profit by 31 percent."
  }
};

const CaseStudy: React.FC<CaseStudyProps> = ({ slug, onBack }) => {
  const data = CASE_STUDIES[slug] || CASE_STUDIES["best-pos-system-kenya-retail-amani"];
  const otherSlugs = Object.keys(CASE_STUDIES).filter(s => s !== slug);
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);

  return (
    <div className="bg-white min-h-screen selection:bg-[#2C0D36] selection:text-white">
      {/* Premium Hero Section */}
      <section className="relative pt-48 pb-32 overflow-hidden bg-[#2C0D36] text-white min-h-[70vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src={data.heroImage} 
            alt={data.author} 
            className="w-full h-full object-cover opacity-30 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2C0D36] via-[#2C0D36]/80 to-transparent"></div>
        </div>
        <WaveBackground color="#D946EF" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-white/50 hover:text-white transition-colors mb-12 uppercase tracking-widest text-[11px] font-bold font-neue"
          >
            <ArrowLeft size={16} /> Back to Platform
          </button>
          
          <div className="max-w-4xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#D946EF] text-[11px] font-bold tracking-[0.3em] uppercase mb-8 font-neue">
              {data.industry} Success
            </span>
            <h1 className="text-4xl lg:text-[64px] font-bold mb-10 font-marketing leading-tight">
              {data.title}
            </h1>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-y border-white/10 mt-12">
              {[
                { label: "Founder", val: data.author },
                { label: "Location", val: data.location },
                { label: "Staff", val: data.staff },
                { label: "Time with Veira", val: data.duration },
              ].map((item, i) => (
                <div key={i}>
                  <p className="text-white/40 text-[10px] uppercase tracking-widest font-bold mb-2 font-neue">{item.label}</p>
                  <p className="text-lg font-marketing text-white">{item.val}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Narrative */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-24">
            
            {/* Sidebar Sticky Stats */}
            <div className="lg:col-span-4">
              <div className="sticky top-32 space-y-8">
                {data.stats.map((stat: any, i: number) => (
                  <div key={i} className={`p-10 rounded-[40px] shadow-xl ${stat.primary ? 'bg-[#2C0D36] text-white' : stat.secondary ? 'bg-[#783D77] text-white' : 'bg-[#F8F9FA] border border-black/5'}`}>
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-8 ${stat.primary ? 'bg-[#D946EF] text-white' : stat.secondary ? 'bg-white text-[#783D77]' : 'bg-black text-white'}`}>
                      {React.cloneElement(stat.icon as React.ReactElement<any>, { size: 24 })}
                    </div>
                    <h3 className="text-3xl font-bold font-marketing mb-2">{stat.label}</h3>
                    <p className={`${stat.primary || stat.secondary ? 'text-white/40' : 'text-black/40'} text-sm font-neue tracking-tight`}>{stat.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Narrative Content */}
            <div className="lg:col-span-8 space-y-24">
              
              {/* Problem Section */}
              <div>
                <div className="w-12 h-1 bg-black mb-10"></div>
                <h2 className="text-4xl font-bold mb-10 font-marketing">The Problem</h2>
                <div className="space-y-12 text-lg text-black/60 font-neue leading-relaxed body-copy">
                  <p>{data.problem}</p>
                  <blockquote className="p-12 bg-slate-50 border-l-4 border-black rounded-r-3xl italic font-marketing text-2xl text-black/80">
                    "{data.problemQuote}"
                  </blockquote>
                </div>
              </div>

              {/* Solution Section */}
              <div>
                <div className="w-12 h-1 bg-black mb-10"></div>
                <h2 className="text-4xl font-bold mb-10 font-marketing">The Solution</h2>
                <div className="space-y-10 text-lg text-black/60 font-neue leading-relaxed body-copy">
                  <p>Implementation of Veira brought immediate structure to operations.</p>
                  <div className="space-y-6">
                    {data.solutionSteps.map((step: any, i: number) => (
                      <div key={i} className="flex gap-6 items-start p-8 rounded-3xl border border-black/5 hover:bg-slate-50 transition-colors">
                        <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center flex-shrink-0 font-bold font-neue">{i+1}</div>
                        <div>
                          <h4 className="font-bold text-black font-marketing mb-2">{step.t}</h4>
                          <p className="text-sm">{step.d}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Page Specific FAQ for SEO */}
              <div className="py-24 border-t border-black/5">
                 <h2 className="text-3xl font-bold mb-12 font-marketing">Questions about this Case Study</h2>
                 <div className="space-y-4">
                    {[
                      { q: "How quickly was the best POS system in Kenya deployed?", a: "Deployment was completed in under 24 hours including staff training and stock migration." },
                      { q: "What was the main driver for the profit increase?", a: "Improved margin visibility per product allowed the founder to shift stock toward high margin items using retail inventory management software." }
                    ].map((faq, i) => (
                      <div key={i} className="border-b border-black/5">
                        <button className="w-full py-6 flex justify-between items-center text-left" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                           <span className="font-bold font-marketing text-lg">{faq.q}</span>
                           {openFaq === i ? <Minus size={18} /> : <Plus size={18} />}
                        </button>
                        {openFaq === i && (
                          <div className="pb-6 text-black/50 font-neue leading-relaxed">
                             {faq.a}
                          </div>
                        )}
                      </div>
                    ))}
                 </div>
              </div>

              {/* Related Stories */}
              <div className="pt-24 border-t border-black/5">
                <h2 className="text-2xl font-bold mb-12 font-marketing">More Case Studies</h2>
                <div className="grid sm:grid-cols-1 gap-6">
                  {otherSlugs.map(otherSlug => (
                    <a 
                      key={otherSlug}
                      href={`#case-study/${otherSlug}`}
                      className="group flex flex-col sm:flex-row items-center justify-between p-10 bg-[#F8F9FA] rounded-[40px] hover:bg-black hover:text-white transition-all duration-500"
                    >
                      <div className="mb-6 sm:mb-0">
                        <span className="text-[10px] font-bold uppercase tracking-widest opacity-40 block mb-2 font-neue">{CASE_STUDIES[otherSlug].industry}</span>
                        <h3 className="text-2xl font-bold font-marketing leading-tight group-hover:text-white max-w-md">{CASE_STUDIES[otherSlug].title.split('—')[0]}</h3>
                      </div>
                      <div className="w-12 h-12 rounded-full border border-current flex items-center justify-center group-hover:translate-x-2 transition-transform">
                        <ArrowRight size={20} />
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Final CTA */}
              <div className="pt-24">
                <div className="text-center p-20 bg-black rounded-[80px] text-white">
                  <h3 className="text-4xl font-bold mb-8 font-marketing leading-tight">Stop guessing. <br/>Start knowing.</h3>
                  <button className="px-14 py-6 bg-[#2D9B9B] text-white rounded-full font-semibold cta-text text-[15px] shadow-2xl transition-all hover:bg-[#268484] flex items-center justify-center gap-3 mx-auto font-neue">
                    Get Free POS <ArrowRight size={18} />
                  </button>
                  <p className="mt-8 text-white/30 text-[11px] font-bold uppercase tracking-[0.3em] font-neue">Join hundreds of growing Kenyan retailers.</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudy;

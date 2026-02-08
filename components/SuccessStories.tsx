
import React from 'react';
import { ArrowRight, Clock, ShieldCheck } from 'lucide-react';

const stories = [
  {
    slug: 'best-pos-system-kenya-retail-amani',
    title: 'How Amani Boutique cut reconciliation time from 3 hours to 5 minutes.',
    location: 'Westlands, Nairobi',
    stat: 'KES 180K Hidden Profit',
    founder: 'Grace Mwangi',
    image: 'https://images.pexels.com/photos/4814460/pexels-photo-4814460.jpeg?auto=compress&cs=tinysrgb&w=800',
    bg: 'bg-[#F8F9FA]'
  },
  {
    slug: 'retail-inventory-management-software-nairobi-techhub',
    title: 'How TechHub Electronics stopped losing KES 320,000 annually.',
    location: 'CBD, Nairobi',
    stat: '87% Shrinkage Reduction',
    founder: 'David Omondi',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=800',
    bg: 'bg-[#2C0D36] text-white'
  }
];

export const SuccessStories: React.FC = () => {
  return (
    <section id="stories" className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <div className="w-12 h-1 bg-black mb-10"></div>
            <h2 className="text-4xl lg:text-6xl font-bold font-marketing leading-tight">Success is measured in <span className="font-didot italic">certainty.</span></h2>
          </div>
          <p className="text-black/40 font-neue lg:max-w-sm mb-2">See how retailers across Nairobi are using Veira to gain absolute control over their operations.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {stories.map((story, i) => (
            <a 
              key={i} 
              href={`#case-study/${story.slug}`}
              className={`${story.bg} rounded-[60px] block group transition-all hover:scale-[1.01] shadow-sm relative overflow-hidden`}
            >
              <div className="grid md:grid-cols-5 h-full">
                <div className="md:col-span-3 p-12 lg:p-16 flex flex-col justify-between">
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-8">
                      <span className={`text-[10px] font-bold uppercase tracking-[0.3em] ${story.bg.includes('white') ? 'text-white/40' : 'text-black/40'} font-neue`}>{story.location}</span>
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold font-marketing leading-tight mb-8">{story.title}</h3>
                    <p className={`text-[11px] font-bold uppercase tracking-widest ${story.bg.includes('white') ? 'text-white/60' : 'text-black/60'} mb-10 font-neue`}>Founder: {story.founder}</p>
                    
                    <div className={`flex items-center justify-between pt-8 border-t ${story.bg.includes('white') ? 'border-white/20' : 'border-black/10'} group-hover:opacity-100 transition-opacity`}>
                      <span className="font-bold font-neue text-lg">{story.stat}</span>
                      <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </div>
                <div className="md:col-span-2 relative min-h-[300px] md:min-h-full">
                  <img 
                    src={story.image} 
                    alt={story.founder} 
                    className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-r ${story.bg.includes('white') ? 'from-[#2C0D36]' : 'from-[#F8F9FA]'} to-transparent md:block hidden`}></div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

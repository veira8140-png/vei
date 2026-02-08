
import React from 'react';
import { ShoppingCart, Smartphone, FileText, Cloud, BrainCircuit, Box, Users, ShieldAlert } from 'lucide-react';

const featureList = [
  {
    title: "Smart Software",
    desc: "Streamlined interface works both online and offline. Zero latency for high-volume shops.",
    icon: <ShoppingCart className="text-black" size={24} />,
  },
  {
    title: "MPESA Native",
    desc: "Seamless integration. Payments are verified and recorded automatically within seconds.",
    icon: <Smartphone className="text-black" size={24} />,
  },
  {
    title: "ETIMS Automated",
    desc: "Native compliance with KRA requirements. Stress-free reporting built into every sale.",
    icon: <FileText className="text-black" size={24} />,
  },
  {
    title: "Global Cloud",
    desc: "Access your dashboard from any location. Real-time sync across multiple shop branches.",
    icon: <Cloud className="text-black" size={24} />,
  },
  {
    title: "AI Insights",
    desc: "Machine learning identifies sales patterns and highlights optimization opportunities.",
    icon: <BrainCircuit className="text-black" size={24} />,
  },
  {
    title: "Stock Control",
    desc: "Automated low-stock alerts and predictive ordering. Never lose a sale to an empty shelf.",
    icon: <Box className="text-black" size={24} />,
  },
  {
    title: "Staff Audits",
    desc: "Full accountability per shift. Detailed activity logs to prevent internal revenue leaks.",
    icon: <Users className="text-black" size={24} />,
  },
  {
    title: "Risk Analysis",
    desc: "Glenn, our security AI, monitors for suspicious activity and theft patterns 24/7.",
    icon: <ShieldAlert className="text-black" size={24} />,
  }
];

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-32 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-24">
          <div className="w-12 h-1 bg-black mb-8"></div>
          <h2 className="text-3xl lg:text-[40px] font-bold text-black mb-8 font-marketing">Everything built for scale.</h2>
          <p className="text-lg lg:text-[18px] text-black/60 font-normal font-neue body-copy">Sophisticated tools, simplified for daily use. Veira handles the complexity so you can focus on growth.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {featureList.map((feature, idx) => (
            <div key={idx} className="group border-t border-black/10 pt-10 hover:border-black transition-colors">
              <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                {React.cloneElement(feature.icon as React.ReactElement<any>, { className: 'text-white' })}
              </div>
              <h3 className="text-lg lg:text-[24px] font-bold text-black mb-4 font-marketing tracking-tight">{feature.title}</h3>
              <p className="text-[16px] text-black/50 font-normal font-neue body-copy">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

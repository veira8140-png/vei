
import React from 'react';
import { Shield, TrendingUp, Headphones, CheckCircle, MessageSquare, AlertCircle, Zap, ArrowRight, UserPlus, Clock, Target, CreditCard, ShoppingBag, Eye, Lock } from 'lucide-react';

// Fix: Define props interface and use React.FC to properly handle 'key' prop in mapped lists
interface AgentSectionProps {
  agent: any;
  color: string;
}

const AgentSection: React.FC<AgentSectionProps> = ({ agent, color }) => (
  <div className="py-24 border-b border-black/5 last:border-0">
    <div className="grid lg:grid-cols-2 gap-20 items-start">
      <div className="sticky top-32">
        <div className="flex items-center gap-4 mb-8">
          <div className={`w-16 h-16 ${color} text-white rounded-[20px] flex items-center justify-center orb-glow shadow-xl`}>
            {React.cloneElement(agent.icon as React.ReactElement<any>, { size: 32 })}
          </div>
          <div>
            <h3 className="text-4xl font-bold font-marketing">{agent.name}</h3>
            <p className="text-black/40 font-bold uppercase tracking-[0.2em] text-[11px] font-neue">{agent.role}</p>
          </div>
        </div>
        <p className="text-2xl text-black/80 font-marketing mb-10 leading-relaxed italic">
          "{agent.headline}"
        </p>
        <div className="space-y-4 mb-12">
          {agent.whatDoes.map((item: string, i: number) => (
            <div key={i} className="flex items-start gap-3">
              <CheckCircle size={18} className="text-black mt-1 flex-shrink-0" />
              <span className="text-[16px] text-black/60 font-neue">{item}</span>
            </div>
          ))}
        </div>
      </div>
      
      <div className="space-y-8">
        <h4 className="text-[11px] font-bold uppercase tracking-[0.3em] text-black/30 font-neue mb-6">Real-world Use Cases</h4>
        {agent.useCases.map((uc: any, i: number) => (
          <div key={i} className="bg-[#F8F9FA] p-8 rounded-[32px] border border-black/5 hover:border-black/10 transition-all group">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[12px] font-bold text-black/40 uppercase font-neue">Scenario {i + 1}: {uc.title}</span>
            </div>
            <p className="text-black/50 text-[15px] mb-4 font-neue italic">"{uc.problem}"</p>
            <div className="flex items-start gap-3 text-black font-semibold font-neue text-[16px]">
              <div className="w-1.5 h-1.5 bg-black rounded-full mt-2.5 flex-shrink-0"></div>
              <span>{uc.solution}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export const AIAgents: React.FC = () => {
  const agentsData = [
    {
      name: "Glenn",
      role: "AI Support Agent",
      headline: "Keeps the business running",
      icon: <Headphones />,
      color: "bg-blue-600",
      whatDoes: [
        "Answers staff questions about products, pricing, and workflows",
        "Helps new employees learn faster without constant supervision",
        "Responds to customer inquiries on WhatsApp and internal tools",
        "Explains alerts and issues raised by Tiri in simple language",
        "Reduces mistakes caused by misunderstanding or poor training"
      ],
      useCases: [
        {
          title: "New cashier on day one",
          problem: "A new staff member is unsure how to apply a discount or process a return.",
          solution: "Glenn guides them step by step through the interface, no manager needed."
        },
        {
          title: "Staff confusion during rush hour",
          problem: "During peak hours, staff ask repetitive questions that slow down service.",
          solution: "Glenn answers instantly via the terminal, keeping the line moving."
        },
        {
          title: "Owner unavailable",
          problem: "The owner is away and a rare operational snag occurs.",
          solution: "Staff still get immediate technical support; operations do not stall."
        }
      ]
    },
    {
      name: "Achi",
      role: "AI Sales & Marketing Agent",
      headline: "Makes the business grow",
      icon: <TrendingUp />,
      color: "bg-emerald-600",
      whatDoes: [
        "Runs promotions and automated marketing campaigns",
        "Follows up leads and customers automatically on WhatsApp",
        "Encourages repeat visits and upsells through data analysis",
        "Analyzes sales trends and suggests what items to push",
        "Helps create marketing messages that actually convert"
      ],
      useCases: [
        {
          title: "Dormant customers",
          problem: "Regulars who haven't visited in 30 days are starting to drift away.",
          solution: "Achi sends a personalized WhatsApp offer that brings them back."
        },
        {
          title: "Slow moving products",
          problem: "Specific inventory is sitting on shelves, tying up your capital.",
          solution: "Achi detects the lag and launches a targeted promotion to move stock."
        },
        {
          title: "Lead follow up",
          problem: "A customer asks for a price list but leaves without buying.",
          solution: "Achi follows up politely 2 hours later, converting interest into a sale."
        }
      ]
    },
    {
      name: "Tiri",
      role: "AI Manager Agent",
      headline: "Watches everything and protects the money",
      icon: <Shield />,
      color: "bg-rose-600",
      whatDoes: [
        "Sends daily sales reports on WhatsApp automatically",
        "Breaks down cash vs digital payments for reconciliation",
        "Tracks performance trends and identifies anomalies",
        "Detects fraud, theft, and suspicious behavior in real-time",
        "Monitors inventory movement and highlights shrinkage",
        "Flags compliance risks before they become penalties"
      ],
      useCases: [
        {
          title: "Daily WhatsApp sales report",
          problem: "Owner needs the final numbers but doesn't want to log into a portal.",
          solution: "Every evening, Tiri sends a full breakdown including red flags to the owner's phone."
        },
        {
          title: "Cash leakage detection",
          problem: "Small amounts of cash are disappearing during shift changes.",
          solution: "Tiri notices sales activity without matching cash entries and alerts the owner."
        },
        {
          title: "Inventory theft",
          problem: "Stock levels are dropping faster than sales would justify.",
          solution: "Tiri alerts the owner exactly when and where the mismatch started."
        },
        {
          title: "Staff manipulation",
          problem: "Repeated transaction reversals or unusual discounts are being applied.",
          solution: "Tiri identifies the pattern and raises a high-priority fraud alert."
        }
      ]
    }
  ];

  return (
    <section id="ai-agents" className="bg-white">
      {/* Intro Header */}
      <div className="py-32 border-b border-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="w-12 h-1 bg-black mb-10"></div>
            <h2 className="text-4xl lg:text-[64px] font-bold text-black mb-12 font-marketing leading-tight">
              Veira is <span className="font-didot italic">not</span> a POS.
            </h2>
            <div className="space-y-6 text-xl lg:text-2xl text-black/60 font-neue body-copy">
              <p>It is not accounting software. It is not a dashboard you must check every day.</p>
              <p className="text-black font-semibold">
                Veira runs your business through three AI agents, each with a clear responsibility, all working from the same source of truth.
              </p>
              <p className="text-lg">They do not wait for instructions. They observe, act, and report automatically.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Agents Detail Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {agentsData.map((agent, i) => (
          <AgentSection key={i} agent={agent} color={agent.color} />
        ))}
      </div>

      {/* Synergy Section */}
      <section className="py-32 bg-black text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/[0.02] -z-0 rounded-l-[200px] blur-3xl orb-animation"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-3xl lg:text-[56px] font-bold mb-8 font-marketing">The Closed Loop System.</h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto font-neue">Veira agents are not separate tools. They share context and reinforce each other.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div className="p-10 border border-white/10 rounded-[40px]">
              <AlertCircle size={40} className="mx-auto mb-6 text-rose-500" />
              <h4 className="text-xl font-bold mb-4 font-marketing">Tiri Detects</h4>
              <p className="text-white/50 text-sm font-neue">Identifies a risk or abnormal behavior across any branch instantly.</p>
            </div>
            <div className="p-10 border border-white/10 rounded-[40px]">
              <UserPlus size={40} className="mx-auto mb-6 text-blue-500" />
              <h4 className="text-xl font-bold mb-4 font-marketing">Glenn Corrects</h4>
              <p className="text-white/50 text-sm font-neue">Helps staff on the ground correct the issue with guided workflows.</p>
            </div>
            <div className="p-10 border border-white/10 rounded-[40px]">
              <Zap size={40} className="mx-auto mb-6 text-emerald-500" />
              <h4 className="text-xl font-bold mb-4 font-marketing">Achi Adjusts</h4>
              <p className="text-white/50 text-sm font-neue">Optimizes campaigns based on performance changes to maintain growth.</p>
            </div>
          </div>

          <div className="mt-24 max-w-4xl mx-auto bg-white/5 border border-white/10 p-16 rounded-[60px]">
            <h3 className="text-3xl font-bold text-center mb-12 font-marketing">What this means for you</h3>
            <div className="grid sm:grid-cols-2 gap-x-16 gap-y-10">
              {[
                "Daily sales on WhatsApp without asking",
                "Detect fraud early instead of after losses",
                "Grow revenue without constant marketing effort",
                "Stop micromanaging your staff",
                "Stay in control even when you are not present"
              ].map((benefit, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-6 h-6 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <ArrowRight size={12} />
                  </div>
                  <span className="text-white/70 font-neue font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Closing Message */}
      <section className="py-32 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <div className="w-12 h-1 bg-black mx-auto mb-10"></div>
          <p className="text-3xl lg:text-[42px] font-bold font-marketing leading-tight mb-12">
            Veira does not give you more work. <br/>
            <span className="font-didot italic">It removes it.</span>
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div>
              <p className="font-bold text-lg font-marketing mb-2">Glenn</p>
              <p className="text-black/50 text-sm font-neue">Runs operations.</p>
            </div>
            <div>
              <p className="font-bold text-lg font-marketing mb-2">Achi</p>
              <p className="text-black/50 text-sm font-neue">Drives growth.</p>
            </div>
            <div>
              <p className="font-bold text-lg font-marketing mb-2">Tiri</p>
              <p className="text-black/50 text-sm font-neue">Protects and reports.</p>
            </div>
          </div>
          <p className="text-2xl font-bold font-marketing text-black max-w-2xl mx-auto">
            Veira is not software you use. It is a system that runs your business.
          </p>
        </div>
      </section>
    </section>
  );
};

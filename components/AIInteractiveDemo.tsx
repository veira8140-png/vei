
import React, { useState } from 'react';
import { getVeiraAIInsight } from '../services/gemini';
import { Sparkles, Send, Loader2 } from 'lucide-react';

const agentOptions = [
  { name: 'Glenn', role: 'Security', prompt: 'I noticed my evening shift sales are lower than expected despite similar foot traffic.' },
  { name: 'Tiri', role: 'Growth', prompt: 'Which items should I stock more of for the coming holiday season?' },
  { name: 'Achi', role: 'Support', prompt: 'How do I generate the monthly ETIMS report for KRA?' }
] as const;

export const AIInteractiveDemo: React.FC = () => {
  const [selectedAgent, setSelectedAgent] = useState<'Glenn' | 'Tiri' | 'Achi'>('Tiri');
  const [input, setInput] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleAsk = async (customQuery?: string) => {
    const query = customQuery || input;
    if (!query) return;
    
    setIsLoading(true);
    setResponse(null);
    
    const result = await getVeiraAIInsight(selectedAgent, query);
    setResponse(result || "Error processing request.");
    setIsLoading(false);
  };

  return (
    <section className="py-32 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/5 text-black text-[11px] font-semibold tracking-widest uppercase mb-4 font-neue">
            <Sparkles size={12} /> Live Simulation
          </div>
          <h2 className="text-3xl lg:text-[40px] font-bold text-black mb-6 font-marketing">Consult the AI.</h2>
          <p className="text-black/60 font-normal font-neue body-copy">Experience the depth of Veira's built-in intelligence.</p>
        </div>

        <div className="bg-white border border-black/10 rounded-[40px] overflow-hidden shadow-[0_40px_100px_-15px_rgba(0,0,0,0.08)]">
          <div className="flex border-b border-black/5 font-neue ui-text">
            {agentOptions.map((opt) => (
              <button
                key={opt.name}
                onClick={() => {
                  setSelectedAgent(opt.name);
                  setResponse(null);
                }}
                className={`flex-1 py-6 text-[12px] font-semibold uppercase tracking-[0.2em] transition-all ${selectedAgent === opt.name ? 'bg-black text-white' : 'text-black/40 hover:bg-black/5'}`}
              >
                {opt.name}
              </button>
            ))}
          </div>

          <div className="p-10">
            <div className="mb-10 font-neue">
              <span className="text-[11px] font-semibold text-black/40 uppercase tracking-widest block mb-4">Sample Query</span>
              {agentOptions.find(o => o.name === selectedAgent)?.prompt && (
                <button 
                  onClick={() => handleAsk(agentOptions.find(o => o.name === selectedAgent)?.prompt)}
                  className="px-6 py-4 bg-[#F8F9FA] border border-black/5 rounded-2xl text-[15px] font-medium hover:border-black transition-all text-left w-full italic font-marketing"
                >
                  "{agentOptions.find(o => o.name === selectedAgent)?.prompt}"
                </button>
              )}
            </div>

            <div className="flex gap-4">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={`Query ${selectedAgent}...`}
                className="flex-1 px-8 py-5 rounded-2xl border border-black/10 focus:outline-none focus:ring-0 focus:border-black text-[16px] font-normal transition-all font-neue"
                onKeyDown={(e) => e.key === 'Enter' && handleAsk()}
              />
              <button 
                onClick={() => handleAsk()}
                disabled={isLoading}
                className="px-10 py-5 bg-black text-white rounded-2xl font-semibold uppercase tracking-widest text-[13px] flex items-center gap-3 hover:bg-black/80 disabled:opacity-50 transition-all font-neue"
              >
                {isLoading ? <Loader2 className="animate-spin" size={18} /> : <Send size={18} />}
                Send
              </button>
            </div>

            {(response || isLoading) && (
              <div className="mt-10 p-8 bg-[#F8F9FA] rounded-[32px] border border-black/5 animate-in fade-in slide-in-from-top-4">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded bg-black flex items-center justify-center text-white font-bold text-xs font-neue">
                    {selectedAgent[0]}
                  </div>
                  <span className="font-semibold text-black uppercase text-[11px] tracking-widest font-neue">{selectedAgent} response:</span>
                </div>
                {isLoading ? (
                  <div className="space-y-3">
                    <div className="h-3 bg-black/5 rounded-full w-full animate-pulse"></div>
                    <div className="h-3 bg-black/5 rounded-full w-5/6 animate-pulse"></div>
                  </div>
                ) : (
                  <p className="text-black/70 leading-relaxed font-normal text-[17px] italic font-marketing">
                    {response}
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

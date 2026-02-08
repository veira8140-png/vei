
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import Logo3D from './Logo3D';

interface HeaderProps {
  onLogoClick?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onLogoClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogoClick = () => {
    if (onLogoClick) {
      onLogoClick();
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3 border-b border-black/5' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div 
            className="flex items-center gap-3 group cursor-pointer" 
            onClick={handleLogoClick}
          >
            <Logo3D className="w-12 h-12" />
            <span className="text-2xl font-bold tracking-tighter text-black font-didot">veira</span>
          </div>

          <nav className="hidden xl:flex items-center space-x-8 text-[14px] font-medium tracking-wide text-black/60 font-neue">
            <a href="/#pos" className="hover:text-black transition-colors">POS</a>
            <a href="/#ai-agents" className="hover:text-black transition-colors">Agents</a>
            <a href="/#cloud" className="hover:text-black transition-colors">Cloud</a>
            <a href="/#apps" className="hover:text-black transition-colors">Apps</a>
            <a href="/#enterprise" className="hover:text-black transition-colors">Enterprise</a>
            <a href="/#our-story" className="hover:text-black transition-colors">Our Story</a>
          </nav>

          <div className="hidden md:flex items-center space-x-6">
            <button className="bg-[#2D9B9B] text-white px-7 py-2.5 rounded-full text-[14px] font-semibold cta-text transition-all duration-300 hover:bg-[#268484] hover:-translate-y-0.5 shadow-lg flex items-center gap-2 font-neue">
              Get Free POS <ChevronRight size={14} />
            </button>
          </div>

          <button className="md:hidden p-2 text-black" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-2xl border-t border-black/5 p-6 flex flex-col space-y-6 animate-in fade-in slide-in-from-top-4">
          <a href="/#pos" onClick={() => setIsMenuOpen(false)} className="text-lg font-bold text-black font-neue">POS</a>
          <a href="/#ai-agents" onClick={() => setIsMenuOpen(false)} className="text-lg font-bold text-black font-neue">Agents</a>
          <a href="/#cloud" onClick={() => setIsMenuOpen(false)} className="text-lg font-bold text-black font-neue">Cloud</a>
          <a href="/#apps" onClick={() => setIsMenuOpen(false)} className="text-lg font-bold text-black font-neue">Apps</a>
          <a href="/#enterprise" onClick={() => setIsMenuOpen(false)} className="text-lg font-bold text-black font-neue">Enterprise</a>
          <a href="/#our-story" onClick={() => setIsMenuOpen(false)} className="text-lg font-bold text-black font-neue">Our Story</a>
          <div className="pt-6 border-t border-black/5 flex flex-col space-y-3">
            <button className="w-full py-4 text-center font-semibold text-white bg-[#2D9B9B] hover:bg-[#268484] transition-colors rounded-full text-[14px] font-neue shadow-lg">Get Free POS</button>
          </div>
        </div>
      )}
    </header>
  );
};


import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustSignals } from './components/TrustSignals';
import { WhatVeiraDoes } from './components/WhatVeiraDoes';
import { AIAgents } from './components/AIAgents';
import { HowItWorks } from './components/HowItWorks';
import { UseCases } from './components/UseCases';
import { SuccessStories } from './components/SuccessStories';
import { Testimonials } from './components/Testimonials';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { AIInteractiveDemo } from './components/AIInteractiveDemo';
import Enterprise from './components/Enterprise';
import OurStory from './components/OurStory';
import Apps from './components/Apps';
import Cloud from './components/Cloud';
import POS from './components/POS';
import CaseStudy from './components/CaseStudy';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<{ type: 'home' | 'case-study', slug?: string }>({ type: 'home' });

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#case-study/')) {
        const slug = hash.replace('#case-study/', '');
        setCurrentPage({ type: 'case-study', slug });
        window.scrollTo(0, 0);
        
        // SEO: Dynamic Metadata for Keyword Rich Slugs
        let title = "Success Story | Veira POS Kenya";
        let desc = "See how Kenyan retailers use our POS system.";
        
        if (slug.includes('best-pos-system-kenya-retail')) {
          title = "Best POS System Kenya Success Story | Amani Boutique | Veira";
          desc = "How Amani Boutique used the best POS system in Kenya to increase profit and automate MPESA reconciliation.";
        } else if (slug.includes('retail-inventory-management-software-nairobi')) {
          title = "Retail Inventory Management Software Nairobi Case Study | TechHub | Veira";
          desc = "Learn how TechHub implemented retail inventory management software in Nairobi to eliminate shrinkage.";
        }

        document.title = title;
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) metaDesc.setAttribute('content', desc);
      } else {
        setCurrentPage({ type: 'home' });
        document.title = "Best POS System in Kenya | MPESA Integrated & ETIMS Compliant | Veira";
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) metaDesc.setAttribute('content', "Veira is the top rated POS system in Kenya for retail shops. Native MPESA integration, KRA ETIMS compliance, and AI driven growth insights for small to enterprise businesses.");
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateToHome = () => {
    window.location.hash = '';
    setCurrentPage({ type: 'home' });
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-black selection:text-white">
      <Header onLogoClick={navigateToHome} />
      <main className="flex-grow">
        {currentPage.type === 'home' ? (
          <>
            <Hero />
            <TrustSignals />
            <WhatVeiraDoes />
            <POS />
            <Enterprise />
            <Apps />
            <Cloud />
            <OurStory />
            <AIInteractiveDemo />
            <AIAgents />
            <HowItWorks />
            <SuccessStories />
            <UseCases />
            <Testimonials />
            <Pricing />
            <FAQ />
          </>
        ) : (
          <CaseStudy slug={currentPage.slug || 'best-pos-system-kenya-retail-amani'} onBack={navigateToHome} />
        )}
      </main>
      <Footer />
    </div>
  );
};

export default App;

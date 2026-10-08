/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PortfolioData, VideoPrint } from './types/portfolio';
import { initialPortfolioData } from './data/initialPortfolioData';
import { ProfileSection } from './components/ProfileSection';
import { MainProjectSection } from './components/MainProjectSection';
import { AdditionalWorksSection } from './components/AdditionalWorksSection';
import { SecondMainProjectSection } from './components/SecondMainProjectSection';
import { AwardsSection } from './components/AwardsSection';
import { ContactSection } from './components/ContactSection';
import { LightboxModal } from './components/LightboxModal';
import { CustomizerDrawer } from './components/CustomizerDrawer';
import { HostgatorDownloadModal } from './components/HostgatorDownloadModal';
import { ArrowUpRight } from 'lucide-react';

const STORAGE_KEY = 'portfolio_editor_data_v1';

export default function App() {
  const [data, setData] = useState<PortfolioData>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // Fallback
    }
    return initialPortfolioData;
  });

  const [activePrint, setActivePrint] = useState<VideoPrint | null>(null);
  const [activePrintsList, setActivePrintsList] = useState<VideoPrint[]>([]);
  const [isCustomizerOpen, setIsCustomizerOpen] = useState(false);
  const [isHostgatorModalOpen, setIsHostgatorModalOpen] = useState(false);

  // Collect all prints for continuous lightbox cycling if desired
  const allPrints = [
    ...data.mainProject1.prints,
    ...data.additionalPrints,
    ...data.mainProject2.prints,
  ];

  const handleOpenLightbox = (print: VideoPrint, specificList?: VideoPrint[]) => {
    setActivePrint(print);
    setActivePrintsList(specificList || allPrints);
  };

  const handleSaveData = (newData: PortfolioData) => {
    setData(newData);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newData));
    } catch (e) {
      console.error('Error saving portfolio data', e);
    }
  };

  const handleResetData = () => {
    setData(initialPortfolioData);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (e) {
      console.error('Error clearing storage', e);
    }
  };

  const handleScrollToContact = () => {
    const el = document.getElementById('contato');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-amber-400 selection:text-black">
      <main>
        {/* 1. Profile Section */}
        <ProfileSection
          data={data}
          onOpenCustomizer={() => setIsCustomizerOpen(true)}
        />

        {/* 2. Main Work 01 + Video Prints */}
        <MainProjectSection
          project={data.mainProject1}
          onOpenLightbox={(print) =>
            handleOpenLightbox(print, data.mainProject1.prints)
          }
        />

        {/* 3. Additional Works 01 & 02 + Prints */}
        <AdditionalWorksSection
          work1={data.additionalWork1}
          work2={data.additionalWork2}
          additionalPrints={data.additionalPrints}
          onOpenLightbox={(print) =>
            handleOpenLightbox(print, data.additionalPrints)
          }
        />

        {/* 4. Main Work 02 + Prints */}
        <SecondMainProjectSection
          project={data.mainProject2}
          onOpenLightbox={(print) =>
            handleOpenLightbox(print, data.mainProject2.prints)
          }
        />

        {/* 5. Nominations & Awards */}
        <AwardsSection awards={data.awards} />

        {/* 6. Contact Section + WORK WITH ME! */}
        <ContactSection
          data={data}
          onOpenCustomizer={() => setIsCustomizerOpen(true)}
        />
      </main>

      {/* Botão Flutuante de Contato */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={handleScrollToContact}
          className="px-6 py-3 bg-white hover:bg-zinc-200 text-black font-semibold text-xs uppercase tracking-widest rounded-full shadow-2xl transition-all hover:scale-105 cursor-pointer flex items-center gap-2 border border-white/20 backdrop-blur-md"
          title="Ir para a seção de Contato"
        >
          <span>Contato</span>
          <ArrowUpRight className="w-4 h-4 text-black" />
        </button>
      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        currentPrint={activePrint}
        printsList={activePrintsList}
        onClose={() => setActivePrint(null)}
        onSelectPrint={(p) => setActivePrint(p)}
      />

      {/* Quick Customizer Drawer */}
      <CustomizerDrawer
        isOpen={isCustomizerOpen}
        onClose={() => setIsCustomizerOpen(false)}
        data={data}
        onSaveData={handleSaveData}
        onResetData={handleResetData}
      />

      {/* HostGator Download Modal */}
      <HostgatorDownloadModal
        isOpen={isHostgatorModalOpen}
        onClose={() => setIsHostgatorModalOpen(false)}
      />
    </div>
  );
}

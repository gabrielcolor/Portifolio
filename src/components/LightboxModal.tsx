import React, { useEffect } from 'react';
import { VideoPrint } from '../types/portfolio';
import { X, ChevronLeft, ChevronRight, Camera, Sliders, Film } from 'lucide-react';

interface LightboxModalProps {
  currentPrint: VideoPrint | null;
  printsList: VideoPrint[];
  onClose: () => void;
  onSelectPrint: (print: VideoPrint) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  currentPrint,
  printsList,
  onClose,
  onSelectPrint,
}) => {
  if (!currentPrint) return null;

  const currentIndex = printsList.findIndex((p) => p.id === currentPrint.id);

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (currentIndex > 0) {
      onSelectPrint(printsList[currentIndex - 1]);
    } else {
      onSelectPrint(printsList[printsList.length - 1]);
    }
  };

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (currentIndex < printsList.length - 1) {
      onSelectPrint(printsList[currentIndex + 1]);
    } else {
      onSelectPrint(printsList[0]);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, printsList]);

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
    >
      {/* Top Bar with Title and Close Button */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="absolute top-0 inset-x-0 h-16 bg-gradient-to-b from-black via-black/80 to-transparent flex items-center justify-between px-6 z-20"
      >
        <div className="flex items-center gap-3">
          <Film className="w-4 h-4 text-yellow-400" />
          <span className="font-display font-semibold text-white text-sm sm:text-base">
            {currentPrint.title}
          </span>
          {currentPrint.timecode && (
            <span className="hidden sm:inline-block text-xs font-mono-code text-zinc-400 bg-zinc-900 px-2 py-0.5 rounded border border-zinc-800">
              TC {currentPrint.timecode}
            </span>
          )}
        </div>

        <button
          onClick={onClose}
          className="p-2 text-zinc-400 hover:text-white transition-colors cursor-pointer rounded-full hover:bg-zinc-800/60"
          aria-label="Fechar"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        className="absolute left-3 sm:left-6 z-20 p-2 sm:p-3 rounded-full bg-zinc-900/80 hover:bg-zinc-800 text-white transition-all cursor-pointer border border-zinc-800"
        aria-label="Anterior"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-3 sm:right-6 z-20 p-2 sm:p-3 rounded-full bg-zinc-900/80 hover:bg-zinc-800 text-white transition-all cursor-pointer border border-zinc-800"
        aria-label="Próximo"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* Main Image Container */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-5xl max-h-[82vh] w-full flex flex-col items-center justify-center"
      >
        <div className="relative overflow-hidden border border-zinc-800 rounded-sm shadow-2xl bg-zinc-950 max-h-[72vh] flex items-center justify-center">
          <img
            src={currentPrint.imageUrl}
            alt={currentPrint.title}
            className="max-h-[70vh] w-auto object-contain select-none"
          />
        </div>

        {/* Technical Specs Footer */}
        <div className="mt-4 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs text-zinc-400 font-mono-code">
          {currentPrint.cameraInfo && (
            <div className="flex items-center gap-1.5 bg-zinc-900/90 px-3 py-1 rounded-sm border border-zinc-800">
              <Camera className="w-3.5 h-3.5 text-zinc-300" />
              <span>{currentPrint.cameraInfo}</span>
            </div>
          )}

          {currentPrint.colorGrade && (
            <div className="flex items-center gap-1.5 bg-zinc-900/90 px-3 py-1 rounded-sm border border-zinc-800">
              <Sliders className="w-3.5 h-3.5 text-amber-400" />
              <span>{currentPrint.colorGrade}</span>
            </div>
          )}

          <div className="text-zinc-500 text-[11px]">
            {currentIndex + 1} de {printsList.length} stills
          </div>
        </div>
      </div>
    </div>
  );
};

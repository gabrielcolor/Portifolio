import React from 'react';
import { ProjectWork, VideoPrint } from '../types/portfolio';
import { VideoPlayer } from './VideoPlayer';
import { Maximize2, Camera } from 'lucide-react';

interface MainProjectSectionProps {
  project: ProjectWork;
  onOpenLightbox: (print: VideoPrint) => void;
}

export const MainProjectSection: React.FC<MainProjectSectionProps> = ({
  project,
  onOpenLightbox,
}) => {
  return (
    <section id="trabalhos" className="py-12 md:py-20 border-t border-zinc-900 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Main Section Headline: "Meus Trabalhos" */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl text-white tracking-tight uppercase">
            Meus Trabalhos
          </h2>
          <div className="w-16 h-1 bg-red-600 mx-auto mt-4" />
        </div>

        {/* Project 1 Headline (Yellow text in PSD) */}
        <div className="mb-4 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
          <h3 className="font-headline text-2xl sm:text-4xl text-yellow-400 uppercase tracking-wider">
            {project.badgeTitle || 'NOME VIDEO PRINCIPAL'}
          </h3>
          <span className="text-xs text-zinc-400 font-mono-code">
            {project.title}
          </span>
        </div>

        {/* Featured Video Player */}
        <div className="mb-14">
          <VideoPlayer
            videoUrl={project.videoUrl}
            posterUrl={project.posterUrl}
            title={project.title}
            aspectRatio="16/9"
          />
        </div>

        {/* PRINTS DO VIDEO (Yellow text in PSD) */}
        <div className="text-center mb-8">
          <h4 className="font-headline text-2xl sm:text-4xl text-yellow-400 tracking-wider uppercase inline-block border-b border-yellow-400/30 pb-1">
            PRINTS DO VIDEO
          </h4>
          <p className="text-xs text-zinc-500 font-mono-code mt-2">
            Stills em alta resolução · Color Grading & Enquadramentos 1:1
          </p>
        </div>

        {/* Grid of Square Prints (Espaços de prints quadrados) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 lg:gap-5" id="prints">
          {project.prints.map((print) => (
            <div
              key={print.id}
              onClick={() => onOpenLightbox(print)}
              className="group relative aspect-square overflow-hidden bg-zinc-950 border border-zinc-900 hover:border-yellow-400/60 transition-all duration-300 cursor-pointer rounded-sm shadow-md"
            >
              <img
                src={print.imageUrl}
                alt={print.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter contrast-105"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col justify-between p-3">
                <div className="flex justify-end">
                  <span className="p-1 bg-black/60 rounded text-yellow-400">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </span>
                </div>
                <div>
                  <p className="text-xs font-semibold text-white line-clamp-1">
                    {print.title}
                  </p>
                  {print.timecode && (
                    <p className="text-[10px] text-zinc-400 font-mono-code mt-0.5">
                      TC {print.timecode}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

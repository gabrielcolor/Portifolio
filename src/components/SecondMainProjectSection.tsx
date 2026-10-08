import React from 'react';
import { ProjectWork, VideoPrint } from '../types/portfolio';
import { VideoPlayer } from './VideoPlayer';
import { Maximize2 } from 'lucide-react';

interface SecondMainProjectSectionProps {
  project: ProjectWork;
  onOpenLightbox: (print: VideoPrint) => void;
}

export const SecondMainProjectSection: React.FC<SecondMainProjectSectionProps> = ({
  project,
  onOpenLightbox,
}) => {
  return (
    <section className="py-14 sm:py-20 border-t border-zinc-900 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Yellow Header like PSD layout */}
        <div className="text-center mb-8">
          <h3 className="font-headline text-3xl sm:text-5xl text-yellow-400 tracking-wider uppercase inline-block">
            {project.badgeTitle || 'VIDEO TRABALHO PRINCIPAL 02'}
          </h3>
          <p className="text-xs text-zinc-400 font-mono-code mt-1">
            {project.title}
          </p>
        </div>

        {/* Video Player */}
        <div className="mb-12">
          <VideoPlayer
            videoUrl={project.videoUrl}
            posterUrl={project.posterUrl}
            title={project.title}
            aspectRatio="16/9"
          />
        </div>

        {/* Square / Grid Prints under Video 02 */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 lg:gap-5">
          {project.prints.map((print) => (
            <div
              key={print.id}
              onClick={() => onOpenLightbox(print)}
              className="group relative aspect-[4/3] sm:aspect-square overflow-hidden bg-zinc-950 border border-zinc-900 hover:border-yellow-400/60 transition-all duration-300 cursor-pointer rounded-sm shadow-md"
            >
              <img
                src={print.imageUrl}
                alt={print.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter contrast-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-3">
                <p className="text-xs font-semibold text-white line-clamp-1">
                  {print.title}
                </p>
                <div className="flex items-center justify-between text-[10px] text-zinc-400 font-mono-code mt-0.5">
                  <span>Color Stills</span>
                  <Maximize2 className="w-3.5 h-3.5 text-yellow-400" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

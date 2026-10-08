import React from 'react';
import { ProjectWork, VideoPrint } from '../types/portfolio';
import { VideoPlayer } from './VideoPlayer';
import { Maximize2, MapPin, Calendar } from 'lucide-react';

interface AdditionalWorksSectionProps {
  work1: ProjectWork;
  work2: ProjectWork;
  additionalPrints: VideoPrint[];
  onOpenLightbox: (print: VideoPrint) => void;
}

export const AdditionalWorksSection: React.FC<AdditionalWorksSectionProps> = ({
  work1,
  work2,
  additionalPrints,
  onOpenLightbox,
}) => {
  return (
    <section className="py-14 sm:py-20 border-t border-zinc-900 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Two-Column Showcase for Additional Works 01 and 02 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {/* Work 01 */}
          <div className="flex flex-col">
            <h3 className="font-headline text-2xl sm:text-3xl lg:text-4xl text-yellow-400 tracking-wider uppercase mb-3">
              {work1.badgeTitle || 'TRABALHO ADICIONAL 01'}
            </h3>

            <div className="mb-4">
              <VideoPlayer
                videoUrl={work1.videoUrl}
                posterUrl={work1.posterUrl}
                title={work1.title}
                aspectRatio="16/9"
                enableGradeCompare={false}
              />
            </div>

            {/* Metadata table like the PSD layout */}
            <div className="space-y-1.5 text-xs text-zinc-300 font-mono-code mb-3">
              <div className="flex items-center">
                <span className="w-24 text-zinc-500">Location</span>
                <span>: {work1.location || 'MIMI LOUNGE, HCMC'}</span>
              </div>
              <div className="flex items-center">
                <span className="w-24 text-zinc-500">Year</span>
                <span>: {work1.year || '2025'}</span>
              </div>
            </div>

            {work1.description && (
              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                {work1.description}
              </p>
            )}
          </div>

          {/* Work 02 */}
          <div className="flex flex-col">
            <h3 className="font-headline text-2xl sm:text-3xl lg:text-4xl text-yellow-400 tracking-wider uppercase mb-3">
              {work2.badgeTitle || 'TRABALHO ADICIONAL 02'}
            </h3>

            <div className="mb-4">
              <VideoPlayer
                videoUrl={work2.videoUrl}
                posterUrl={work2.posterUrl}
                title={work2.title}
                aspectRatio="16/9"
                enableGradeCompare={false}
              />
            </div>

            {/* Metadata table like the PSD layout */}
            <div className="space-y-1.5 text-xs text-zinc-300 font-mono-code mb-3">
              <div className="flex items-center">
                <span className="w-24 text-zinc-500">Location</span>
                <span>: {work2.location || 'MIMI LOUNGE, HCMC'}</span>
              </div>
              <div className="flex items-center">
                <span className="w-24 text-zinc-500">Year</span>
                <span>: {work2.year || '2025'}</span>
              </div>
            </div>

            {work2.description && (
              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                {work2.description}
              </p>
            )}
          </div>
        </div>

        {/* PRINTS TRABALHOS ADICIONAIS (Yellow header in PSD) */}
        <div className="text-center mb-8">
          <h4 className="font-headline text-2xl sm:text-4xl text-yellow-400 tracking-wider uppercase inline-block border-b border-yellow-400/30 pb-1">
            PRINTS TRABALHOS ADICIONAIS
          </h4>
          <p className="text-xs text-zinc-500 font-mono-code mt-2">
            Stills em neon & iluminação de ambiente
          </p>
        </div>

        {/* Mosaic / Square Prints Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {additionalPrints.map((print, index) => (
            <div
              key={print.id}
              onClick={() => onOpenLightbox(print)}
              className={`group relative overflow-hidden bg-zinc-950 border border-zinc-900 hover:border-yellow-400/60 transition-all duration-300 cursor-pointer rounded-sm shadow-md ${
                index === 0
                  ? 'col-span-2 aspect-[16/9]'
                  : index === 1
                  ? 'col-span-1 aspect-[3/4] row-span-1'
                  : 'col-span-1 aspect-square'
              }`}
            >
              <img
                src={print.imageUrl}
                alt={print.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter contrast-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-2.5">
                <p className="text-xs font-semibold text-white line-clamp-1">
                  {print.title}
                </p>
                <div className="flex items-center justify-between text-[10px] text-zinc-400 mt-0.5">
                  <span>Still #{index + 1}</span>
                  <Maximize2 className="w-3 h-3 text-yellow-400" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { AwardItem } from '../types/portfolio';
import { Award } from 'lucide-react';

interface AwardsSectionProps {
  awards: AwardItem[];
}

export const AwardsSection: React.FC<AwardsSectionProps> = ({ awards }) => {
  return (
    <section id="premios" className="py-14 sm:py-20 border-t border-zinc-900 bg-black">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Yellow Header */}
        <h3 className="font-headline text-3xl sm:text-5xl text-yellow-400 tracking-wider uppercase mb-12 inline-block">
          Indicações e Prêmios
        </h3>

        {/* Award Cards Grid matching PSD layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-14 max-w-3xl mx-auto">
          {awards.map((award) => (
            <div
              key={award.id}
              className="flex flex-col items-center group bg-zinc-950/40 p-6 border border-zinc-900 rounded-sm hover:border-yellow-400/40 transition-colors"
            >
              {/* Award Banner / Graphic Box */}
              <div className="w-full aspect-[16/10] bg-yellow-400 rounded-sm flex flex-col items-center justify-center p-6 text-black relative shadow-lg group-hover:scale-102 transition-transform duration-300">
                <span className="text-[11px] font-mono-code font-bold uppercase tracking-widest text-zinc-900/80">
                  {award.festival}
                </span>
                <h4 className="font-display font-bold text-lg sm:text-xl text-black mt-1 leading-snug">
                  {award.title}
                </h4>
                <span className="text-xs font-semibold text-zinc-800 mt-2">
                  Ano {award.year} · {award.category}
                </span>
              </div>

              {/* Gold Ribbon Medal Graphic matching PSD */}
              <div className="relative -mt-6 z-10 flex flex-col items-center">
                {/* Golden circular seal with scalloped edge */}
                <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-yellow-500 via-amber-300 to-yellow-200 border-2 border-amber-600 flex items-center justify-center shadow-xl">
                  <div className="w-12 h-12 rounded-full border border-dashed border-amber-700/60 flex items-center justify-center">
                    <span className="font-headline text-3xl text-amber-900 leading-none">
                      {award.badgeNumber || '1'}
                    </span>
                  </div>
                </div>

                {/* Red ribbon tails */}
                <div className="flex gap-1.5 -mt-2">
                  <div className="w-3 h-7 bg-red-600 [clip-path:polygon(0%_0%,100%_0%,100%_100%,50%_75%,0%_100%)] shadow-md" />
                  <div className="w-3 h-7 bg-red-600 [clip-path:polygon(0%_0%,100%_0%,100%_100%,50%_75%,0%_100%)] shadow-md" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

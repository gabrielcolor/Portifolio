import React from 'react';
import { PortfolioData } from '../types/portfolio';
import { Edit3, ArrowDown } from 'lucide-react';

interface ProfileSectionProps {
  data: PortfolioData;
  onOpenCustomizer: () => void;
}

export const ProfileSection: React.FC<ProfileSectionProps> = ({
  data,
  onOpenCustomizer,
}) => {
  return (
    <section id="profile" className="py-12 md:py-16 max-w-5xl mx-auto px-4 sm:px-6">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 lg:gap-12">
        {/* Espaço para Foto */}
        <div className="w-full max-w-[280px] sm:max-w-[320px] shrink-0">
          <div className="relative group overflow-hidden rounded-sm bg-zinc-950 border border-zinc-800 shadow-2xl">
            <div className="aspect-[3/4] w-full relative overflow-hidden bg-zinc-900">
              <img
                src={data.heroPortraitUrl}
                alt={data.editorName}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center filter contrast-105 brightness-95 group-hover:scale-102 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70" />
            </div>

            <button
              onClick={onOpenCustomizer}
              className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity p-2 bg-black/80 hover:bg-black rounded-md text-zinc-300 hover:text-white border border-zinc-700/60 text-xs flex items-center gap-1.5 cursor-pointer shadow-lg"
              title="Trocar foto ou editar informações"
            >
              <Edit3 className="w-3.5 h-3.5" />
              <span>Editar Foto</span>
            </button>
          </div>
        </div>

        {/* Nome e Breve Descrição */}
        <div className="flex-1 flex flex-col justify-center text-center md:text-left">
          {/* Tag de Especialidade / Cargo */}
          <div className="mb-2">
            <span className="text-xs uppercase tracking-widest text-zinc-400 font-mono-code">
              {data.editorRole || 'Editor de Vídeo & Colorista'}
            </span>
          </div>

          {/* Nome */}
          <h1 className="font-headline text-5xl sm:text-6xl lg:text-7xl text-white tracking-wider uppercase leading-none mb-4">
            <span className="text-red-600 drop-shadow-[0_0_20px_rgba(220,38,38,0.4)]">
              {data.editorName}
            </span>
            {data.editorAlias && (
              <span className="text-zinc-500 text-3xl sm:text-4xl font-normal ml-3 font-display">
                ({data.editorAlias})
              </span>
            )}
          </h1>

          {/* Breve Descrição */}
          <p className="text-zinc-300 text-base sm:text-lg leading-relaxed max-w-2xl font-light mb-6">
            {data.bio}
          </p>

          {/* Botão sutil para navegar aos trabalhos */}
          <div className="pt-2 flex items-center justify-center md:justify-start gap-4">
            <a
              href="#trabalhos"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-zinc-400 hover:text-white font-mono-code transition-colors group"
            >
              <span>Ver Trabalhos Selecionados</span>
              <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform text-red-500" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

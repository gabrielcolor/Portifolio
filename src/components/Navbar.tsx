import React from 'react';
import { Film, SlidersHorizontal, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  editorName: string;
  onOpenCustomizer: () => void;
  onScrollToContact: () => void;
  onOpenHostgatorModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  editorName,
  onOpenCustomizer,
  onScrollToContact,
  onOpenHostgatorModal,
}) => {
  return (
    <header className="sticky top-0 z-40 w-full bg-black/90 backdrop-blur-md border-b border-zinc-900/80 transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Zone 1: Brand wordmark */}
        <a
          href="#profile"
          className="font-headline text-2xl tracking-wider text-white hover:text-red-500 transition-colors shrink-0 flex items-center gap-2"
        >
          <Film className="w-5 h-5 text-red-500" />
          <span>{editorName || 'DUY ANH NGUYEN'}</span>
        </a>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-xs uppercase tracking-widest text-zinc-400 font-medium">
          <a href="#profile" className="hover:text-white transition-colors">
            Perfil
          </a>
          <a href="#trabalhos" className="hover:text-white transition-colors">
            Trabalhos
          </a>
          <a href="#prints" className="hover:text-white transition-colors">
            Prints
          </a>
          <a href="#premios" className="hover:text-white transition-colors">
            Prêmios
          </a>
          <a href="#contato" className="hover:text-white transition-colors">
            Contato
          </a>
        </nav>

        {/* Zone 3: Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={onOpenHostgatorModal}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-yellow-300 bg-yellow-400/10 hover:bg-yellow-400/20 border border-yellow-400/30 rounded-md transition-colors cursor-pointer"
            title="Baixar pacote .ZIP pronto para publicar na HostGator"
          >
            <span>Baixar (HostGator)</span>
          </button>

          <button
            onClick={onOpenCustomizer}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-zinc-300 bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-800 rounded-md transition-colors cursor-pointer"
            title="Editar textos e mídias do portfólio"
          >
            <SlidersHorizontal className="w-3.5 h-3.5 text-amber-400" />
            <span>Editar</span>
          </button>

          <button
            onClick={onScrollToContact}
            className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-black bg-white hover:bg-zinc-200 rounded-md transition-colors whitespace-nowrap shadow-sm cursor-pointer"
          >
            <span>Contato</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </header>
  );
};

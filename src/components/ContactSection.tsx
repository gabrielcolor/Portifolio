import React, { useState } from 'react';
import { PortfolioData } from '../types/portfolio';
import { Copy, Check, ExternalLink, Mail, Phone, Instagram, Send, Sparkles } from 'lucide-react';

interface ContactSectionProps {
  data: PortfolioData;
  onOpenCustomizer: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  data,
  onOpenCustomizer,
}) => {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [showProposalModal, setShowProposalModal] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Edição de Vídeo Comercial',
    message: '',
  });

  const handleCopy = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSendProposal = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
    setTimeout(() => {
      setFormSent(false);
      setShowProposalModal(false);
      setFormData({ name: '', email: '', projectType: 'Edição de Vídeo Comercial', message: '' });
    }, 2500);
  };

  return (
    <section id="contato" className="py-16 sm:py-24 border-t border-zinc-900 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Top Minimalist Header matching PSD */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-headline text-4xl sm:text-6xl text-white tracking-widest uppercase">
            CONTATO
          </h2>
          <div className="w-12 h-0.5 bg-zinc-700 mx-auto mt-2" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-14 items-stretch">
          {/* Left Column: Contact Table + WORK WITH ME! graphic */}
          <div className="md:col-span-7 flex flex-col justify-between">
            {/* Minimalist Contact Table */}
            <div className="divide-y divide-zinc-800 border-y border-zinc-800 mb-10 text-xs sm:text-sm font-mono-code">
              {/* Phone */}
              <div className="py-3.5 flex items-center justify-between group">
                <span className="text-zinc-400 font-medium">Phone Number</span>
                <div className="flex items-center gap-3">
                  <a
                    href={`tel:${data.contact.phone.replace(/[^0-9+]/g, '')}`}
                    className="text-white hover:text-red-400 transition-colors"
                  >
                    {data.contact.phone}
                  </a>
                  <button
                    onClick={() => handleCopy(data.contact.phone, 'phone')}
                    className="p-1 text-zinc-500 hover:text-white transition-colors cursor-pointer"
                    title="Copiar telefone"
                  >
                    {copiedField === 'phone' ? (
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Email */}
              <div className="py-3.5 flex items-center justify-between group">
                <span className="text-zinc-400 font-medium">E-mail</span>
                <div className="flex items-center gap-3">
                  <a
                    href={`mailto:${data.contact.email}`}
                    className="text-white hover:text-red-400 transition-colors"
                  >
                    {data.contact.email}
                  </a>
                  <button
                    onClick={() => handleCopy(data.contact.email, 'email')}
                    className="p-1 text-zinc-500 hover:text-white transition-colors cursor-pointer"
                    title="Copiar e-mail"
                  >
                    {copiedField === 'email' ? (
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Instagram */}
              <div className="py-3.5 flex items-center justify-between group">
                <span className="text-zinc-400 font-medium">Instagram</span>
                <div className="flex items-center gap-3">
                  <a
                    href={`https://instagram.com/${data.contact.instagram.replace('@', '')}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-white hover:text-red-400 transition-colors underline underline-offset-4"
                  >
                    {data.contact.instagram}
                  </a>
                  <ExternalLink className="w-3.5 h-3.5 text-zinc-500 group-hover:text-white transition-colors" />
                </div>
              </div>
            </div>

            {/* Red Neon "WORK WITH ME!" Headline graphic matching PSD */}
            <div className="mt-auto pt-6">
              <button
                onClick={() => setShowProposalModal(true)}
                className="text-left group cursor-pointer w-full transition-transform hover:scale-[1.01]"
              >
                <div className="relative inline-block">
                  <h3 className="font-headline text-5xl sm:text-7xl lg:text-8xl text-red-600 leading-[0.85] tracking-tight uppercase select-none drop-shadow-[0_0_25px_rgba(239,68,68,0.7)] group-hover:text-red-500 transition-colors">
                    {data.contact.bannerText || 'WORK WITH ME!'}
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm text-zinc-400 flex items-center gap-2 group-hover:text-white transition-colors font-mono-code">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Disponível para novos projetos · Clique para orçamentos</span>
                  </p>
                </div>
              </button>
            </div>
          </div>

          {/* Right Column: Editorial Portrait matching PSD layout */}
          <div className="md:col-span-5 flex flex-col justify-end">
            <div className="aspect-[3/4] w-full relative overflow-hidden bg-zinc-950 border border-zinc-800 rounded-sm shadow-2xl">
              <img
                src={data.contact.portraitUrl}
                alt="Portrait Contact"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover filter contrast-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-xs font-mono-code text-zinc-300 flex justify-between items-center">
                <span>{data.editorName}</span>
                <span className="text-zinc-500">Editorial Still</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quiet Footer */}
        <div className="mt-20 pt-8 border-t border-zinc-900 text-center text-xs text-zinc-600 font-mono-code">
          <p>© {new Date().getFullYear()} {data.editorName}. Todos os direitos reservados.</p>
        </div>
      </div>

      {/* Modal: Enviar Proposta / Work with me */}
      {showProposalModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-zinc-950 border border-zinc-800 rounded-lg max-w-lg w-full p-6 sm:p-8 relative shadow-2xl">
            <div className="flex items-center justify-between mb-6 border-b border-zinc-800 pb-4">
              <div>
                <h4 className="font-display font-bold text-xl text-white">
                  Iniciar Projeto com {data.editorName}
                </h4>
                <p className="text-xs text-zinc-400 mt-0.5 font-mono-code">
                  Respondo em até 24 horas por e-mail ou WhatsApp
                </p>
              </div>
              <button
                onClick={() => setShowProposalModal(false)}
                className="text-zinc-400 hover:text-white p-1"
              >
                ✕
              </button>
            </div>

            {formSent ? (
              <div className="py-10 text-center flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-3">
                  <Check className="w-6 h-6" />
                </div>
                <h5 className="font-semibold text-lg text-white">
                  Mensagem Enviada!
                </h5>
                <p className="text-xs text-zinc-400 mt-1 max-w-xs">
                  Entrarei em contato em breve para discutir os detalhes do seu projeto.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSendProposal} className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1">
                    Seu Nome / Empresa
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="Ex: Pedro Lucas / Agência Lumina"
                    className="w-full px-3 py-2 bg-zinc-900 border border-zinc-800 rounded text-sm text-white focus:outline-none focus:border-red-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1">
                    Seu E-mail ou WhatsApp
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="Ex: contato@empresa.com ou (11) 99999-9999"
                    className="w-full px-3 py-2 bg-zinc-900 border border-zinc-800 rounded text-sm text-white focus:outline-none focus:border-red-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1">
                    Tipo de Projeto
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) =>
                      setFormData({ ...formData, projectType: e.target.value })
                    }
                    className="w-full px-3 py-2 bg-zinc-900 border border-zinc-800 rounded text-sm text-white focus:outline-none focus:border-red-500"
                  >
                    <option>Edição de Vídeo Comercial</option>
                    <option>Color Grading & Tratamento de Cor</option>
                    <option>Vídeo Institucional / Documentário</option>
                    <option>Videoclipe Musical</option>
                    <option>Reels / Shorts de Alto Impacto</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1">
                    Briefing Resumido / Prazos
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Conte sobre a ideia, referências ou prazo desejado..."
                    className="w-full px-3 py-2 bg-zinc-900 border border-zinc-800 rounded text-sm text-white focus:outline-none focus:border-red-500 resize-none"
                  />
                </div>

                <div className="pt-2 flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setShowProposalModal(false)}
                    className="px-4 py-2 text-xs text-zinc-400 hover:text-white transition-colors"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 text-xs font-semibold bg-red-600 hover:bg-red-500 text-white rounded transition-colors flex items-center gap-1.5 cursor-pointer shadow-lg shadow-red-600/30"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Enviar Mensagem</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

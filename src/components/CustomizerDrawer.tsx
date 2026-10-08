import React, { useState, useRef } from 'react';
import { PortfolioData, VideoPrint } from '../types/portfolio';
import { initialPortfolioData } from '../data/initialPortfolioData';
import {
  X,
  Save,
  RotateCcw,
  Copy,
  Check,
  SlidersHorizontal,
  Upload,
  Film,
  Image as ImageIcon,
  HelpCircle,
  FolderOpen,
  Youtube,
  Tv
} from 'lucide-react';

interface CustomizerDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  data: PortfolioData;
  onSaveData: (newData: PortfolioData) => void;
  onResetData: () => void;
}

export const CustomizerDrawer: React.FC<CustomizerDrawerProps> = ({
  isOpen,
  onClose,
  data,
  onSaveData,
  onResetData,
}) => {
  if (!isOpen) return null;

  const [activeTab, setActiveTab] = useState<'profile' | 'projects' | 'prints' | 'guide'>('profile');
  const [formData, setFormData] = useState<PortfolioData>(JSON.parse(JSON.stringify(data)));
  const [copiedJson, setCopiedJson] = useState(false);
  const [saveToast, setSaveToast] = useState(false);

  const heroPhotoInputRef = useRef<HTMLInputElement>(null);
  const contactPhotoInputRef = useRef<HTMLInputElement>(null);
  const video1InputRef = useRef<HTMLInputElement>(null);
  const video2InputRef = useRef<HTMLInputElement>(null);

  const handleSave = () => {
    onSaveData(formData);
    setSaveToast(true);
    setTimeout(() => setSaveToast(false), 2000);
  };

  const handleCopyJson = () => {
    navigator.clipboard.writeText(JSON.stringify(formData, null, 2));
    setCopiedJson(true);
    setTimeout(() => setCopiedJson(false), 2000);
  };

  // Convert uploaded image file into a Data URL (base64)
  const processImageFile = (file: File, onDone: (base64: string) => void) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      if (typeof e.target?.result === 'string') {
        onDone(e.target.result);
      }
    };
    reader.readAsDataURL(file);
  };

  // Process local video file
  const processVideoFile = (file: File, onDone: (url: string) => void) => {
    if (!file) return;
    const objectUrl = URL.createObjectURL(file);
    onDone(objectUrl);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex justify-end animate-in fade-in duration-200">
      <div className="w-full max-w-xl bg-zinc-950 border-l border-zinc-800 h-full flex flex-col shadow-2xl text-white">
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-zinc-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="w-5 h-5 text-amber-400" />
            <div>
              <h3 className="font-display font-bold text-base sm:text-lg">
                Gerenciador de Mídias & Dados
              </h3>
              <p className="text-xs text-zinc-400 font-mono-code">
                Suba fotos, vídeos e atualize seus textos
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-zinc-400 hover:text-white rounded-md hover:bg-zinc-800 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-zinc-800 bg-zinc-900/50 text-xs font-medium">
          <button
            onClick={() => setActiveTab('profile')}
            className={`flex-1 py-2.5 text-center border-b-2 transition-colors cursor-pointer ${
              activeTab === 'profile'
                ? 'border-red-500 text-white font-semibold'
                : 'border-transparent text-zinc-400 hover:text-white'
            }`}
          >
            Perfil
          </button>
          <button
            onClick={() => setActiveTab('projects')}
            className={`flex-1 py-2.5 text-center border-b-2 transition-colors cursor-pointer ${
              activeTab === 'projects'
                ? 'border-red-500 text-white font-semibold'
                : 'border-transparent text-zinc-400 hover:text-white'
            }`}
          >
            Vídeos
          </button>
          <button
            onClick={() => setActiveTab('prints')}
            className={`flex-1 py-2.5 text-center border-b-2 transition-colors cursor-pointer ${
              activeTab === 'prints'
                ? 'border-red-500 text-white font-semibold'
                : 'border-transparent text-zinc-400 hover:text-white'
            }`}
          >
            Prints
          </button>
          <button
            onClick={() => setActiveTab('guide')}
            className={`flex-1 py-2.5 text-center border-b-2 transition-colors cursor-pointer flex items-center justify-center gap-1 ${
              activeTab === 'guide'
                ? 'border-amber-400 text-amber-300 font-semibold'
                : 'border-transparent text-zinc-400 hover:text-white'
            }`}
          >
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Como Upar?</span>
          </button>
        </div>

        {/* Content Form */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6 text-xs sm:text-sm">
          {/* TAB 1: PROFILE */}
          {activeTab === 'profile' && (
            <div className="space-y-5">
              {/* Profile Photo Uploader */}
              <div className="p-4 bg-zinc-900/60 border border-zinc-800 rounded-sm">
                <span className="text-xs font-mono-code text-zinc-300 font-semibold block mb-2">
                  Foto de Perfil
                </span>
                
                <div className="flex items-center gap-4">
                  <div className="w-16 h-20 rounded bg-zinc-950 border border-zinc-800 overflow-hidden shrink-0">
                    <img
                      src={formData.heroPortraitUrl}
                      alt="Preview"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1 space-y-2">
                    <input
                      ref={heroPhotoInputRef}
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          processImageFile(file, (base64) => {
                            setFormData({ ...formData, heroPortraitUrl: base64 });
                          });
                        }
                      }}
                    />

                    <button
                      type="button"
                      onClick={() => heroPhotoInputRef.current?.click()}
                      className="w-full py-2 px-3 bg-zinc-800 hover:bg-zinc-700 text-white rounded text-xs font-medium flex items-center justify-center gap-2 cursor-pointer transition-colors"
                    >
                      <Upload className="w-3.5 h-3.5 text-amber-400" />
                      <span>Fazer Upload do Computador</span>
                    </button>

                    <input
                      type="text"
                      value={formData.heroPortraitUrl}
                      onChange={(e) =>
                        setFormData({ ...formData, heroPortraitUrl: e.target.value })
                      }
                      placeholder="Ou cole uma URL / caminho ex: /minha-foto.jpg"
                      className="w-full px-2.5 py-1.5 bg-zinc-950 border border-zinc-800 rounded text-[11px] font-mono-code text-zinc-300 focus:outline-none focus:border-red-500"
                    />
                  </div>
                </div>
              </div>

              {/* Name and Role */}
              <div>
                <label className="block text-zinc-400 text-xs font-mono-code mb-1">
                  Seu Nome (Destaque em Vermelho)
                </label>
                <input
                  type="text"
                  value={formData.editorName}
                  onChange={(e) =>
                    setFormData({ ...formData, editorName: e.target.value })
                  }
                  className="w-full px-3 py-2 bg-zinc-900 border border-zinc-800 rounded font-headline text-lg tracking-wider text-red-500 focus:outline-none focus:border-red-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-zinc-400 text-xs font-mono-code mb-1">
                    Apelido (Opcional)
                  </label>
                  <input
                    type="text"
                    value={formData.editorAlias}
                    onChange={(e) =>
                      setFormData({ ...formData, editorAlias: e.target.value })
                    }
                    placeholder="Ex: Joe"
                    className="w-full px-3 py-2 bg-zinc-900 border border-zinc-800 rounded text-white focus:outline-none focus:border-red-500"
                  />
                </div>
                <div>
                  <label className="block text-zinc-400 text-xs font-mono-code mb-1">
                    Cargo / Especialidade
                  </label>
                  <input
                    type="text"
                    value={formData.editorRole}
                    onChange={(e) =>
                      setFormData({ ...formData, editorRole: e.target.value })
                    }
                    placeholder="Ex: Video Editor & Colorist"
                    className="w-full px-3 py-2 bg-zinc-900 border border-zinc-800 rounded text-white focus:outline-none focus:border-red-500"
                  />
                </div>
              </div>

              {/* Bio */}
              <div>
                <label className="block text-zinc-400 text-xs font-mono-code mb-1">
                  Breve Descrição
                </label>
                <textarea
                  rows={4}
                  value={formData.bio}
                  onChange={(e) =>
                    setFormData({ ...formData, bio: e.target.value })
                  }
                  className="w-full px-3 py-2 bg-zinc-900 border border-zinc-800 rounded text-white focus:outline-none focus:border-red-500 resize-none leading-relaxed"
                />
              </div>

              {/* Contact Photo & Links */}
              <div className="pt-4 border-t border-zinc-800 space-y-3">
                <span className="text-xs font-mono-code text-zinc-400 uppercase font-semibold">
                  Contatos
                </span>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-zinc-500 text-[11px] font-mono-code mb-1">
                      Telefone
                    </label>
                    <input
                      type="text"
                      value={formData.contact.phone}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          contact: { ...formData.contact, phone: e.target.value },
                        })
                      }
                      className="w-full px-2.5 py-1.5 bg-zinc-900 border border-zinc-800 rounded text-xs text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-zinc-500 text-[11px] font-mono-code mb-1">
                      Instagram
                    </label>
                    <input
                      type="text"
                      value={formData.contact.instagram}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          contact: { ...formData.contact, instagram: e.target.value },
                        })
                      }
                      className="w-full px-2.5 py-1.5 bg-zinc-900 border border-zinc-800 rounded text-xs text-white"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-zinc-500 text-[11px] font-mono-code mb-1">
                    E-mail
                  </label>
                  <input
                    type="text"
                    value={formData.contact.email}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        contact: { ...formData.contact, email: e.target.value },
                      })
                    }
                    className="w-full px-2.5 py-1.5 bg-zinc-900 border border-zinc-800 rounded text-xs text-white"
                  />
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: PROJECTS & VIDEOS */}
          {activeTab === 'projects' && (
            <div className="space-y-6">
              {/* Main Project 1 */}
              <div className="p-4 bg-zinc-900/60 border border-zinc-800 rounded space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-yellow-400 font-mono-code uppercase font-semibold">
                    Vídeo Principal 01
                  </span>
                  <span className="text-[10px] text-zinc-500">MP4, YouTube ou Vimeo</span>
                </div>

                <div>
                  <label className="block text-zinc-400 text-xs font-mono-code mb-1">
                    Título (Destaque Amarelo)
                  </label>
                  <input
                    type="text"
                    value={formData.mainProject1.badgeTitle}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        mainProject1: {
                          ...formData.mainProject1,
                          badgeTitle: e.target.value,
                        },
                      })
                    }
                    className="w-full px-3 py-1.5 bg-zinc-900 border border-zinc-800 rounded text-yellow-400 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-zinc-400 text-xs font-mono-code mb-1">
                    Arquivo de Vídeo ou Link
                  </label>
                  <div className="space-y-2">
                    <input
                      ref={video1InputRef}
                      type="file"
                      accept="video/mp4,video/webm"
                      className="hidden"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          processVideoFile(file, (url) => {
                            setFormData({
                              ...formData,
                              mainProject1: {
                                ...formData.mainProject1,
                                videoUrl: url,
                              },
                            });
                          });
                        }
                      }}
                    />

                    <button
                      type="button"
                      onClick={() => video1InputRef.current?.click()}
                      className="w-full py-2 px-3 bg-zinc-800 hover:bg-zinc-700 text-white rounded text-xs font-medium flex items-center justify-center gap-2 cursor-pointer transition-colors"
                    >
                      <Film className="w-3.5 h-3.5 text-amber-400" />
                      <span>Selecionar Vídeo MP4 do Computador</span>
                    </button>

                    <input
                      type="text"
                      value={formData.mainProject1.videoUrl}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          mainProject1: {
                            ...formData.mainProject1,
                            videoUrl: e.target.value,
                          },
                        })
                      }
                      placeholder="Ex: https://vimeo.com/... ou https://youtube.com/... ou /meu-video.mp4"
                      className="w-full px-2.5 py-1.5 bg-zinc-950 border border-zinc-800 rounded text-xs font-mono-code text-zinc-300 focus:outline-none focus:border-red-500"
                    />
                  </div>
                </div>
              </div>

              {/* Additional Work 1 */}
              <div className="p-4 bg-zinc-900/60 border border-zinc-800 rounded space-y-3">
                <span className="text-xs text-yellow-400 font-mono-code uppercase font-semibold">
                  Trabalho Adicional 01
                </span>
                <input
                  type="text"
                  value={formData.additionalWork1.badgeTitle}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      additionalWork1: {
                        ...formData.additionalWork1,
                        badgeTitle: e.target.value,
                      },
                    })
                  }
                  className="w-full px-3 py-1.5 bg-zinc-900 border border-zinc-800 rounded text-white text-xs mb-2"
                />
                <input
                  type="text"
                  value={formData.additionalWork1.videoUrl}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      additionalWork1: {
                        ...formData.additionalWork1,
                        videoUrl: e.target.value,
                      },
                    })
                  }
                  placeholder="Link YouTube/Vimeo/MP4"
                  className="w-full px-2.5 py-1.5 bg-zinc-950 border border-zinc-800 rounded text-xs font-mono-code text-zinc-300"
                />
              </div>

              {/* Additional Work 2 */}
              <div className="p-4 bg-zinc-900/60 border border-zinc-800 rounded space-y-3">
                <span className="text-xs text-yellow-400 font-mono-code uppercase font-semibold">
                  Trabalho Adicional 02
                </span>
                <input
                  type="text"
                  value={formData.additionalWork2.badgeTitle}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      additionalWork2: {
                        ...formData.additionalWork2,
                        badgeTitle: e.target.value,
                      },
                    })
                  }
                  className="w-full px-3 py-1.5 bg-zinc-900 border border-zinc-800 rounded text-white text-xs mb-2"
                />
                <input
                  type="text"
                  value={formData.additionalWork2.videoUrl}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      additionalWork2: {
                        ...formData.additionalWork2,
                        videoUrl: e.target.value,
                      },
                    })
                  }
                  placeholder="Link YouTube/Vimeo/MP4"
                  className="w-full px-2.5 py-1.5 bg-zinc-950 border border-zinc-800 rounded text-xs font-mono-code text-zinc-300"
                />
              </div>

              {/* Main Project 2 */}
              <div className="p-4 bg-zinc-900/60 border border-zinc-800 rounded space-y-3">
                <span className="text-xs text-yellow-400 font-mono-code uppercase font-semibold">
                  Vídeo Principal 02
                </span>
                <input
                  type="text"
                  value={formData.mainProject2.badgeTitle}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      mainProject2: {
                        ...formData.mainProject2,
                        badgeTitle: e.target.value,
                      },
                    })
                  }
                  className="w-full px-3 py-1.5 bg-zinc-900 border border-zinc-800 rounded text-yellow-400 text-xs mb-2"
                />
                <input
                  type="text"
                  value={formData.mainProject2.videoUrl}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      mainProject2: {
                        ...formData.mainProject2,
                        videoUrl: e.target.value,
                      },
                    })
                  }
                  placeholder="Link YouTube/Vimeo/MP4"
                  className="w-full px-2.5 py-1.5 bg-zinc-950 border border-zinc-800 rounded text-xs font-mono-code text-zinc-300"
                />
              </div>
            </div>
          )}

          {/* TAB 3: PRINTS DO VÍDEO */}
          {activeTab === 'prints' && (
            <div className="space-y-4">
              <p className="text-xs text-zinc-400">
                Você pode substituir qualquer um dos prints quadrados por fotos ou capturas de tela do seu computador:
              </p>

              <div className="grid grid-cols-2 gap-3">
                {formData.mainProject1.prints.map((print, index) => (
                  <div
                    key={print.id}
                    className="p-2.5 bg-zinc-900/80 border border-zinc-800 rounded flex flex-col gap-2"
                  >
                    <div className="aspect-square bg-zinc-950 rounded overflow-hidden relative group">
                      <img
                        src={print.imageUrl}
                        alt={print.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <input
                      type="text"
                      value={print.title}
                      onChange={(e) => {
                        const newPrints = [...formData.mainProject1.prints];
                        newPrints[index] = { ...print, title: e.target.value };
                        setFormData({
                          ...formData,
                          mainProject1: { ...formData.mainProject1, prints: newPrints },
                        });
                      }}
                      className="w-full px-1.5 py-1 bg-zinc-950 border border-zinc-800 rounded text-[11px] text-zinc-200"
                      placeholder="Título do frame"
                    />

                    <label className="w-full py-1.5 px-2 bg-zinc-800 hover:bg-zinc-700 text-white rounded text-[11px] font-medium flex items-center justify-center gap-1.5 cursor-pointer transition-colors text-center">
                      <Upload className="w-3 h-3 text-amber-400" />
                      <span>Trocar Imagem</span>
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) {
                            processImageFile(file, (base64) => {
                              const newPrints = [...formData.mainProject1.prints];
                              newPrints[index] = { ...print, imageUrl: base64 };
                              setFormData({
                                ...formData,
                                mainProject1: {
                                  ...formData.mainProject1,
                                  prints: newPrints,
                                },
                              });
                            });
                          }
                        }}
                      />
                    </label>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: GUIA DE UPLOAD COMPLETO */}
          {activeTab === 'guide' && (
            <div className="space-y-4 text-zinc-300 text-xs sm:text-sm leading-relaxed">
              <div className="p-4 bg-zinc-900/90 border border-amber-500/30 rounded-sm">
                <h4 className="font-display font-bold text-white text-base mb-2 flex items-center gap-2">
                  <FolderOpen className="w-4 h-4 text-amber-400" />
                  <span>Método 1: Upload Direto no Navegador (Mais Rápido)</span>
                </h4>
                <p className="text-zinc-300 text-xs mb-2">
                  Nas abas <strong className="text-white">Perfil</strong>, <strong className="text-white">Vídeos</strong> e <strong className="text-white">Prints</strong> aqui mesmo deste painel:
                </p>
                <ul className="list-disc pl-4 space-y-1 text-xs text-zinc-400">
                  <li>Clique no botão <strong className="text-white">"Fazer Upload do Computador"</strong> ou <strong className="text-white">"Trocar Imagem"</strong>.</li>
                  <li>Escolha o arquivo do seu computador (JPG, PNG, WebM ou MP4).</li>
                  <li>O arquivo carrega instantaneamente e fica salvo no seu navegador!</li>
                </ul>
              </div>

              <div className="p-4 bg-zinc-900/90 border border-zinc-800 rounded-sm">
                <h4 className="font-display font-bold text-white text-base mb-2 flex items-center gap-2">
                  <Youtube className="w-4 h-4 text-red-500" />
                  <Tv className="w-4 h-4 text-sky-400" />
                  <span>Método 2: Links do YouTube ou Vimeo (Ideal para Vídeos)</span>
                </h4>
                <p className="text-zinc-300 text-xs mb-2">
                  Como arquivos de vídeo costumam ser pesados (100MB a vários GB), a melhor prática para editores é hospedar no Vimeo ou YouTube e apenas colar o link:
                </p>
                <div className="bg-black/60 p-2.5 rounded font-mono-code text-[11px] text-zinc-400 space-y-1">
                  <p>Exemplo YouTube: <span className="text-amber-400">https://www.youtube.com/watch?v=SEU_ID</span></p>
                  <p>Exemplo Vimeo: <span className="text-amber-400">https://vimeo.com/123456789</span></p>
                </div>
                <p className="text-zinc-400 text-xs mt-2">
                  O player reconhece automaticamente o link e exibe o vídeo pronto para reproduzir!
                </p>
              </div>

              <div className="p-4 bg-zinc-900/90 border border-emerald-500/30 rounded-sm">
                <h4 className="font-display font-bold text-white text-base mb-2 flex items-center gap-2">
                  <FolderOpen className="w-4 h-4 text-emerald-400" />
                  <span>Método 3: Hospedagem HostGator (cPanel)</span>
                </h4>
                <p className="text-zinc-300 text-xs mb-3">
                  Geramos um pacote <strong className="text-white">.ZIP</strong> estático já compilado e configurado com arquivo <code className="text-amber-400 font-mono-code">.htaccess</code> pronto para extrair na pasta <code className="text-white font-mono-code">public_html</code> da HostGator:
                </p>
                <a
                  href="/site-portfolio-hostgator.zip"
                  download="site-portfolio-hostgator.zip"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400 hover:bg-yellow-300 text-black font-semibold text-xs rounded transition-colors"
                >
                  <span>Baixar site-portfolio-hostgator.zip (~160 KB)</span>
                </a>
              </div>
            </div>
          )}
        </div>

        {/* Footer actions */}
        <div className="p-4 sm:p-5 border-t border-zinc-800 bg-zinc-900/70 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                if (window.confirm('Restaurar os dados originais do mockup do Photoshop?')) {
                  onResetData();
                  setFormData(JSON.parse(JSON.stringify(initialPortfolioData)));
                }
              }}
              className="p-2 text-zinc-400 hover:text-white rounded border border-zinc-800 hover:bg-zinc-800 text-xs flex items-center gap-1 cursor-pointer"
              title="Restaurar layout original do Photoshop"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Restaurar</span>
            </button>

            <button
              onClick={handleCopyJson}
              className="p-2 text-zinc-400 hover:text-white rounded border border-zinc-800 hover:bg-zinc-800 text-xs flex items-center gap-1 cursor-pointer"
              title="Copiar dados como JSON"
            >
              {copiedJson ? (
                <Check className="w-3.5 h-3.5 text-emerald-400" />
              ) : (
                <Copy className="w-3.5 h-3.5" />
              )}
              <span className="hidden sm:inline">Copiar JSON</span>
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-3 py-1.5 text-xs text-zinc-400 hover:text-white cursor-pointer"
            >
              Fechar
            </button>
            <button
              onClick={handleSave}
              className="px-4 py-2 text-xs font-semibold bg-red-600 hover:bg-red-500 text-white rounded flex items-center gap-1.5 cursor-pointer shadow-md shadow-red-600/30"
            >
              <Save className="w-3.5 h-3.5" />
              <span>{saveToast ? 'Salvo!' : 'Aplicar Alterações'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

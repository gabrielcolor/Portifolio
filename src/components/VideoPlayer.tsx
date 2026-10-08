import React, { useState, useRef, useEffect } from 'react';
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize2,
  Minimize2,
  Sliders,
  Sparkles
} from 'lucide-react';

interface VideoPlayerProps {
  videoUrl: string;
  posterUrl: string;
  title: string;
  aspectRatio?: '16/9' | '2.39/1';
  enableGradeCompare?: boolean;
}

const getEmbedInfo = (url: string) => {
  if (!url) return { type: 'direct' as const };
  
  // YouTube match
  const ytMatch = url.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/i);
  if (ytMatch && ytMatch[1]) {
    return {
      type: 'youtube' as const,
      embedUrl: `https://www.youtube.com/embed/${ytMatch[1]}?autoplay=1&rel=0`
    };
  }

  // Vimeo match
  const vimeoMatch = url.match(/(?:vimeo\.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|)(\d+))/i);
  if (vimeoMatch && vimeoMatch[3]) {
    return {
      type: 'vimeo' as const,
      embedUrl: `https://player.vimeo.com/video/${vimeoMatch[3]}?autoplay=1`
    };
  }

  return { type: 'direct' as const };
};

export const VideoPlayer: React.FC<VideoPlayerProps> = ({
  videoUrl,
  posterUrl,
  title,
  aspectRatio = '16/9',
  enableGradeCompare = true,
}) => {
  const embedInfo = getEmbedInfo(videoUrl);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [currentTimecode, setCurrentTimecode] = useState('00:00:00:00');
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [isRawLogMode, setIsRawLogMode] = useState(false);
  const [aspect, setAspect] = useState<'16/9' | '2.39/1'>(aspectRatio);
  const hideTimeoutRef = useRef<number | null>(null);

  // Format seconds to SMPTE timecode (HH:MM:SS:FF at 24fps)
  const formatTimecode = (seconds: number) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = Math.floor(seconds % 60);
    const frames = Math.floor((seconds % 1) * 24);

    const pad = (n: number) => n.toString().padStart(2, '0');
    return `${pad(hrs)}:${pad(mins)}:${pad(secs)}:${pad(frames)}`;
  };

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {
          // In case of autoplay restriction or media format issue
          setIsPlaying(false);
        });
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const current = videoRef.current.currentTime;
    const duration = videoRef.current.duration || 1;
    setProgress((current / duration) * 100);
    setCurrentTimecode(formatTimecode(current));
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!videoRef.current) return;
    const newPercent = parseFloat(e.target.value);
    const duration = videoRef.current.duration || 1;
    videoRef.current.currentTime = (newPercent / 100) * duration;
    setProgress(newPercent);
  };

  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen().catch(() => {});
      setIsFullscreen(false);
    }
  };

  const handleMouseMove = () => {
    setShowControls(true);
    if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
    if (isPlaying) {
      hideTimeoutRef.current = window.setTimeout(() => {
        setShowControls(false);
      }, 2500);
    }
  };

  useEffect(() => {
    return () => {
      if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => isPlaying && setShowControls(false)}
      className={`relative w-full overflow-hidden bg-black border border-zinc-900 group select-none shadow-2xl transition-all duration-300 ${
        aspect === '2.39/1' ? 'aspect-[2.39/1]' : 'aspect-video'
      }`}
    >
      {/* Video or Embed Element */}
      {embedInfo.type !== 'direct' ? (
        isPlaying && embedInfo.embedUrl ? (
          <iframe
            src={embedInfo.embedUrl}
            title={title}
            className="w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        ) : (
          <div
            onClick={() => setIsPlaying(true)}
            className="w-full h-full relative cursor-pointer group"
          >
            <img
              src={posterUrl}
              alt={title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
          </div>
        )
      ) : (
        <video
          ref={videoRef}
          src={videoUrl}
          poster={posterUrl}
          muted={isMuted}
          playsInline
          loop
          onTimeUpdate={handleTimeUpdate}
          onEnded={() => setIsPlaying(false)}
          onClick={togglePlay}
          className={`w-full h-full object-cover cursor-pointer transition-all duration-300 ${
            isRawLogMode
              ? 'filter saturate-40 contrast-75 brightness-110' // Simulates flat RAW Log curve
              : 'filter contrast-105 saturate-110' // Graded Rec.709 film look
          }`}
        />
      )}

      {/* RAW Log / Rec.709 Badge Indicator */}
      <div className="absolute top-3 left-4 z-20 flex items-center gap-2">
        <span
          className={`px-2 py-0.5 text-[10px] uppercase font-mono-code tracking-wider border rounded-sm transition-colors ${
            isRawLogMode
              ? 'bg-zinc-800 text-amber-300 border-amber-400/40'
              : 'bg-black/60 text-zinc-300 border-zinc-700/60 backdrop-blur-sm'
          }`}
        >
          {isRawLogMode ? 'RAW / LOG C (FLAT)' : 'REC.709 (GRADED)'}
        </span>
      </div>

      {/* Center Big Play Button (when paused) */}
      {!isPlaying && (
        <button
          onClick={togglePlay}
          className="absolute inset-0 m-auto w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-red-600/90 hover:bg-red-500 text-white flex items-center justify-center transition-transform hover:scale-110 shadow-2xl z-20 cursor-pointer backdrop-blur-sm"
          aria-label="Play video"
        >
          <Play className="w-8 h-8 fill-current ml-1" />
        </button>
      )}

      {/* Custom Bottom Controls Bar */}
      <div
        className={`absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/95 via-black/70 to-transparent p-3 sm:p-4 z-30 transition-opacity duration-300 flex flex-col gap-2 ${
          showControls || !isPlaying ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Scrubber Bar */}
        <div className="relative w-full flex items-center">
          <input
            type="range"
            min="0"
            max="100"
            step="0.1"
            value={progress}
            onChange={handleSeek}
            className="w-full h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-red-600"
          />
        </div>

        {/* Buttons and Info Row */}
        <div className="flex items-center justify-between text-xs text-zinc-300 font-mono-code pt-1">
          <div className="flex items-center gap-3">
            <button
              onClick={togglePlay}
              className="p-1.5 hover:text-white transition-colors cursor-pointer"
              title={isPlaying ? 'Pausar' : 'Reproduzir'}
            >
              {isPlaying ? (
                <Pause className="w-4 h-4" />
              ) : (
                <Play className="w-4 h-4 fill-current" />
              )}
            </button>

            <button
              onClick={toggleMute}
              className="p-1.5 hover:text-white transition-colors cursor-pointer"
              title={isMuted ? 'Ativar som' : 'Mudo'}
            >
              {isMuted ? (
                <VolumeX className="w-4 h-4 text-zinc-400" />
              ) : (
                <Volume2 className="w-4 h-4 text-white" />
              )}
            </button>

            {/* Timecode counter */}
            <span className="text-zinc-400 text-[11px] tracking-wider">
              {currentTimecode}
            </span>
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            {/* Aspect Ratio Switcher */}
            <button
              onClick={() =>
                setAspect((prev) => (prev === '16/9' ? '2.39/1' : '16/9'))
              }
              className="px-2 py-0.5 text-[10px] text-zinc-400 hover:text-white bg-zinc-900 border border-zinc-800 rounded-sm hover:border-zinc-700 transition-colors"
              title="Alternar Proporção de Tela"
            >
              {aspect === '2.39/1' ? '2.39:1 Scope' : '16:9 Standard'}
            </button>

            {/* Grade Compare Toggle (LOG vs Rec.709) */}
            {enableGradeCompare && (
              <button
                onClick={() => setIsRawLogMode((prev) => !prev)}
                className={`inline-flex items-center gap-1 px-2 py-0.5 text-[10px] rounded-sm transition-colors cursor-pointer ${
                  isRawLogMode
                    ? 'bg-amber-400 text-black font-semibold'
                    : 'text-zinc-400 hover:text-white bg-zinc-900 border border-zinc-800'
                }`}
                title="Comparar Log Raw vs Tratamento de Cor"
              >
                <Sliders className="w-3 h-3" />
                <span className="hidden sm:inline">Color Grade</span>
              </button>
            )}

            {/* Fullscreen */}
            <button
              onClick={toggleFullscreen}
              className="p-1.5 hover:text-white transition-colors cursor-pointer"
              title="Tela cheia"
            >
              {isFullscreen ? (
                <Minimize2 className="w-4 h-4" />
              ) : (
                <Maximize2 className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

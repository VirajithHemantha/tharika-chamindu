import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface IntroScreenProps {
  onEnter: () => void;
  onPlayVideo?: () => void;
}

export const IntroScreen: React.FC<IntroScreenProps> = ({ onEnter, onPlayVideo }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoReady, setVideoReady] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = async () => {
    setIsPlaying(true);
    onPlayVideo?.();

    const video = videoRef.current;
    if (!video) {
      onEnter();
      return;
    }

    try {
      video.muted = false;
      await video.play();
    } catch {
      try {
        video.muted = true;
        await video.play();
        video.muted = false;
      } catch {
        onEnter();
      }
    }
  };

  const handleVideoEnded = () => {
    onEnter();
  };

  const handleVideoError = () => {
    onEnter();
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-brand-ivory"
      style={{ minHeight: '100dvh' }}
    >
      <video
        ref={videoRef}
        muted={false}
        playsInline
        preload="metadata"
        onLoadedData={() => setVideoReady(true)}
        onEnded={handleVideoEnded}
        onError={handleVideoError}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
          isPlaying ? 'opacity-100' : 'opacity-70'
        }`}
      >
        <source src="/Wedding_invitation_envelope_opening_202606240336 (1) (online-video-cutter.com).mp4" type="video/mp4" />
      </video>

      {!isPlaying && (
        <div className="absolute inset-0 bg-brand-ivory/30 pointer-events-none" aria-hidden="true" />
      )}

      <AnimatePresence>
        {!isPlaying && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
            className="w-full h-full max-w-md mx-auto relative flex flex-col items-center justify-center py-12 px-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.5 }}
              className="relative flex flex-col items-center justify-center z-20"
            >
              <button
                type="button"
                onClick={handlePlay}
                className="group relative flex flex-col items-center justify-center cursor-pointer touch-manipulation"
              >
                <div className="relative p-1 sm:p-1.5 rounded-sm bg-white/80 transition-all duration-700 ease-out active:scale-[1.02] shadow-[0_10px_40px_rgba(0,0,0,0.15)]">
                  <div className="absolute inset-0 border border-white/80 rounded-sm" />

                  <div className="relative overflow-hidden border-[0.5px] border-black/40 bg-white/70 px-10 py-6 sm:px-14 sm:py-8 flex flex-col items-center justify-center gap-3 transition-all duration-700 group-active:bg-white/90">
                    <div className="absolute top-2 left-2 w-2.5 h-2.5 border-t-[0.5px] border-l-[0.5px] border-black/70 opacity-80" />
                    <div className="absolute top-2 right-2 w-2.5 h-2.5 border-t-[0.5px] border-r-[0.5px] border-black/70 opacity-80" />
                    <div className="absolute bottom-2 left-2 w-2.5 h-2.5 border-b-[0.5px] border-l-[0.5px] border-black/70 opacity-80" />
                    <div className="absolute bottom-2 right-2 w-2.5 h-2.5 border-b-[0.5px] border-r-[0.5px] border-black/70 opacity-80" />

                    <div className="flex items-center justify-center gap-3 mb-2">
                      <div className="w-8 sm:w-12 h-[1px] bg-gradient-to-r from-transparent to-black/60" />
                      <div className="w-1.5 h-1.5 rotate-45 border-[0.5px] border-black/80" />
                      <div className="w-8 sm:w-12 h-[1px] bg-gradient-to-l from-transparent to-black/60" />
                    </div>

                    <div className="flex flex-col items-center gap-1 sm:gap-2 text-center">
                      <span className="text-black/80 uppercase tracking-[0.5em] sm:tracking-[0.6em] text-[8px] sm:text-[9px] font-sans font-bold">
                        The Wedding Of
                      </span>

                      <span className="text-black font-display text-2xl sm:text-3xl tracking-wider my-2 drop-shadow-sm font-semibold">
                        Tharika <span className="font-serif italic font-light text-black/70 mx-1">&</span> Chamindu
                      </span>

                      <div className="flex items-center gap-4 mt-2 sm:mt-3 opacity-90">
                        <div className="h-[1px] w-6 sm:w-8 bg-black/50" />
                        <span className="text-black uppercase tracking-[0.4em] text-[8px] sm:text-[9px] font-sans font-bold">
                          {videoReady ? 'Open Invitation' : 'Loading...'}
                        </span>
                        <div className="h-[1px] w-6 sm:w-8 bg-black/50" />
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface IntroScreenProps {
  onEnter: () => void;
  onPlayVideo?: () => void;
}

export const IntroScreen: React.FC<IntroScreenProps> = ({ onEnter, onPlayVideo }) => {
  const [showIntroVideo, setShowIntroVideo] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoReady, setVideoReady] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleStart = async () => {
    if (isPlaying) return;
    setShowIntroVideo(true);
    setIsPlaying(true);
    onPlayVideo?.();

    const video = videoRef.current;
    if (!video) {
      onEnter();
      return;
    }

    try {
      video.muted = true;
      await video.play();
    } catch {
      onEnter();
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
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-white"
      style={{ minHeight: '100dvh' }}
    >
      <video
        ref={videoRef}
        muted={true}
        playsInline
        preload="auto"
        onLoadedData={() => setVideoReady(true)}
        onEnded={handleVideoEnded}
        onError={handleVideoError}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
          showIntroVideo ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <source src="/Wedding_invitation_envelope_opening_202606240336 (1) (online-video-cutter.com).mp4" type="video/mp4" />
      </video>

      <AnimatePresence>
        {!showIntroVideo && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-white px-6 text-center"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="mb-10"
            >
              <h1 className="text-4xl sm:text-5xl font-display text-stone-800 drop-shadow-sm mb-3">Tharika & Chamindu</h1>
              <div className="flex items-center justify-center gap-3">
                <div className="h-[1px] w-8 sm:w-12 bg-gradient-to-r from-transparent to-brand-beige-deep/60" />
                <span className="text-[10px] uppercase tracking-[0.4em] font-sans text-brand-beige-deep font-semibold">
                  The Wedding
                </span>
                <div className="h-[1px] w-8 sm:w-12 bg-gradient-to-l from-transparent to-brand-beige-deep/60" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <button
                onClick={handleStart}
                className="group relative inline-flex items-center justify-center px-10 py-4 sm:px-12 sm:py-5 bg-gradient-to-r from-brand-beige-deep via-brand-gold to-brand-beige-deep bg-[length:200%_auto] rounded-full shadow-[0_10px_30px_rgba(176,137,104,0.4)] overflow-hidden transition-all duration-500 hover:bg-[right_center] hover:scale-105 hover:shadow-[0_15px_40px_rgba(176,137,104,0.5)] active:scale-95 cursor-pointer touch-manipulation"
              >
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="relative text-white uppercase tracking-[0.3em] sm:tracking-[0.4em] text-[11px] sm:text-xs font-bold drop-shadow-sm transition-transform duration-300 group-hover:scale-[1.02]">
                  View Invitation
                </span>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

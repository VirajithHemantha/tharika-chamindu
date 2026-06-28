import React, { useState, useRef } from 'react';

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
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-brand-ivory cursor-pointer"
      style={{ minHeight: '100dvh' }}
      onClick={!isPlaying ? handlePlay : undefined}
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


    </div>
  );
};

import React from 'react';
import { motion } from 'motion/react';

interface IntroScreenProps {
  onEnter: () => void;
}

export const IntroScreen: React.FC<IntroScreenProps> = ({ onEnter }) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-brand-ivory">
      {/* Background Image */}
      <img 
        src="/intro-bg.png" 
        alt="Intro Background" 
        className="absolute inset-0 w-full h-full object-contain"
      />
      
      <div className="w-full h-full max-w-md mx-auto relative flex flex-col items-center justify-center py-12 px-6">
        {/* Button Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="absolute bottom-[32%] sm:bottom-[30%] flex flex-col items-center z-20 group"
        >
          {/* Golden Glow Effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-brand-gold via-brand-beige-deep to-brand-gold rounded-full blur-md opacity-60 group-hover:opacity-100 group-hover:blur-lg transition-all duration-500" />
          
          <button 
            onClick={onEnter}
            className="relative px-8 py-3 sm:px-12 sm:py-4 rounded-full bg-gradient-to-r from-brand-gold to-brand-beige-deep text-white hover:shadow-[0_0_20px_rgba(201,169,110,0.4)] transition-all duration-500 uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[10px] sm:text-[12px] font-sans font-bold cursor-pointer"
          >
            View Invitation
          </button>
        </motion.div>
      </div>
    </div>
  );
};

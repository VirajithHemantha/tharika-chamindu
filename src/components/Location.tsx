import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Navigation, Compass, Map } from 'lucide-react';

export const Location: React.FC = () => {
  const venueAddress = "Paradise inn Bolgoda";
  const mapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.9404987747714!2d79.9231804!3d6.7771239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae245df332ab5dd%3A0xe54fbcf569a98e82!2sParadise%20Inn!5e0!3m2!1sen!2slk!4v1711000000000!5m2!1sen!2slk`;
  const liveLocationUrl = "https://maps.app.goo.gl/ckk99WzpwxVKjinu9?g_st=ic";

  return (
    <div className="max-w-[85rem] mx-auto px-6 relative py-12">
      {/* Decorative Glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-radial from-brand-beige/20 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="flex flex-col items-center mt-10">
        
        {/* Interactive Card */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="w-full max-w-2xl z-20"
        >
          <div className="bg-white/90 backdrop-blur-2xl p-10 sm:p-14 lg:p-16 rounded-[2.5rem] shadow-[0_30px_60px_rgba(176,137,104,0.15)] border border-brand-beige/30 relative overflow-hidden group">
            
            {/* Elegant top border gradient */}
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-champagne via-brand-beige to-brand-beige-deep" />
            
            <div className="mb-10 relative z-10">
              <div className="inline-flex items-center gap-4 mb-6">
                <span className="text-brand-beige-deep uppercase tracking-[0.5em] text-[10px] sm:text-[11px] font-bold drop-shadow-sm">
                  The Venue
                </span>
                <div className="w-16 h-[1px] bg-gradient-to-r from-brand-beige-deep/60 to-transparent" />
              </div>

              <h2 className="text-5xl sm:text-6xl font-display text-stone-800 mb-6 leading-tight drop-shadow-sm">
                Where We <br />
                <span className="italic font-light text-brand-beige-deep">Celebrate</span>
              </h2>

              <div className="flex items-start gap-5 mt-10">
                <div className="w-12 h-12 bg-stone-50 rounded-full border border-brand-beige/40 shadow-inner flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                  <MapPin className="text-brand-beige-deep w-5 h-5" />
                </div>
                <div>
                  <p className="text-2xl font-serif text-stone-800 mb-1">Paradise inn Bolgoda</p>
                  <p className="text-[11px] uppercase tracking-[0.2em] font-medium text-stone-400 leading-relaxed mb-6">Grand ballroom</p>
                  
                  <p className="text-stone-500/90 italic font-serif text-lg leading-relaxed max-w-sm mb-10 pl-4 border-l-[1.5px] border-brand-beige/40">
                    "A serene and elegant setting where we will begin our new chapter together."
                  </p>

                  <a
                    href={liveLocationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-stone-800 text-brand-champagne px-8 py-4 rounded-full font-sans tracking-[0.2em] text-xs uppercase hover:bg-stone-900 hover:shadow-[0_10px_20px_rgba(0,0,0,0.2)] transition-all duration-300 active:scale-95 group/btn"
                  >
                    <Navigation className="w-4 h-4 text-brand-gold group-hover/btn:rotate-45 transition-transform duration-300" />
                    View Location
                  </a>
                </div>
              </div>
            </div>

            {/* Faint background compass icon */}
            <Compass className="absolute -bottom-16 -right-16 w-64 h-64 text-brand-beige/5 rotate-12 group-hover:rotate-45 transition-transform duration-[3s]" />
          </div>
        </motion.div>



      </div>
    </div>
  );
};

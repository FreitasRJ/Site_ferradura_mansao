
import React, { useState, useEffect, useCallback } from 'react';
import { PHOTO_ORDER, CATEGORIES, PINS, MANSION_DATA } from '../constants';

const Gallery: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [infoText, setInfoText] = useState(MANSION_DATA.price);
  const infos = [MANSION_DATA.price, MANSION_DATA.area, MANSION_DATA.suites, "Piscina infinita", "Vista Mar", "Ferradura • Búzios"];

  const nextSlide = useCallback(() => {
    setCurrentIdx((prev) => (prev + 1) % PHOTO_ORDER.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIdx((prev) => (prev - 1 + PHOTO_ORDER.length) % PHOTO_ORDER.length);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  useEffect(() => {
    const interval = setInterval(() => {
      setInfoText((current) => {
        const nextIdx = (infos.indexOf(current) + 1) % infos.length;
        return infos[nextIdx];
      });
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const currentPhoto = PHOTO_ORDER[currentIdx];
  const activeCategory = CATEGORIES.find(c => currentPhoto >= c.min && currentPhoto <= c.max);
  const currentPin = PINS[currentPhoto];

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Background Slides */}
      {PHOTO_ORDER.map((photo, idx) => (
        <div
          key={photo}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === currentIdx ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <img
            src={`fotos/${photo}.jpg`}
            alt={`Mansão Ferradura ${photo}`}
            className="w-full h-full object-cover"
            onError={(e) => {
               (e.target as HTMLImageElement).src = `fotos/${photo}.png`;
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
          
          {/* Pins */}
          {idx === currentIdx && currentPin && (
            <div 
              className="absolute z-20 animate-bounce"
              style={{ left: `${currentPin.x}%`, top: `${currentPin.y}%` }}
            >
              <div className="w-8 h-8 md:w-10 md:h-10 text-red-500 filter drop-shadow-xl">
                <svg viewBox="0 0 24 34" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 9 12 22 12 22s12-13 12-22C24 5.373 18.627 0 12 0z" fill="currentColor"/>
                  <circle cx="12" cy="12" r="5" fill="white"/>
                  <circle cx="12" cy="12" r="3" fill="currentColor"/>
                </svg>
              </div>
            </div>
          )}
        </div>
      ))}

      {/* UI Badges */}
      <div className="absolute top-8 left-0 right-0 z-30 px-6 flex flex-wrap justify-between items-center gap-4">
        <div className="glass px-6 py-2 rounded-full border border-accent/20 text-accent font-serif font-bold text-lg md:text-2xl luxury-shadow whitespace-nowrap">
          {activeCategory ? activeCategory.label : 'Mansão Ferradura'}
        </div>
        <div className="glass px-6 py-2 rounded-full border border-white/20 text-white font-medium text-sm md:text-base luxury-shadow">
          {currentIdx + 1} / {PHOTO_ORDER.length}
        </div>
        <div className="glass px-6 py-2 rounded-full border border-accent/20 text-accent font-serif font-bold text-lg md:text-2xl luxury-shadow whitespace-nowrap min-w-[200px] text-center transition-all duration-700">
          {infoText}
        </div>
      </div>

      {/* Main Title Overlay (First Slide Only) */}
      {currentIdx === 0 && (
        <div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-center pointer-events-none px-4">
          <h1 className="font-serif text-5xl md:text-8xl font-bold text-white mb-4 drop-shadow-2xl">Mansão Ferradura</h1>
          <p className="text-xl md:text-2xl tracking-[0.3em] uppercase text-white/90 drop-shadow-md">Búzios • Rio de Janeiro</p>
        </div>
      )}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-40 w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/10 hover:bg-accent text-white flex items-center justify-center transition-all duration-300 backdrop-blur-md border border-white/10"
      >
        <svg viewBox="0 0 24 24" width="32" height="32"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" fill="currentColor"/></svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-40 w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/10 hover:bg-accent text-white flex items-center justify-center transition-all duration-300 backdrop-blur-md border border-white/10"
      >
        <svg viewBox="0 0 24 24" width="32" height="32"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" fill="currentColor"/></svg>
      </button>

      {/* Swipe Overlay for Mobile */}
      <div className="absolute inset-0 z-10 md:hidden" 
        onTouchStart={(e) => (window as any)._touchX = e.touches[0].clientX}
        onTouchEnd={(e) => {
          const diff = (window as any)._touchX - e.changedTouches[0].clientX;
          if (Math.abs(diff) > 50) diff > 0 ? nextSlide() : prevSlide();
        }}
      />
    </div>
  );
};

export default Gallery;

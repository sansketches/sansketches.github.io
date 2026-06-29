import { useState } from 'react';
import PageLayout from '@/components/PageLayout';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const IMAGES = [
  'https://media.base44.com/images/public/6a41fd8388fb92dbaee663e8/be0ceb5f5_1.png',
  'https://media.base44.com/images/public/6a41fd8388fb92dbaee663e8/3f2e8140a_2.png',
  'https://media.base44.com/images/public/6a41fd8388fb92dbaee663e8/b8232241d_3.png',
  'https://media.base44.com/images/public/6a41fd8388fb92dbaee663e8/ca8cabf41_4.png',
  'https://media.base44.com/images/public/6a41fd8388fb92dbaee663e8/b24d8eaf6_5.png',
  'https://media.base44.com/images/public/6a41fd8388fb92dbaee663e8/d27276f9d_6.png',
  'https://media.base44.com/images/public/6a41fd8388fb92dbaee663e8/964c342d1_7.png',
  'https://media.base44.com/images/public/6a41fd8388fb92dbaee663e8/8d324e36e_8.png',
  'https://media.base44.com/images/public/6a41fd8388fb92dbaee663e8/015156511_9.png',
  'https://media.base44.com/images/public/6a41fd8388fb92dbaee663e8/7a5f95e0f_10.png',
  'https://media.base44.com/images/public/6a41fd8388fb92dbaee663e8/0468cfc73_11.png',
];

export default function ThreeDPortfolio() {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const openLightbox = () => setLightboxIndex(0);
  const closeLightbox = () => setLightboxIndex(null);
  const prev = () => setLightboxIndex((i) => (i - 1 + IMAGES.length) % IMAGES.length);
  const next = () => setLightboxIndex((i) => (i + 1) % IMAGES.length);

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') prev();
    if (e.key === 'ArrowRight') next();
    if (e.key === 'Escape') closeLightbox();
  };

  return (
    <PageLayout>
      {/* Header */}
      <div className="mb-12">
        <p style={{ fontFamily: 'Montserrat', fontSize: '11px', letterSpacing: '0.3em', opacity: 0.5 }} className="uppercase mb-3">
          Portfolio
        </p>
        <h1 style={{ fontFamily: 'Montserrat', fontSize: '2rem', fontWeight: 300, letterSpacing: '0.25em' }} className="uppercase">
          3D Portfolio
        </h1>
        <div className="mt-4 w-12 h-px" style={{ background: 'rgba(140, 94, 94, 0.6)' }} />
      </div>

      {/* Thumbnail — centered */}
      <div className="flex justify-center">
        <div
          className="portfolio-item cursor-none"
          style={{ maxWidth: '480px', width: '100%' }}
          onClick={openLightbox}
        >
          <img
            src={IMAGES[0]}
            alt="3D Portfolio"
            className="w-full"
            style={{ display: 'block' }}
          />
          <div className="portfolio-caption">
            <p style={{ fontFamily: 'Montserrat', fontSize: '10px', letterSpacing: '0.2em', opacity: 0.8 }}>
              CLICK TO VIEW
            </p>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center lightbox-enter"
          style={{ background: 'rgba(5,5,5,0.96)' }}
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          autoFocus
        >
          <button
            className="absolute top-6 right-8 text-white opacity-60 hover:opacity-100 transition-opacity cursor-none z-10"
            onClick={closeLightbox}
          >
            <X size={24} />
          </button>

          <div
            className="absolute top-6 left-1/2 -translate-x-1/2 text-white"
            style={{ fontFamily: 'Montserrat', fontSize: '11px', letterSpacing: '0.2em', opacity: 0.5 }}
          >
            {lightboxIndex + 1} / {IMAGES.length}
          </div>

          <button
            className="absolute left-6 text-white opacity-60 hover:opacity-100 transition-opacity cursor-none z-10"
            onClick={(e) => { e.stopPropagation(); prev(); }}
          >
            <ChevronLeft size={40} />
          </button>

          <div
            className="lightbox-img-transition"
            style={{ maxHeight: '88vh', maxWidth: '88vw' }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={IMAGES[lightboxIndex]}
              alt={`3D Portfolio page ${lightboxIndex + 1}`}
              style={{ maxHeight: '88vh', maxWidth: '88vw', objectFit: 'contain', display: 'block' }}
            />
          </div>

          <button
            className="absolute right-6 text-white opacity-60 hover:opacity-100 transition-opacity cursor-none z-10"
            onClick={(e) => { e.stopPropagation(); next(); }}
          >
            <ChevronRight size={40} />
          </button>
        </div>
      )}
    </PageLayout>
  );
}
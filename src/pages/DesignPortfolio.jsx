import { useState } from 'react';
import PageLayout from '@/components/PageLayout';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const IMAGES = [
  'https://media.base44.com/images/public/6a41fd8388fb92dbaee663e8/5b9db4e1f_1.png',
  'https://media.base44.com/images/public/6a41fd8388fb92dbaee663e8/a71ac6528_2.png',
  'https://media.base44.com/images/public/6a41fd8388fb92dbaee663e8/1d1ada148_3.png',
  'https://media.base44.com/images/public/6a41fd8388fb92dbaee663e8/9ecde0f97_4.png',
  'https://media.base44.com/images/public/6a41fd8388fb92dbaee663e8/80c49a62f_5.png',
  'https://media.base44.com/images/public/6a41fd8388fb92dbaee663e8/4b12b9aeb_6.png',
  'https://media.base44.com/images/public/6a41fd8388fb92dbaee663e8/deabd4009_7.png',
  'https://media.base44.com/images/public/6a41fd8388fb92dbaee663e8/4b258db51_8.png',
  'https://media.base44.com/images/public/6a41fd8388fb92dbaee663e8/54a226b4a_9.png',
  'https://media.base44.com/images/public/6a41fd8388fb92dbaee663e8/18ace64fa_10.png',
  'https://media.base44.com/images/public/6a41fd8388fb92dbaee663e8/ef9cf867a_11.png',
  'https://media.base44.com/images/public/6a41fd8388fb92dbaee663e8/19bfd690d_12.png',
  'https://media.base44.com/images/public/6a41fd8388fb92dbaee663e8/405980989_13.png',
  'https://media.base44.com/images/public/6a41fd8388fb92dbaee663e8/d8dd54f14_14.png',
  'https://media.base44.com/images/public/6a41fd8388fb92dbaee663e8/a9ccc8f30_15.png',
  'https://media.base44.com/images/public/6a41fd8388fb92dbaee663e8/2f2fa5e7e_16.png',
  'https://media.base44.com/images/public/6a41fd8388fb92dbaee663e8/672e92030_17.png',
  'https://media.base44.com/images/public/6a41fd8388fb92dbaee663e8/d6d080b8a_18.png',
  'https://media.base44.com/images/public/6a41fd8388fb92dbaee663e8/cb48c33dc_19.png',
  'https://media.base44.com/images/public/6a41fd8388fb92dbaee663e8/2727914bc_20.png',
  'https://media.base44.com/images/public/6a41fd8388fb92dbaee663e8/9bfa1f20a_21.png',
  'https://media.base44.com/images/public/6a41fd8388fb92dbaee663e8/602a4ca09_22.png',
  'https://media.base44.com/images/public/6a41fd8388fb92dbaee663e8/ce595da34_23.png',
  'https://media.base44.com/images/public/6a41fd8388fb92dbaee663e8/ea4df85a7_24.png',
  'https://media.base44.com/images/public/6a41fd8388fb92dbaee663e8/33160028a_25.png',
  'https://media.base44.com/images/public/6a41fd8388fb92dbaee663e8/00cc191dc_26.png',
  'https://media.base44.com/images/public/6a41fd8388fb92dbaee663e8/089859cc9_27.png',
  'https://media.base44.com/images/public/6a41fd8388fb92dbaee663e8/28a3fb1bd_28.png',
  'https://media.base44.com/images/public/6a41fd8388fb92dbaee663e8/a09344996_29.png',
  'https://media.base44.com/images/public/6a41fd8388fb92dbaee663e8/6fd4234e4_30.png',
  'https://media.base44.com/images/public/6a41fd8388fb92dbaee663e8/1e6af8d92_31.png',
  'https://media.base44.com/images/public/6a41fd8388fb92dbaee663e8/a44b3cdf3_32.png',
  'https://media.base44.com/images/public/6a41fd8388fb92dbaee663e8/fd64527ec_33.png',
  'https://media.base44.com/images/public/6a41fd8388fb92dbaee663e8/35d4453c7_34.png',
  'https://media.base44.com/images/public/6a41fd8388fb92dbaee663e8/776fbb54b_35.png',
  'https://media.base44.com/images/public/6a41fd8388fb92dbaee663e8/2d84e85e4_36.png',
  'https://media.base44.com/images/public/6a41fd8388fb92dbaee663e8/ae2c011e5_37.png',
];

export default function DesignPortfolio() {
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
        <h1 style={{ fontFamily: 'Cormorant Garamond', fontSize: '3rem', fontWeight: 300, letterSpacing: '-0.02em' }}>
          Design Portfolio
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
            alt="Design Portfolio"
            className="w-full object-cover"
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
              alt={`Portfolio page ${lightboxIndex + 1}`}
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
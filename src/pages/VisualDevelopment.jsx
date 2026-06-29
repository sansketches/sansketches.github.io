import { useState } from 'react';
import PageLayout from '@/components/PageLayout';
import Lightbox from '@/components/Lightbox';

const ITEMS = [
  { type: 'image', src: 'https://media.base44.com/images/public/6a41fd8388fb92dbaee663e8/97704b3e8_1.jpg', caption: 'Sky Market — Concept I' },
  { type: 'image', src: 'https://media.base44.com/images/public/6a41fd8388fb92dbaee663e8/c91d57888_1.jpg', caption: 'Fantasy Town — Environment Concept' },
  { type: 'image', src: 'https://media.base44.com/images/public/6a41fd8388fb92dbaee663e8/95c298f6d_1.jpg', caption: 'Sky Platform — 3D Concept' },
];

export default function VisualDevelopment() {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  return (
    <PageLayout>
      <div className="mb-16 text-center">
        <p className="text-xs tracking-widest uppercase opacity-40 mb-3">Design Portfolio</p>
        <h1 className="uppercase" style={{ fontFamily: 'Montserrat', fontSize: '2rem', fontWeight: 300, letterSpacing: '0.25em' }}>
          Visual Development
        </h1>
        <div className="w-12 h-px bg-white opacity-20 mx-auto mt-6" />
      </div>

      {/* Editorial grid */}
      <div className="flex flex-col gap-1">

        {/* Row 1: large left + tall right */}
        <div className="flex gap-1">
          <div className="portfolio-item cursor-none w-1/2" onClick={() => setLightboxIndex(0)}>
            <img src={ITEMS[0].src} alt={ITEMS[0].caption} className="w-full object-cover" style={{ height: '420px' }} />
            <div className="portfolio-caption"><p className="text-white text-xs tracking-widest uppercase opacity-80">{ITEMS[0].caption}</p></div>
          </div>
          <div className="portfolio-item cursor-none w-1/2" onClick={() => setLightboxIndex(1)}>
            <img src={ITEMS[1].src} alt={ITEMS[1].caption} className="w-full object-cover" style={{ height: '420px' }} />
            <div className="portfolio-caption"><p className="text-white text-xs tracking-widest uppercase opacity-80">{ITEMS[1].caption}</p></div>
          </div>
        </div>

        {/* Row 2: full width */}
        <div className="portfolio-item cursor-none w-full" onClick={() => setLightboxIndex(2)}>
          <img src={ITEMS[2].src} alt={ITEMS[2].caption} className="w-full object-cover" style={{ height: '360px' }} />
          <div className="portfolio-caption"><p className="text-white text-xs tracking-widest uppercase opacity-80">{ITEMS[2].caption}</p></div>
        </div>

      </div>

      {lightboxIndex !== null && (
        <Lightbox items={ITEMS} startIndex={lightboxIndex} onClose={() => setLightboxIndex(null)} />
      )}
    </PageLayout>
  );
}
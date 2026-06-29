import { useState } from 'react';
import PageLayout from '@/components/PageLayout';
import Lightbox from '@/components/Lightbox';

const ITEMS = [
  { type: 'image', src: 'https://media.base44.com/images/public/6a41fd8388fb92dbaee663e8/0646d3864_1.jpg', caption: 'Modern Loft — Project I' },
  { type: 'image', src: 'https://media.base44.com/images/public/6a41fd8388fb92dbaee663e8/a67760fb0_2.jpg', caption: 'Artist Bedroom — Project II' },
  { type: 'image', src: 'https://media.base44.com/images/public/6a41fd8388fb92dbaee663e8/9b1572b8b_3.jpg', caption: 'Minimal Suite — Project III' },
  { type: 'image', src: 'https://media.base44.com/images/public/6a41fd8388fb92dbaee663e8/1396e6561_4.jpg', caption: 'Library Nook — Project IV' },
  { type: 'image', src: 'https://media.base44.com/images/public/6a41fd8388fb92dbaee663e8/bbc165524_5.jpg', caption: 'Living Room — Project V' },
  { type: 'image', src: 'https://media.base44.com/images/public/6a41fd8388fb92dbaee663e8/cb009f07a_6.jpg', caption: 'Night Lounge — Project VI' },
  { type: 'image', src: 'https://media.base44.com/images/public/6a41fd8388fb92dbaee663e8/d549ed6f2_7.jpg', caption: 'Villa Exterior — Project VII' },
  { type: 'image', src: 'https://media.base44.com/images/public/6a41fd8388fb92dbaee663e8/d8f5b88a3_8.png', caption: 'Cathedral Hall — Project VIII' },
];

export default function ArchViz() {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  return (
    <PageLayout>
      <div className="mb-16 text-center">
        <p className="text-xs tracking-widest uppercase opacity-40 mb-3">Design Portfolio</p>
        <h1 className="uppercase" style={{ fontFamily: 'Montserrat', fontSize: '2rem', fontWeight: 300, letterSpacing: '0.25em' }}>
          Arch Viz
        </h1>
        <div className="w-12 h-px bg-white opacity-20 mx-auto mt-6" />
      </div>

      {/* Editorial grid */}
      <div className="flex flex-col gap-1">

        {/* Row 1: two equal large */}
        <div className="flex gap-1">
          {[0, 1].map((idx) => (
            <div key={idx} className="portfolio-item cursor-none w-1/2" onClick={() => setLightboxIndex(idx)}>
              <img src={ITEMS[idx].src} alt={ITEMS[idx].caption} className="w-full object-cover" style={{ height: '380px' }} />
              <div className="portfolio-caption"><p className="text-white text-xs tracking-widest uppercase opacity-80">{ITEMS[idx].caption}</p></div>
            </div>
          ))}
        </div>

        {/* Row 2: small + large */}
        <div className="flex gap-1">
          <div className="flex flex-col gap-1 w-1/3">
            <div className="portfolio-item cursor-none flex-1" onClick={() => setLightboxIndex(2)}>
              <img src={ITEMS[2].src} alt={ITEMS[2].caption} className="w-full object-cover" style={{ height: '206px' }} />
              <div className="portfolio-caption"><p className="text-white text-xs tracking-widest uppercase opacity-80">{ITEMS[2].caption}</p></div>
            </div>
            <div className="portfolio-item cursor-none flex-1" onClick={() => setLightboxIndex(3)}>
              <img src={ITEMS[3].src} alt={ITEMS[3].caption} className="w-full object-cover" style={{ height: '206px' }} />
              <div className="portfolio-caption"><p className="text-white text-xs tracking-widest uppercase opacity-80">{ITEMS[3].caption}</p></div>
            </div>
          </div>
          <div className="portfolio-item cursor-none w-2/3" onClick={() => setLightboxIndex(4)}>
            <img src={ITEMS[4].src} alt={ITEMS[4].caption} className="w-full object-cover" style={{ height: '420px' }} />
            <div className="portfolio-caption"><p className="text-white text-xs tracking-widest uppercase opacity-80">{ITEMS[4].caption}</p></div>
          </div>
        </div>

        {/* Row 3: three equal */}
        <div className="flex gap-1">
          {[5, 6, 7].map((idx) => (
            <div key={idx} className="portfolio-item cursor-none w-1/3" onClick={() => setLightboxIndex(idx)}>
              <img src={ITEMS[idx].src} alt={ITEMS[idx].caption} className="w-full object-cover" style={{ height: '280px' }} />
              <div className="portfolio-caption"><p className="text-white text-xs tracking-widest uppercase opacity-80">{ITEMS[idx].caption}</p></div>
            </div>
          ))}
        </div>

      </div>

      {lightboxIndex !== null && (
        <Lightbox items={ITEMS} startIndex={lightboxIndex} onClose={() => setLightboxIndex(null)} />
      )}
    </PageLayout>
  );
}
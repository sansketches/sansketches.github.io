import { useState } from 'react';
import PageLayout from '@/components/PageLayout';
import Lightbox from '@/components/Lightbox';

const BG_IMAGE = 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1920&q=80';

const ITEMS = [
  {
    type: 'image',
    src: 'https://media.base44.com/images/public/6a41fd8388fb92dbaee663e8/a9fea95d7_1.jpg',
    caption: 'Office Suite — Project I'
  },
  {
    type: 'image',
    src: 'https://media.base44.com/images/public/6a41fd8388fb92dbaee663e8/94aa007c0_2.jpg',
    caption: 'Executive Office — Project II'
  },
  {
    type: 'image',
    src: 'https://media.base44.com/images/public/6a41fd8388fb92dbaee663e8/542587046_3.jpg',
    caption: 'Bedroom — Project III'
  },
  {
    type: 'image',
    src: 'https://media.base44.com/images/public/6a41fd8388fb92dbaee663e8/79e8515cd_4.jpg',
    caption: 'Private Office — Project IV'
  },
  {
    type: 'image',
    src: 'https://media.base44.com/images/public/6a41fd8388fb92dbaee663e8/930ca0017_5.jpg',
    caption: 'Director\'s Office — Project V'
  },
  {
    type: 'image',
    src: 'https://media.base44.com/images/public/6a41fd8388fb92dbaee663e8/7418bd1f4_6.jpg',
    caption: 'Dining Room — Project VI'
  },
  {
    type: 'image',
    src: 'https://media.base44.com/images/public/6a41fd8388fb92dbaee663e8/296925d9b_7.jpg',
    caption: 'Living Space — Project VII'
  },
];

export default function InteriorDesign() {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  return (
    <PageLayout bgImage={BG_IMAGE}>
      <div className="mb-16 text-center">
        <p className="text-xs tracking-widest uppercase opacity-40 mb-3">Design Portfolio</p>
        <h1 className="uppercase" style={{ fontFamily: 'Montserrat', fontSize: '2rem', fontWeight: 300, letterSpacing: '0.25em' }}>
          Interior Design
        </h1>
        <div className="w-12 h-px bg-white opacity-20 mx-auto mt-6" />
      </div>

      {/* Editorial grid */}
      <div className="flex flex-col gap-1">

        {/* Row 1: large left + tall right stack */}
        <div className="flex gap-1">
          <div className="portfolio-item cursor-none w-2/3" onClick={() => setLightboxIndex(0)}>
            <img src={ITEMS[0].src} alt={ITEMS[0].caption} className="w-full h-full object-cover" style={{ maxHeight: '420px' }} />
            <div className="portfolio-caption"><p className="text-white text-xs tracking-widest uppercase opacity-80">{ITEMS[0].caption}</p></div>
          </div>
          <div className="flex flex-col gap-1 w-1/3">
            <div className="portfolio-item cursor-none flex-1" onClick={() => setLightboxIndex(1)}>
              <img src={ITEMS[1].src} alt={ITEMS[1].caption} className="w-full h-full object-cover" style={{ maxHeight: '206px' }} />
              <div className="portfolio-caption"><p className="text-white text-xs tracking-widest uppercase opacity-80">{ITEMS[1].caption}</p></div>
            </div>
            <div className="portfolio-item cursor-none flex-1" onClick={() => setLightboxIndex(2)}>
              <img src={ITEMS[2].src} alt={ITEMS[2].caption} className="w-full h-full object-cover" style={{ maxHeight: '206px' }} />
              <div className="portfolio-caption"><p className="text-white text-xs tracking-widest uppercase opacity-80">{ITEMS[2].caption}</p></div>
            </div>
          </div>
        </div>

        {/* Row 2: three equal */}
        <div className="flex gap-1">
          {[3, 4, 5].map((idx) => (
            <div key={idx} className="portfolio-item cursor-none w-1/3" onClick={() => setLightboxIndex(idx)}>
              <img src={ITEMS[idx].src} alt={ITEMS[idx].caption} className="w-full object-cover" style={{ height: '280px' }} />
              <div className="portfolio-caption"><p className="text-white text-xs tracking-widest uppercase opacity-80">{ITEMS[idx].caption}</p></div>
            </div>
          ))}
        </div>

        {/* Row 3: wide single */}
        <div className="portfolio-item cursor-none w-full" onClick={() => setLightboxIndex(6)}>
          <img src={ITEMS[6].src} alt={ITEMS[6].caption} className="w-full object-cover" style={{ height: '340px' }} />
          <div className="portfolio-caption"><p className="text-white text-xs tracking-widest uppercase opacity-80">{ITEMS[6].caption}</p></div>
        </div>

      </div>

      {lightboxIndex !== null && (
        <Lightbox items={ITEMS} startIndex={lightboxIndex} onClose={() => setLightboxIndex(null)} />
      )}
    </PageLayout>
  );
}
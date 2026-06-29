import { useState } from 'react';
import PageLayout from '@/components/PageLayout';
import Lightbox from '@/components/Lightbox';

// Each project has a thumbnail and its own gallery of images/videos
const PROJECTS = [
  {
    thumbnail: 'https://media.base44.com/images/public/6a41fd8388fb92dbaee663e8/95c298f6d_1.jpg',
    caption: 'Air Ship',
    gallery: [
      { type: 'image', src: 'https://media.base44.com/images/public/6a41fd8388fb92dbaee663e8/95c298f6d_1.jpg', caption: 'Air Ship — Final Render' },
      { type: 'image', src: 'https://media.base44.com/images/public/6a41fd8388fb92dbaee663e8/02ebb49b7_2.jpg', caption: 'Air Ship — Presentation' },
      { type: 'image', src: 'https://media.base44.com/images/public/6a41fd8388fb92dbaee663e8/5afad1d4f_3.jpg', caption: 'Air Ship — Concept Sheets' },
    ],
  },
  {
    thumbnail: 'https://media.base44.com/images/public/6a41fd8388fb92dbaee663e8/c91d57888_1.jpg',
    caption: 'Fantasy Town',
    gallery: [
      { type: 'image', src: 'https://media.base44.com/images/public/6a41fd8388fb92dbaee663e8/c91d57888_1.jpg', caption: 'Fantasy Town — Environment Concept' },
    ],
  },
  {
    thumbnail: 'https://media.base44.com/images/public/6a41fd8388fb92dbaee663e8/97704b3e8_1.jpg',
    caption: 'Sky Market',
    gallery: [
      { type: 'image', src: 'https://media.base44.com/images/public/6a41fd8388fb92dbaee663e8/97704b3e8_1.jpg', caption: 'Sky Market — Concept I' },
    ],
  },
];

export default function VisualDevelopment() {
  const [activeGallery, setActiveGallery] = useState(null); // { items, startIndex }

  const openGallery = (projectIndex, imageIndex = 0) => {
    setActiveGallery({ items: PROJECTS[projectIndex].gallery, startIndex: imageIndex });
  };

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

        {/* Row 1: two equal large */}
        <div className="flex gap-1">
          {[0, 1].map((idx) => (
            <div key={idx} className="portfolio-item cursor-none w-1/2" onClick={() => openGallery(idx)}>
              <img src={PROJECTS[idx].thumbnail} alt={PROJECTS[idx].caption} className="w-full object-cover" style={{ height: '420px' }} />
              <div className="portfolio-caption"><p className="text-white text-xs tracking-widest uppercase opacity-80">{PROJECTS[idx].caption}</p></div>
            </div>
          ))}
        </div>

        {/* Row 2: full width */}
        <div className="portfolio-item cursor-none w-full" onClick={() => openGallery(2)}>
          <img src={PROJECTS[2].thumbnail} alt={PROJECTS[2].caption} className="w-full object-cover" style={{ height: '360px' }} />
          <div className="portfolio-caption"><p className="text-white text-xs tracking-widest uppercase opacity-80">{PROJECTS[2].caption}</p></div>
        </div>

      </div>

      {activeGallery !== null && (
        <Lightbox
          items={activeGallery.items}
          startIndex={activeGallery.startIndex}
          onClose={() => setActiveGallery(null)}
        />
      )}
    </PageLayout>
  );
}
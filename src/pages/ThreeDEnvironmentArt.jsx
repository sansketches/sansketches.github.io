import { useState } from 'react';
import PageLayout from '@/components/PageLayout';
import Lightbox from '@/components/Lightbox';

const PROJECTS = [
  {
    thumbnail: 'https://media.base44.com/images/public/6a41fd8388fb92dbaee663e8/8793c6e3b_1.png',
    caption: 'Cyberpunk Alley',
    gallery: [
      { type: 'image', src: 'https://media.base44.com/images/public/6a41fd8388fb92dbaee663e8/8793c6e3b_1.png', caption: 'Cyberpunk Alley' },
    ],
  },
  {
    thumbnail: 'https://media.base44.com/images/public/6a41fd8388fb92dbaee663e8/0676b3926_1.jpg',
    caption: 'Night Market',
    gallery: [
      { type: 'image', src: 'https://media.base44.com/images/public/6a41fd8388fb92dbaee663e8/0676b3926_1.jpg', caption: 'Night Market' },
    ],
  },
  {
    thumbnail: 'https://media.base44.com/images/public/6a41fd8388fb92dbaee663e8/cab7efd68_1.jpg',
    caption: 'Retro Desk',
    gallery: [
      { type: 'image', src: 'https://media.base44.com/images/public/6a41fd8388fb92dbaee663e8/cab7efd68_1.jpg', caption: 'Retro Desk' },
    ],
  },
  {
    thumbnail: 'https://media.base44.com/images/public/6a41fd8388fb92dbaee663e8/552c6df27_1.jpg',
    caption: 'Treasure Chest',
    gallery: [
      { type: 'image', src: 'https://media.base44.com/images/public/6a41fd8388fb92dbaee663e8/552c6df27_1.jpg', caption: 'Treasure Chest' },
    ],
  },
];

export default function ThreeDEnvironmentArt() {
  const [activeGallery, setActiveGallery] = useState(null);

  const openGallery = (projectIndex, imageIndex = 0) => {
    setActiveGallery({ items: PROJECTS[projectIndex].gallery, startIndex: imageIndex });
  };

  return (
    <PageLayout>
      <div className="mb-16 text-center">
        <p className="text-xs tracking-widest uppercase opacity-40 mb-3">3D Portfolio</p>
        <h1 className="uppercase" style={{ fontFamily: 'Montserrat', fontSize: '2rem', fontWeight: 300, letterSpacing: '0.25em' }}>
          3D Environment Art
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

        {/* Row 2: two equal large */}
        <div className="flex gap-1">
          {[2, 3].map((idx) => (
            <div key={idx} className="portfolio-item cursor-none w-1/2" onClick={() => openGallery(idx)}>
              <img src={PROJECTS[idx].thumbnail} alt={PROJECTS[idx].caption} className="w-full object-cover" style={{ height: '420px' }} />
              <div className="portfolio-caption"><p className="text-white text-xs tracking-widest uppercase opacity-80">{PROJECTS[idx].caption}</p></div>
            </div>
          ))}
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
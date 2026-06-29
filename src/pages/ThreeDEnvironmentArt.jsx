import { useState } from 'react';
import PageLayout from '@/components/PageLayout';
import Lightbox from '@/components/Lightbox';

const PROJECTS = [
  {
    thumbnail: 'https://media.base44.com/images/public/6a41fd8388fb92dbaee663e8/8793c6e3b_1.png',
    caption: 'Cyberpunk Alley',
    gallery: [
      { type: 'image', src: 'https://media.base44.com/images/public/6a41fd8388fb92dbaee663e8/8793c6e3b_1.png', caption: 'Cyberpunk Alley — Final Render' },
      { type: 'video', src: 'https://media.base44.com/videos/public/6a41fd8388fb92dbaee663e8/9ff3db6b0_2.mp4', caption: 'Cyberpunk Alley — Blockout' },
      { type: 'image', src: 'https://media.base44.com/images/public/6a41fd8388fb92dbaee663e8/6f9409493_3.png', caption: 'Cyberpunk Alley — Clay Render' },
      { type: 'image', src: 'https://media.base44.com/images/public/6a41fd8388fb92dbaee663e8/9c27385d3_4.png', caption: 'Cyberpunk Alley — Textured' },
      { type: 'image', src: 'https://media.base44.com/images/public/6a41fd8388fb92dbaee663e8/04c43795d_5.jpg', caption: 'Cyberpunk Alley — Presentation' },
    ],
  },
  {
    thumbnail: 'https://media.base44.com/images/public/6a41fd8388fb92dbaee663e8/0676b3926_1.jpg',
    caption: 'Night Market',
    gallery: [
      { type: 'image', src: 'https://media.base44.com/images/public/6a41fd8388fb92dbaee663e8/0676b3926_1.jpg', caption: 'Night Market — Final Render' },
      { type: 'video', src: 'https://media.base44.com/videos/public/6a41fd8388fb92dbaee663e8/597f2d5d2_2.mp4', caption: 'Night Market — Presentation' },
      { type: 'video', src: 'https://media.base44.com/videos/public/6a41fd8388fb92dbaee663e8/29384d61a_3.mp4', caption: 'Night Market — Process' },
      { type: 'image', src: 'https://media.base44.com/images/public/6a41fd8388fb92dbaee663e8/4dae05811_4.jpg', caption: 'Night Market — Concept Sheets' },
      { type: 'image', src: 'https://media.base44.com/images/public/6a41fd8388fb92dbaee663e8/80363a37b_5.jpg', caption: 'Night Market — Idea Exploration' },
    ],
  },
  {
    thumbnail: 'https://media.base44.com/images/public/6a41fd8388fb92dbaee663e8/cab7efd68_1.jpg',
    caption: 'Retro Desk',
    gallery: [
      { type: 'image', src: 'https://media.base44.com/images/public/6a41fd8388fb92dbaee663e8/cab7efd68_1.jpg', caption: 'Retro Desk — Final Render' },
      { type: 'video', src: 'https://media.base44.com/videos/public/6a41fd8388fb92dbaee663e8/0a19feeac_2.mp4', caption: 'Retro Desk — Turntable' },
      { type: 'video', src: 'https://media.base44.com/videos/public/6a41fd8388fb92dbaee663e8/2f7540e60_3.mp4', caption: 'Retro Desk — Process' },
      { type: 'image', src: 'https://media.base44.com/images/public/6a41fd8388fb92dbaee663e8/46a3ae9ab_4.jpg', caption: 'Retro Desk — Angle 01' },
      { type: 'image', src: 'https://media.base44.com/images/public/6a41fd8388fb92dbaee663e8/d530bd42b_5.jpg', caption: 'Retro Desk — Angle 02' },
      { type: 'image', src: 'https://media.base44.com/images/public/6a41fd8388fb92dbaee663e8/3c753ec1b_6.jpg', caption: 'Retro Desk — Detail Shot' },
      { type: 'image', src: 'https://media.base44.com/images/public/6a41fd8388fb92dbaee663e8/cc99ac95e_7.jpg', caption: 'Retro Desk — Angle 03' },
      { type: 'image', src: 'https://media.base44.com/images/public/6a41fd8388fb92dbaee663e8/dc2378ed2_8.jpg', caption: 'Retro Desk — Angle 04' },
    ],
  },
  {
    thumbnail: 'https://media.base44.com/images/public/6a41fd8388fb92dbaee663e8/552c6df27_1.jpg',
    caption: 'Treasure Chest',
    gallery: [
      { type: 'image', src: 'https://media.base44.com/images/public/6a41fd8388fb92dbaee663e8/552c6df27_1.jpg', caption: 'Treasure Chest — Final Render' },
      { type: 'video', src: 'https://media.base44.com/videos/public/6a41fd8388fb92dbaee663e8/244a1327e_2.mp4', caption: 'Treasure Chest — Turntable' },
      { type: 'video', src: 'https://media.base44.com/videos/public/6a41fd8388fb92dbaee663e8/cce33e4a3_3.mp4', caption: 'Treasure Chest — Process' },
      { type: 'video', src: 'https://media.base44.com/videos/public/6a41fd8388fb92dbaee663e8/6d3c0a9ac_4.mp4', caption: 'Treasure Chest — Detail' },
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
import { useState } from 'react';
import Lightbox from './Lightbox';
import { Play } from 'lucide-react';

export default function PortfolioGrid({ items }) {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  if (!items || items.length === 0) return null;

  return (
    <>
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-1" style={{ columnGap: '4px' }}>
        {items.map((item, i) => (
          <div
            key={i}
            className="portfolio-item mb-1 block cursor-none"
            onClick={() => setLightboxIndex(i)}
            style={{ breakInside: 'avoid' }}
          >
            {item.type === 'video' ? (
              <div className="relative group">
                {item.poster ? (
                  <img src={item.poster} alt={item.caption || ''} className="w-full block" style={{ filter: 'brightness(0.7)' }} />
                ) : (
                  <div className="w-full h-48 bg-neutral-900 flex items-center justify-center">
                    <Play size={32} className="text-white opacity-50" />
                  </div>
                )}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full border border-white/40 flex items-center justify-center group-hover:border-white/80 transition-colors">
                    <Play size={18} className="text-white ml-1" />
                  </div>
                </div>
                {item.caption && (
                  <div className="portfolio-caption">
                    <p className="text-white text-xs tracking-widest uppercase opacity-80">{item.caption}</p>
                  </div>
                )}
              </div>
            ) : (
              <div className="relative">
                <img
                  src={item.src}
                  alt={item.caption || ''}
                  className="w-full block"
                  loading="lazy"
                />
                {item.caption && (
                  <div className="portfolio-caption">
                    <p className="text-white text-xs tracking-widest uppercase opacity-80">{item.caption}</p>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          items={items}
          startIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </>
  );
}
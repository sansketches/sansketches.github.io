import { useState } from 'react';
import PageLayout from '@/components/PageLayout';
import Lightbox from '@/components/Lightbox';
import { ChevronRight } from 'lucide-react';

const BG_IMAGE = 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1920&q=80';

// Design Portfolio = Interior Design + Arch Viz slides
// First slide is a cover card; subsequent slides are images
const SLIDES = [
  { type: 'cover' }, // The white cover card
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=1400&q=80',
    caption: 'Interior Design — Project I'
  },
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1400&q=80',
    caption: 'Interior Design — Project II'
  },
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1400&q=80',
    caption: 'Arch Viz — Project I'
  },
];

// Lightbox items (exclude the cover card)
const LIGHTBOX_ITEMS = SLIDES.filter(s => s.type === 'image');

export default function DesignPortfolio() {
  const [coverIndex, setCoverIndex] = useState(0);
  const [lightboxStart, setLightboxStart] = useState(null);

  const currentSlide = SLIDES[coverIndex];
  const isLast = coverIndex >= SLIDES.length - 1;

  const handleArrow = () => {
    if (isLast) {
      // Open lightbox at last image
      setLightboxStart(LIGHTBOX_ITEMS.length - 1);
    } else {
      const next = coverIndex + 1;
      setCoverIndex(next);
      if (SLIDES[next]?.type === 'image') {
        const imgIdx = SLIDES.slice(1, next + 1).filter(s => s.type === 'image').length - 1;
        setLightboxStart(imgIdx);
      }
    }
  };

  const handleImageClick = () => {
    if (currentSlide.type === 'image') {
      const imgIdx = SLIDES.slice(1, coverIndex + 1).filter(s => s.type === 'image').length - 1;
      setLightboxStart(imgIdx);
    }
  };

  return (
    <PageLayout bgImage={BG_IMAGE}>
      <div className="flex flex-col items-center justify-center min-h-[80vh] relative">
        {/* Slide display */}
        <div className="relative flex items-center justify-center w-full">
          {currentSlide.type === 'cover' ? (
            <div
              className="relative"
              style={{
                background: '#FAFAFA',
                width: '320px',
                minHeight: '480px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '60px 40px',
                boxShadow: '0 20px 80px rgba(0,0,0,0.8)',
              }}
            >
              <div style={{ textAlign: 'center' }}>
                <p style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '28px',
                  letterSpacing: '0.4em',
                  color: '#222',
                  textTransform: 'uppercase',
                  fontWeight: 300,
                  marginBottom: '12px',
                }}>
                  Portfolio
                </p>
                <p style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '11px',
                  letterSpacing: '0.3em',
                  color: '#555',
                  textTransform: 'uppercase',
                }}>
                  Interior Design
                </p>
              </div>
              <div style={{ textAlign: 'center' }}>
                <p style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '10px',
                  letterSpacing: '0.25em',
                  color: '#555',
                  textTransform: 'uppercase',
                  marginBottom: '6px',
                }}>
                  Sana Shaikh
                </p>
                <p style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '10px',
                  letterSpacing: '0.25em',
                  color: '#888',
                }}>
                  2025
                </p>
              </div>
            </div>
          ) : (
            <img
              src={currentSlide.src}
              alt={currentSlide.caption}
              className="max-h-[70vh] max-w-3xl w-full object-contain cursor-none"
              style={{ boxShadow: '0 20px 80px rgba(0,0,0,0.8)' }}
              onClick={handleImageClick}
            />
          )}

          {/* Right arrow */}
          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 text-white opacity-40 hover:opacity-100 transition-opacity cursor-none p-4 translate-x-8"
            onClick={handleArrow}
            aria-label="Next"
          >
            <ChevronRight size={28} />
          </button>
        </div>
      </div>

      {lightboxStart !== null && (
        <Lightbox
          items={LIGHTBOX_ITEMS}
          startIndex={lightboxStart}
          onClose={() => setLightboxStart(null)}
        />
      )}
    </PageLayout>
  );
}
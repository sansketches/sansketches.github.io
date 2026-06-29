import { useEffect, useState, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Lightbox({ items, startIndex, onClose }) {
  const [current, setCurrent] = useState(startIndex);
  const [transitioning, setTransitioning] = useState(false);
  const [direction, setDirection] = useState(1);

  const go = useCallback((dir) => {
    if (transitioning) return;
    setDirection(dir);
    setTransitioning(true);
    setTimeout(() => {
      setCurrent((c) => (c + dir + items.length) % items.length);
      setTransitioning(false);
    }, 320);
  }, [transitioning, items.length]);

  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') go(-1);
      if (e.key === 'ArrowRight') go(1);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [go, onClose]);

  const item = items[current];
  const isVideo = item?.type === 'video';

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center lightbox-enter"
      style={{ background: 'rgba(5,5,5,0.97)', backdropFilter: 'blur(20px)' }}
      onClick={onClose}
    >
      {/* Close */}
      <button
        className="absolute top-6 right-8 text-white opacity-50 hover:opacity-100 transition-opacity cursor-none z-10"
        onClick={onClose}
        aria-label="Close"
      >
        <X size={20} />
      </button>

      {/* Counter */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 text-white opacity-30 text-xs tracking-widest font-light">
        {current + 1} / {items.length}
      </div>

      {/* Left arrow */}
      {items.length > 1 && (
        <button
          className="absolute left-6 top-1/2 -translate-y-1/2 text-white opacity-40 hover:opacity-100 transition-opacity cursor-none z-10 p-2"
          onClick={(e) => { e.stopPropagation(); go(-1); }}
          aria-label="Previous"
        >
          <ChevronLeft size={32} />
        </button>
      )}

      {/* Media */}
      <div
        className="max-w-5xl max-h-[80vh] w-full px-16 flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
        style={{
          opacity: transitioning ? 0 : 1,
          transform: transitioning ? `translateX(${direction * 30}px)` : 'translateX(0)',
          transition: 'opacity 0.32s cubic-bezier(0.22, 1, 0.36, 1), transform 0.32s cubic-bezier(0.22, 1, 0.36, 1)'
        }}
      >
        {isVideo ? (
          <video
            src={item.src}
            controls
            autoPlay
            className="max-w-full max-h-[75vh] object-contain"
            style={{ outline: 'none' }}
          />
        ) : (
          <img
            src={item.src}
            alt={item.caption || ''}
            className="max-w-full max-h-[75vh] object-contain"
            style={{ boxShadow: '0 0 80px rgba(0,0,0,0.8)' }}
          />
        )}
      </div>

      {/* Right arrow */}
      {items.length > 1 && (
        <button
          className="absolute right-6 top-1/2 -translate-y-1/2 text-white opacity-40 hover:opacity-100 transition-opacity cursor-none z-10 p-2"
          onClick={(e) => { e.stopPropagation(); go(1); }}
          aria-label="Next"
        >
          <ChevronRight size={32} />
        </button>
      )}

      {/* Caption */}
      {item?.caption && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white opacity-40 text-xs tracking-widest font-light">
          {item.caption}
        </div>
      )}
    </div>
  );
}
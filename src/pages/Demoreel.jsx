import { useState, useRef } from 'react';
import PageLayout from '@/components/PageLayout';
import { Play } from 'lucide-react';

const BG_IMAGE = null;

const VIDEO_SRC = 'https://media.base44.com/videos/public/6a41fd8388fb92dbaee663e8/fd092c120_DemoReel_SanaS.mp4';
const VIDEO_POSTER = 'https://media.base44.com/images/public/6a41fd8388fb92dbaee663e8/83aca49dc_Thumbnail2.jpg';

export default function Demoreel() {
  const [playing, setPlaying] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [showCursor, setShowCursor] = useState(false);
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  const handlePlay = () => {
    setPlaying(true);
    setTimeout(() => videoRef.current?.play(), 50);
  };

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setCursorPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <PageLayout bgImage={BG_IMAGE}>
      <div className="flex flex-col items-center justify-center min-h-[80vh]">
        <div
          ref={containerRef}
          className="relative w-full max-w-5xl cursor-none"
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setShowCursor(true)}
          onMouseLeave={() => setShowCursor(false)}
          style={{ aspectRatio: '16/9' }}
        >
          {/* Custom cursor inside video */}
          {showCursor && !playing && (
            <div
              className="absolute z-20 pointer-events-none"
              style={{
                left: cursorPos.x,
                top: cursorPos.y,
                transform: 'translate(-50%, -50%)',
              }}
            >
              <div
                className="w-20 h-20 rounded-full border border-white/50 flex items-center justify-center"
                style={{ background: 'rgba(242,242,242,0.05)' }}
              >
                <Play size={20} className="text-white ml-1" />
              </div>
            </div>
          )}

          {!playing ? (
            <div className="relative w-full h-full" onClick={handlePlay}>
              <img
                src={VIDEO_POSTER}
                alt="Demo Reel 2025"
                className="w-full h-full object-cover"
              />
            </div>
          ) : (
            <video
              ref={videoRef}
              src={VIDEO_SRC}

              controls
              className="w-full h-full object-contain"
              onEnded={() => setPlaying(false)}
            />
          )}
        </div>

        <p className="mt-8 text-xs tracking-widest uppercase opacity-30">
          Games &amp; Animation
        </p>
      </div>
    </PageLayout>
  );
}
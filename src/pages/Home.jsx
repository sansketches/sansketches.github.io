import { useNavigate } from 'react-router-dom';
import { useState, useCallback } from 'react';
import Navbar from '@/components/Navbar';
import SocialLinks from '@/components/SocialLinks';

const HERO_IMAGE = 'https://media.base44.com/images/public/6a41fd8388fb92dbaee663e8/681add460_Homepagebackground.png';

const buttons = [
  { label: ['Interior', 'Design'], path: '/portfolio/interior-design' },
  { label: ['Arch', 'Viz'], path: '/portfolio/arch-viz' },
  { label: ['Visual', 'Development'], path: '/portfolio/visual-development' },
  { label: ['3D Environment', 'Art'], path: '/portfolio/3d-environment-art' },
];

export default function Home() {
  const navigate = useNavigate();
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 40;
    const y = (e.clientY / window.innerHeight - 0.5) * 28;
    setOffset({ x, y });
  }, []);

  return (
    <div
      className="relative w-full h-screen overflow-hidden page-enter"
      style={{ background: '#050505' }}
      onMouseMove={handleMouseMove}
    >
      {/* Hero background with parallax */}
      <div
        className="absolute z-0"
        style={{
          inset: '-3%',
          backgroundImage: `url(${HERO_IMAGE})`,
          backgroundSize: '100% 100%',
          backgroundPosition: 'center',
          transform: `translate(${offset.x}px, ${offset.y}px)`,
          transition: 'transform 0.12s ease-out',
          willChange: 'transform',
        }}
      />



      {/* Nav */}
      <Navbar />

      {/* Bottom buttons */}
      <div className="absolute z-20 flex items-end gap-1" style={{ bottom: '12%', left: '50%', transform: 'translateX(-50%)' }}>
        {buttons.map((btn) => (
          <button
            key={btn.path}
            className="home-btn min-w-[130px]"
            onClick={() => navigate(btn.path)}
          >
            {btn.label.map((line, i) => (
              <span key={i} className="block leading-tight">{line}</span>
            ))}
          </button>
        ))}
      </div>

      {/* Social links */}
      <SocialLinks />
    </div>
  );
}
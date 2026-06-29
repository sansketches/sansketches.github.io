import { useNavigate } from 'react-router-dom';
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

  return (
    <div className="relative w-full h-screen overflow-hidden page-enter" style={{ background: '#050505' }}>
      {/* Hero background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${HERO_IMAGE})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />



      {/* Nav */}
      <Navbar />

      {/* Bottom buttons */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-20 flex items-end gap-1">
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
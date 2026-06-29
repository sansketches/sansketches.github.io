import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import SocialLinks from '@/components/SocialLinks';
import RoseMotifs from '@/components/RoseMotifs';

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

      {/* Dark vignette overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(5,5,5,0.05) 0%, rgba(5,5,5,0.55) 100%)',
        }}
      />

      {/* Side vignettes */}
      <div className="absolute inset-y-0 left-0 w-32 z-0" style={{ background: 'linear-gradient(to right, rgba(5,5,5,0.95), transparent)' }} />
      <div className="absolute inset-y-0 right-0 w-32 z-0" style={{ background: 'linear-gradient(to left, rgba(5,5,5,0.95), transparent)' }} />

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-48 z-0" style={{ background: 'linear-gradient(to top, rgba(5,5,5,0.95), transparent)' }} />

      {/* Rose motifs */}
      <RoseMotifs />

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
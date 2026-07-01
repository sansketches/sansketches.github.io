import { useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

const LOGO_IMG = 'https://media.base44.com/images/public/6a41fd8388fb92dbaee663e8/f1058ff13_Logo.png';

export default function Navbar() {
  const [portfolioOpen, setPortfolioOpen] = useState(false);
  const [demoOpen, setDemoOpen] = useState(false);
  const location = useLocation();
  const portfolioTimer = useRef(null);
  const demoTimer = useRef(null);

  const handlePortfolioEnter = () => {
    clearTimeout(portfolioTimer.current);
    setPortfolioOpen(true);
  };
  const handlePortfolioLeave = () => {
    portfolioTimer.current = setTimeout(() => setPortfolioOpen(false), 150);
  };
  const handleDemoEnter = () => {
    clearTimeout(demoTimer.current);
    setDemoOpen(true);
  };
  const handleDemoLeave = () => {
    demoTimer.current = setTimeout(() => setDemoOpen(false), 150);
  };

  const navLinkClass = (path) =>
    `opacity-60 hover:opacity-100 transition-all duration-200 hover:tracking-widest ${
      location.pathname === path ? 'opacity-100' : ''
    }`;

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 grid items-end py-7"
      style={{
        background: 'rgba(5,5,5,0.72)',
        gridTemplateColumns: '1fr auto 1fr',
        fontSize: '13px',
        letterSpacing: '0.3em',
      }}
    >
      {/* Left nav group */}
      <div className="flex items-end justify-evenly px-8 pb-3">
        {/* Portfolio dropdown */}
        <div
          className="relative"
          onMouseEnter={handlePortfolioEnter}
          onMouseLeave={handlePortfolioLeave}
        >
          <button className="text-white hover:opacity-100 transition-all duration-200 hover:tracking-widest hover:scale-125 cursor-none" style={{ opacity: 0.92 }}>
            PORTFOLIO
          </button>
          {portfolioOpen && (
            <div className="nav-dropdown">
              <Link to="/portfolio/design" onClick={() => setPortfolioOpen(false)}>Design Portfolio</Link>
              <Link to="/portfolio/3d" onClick={() => setPortfolioOpen(false)}>3D Portfolio</Link>
            </div>
          )}
        </div>

        {/* Demoreel dropdown */}
        <div
          className="relative"
          onMouseEnter={handleDemoEnter}
          onMouseLeave={handleDemoLeave}
        >
          <button className="text-white hover:opacity-100 transition-all duration-200 hover:tracking-widest hover:scale-125 cursor-none" style={{ opacity: 0.92 }}>
            DEMOREEL
          </button>
          {demoOpen && (
            <div className="nav-dropdown">
              <Link to="/demoreel" onClick={() => setDemoOpen(false)}>Games &amp; Animation</Link>
            </div>
          )}
        </div>
      </div>

      {/* Center logo */}
      <Link to="/" className="opacity-90 hover:opacity-100 transition-all duration-200 hover:scale-110 cursor-none flex justify-center items-end pb-1">
        <img src={LOGO_IMG} alt="Logo" className="h-14 w-auto" />
      </Link>

      {/* Right nav group */}
      <div className="flex items-end justify-evenly px-8 pb-3">
        <Link to="/about" className={`text-white transition-all duration-200 hover:tracking-widest hover:opacity-100 hover:scale-125 ${location.pathname === '/about' ? 'opacity-100' : ''}`} style={{ opacity: location.pathname === '/about' ? 1 : 0.92 }}>About</Link>
        <Link to="/contact" className={`text-white transition-all duration-200 hover:tracking-widest hover:opacity-100 hover:scale-125 ${location.pathname === '/contact' ? 'opacity-100' : ''}`} style={{ opacity: location.pathname === '/contact' ? 1 : 0.92 }}>Contact</Link>
      </div>
    </nav>
  );
}
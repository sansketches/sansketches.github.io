import { useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

const LOGO_SVG = (
  <svg viewBox="0 0 40 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 w-auto">
    <rect x="8" y="2" width="24" height="3" fill="#F2F2F2" />
    <rect x="8" y="8" width="16" height="3" fill="#F2F2F2" />
    <rect x="8" y="14" width="24" height="3" fill="#F2F2F2" />
    <rect x="8" y="20" width="10" height="3" fill="#F2F2F2" />
  </svg>
);

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
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-12 py-5"
      style={{ background: 'linear-gradient(to bottom, rgba(5,5,5,0.85) 0%, transparent 100%)', backdropFilter: 'blur(0px)' }}
    >
      {/* Left nav group */}
      <div className="flex items-center gap-14">
        {/* Portfolio dropdown */}
        <div
          className="relative"
          onMouseEnter={handlePortfolioEnter}
          onMouseLeave={handlePortfolioLeave}
        >
          <button className="opacity-60 hover:opacity-100 transition-all duration-200 hover:tracking-widest cursor-none">
            Portfolio
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
          <button className="opacity-60 hover:opacity-100 transition-all duration-200 hover:tracking-widest cursor-none">
            Demoreel
          </button>
          {demoOpen && (
            <div className="nav-dropdown">
              <Link to="/demoreel" onClick={() => setDemoOpen(false)}>Games &amp; Animation</Link>
            </div>
          )}
        </div>
      </div>

      {/* Center logo */}
      <Link to="/" className="absolute left-1/2 -translate-x-1/2 opacity-90 hover:opacity-100 transition-opacity cursor-none">
        {LOGO_SVG}
      </Link>

      {/* Right nav group */}
      <div className="flex items-center gap-14">
        <Link to="/about" className={navLinkClass('/about')}>About</Link>
        <Link to="/contact" className={navLinkClass('/contact')}>Contact</Link>
      </div>
    </nav>
  );
}
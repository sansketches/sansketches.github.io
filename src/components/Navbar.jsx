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
        background: 'rgba(30,30,30,0.82)',
        gridTemplateColumns: '1fr auto 1fr',
        fontSize: '13px',
        letterSpacing: '0.3em',
      }}
    >
      {/* Left nav group */}
      <div className="flex items-center justify-evenly px-8">
        {/* Portfolio dropdown */}
        <div
          className="relative"
          onMouseEnter={handlePortfolioEnter}
          onMouseLeave={handlePortfolioLeave}
        >
          <button className="opacity-60 hover:opacity-100 transition-all duration-200 hover:tracking-widest cursor-none">
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
          <button className="opacity-60 hover:opacity-100 transition-all duration-200 hover:tracking-widest cursor-none">
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
      <Link to="/" className="opacity-90 hover:opacity-100 transition-opacity cursor-none flex justify-center">
        <img src={LOGO_IMG} alt="Logo" className="h-14 w-auto" />
      </Link>

      {/* Right nav group */}
      <div className="flex items-center justify-evenly px-8">
        <Link to="/about" className={navLinkClass('/about')}>About</Link>
        <Link to="/contact" className={navLinkClass('/contact')}>Contact</Link>
      </div>
    </nav>
  );
}
import Navbar from './Navbar';
import SocialLinks from './SocialLinks';
import RoseMotifs from './RoseMotifs';

export default function PageLayout({ children, bgImage }) {
  return (
    <div className="min-h-screen relative page-enter" style={{ background: '#050505' }}>
      {bgImage && (
        <div
          className="fixed inset-0 z-0"
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.15) saturate(0.3)',
          }}
        />
      )}
      <RoseMotifs />
      <Navbar />
      <main className="relative z-10 pt-24 pb-20 px-8 md:px-16 lg:px-24">
        {children}
      </main>
      <SocialLinks />
    </div>
  );
}
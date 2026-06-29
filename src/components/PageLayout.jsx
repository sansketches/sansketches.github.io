import Navbar from './Navbar';
import SocialLinks from './SocialLinks';

const DEFAULT_BG = 'https://media.base44.com/images/public/6a41fd8388fb92dbaee663e8/8e4de6821_Webpagebackground.png';

export default function PageLayout({ children }) {
  return (
    <div className="min-h-screen relative page-enter">
      <div
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: `url(${DEFAULT_BG})`,
          backgroundSize: '100% 100%',
          backgroundPosition: 'center',
        }}
      />
      <Navbar />
      <main className="relative z-10 pt-24 pb-20 px-8 md:px-16 lg:px-24">
        {children}
      </main>
      <SocialLinks />
    </div>
  );
}
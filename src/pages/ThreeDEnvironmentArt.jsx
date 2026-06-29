import PageLayout from '@/components/PageLayout';
import PortfolioGrid from '@/components/PortfolioGrid';

const BG_IMAGE = 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1920&q=80';

const ITEMS = [
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&q=80',
    caption: '3D Env — Urban Alley'
  },
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80',
    caption: '3D Env — Tech Interior'
  },
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?w=800&q=80',
    caption: '3D Env — City Night'
  },
  {
    type: 'video',
    src: 'YOUR_VIDEO_URL_HERE',
    poster: 'https://images.unsplash.com/photo-1555680202-c86f0e12f086?w=800&q=80',
    caption: 'Fly-Through — Environment'
  },
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1601042879364-f3947d3f9c16?w=800&q=80',
    caption: '3D Env — Underground'
  },
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80',
    caption: '3D Env — Industrial Zone'
  },
  {
    type: 'video',
    src: 'YOUR_VIDEO_URL_2_HERE',
    poster: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    caption: 'Turntable — Asset Showcase'
  },
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1444080748397-f442aa95c3e5?w=800&q=80',
    caption: '3D Env — Space Station'
  },
];

export default function ThreeDEnvironmentArt() {
  return (
    <PageLayout bgImage={BG_IMAGE}>
      <div className="mb-16 text-center">
        <p className="text-xs tracking-widest uppercase opacity-40 mb-3">3D Portfolio</p>
        <h1 className="text-5xl font-light" style={{ fontFamily: 'Cormorant Garamond, serif', letterSpacing: '0.05em' }}>
          3D Environment Art
        </h1>
        <div className="w-12 h-px bg-white opacity-20 mx-auto mt-6" />
      </div>
      <PortfolioGrid items={ITEMS} />
    </PageLayout>
  );
}
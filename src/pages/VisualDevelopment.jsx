import PageLayout from '@/components/PageLayout';
import PortfolioGrid from '@/components/PortfolioGrid';

const BG_IMAGE = 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=1920&q=80';

const ITEMS = [
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=800&q=80',
    caption: 'Visual Dev — Concept I'
  },
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?w=800&q=80',
    caption: 'Visual Dev — Environment Concept'
  },
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    caption: 'Visual Dev — Night Scene Concept'
  },
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800&q=80',
    caption: 'Visual Dev — Atmospheric Study'
  },
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
    caption: 'Visual Dev — Landscape'
  },
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?w=800&q=80',
    caption: 'Visual Dev — Color Script'
  },
];

export default function VisualDevelopment() {
  return (
    <PageLayout bgImage={BG_IMAGE}>
      <div className="mb-16 text-center">
        <p className="text-xs tracking-widest uppercase opacity-40 mb-3">3D Portfolio</p>
        <h1 className="text-5xl font-light" style={{ fontFamily: 'Cormorant Garamond, serif', letterSpacing: '0.05em' }}>
          Visual Development
        </h1>
        <div className="w-12 h-px bg-white opacity-20 mx-auto mt-6" />
      </div>
      <PortfolioGrid items={ITEMS} />
    </PageLayout>
  );
}
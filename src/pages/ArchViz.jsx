import PageLayout from '@/components/PageLayout';
import PortfolioGrid from '@/components/PortfolioGrid';

const BG_IMAGE = 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&q=80';

const ITEMS = [
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80',
    caption: 'Arch Viz — Commercial Tower'
  },
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
    caption: 'Arch Viz — Villa Exterior'
  },
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&q=80',
    caption: 'Arch Viz — Residential'
  },
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80',
    caption: 'Arch Viz — Modern House'
  },
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1565182999561-18d7dc61c393?w=800&q=80',
    caption: 'Arch Viz — Courtyard'
  },
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80',
    caption: 'Arch Viz — Urban Complex'
  },
];

export default function ArchViz() {
  return (
    <PageLayout bgImage={BG_IMAGE}>
      <div className="mb-16 text-center">
        <p className="text-xs tracking-widest uppercase opacity-40 mb-3">Design Portfolio</p>
        <h1 className="uppercase" style={{ fontFamily: 'Montserrat', fontSize: '2rem', fontWeight: 300, letterSpacing: '0.25em' }}>
          Arch Viz
        </h1>
        <div className="w-12 h-px bg-white opacity-20 mx-auto mt-6" />
      </div>
      <PortfolioGrid items={ITEMS} />
    </PageLayout>
  );
}
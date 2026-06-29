import PageLayout from '@/components/PageLayout';
import PortfolioGrid from '@/components/PortfolioGrid';

const BG_IMAGE = 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1920&q=80';

const ITEMS = [
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&q=80',
    caption: 'Office Suite — Project I'
  },
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80',
    caption: 'Living Space — Project II'
  },
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80',
    caption: 'Residence — Project III'
  },
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1615529328331-f8917597711f?w=800&q=80',
    caption: 'Dining — Project IV'
  },
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=800&q=80',
    caption: 'Bedroom — Project V'
  },
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=800&q=80',
    caption: 'Lounge — Project VI'
  },
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    caption: 'Entry Hall — Project VII'
  },
];

export default function InteriorDesign() {
  return (
    <PageLayout bgImage={BG_IMAGE}>
      <div className="mb-16 text-center">
        <p className="text-xs tracking-widest uppercase opacity-40 mb-3">Design Portfolio</p>
        <h1 className="uppercase" style={{ fontFamily: 'Montserrat', fontSize: '2rem', fontWeight: 300, letterSpacing: '0.25em' }}>
          Interior Design
        </h1>
        <div className="w-12 h-px bg-white opacity-20 mx-auto mt-6" />
      </div>
      <PortfolioGrid items={ITEMS} />
    </PageLayout>
  );
}
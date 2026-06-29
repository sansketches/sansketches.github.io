import PageLayout from '@/components/PageLayout';
import PortfolioGrid from '@/components/PortfolioGrid';

const BG_IMAGE = 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1920&q=80';

const ITEMS = [
  {
    type: 'image',
    src: 'https://media.base44.com/images/public/6a41fd8388fb92dbaee663e8/a9fea95d7_1.jpg',
    caption: 'Office Suite — Project I'
  },
  {
    type: 'image',
    src: 'https://media.base44.com/images/public/6a41fd8388fb92dbaee663e8/94aa007c0_2.jpg',
    caption: 'Executive Office — Project II'
  },
  {
    type: 'image',
    src: 'https://media.base44.com/images/public/6a41fd8388fb92dbaee663e8/542587046_3.jpg',
    caption: 'Bedroom — Project III'
  },
  {
    type: 'image',
    src: 'https://media.base44.com/images/public/6a41fd8388fb92dbaee663e8/79e8515cd_4.jpg',
    caption: 'Private Office — Project IV'
  },
  {
    type: 'image',
    src: 'https://media.base44.com/images/public/6a41fd8388fb92dbaee663e8/930ca0017_5.jpg',
    caption: 'Director\'s Office — Project V'
  },
  {
    type: 'image',
    src: 'https://media.base44.com/images/public/6a41fd8388fb92dbaee663e8/7418bd1f4_6.jpg',
    caption: 'Dining Room — Project VI'
  },
  {
    type: 'image',
    src: 'https://media.base44.com/images/public/6a41fd8388fb92dbaee663e8/296925d9b_7.jpg',
    caption: 'Living Space — Project VII'
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
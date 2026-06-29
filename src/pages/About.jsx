import PageLayout from '@/components/PageLayout';

const BG_IMAGE = 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80';

export default function About() {
  return (
    <PageLayout bgImage={BG_IMAGE}>
      <div className="flex flex-col items-center justify-center min-h-[80vh]">
        <div className="max-w-2xl text-center">
          <p className="text-xs tracking-widest uppercase opacity-30 mb-8">About</p>

          <h1
            className="text-6xl font-light mb-12 text-white"
            style={{ fontFamily: 'Cormorant Garamond, serif', letterSpacing: '0.05em' }}
          >
            Sana Shaikh
          </h1>

          <div className="w-8 h-px mx-auto mb-12" style={{ background: '#8C5E5E' }} />

          <p
            className="text-base leading-loose opacity-70"
            style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300, letterSpacing: '0.02em' }}
          >
            {/* Replace with your actual bio */}
            I am an interior designer and 3D environment artist with a passion for crafting immersive spatial narratives. My work lives at the intersection of architecture, visual storytelling, and atmospheric world-building.
          </p>

          <div className="mt-10 h-px w-full opacity-10" style={{ background: '#F2F2F2' }} />

          <p
            className="mt-10 text-sm leading-loose opacity-50"
            style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300, letterSpacing: '0.03em' }}
          >
            From meticulously rendered interior spaces to cinematic 3D game environments, I approach every project as an opportunity to sculpt light, shadow, and material into a lived-in world. Trained in design fundamentals with a keen eye for the theatrical, my practice blends technical precision with an artist's intuition for mood and atmosphere.
          </p>

          <p
            className="mt-8 text-sm leading-loose opacity-50"
            style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300, letterSpacing: '0.03em' }}
          >
            Currently based in Australia, available for freelance and collaborative projects worldwide.
          </p>
        </div>
      </div>
    </PageLayout>
  );
}
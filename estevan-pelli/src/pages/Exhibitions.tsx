import { Layout } from '../components/layout/Layout';

const exhibitions = [
  {
    id: 1,
    title: 'Body without Organs',
    venue: 'Galerie Droste Paris',
    year: '2026',
    image: 'https://images.unsplash.com/photo-1545989253-02cc26577f88?w=1400&h=900&fit=crop',
  },
  {
    id: 2,
    title: 'Viscous Substances',
    venue: 'São Paulo Museum of Modern Art',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=1400&h=900&fit=crop',
  },
  {
    id: 3,
    title: 'Lazy Movements',
    venue: 'Barcelona Contemporary Art Center',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1536924940846-227afb31e2a5?w=1400&h=900&fit=crop',
  },
  {
    id: 4,
    title: 'Curly Brushstrokes',
    venue: 'Rio de Janeiro National Gallery',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?w=1400&h=900&fit=crop',
  },
];

export function Exhibitions() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto">
        {/* Page Title */}
        <h1 className="text-[18px] font-semibold tracking-[0.05em] uppercase text-soft-black mb-8">
          Last Shows
        </h1>
        
        {/* Divider */}
        <hr className="border-t border-subtle-border mb-12" />
        
        {/* Exhibition Images */}
        <div className="space-y-16">
          {exhibitions.map((exhibition) => (
            <div key={exhibition.id} className="group">
              <img
                src={exhibition.image}
                alt={`${exhibition.title} - ${exhibition.venue}`}
                className="w-full h-auto object-cover"
              />
              <div className="mt-4 flex justify-between items-baseline">
                <h2 className="text-[20px] font-normal text-soft-black">
                  {exhibition.title}
                </h2>
                <span className="text-[15px] text-text-secondary">
                  {exhibition.venue}, {exhibition.year}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

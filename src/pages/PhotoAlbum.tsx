import { Layout } from '../components/layout/Layout';

const photos = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=900&h=600&fit=crop',
    alt: 'Studio view',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&h=800&fit=crop',
    alt: 'Work in progress',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=800&h=600&fit=crop',
    alt: 'Materials and tools',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1544531586-fde5298cdd40?w=600&h=800&fit=crop',
    alt: 'At the gallery',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1561214115-f2f134cc4912?w=900&h=600&fit=crop',
    alt: 'Exhibition opening',
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1579783901583-d88c8bb23e24?w=600&h=800&fit=crop',
    alt: 'Studio corner',
  },
];

export function PhotoAlbum() {
  return (
    <Layout>
      <div className="max-w-6xl mx-auto">
        {/* Photo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-1 gap-8">
          {photos.map((photo) => (
            <div key={photo.id} className="group">
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-auto object-cover hover:opacity-90 transition-opacity duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

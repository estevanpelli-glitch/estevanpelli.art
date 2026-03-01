import { Layout } from '../components/layout/Layout';
import { Carousel } from '../components/ui/Carousel';

const newsItems = [
  { 
    id: 1, 
    date: 'February 2026', 
    title: 'New Exhibition at Galerie Droste Paris', 
    link: '#',
    // Repetindo a mesma imagem 4x como você pediu
    images: [
      '/uploads/exhibition1.jpg',
      '/uploads/exhibition1.jpg',
      '/uploads/exhibition1.jpg',
      '/uploads/exhibition1.jpg'
    ]
  },
  { 
    id: 2, 
    date: 'December 2025', 
    title: 'Art Residency in Barcelona', 
    link: '#',
    images: [
      '/uploads/residency1.jpg',
      '/uploads/residency1.jpg',
      '/uploads/residency1.jpg',
      '/uploads/residency1.jpg'
    ]
  },
  { 
    id: 3, 
    date: 'October 2025', 
    title: 'Featured in Contemporary Art Magazine', 
    link: '#',
    images: [
      '/uploads/magazine1.jpg',
      '/uploads/magazine1.jpg',
      '/uploads/magazine1.jpg',
      '/uploads/magazine1.jpg'
    ]
  },
  { 
    id: 4, 
    date: 'June 2025', 
    title: 'Solo Show at São Paulo Gallery', 
    link: '#',
    images: [
      '/uploads/solo1.jpg',
      '/uploads/solo1.jpg',
      '/uploads/solo1.jpg',
      '/uploads/solo1.jpg'
    ]
  },
];

export function News() {
  return (
    <Layout>
      <div className="max-w-6xl mx-auto">
        {/* Page Title */}
        <h1 className="text-[18px] font-semibold tracking-[0.05em] uppercase text-soft-black mb-4">
          News
        </h1>
        
        {/* Divider */}
        <hr className="border-t border-blue-600 mb-8" />
        
        {/* News List com Carrossel */}
        <div className="space-y-16">
          {newsItems.map((item) => (
            <article key={item.id} className="border-b border-blue-600 pb-12">
              {/* CARROSSEL - Estilo Mendes Wood */}
              <Carousel 
                images={item.images} 
                aspectRatio="3/2" 
              />
              
              {/* Informações abaixo do carrossel */}
              <div className="mt-6 space-y-2">
                <a 
                  href={item.link}
                  className="block text-[20px] md:text-[18px] text-blue-600 hover:underline transition-all duration-200 font-medium"
                >
                  {item.title}
                </a>
                <span className="text-sm text-gray-500 block">
                  {item.date}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Layout>
  );
}
import { Layout } from '../components/layout/Layout';

const newsItems = [
  { id: 1, date: 'February 2026', title: 'New Exhibition at Galerie Droste Paris', link: '#' },
  { id: 2, date: 'December 2025', title: 'Art Residency in Barcelona', link: '#' },
  { id: 3, date: 'October 2025', title: 'Featured in Contemporary Art Magazine', link: '#' },
  { id: 4, date: 'June 2025', title: 'Solo Show at São Paulo Gallery', link: '#' },
];

export function News() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        {/* Page Title */}
        <h1 className="text-[18px] font-semibold tracking-[0.05em] uppercase text-soft-black mb-4">
          News
        </h1>
        
        {/* Divider */}
        <hr className="border-t border-subtle-border mb-8" />
        
        {/* News List */}
        <div className="space-y-6">
          {newsItems.map((item) => (
            <div key={item.id} className="group">
              <a 
                href={item.link}
                className="block text-[20px] md:text-[18px] text-soft-black hover:underline transition-all duration-200"
              >
                <span className="font-normal">{item.date}</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

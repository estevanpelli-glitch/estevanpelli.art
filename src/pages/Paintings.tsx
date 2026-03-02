import { Layout } from '../components/layout/Layout';
import { ExternalLink } from 'lucide-react';

export function Paintings() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto text-center">
        {/* Page Title */}
        <h1 className="text-[18px] font-semibold tracking-[0.05em] uppercase text-soft-black mb-8">
          Paintings
        </h1>
        
        {/* Description */}
        <p className="text-[17px] leading-[1.7] text-soft-black mb-12">
          View the complete paintings catalog
        </p>
        
        {/* Link to PDF */}
        <a
          href="https://drive.google.com/file/d/1Q5S-oMK2krTmFZY9lqEp70w_Yu_VGwTd/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-4 border border-soft-black text-soft-black hover:bg-soft-black hover:text-warm-white transition-all duration-300"
        >
          <span className="text-[16px]">Open Catalog</span>
          <ExternalLink className="w-4 h-4" />
        </a>
        
        {/* Preview Images */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-1 gap-8">
          <img
            src="https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600&h=800&fit=crop"
            alt="Painting 1"
            className="w-full h-auto object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=600&h=800&fit=crop"
            alt="Painting 2"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </Layout>
  );
}

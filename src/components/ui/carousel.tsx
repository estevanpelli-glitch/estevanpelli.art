import { useState, useCallback } from 'react';

interface CarouselProps {
  images: string[];
  aspectRatio?: string;
}

export function Carousel({ images, aspectRatio = "4/3" }: CarouselProps) {
  const [current, setCurrent] = useState(0);
  const total = images.length;
  
  // Se tiver menos de 3 imagens, repete para criar o efeito
  const displayImages = images.length >= 3 
    ? images 
    : [...images, ...images, ...images].slice(0, Math.max(3, images.length));

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % total);
  }, [total]);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + total) % total);
  }, [total]);

  const getVisibleIndices = () => {
    const prevIndex = (current - 1 + total) % total;
    const nextIndex = (current + 1) % total;
    return [prevIndex, current, nextIndex];
  };

  const [leftIdx, centerIdx, rightIdx] = getVisibleIndices();

  if (total === 0) return null;

  return (
    <div className="relative w-full my-8 select-none">
      {/* Container das 3 imagens */}
      <div className="flex items-center justify-center gap-4 md:gap-8 px-16 md:px-24">
        
        {/* Imagem Esquerda (Anterior) - Opaca e menor */}
        <div 
          className="w-[25%] md:w-[20%] opacity-40 transition-all duration-700 ease-out transform scale-90 cursor-pointer hover:opacity-60"
          style={{ aspectRatio }}
          onClick={prev}
        >
          <img 
            src={displayImages[leftIdx]} 
            alt="Anterior" 
            className="w-full h-full object-cover grayscale-[30%]" 
          />
        </div>

        {/* Imagem Central (Atual) - Destaque total */}
        <div 
          className="w-[50%] md:w-[45%] transition-all duration-700 ease-out transform scale-100 relative z-10 shadow-xl" 
          style={{ aspectRatio }}
        >
          <img 
            src={displayImages[centerIdx]} 
            alt="Atual" 
            className="w-full h-full object-cover" 
          />
        </div>

        {/* Imagem Direita (Próxima) - Opaca e menor */}
        <div 
          className="w-[25%] md:w-[20%] opacity-40 transition-all duration-700 ease-out transform scale-90 cursor-pointer hover:opacity-60"
          style={{ aspectRatio }}
          onClick={next}
        >
          <img 
            src={displayImages[rightIdx]} 
            alt="Próxima" 
            className="w-full h-full object-cover grayscale-[30%]" 
          />
        </div>
      </div>

      {/* Setas de Navegação Azuis (estilo do seu site atual) */}
      <button 
        onClick={prev} 
        className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 text-blue-600 hover:text-blue-800 transition-colors z-20 p-2"
        aria-label="Imagem anterior"
      >
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>

      <button 
        onClick={next} 
        className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 text-blue-600 hover:text-blue-800 transition-colors z-20 p-2"
        aria-label="Próxima imagem"
      >
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>
    </div>
  );
}
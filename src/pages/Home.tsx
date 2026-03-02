import { useEffect, useState } from 'react';

const homeImages = [
  '/assets/home_jamais-fomos-modernos.png',
  '/assets/home_sem-titulo_2.png'
];

export function Home() {
  const [randomImage, setRandomImage] = useState<string>('');

  useEffect(() => {
    // Escolhe uma imagem aleatória ao carregar
    const randomIndex = Math.floor(Math.random() * homeImages.length);
    setRandomImage(homeImages[randomIndex]);
  }, []);

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-warm-white">
      {randomImage && (
        <img
          src={randomImage}
          alt="Estevan Pelli"
          className="w-full h-full object-contain max-h-screen"
        />
      )}
    </div>
  );
}

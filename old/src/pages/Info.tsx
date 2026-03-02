import { Layout } from '../components/layout/Layout';

export function Info() {
  return (
    <Layout>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-start">
          {/* Artist Photo */}
          <div className="w-full md:w-auto md:flex-shrink-0">
            <img
              src="/assets/estevan.jpg"
              alt="Estevan Pelli"
              className="w-full md:w-auto md:max-w-[500px] h-auto object-cover"
            />
          </div>

          {/* Biographical Info */}
          <div className="pt-0 md:pt-4 flex-1">
            <h1 className="text-[28px] md:text-[24px] font-normal text-soft-black mb-6">
              Estevan Pelli
            </h1>
            
            <div className="space-y-6 text-[17px] leading-[1.7] text-soft-black">
              <p>
                Estevan é artista multidisciplinar e designer, desenvolvendo uma prática que tensiona as fronteiras entre o design, a pintura e a escultura. Graduado em Desenho Industrial pela Universidade Presbiteriana Mackenzie, sua produção articula interdito, desejo e erotismo como dispositivos de construção simbólica, atravessando referências do imaginário popular e da experiência sensível.
              </p>
              
              <p>
                Sua pesquisa investiga a tensão entre corpo e superfície, debruçando-se sobre o que denomina "Formas Fugidias" — estruturas orgânicas que desafiam a rigidez dos materiais. Ao transitar entre a pintura, a escultura, o objeto e as linguagens têxteis, Estevan busca habitar a "terceira margem": um espaço de suspensão entre a utilidade e a abstração, onde o erotismo da matéria e a projeção do desejo transformam o suporte em um território de coexistência expandida.
              </p>
              
              <p>
                Sua trajetória inclui passagens relevantes por instituições como Itaú Cultural e Theatro Municipal de São Paulo, além de reconhecimento como designer na 10ª e 13ª Bienais Brasileiras de Design Gráfico (ADG). No campo das artes visuais, consolidou sua pesquisa centrada na materialidade e no processo, realizando exposições em espaços de destaque como a Galeria Sé e a Massapê Projetos.
              </p>

              <hr className="border-t border-subtle-border my-8" />

              <p className="text-[15px] text-text-secondary leading-[1.8]">
                Formado em Desenho Industrial pela Universidade Presbiteriana Mackenzie (São Paulo, 2011), participou de exposições como:
              </p>

              <ul className="text-[15px] text-text-secondary leading-[1.8] list-none space-y-1">
                <li>Exposição Coletiva Areoporto (Galeria Castiglioni, São Paulo, 2024);</li>
                <li>Exposição individual Formas Fugidias (Massapê Projetos, São Paulo, 2024);</li>
                <li>Exposição individual Estevan Pelli: A Partilha do Sensível (Casa Diária, São Paulo, 2023);</li>
                <li>13ª Bienal Brasileira de Design Gráfico (São Paulo, 2019);</li>
                <li>Exposição Coletiva Conversão, Galeria Sé (São Paulo, 2016);</li>
                <li>11ª Bienal Brasileira de Design Gráfico (São Paulo, 2011).</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

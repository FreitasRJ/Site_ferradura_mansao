
import React from 'react';
import { MANSION_DATA } from '../constants';

const Description: React.FC = () => {
  return (
    <div className="min-h-screen bg-light text-dark pb-32">
      {/* Header */}
      <div className="relative h-[60vh] bg-dark flex items-center justify-center overflow-hidden">
        <img src="fotos/0.jpg" className="absolute inset-0 w-full h-full object-cover opacity-60" alt="Mansão" />
        <div className="relative z-10 text-center px-4">
          <h1 className="font-serif text-4xl md:text-7xl text-accent mb-4">Exclusividade à Beira-Mar</h1>
          <p className="text-white/80 text-lg md:text-xl tracking-widest uppercase">O seu refúgio definitivo em Búzios</p>
        </div>
      </div>

      <main className="max-w-5xl mx-auto px-6 py-20">
        {/* Intro */}
        <section className="mb-24">
          <h2 className="font-serif text-3xl md:text-5xl mb-8 relative inline-block">
            A Propriedade
            <span className="absolute bottom-0 left-0 w-24 h-1 bg-accent rounded-full -mb-3" />
          </h2>
          <div className="grid md:grid-cols-2 gap-12 text-lg leading-relaxed text-gray-700">
            <p>
              Localizada em um dos pontos mais privilegiados da <strong>Praia da Ferradura</strong>, esta mansão contemporânea de <strong>600 m²</strong> construídos oferece o que há de melhor em arquitetura, conforto e vista para o mar.
            </p>
            <p>
              Acordar o dia com o sol nascendo sobre a curva perfeita da Praia da Ferradura é um privilégio que poucos conhecem de verdade. Esta mansão foi desenhada para aproveitar a vista — da suíte master à área gourmet com bar molhado.
            </p>
          </div>
        </section>

        {/* Price & Highlight */}
        <div className="bg-dark rounded-3xl p-12 text-center text-accent luxury-shadow mb-24">
          <span className="text-white/60 uppercase tracking-[0.2em] block mb-4">Investimento</span>
          <div className="font-serif text-5xl md:text-7xl font-bold mb-4">{MANSION_DATA.price}</div>
          <p className="text-white/80 italic">Valor à vista • Financiamento sob consulta</p>
        </div>

        {/* Details Grid */}
        <div className="grid md:grid-cols-2 gap-16 mb-24">
          <section>
            <h3 className="font-serif text-2xl text-accent mb-6">Infraestrutura</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <span className="text-accent text-xl">✓</span>
                <span>{MANSION_DATA.area}</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-accent text-xl">✓</span>
                <span>{MANSION_DATA.land}</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-accent text-xl">✓</span>
                <span>{MANSION_DATA.suites}</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-accent text-xl">✓</span>
                <span>Piscina infinita com bar molhado</span>
              </li>
            </ul>
          </section>
          
          <section>
            <h3 className="font-serif text-2xl text-accent mb-6">Diferenciais</h3>
            <ul className="space-y-4">
              {MANSION_DATA.highlights.map((h, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="text-accent text-xl">✓</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Map Section */}
        <section className="mb-24">
          <h2 className="font-serif text-3xl md:text-5xl mb-12 text-center">Localização Privilegiada</h2>
          <div className="rounded-3xl overflow-hidden h-[450px] luxury-shadow grayscale hover:grayscale-0 transition-all duration-700">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d918.073!2d-41.882066!3d-22.772638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDQ2JzIxLjUiUyA0McKwNTInNTQuNCJX!5e1!3m2!1spt-BR!2sbr!4v1731800000000!5m2!1spt-BR!2sbr"
              width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
            />
          </div>
          <p className="mt-4 text-center text-gray-500 font-mono">22°46'21.5"S 41°52'54.4"W</p>
        </section>

        {/* Small Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <img src="fotos/0.jpg" alt="Fachada" className="rounded-2xl h-40 w-full object-cover hover:scale-105 transition-transform" />
          <img src="fotos/16.jpg" alt="Piscina" className="rounded-2xl h-40 w-full object-cover hover:scale-105 transition-transform" />
          <img src="fotos/43.jpg" alt="Suíte" className="rounded-2xl h-40 w-full object-cover hover:scale-105 transition-transform" />
          <img src="fotos/35.jpg" alt="Gourmet" className="rounded-2xl h-40 w-full object-cover hover:scale-105 transition-transform" />
        </div>
      </main>
    </div>
  );
};

export default Description;

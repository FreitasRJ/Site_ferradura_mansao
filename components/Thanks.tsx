
import React from 'react';
import { Link } from 'react-router-dom';
import { MANSION_DATA } from '../constants';

const Thanks: React.FC = () => {
  // Simple multi-language content
  const content = {
    pt: {
      title: "Obrigado!",
      text: "Recebemos sua mensagem com sucesso.",
      cta: "Entraremos em contato em até 24 horas.",
      btn: "Falar agora no WhatsApp",
      back: "← Voltar à galeria de fotos"
    }
  };

  const current = content.pt; // Defaulting to PT based on mansion location

  return (
    <div className="min-h-screen bg-dark flex flex-col items-center justify-center p-6 relative overflow-hidden">
      <img src="fotos/0.jpg" className="absolute inset-0 w-full h-full object-cover opacity-30 blur-xl" alt="" />
      
      <div className="relative z-10 w-full max-w-3xl bg-black/80 backdrop-blur-2xl border border-accent/25 rounded-[48px] p-12 md:p-20 text-center luxury-shadow">
        <h1 className="font-serif text-6xl md:text-8xl text-accent mb-6 animate-pulse">{current.title}</h1>
        <p className="text-xl md:text-2xl text-white/90 mb-6">{current.text}</p>
        <p className="text-2xl md:text-3xl text-accent font-semibold mb-12">{current.cta}</p>
        
        <a 
          href={`https://wa.me/${MANSION_DATA.whatsapp.replace('+', '')}?text=Olá! Acabei de enviar um formulário pelo site da Mansão Ferradura.`}
          className="inline-block bg-accent hover:bg-accent-light text-black font-bold py-6 px-12 rounded-full text-xl md:text-2xl tracking-widest transition-all duration-300 transform hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(193,154,107,0.3)]"
        >
          {current.btn}
        </a>

        <div className="mt-16">
          <Link to="/" className="text-white/50 hover:text-white transition-colors text-lg underline underline-offset-8">
            {current.back}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Thanks;

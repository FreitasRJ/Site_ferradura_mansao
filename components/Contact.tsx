
import React from 'react';
import { MANSION_DATA } from '../constants';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark flex flex-col items-center justify-center px-6 py-20 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <img src="fotos/0.jpg" className="w-full h-full object-cover blur-sm" alt="" />
        <div className="absolute inset-0 bg-black/80" />
      </div>

      <div className="relative z-10 w-full max-w-2xl bg-black/60 backdrop-blur-xl border border-accent/20 rounded-[40px] p-8 md:p-12 luxury-shadow">
        <header className="text-center mb-10">
          <h1 className="font-serif text-4xl md:text-5xl text-accent mb-2">Entre em Contato</h1>
          <p className="text-white/60 tracking-widest uppercase text-sm">Exclusividade • Privacidade • Búzios</p>
        </header>

        <form action={`https://formsubmit.co/${MANSION_DATA.email}`} method="POST" className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-accent text-sm font-medium mb-2">Nome Completo</label>
              <input 
                type="text" name="nome" required 
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:border-accent transition-colors"
                placeholder="Ex: João Silva" 
              />
            </div>
            <div>
              <label className="block text-accent text-sm font-medium mb-2">E-mail</label>
              <input 
                type="email" name="email" required 
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:border-accent transition-colors"
                placeholder="Ex: joao@email.com" 
              />
            </div>
          </div>

          <div>
            <label className="block text-accent text-sm font-medium mb-2">Telefone / WhatsApp</label>
            <input 
              type="tel" name="telefone" required 
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:border-accent transition-colors"
              placeholder="(22) 99999-9999" 
            />
          </div>

          <div>
            <label className="block text-accent text-sm font-medium mb-2">Mensagem</label>
            <textarea 
              name="mensagem" rows={4}
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:border-accent transition-colors resize-none"
              placeholder="Gostaria de agendar uma visita para conhecer a mansão..." 
            />
          </div>

          {/* Hidden Tracker Fields */}
          <input type="hidden" name="Imóvel" value={`Mansão Ferradura • ${MANSION_DATA.price}`} />
          <input type="hidden" name="_cc" value={MANSION_DATA.secondaryEmail} />
          <input type="hidden" name="_subject" value="Novo Lead - Mansão Ferradura (Premium Web)" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value={window.location.origin + '/#/obrigado'} />

          <button 
            type="submit"
            className="w-full bg-accent hover:bg-accent-light text-black font-bold py-5 rounded-full text-lg tracking-widest uppercase transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl active:scale-95"
          >
            Enviar Mensagem
          </button>
        </form>

        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-white/60 mb-4">Ou fale agora diretamente pelo WhatsApp</p>
          <a 
            href={`https://wa.me/${MANSION_DATA.whatsapp.replace('+', '')}?text=Olá! Tenho interesse na Mansão Ferradura em Búzios.`}
            target="_blank" rel="noopener noreferrer"
            className="text-2xl md:text-3xl font-serif text-accent hover:underline transition-all"
          >
            {MANSION_DATA.whatsapp}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;

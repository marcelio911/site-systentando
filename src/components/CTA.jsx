import React from 'react';
import { colors } from '../utils/colors';

const CTA = () => {
  return (
    <div className="w-full max-w-4xl mx-auto px-6 py-20 text-center">
      <h2 className="text-3xl font-bold mb-6">Pronto para construir o futuro conosco?</h2>
      <p className="text-xl mb-8 max-w-2xl mx-auto" style={{ color: colors.dark.subtext }}>
        Junte-se a nossa força criativa e seja parte de um movimento que desenvolve soluções 
        de impacto real através da tecnologia e colaboração.
      </p>
      
      <form className="max-w-md mx-auto">
        <div className="flex mb-4 flex-col sm:flex-row">
          <input 
            type="email" 
            placeholder="Seu melhor e-mail" 
            className="p-3 rounded-l-lg bg-gray-800 border border-gray-700 text-white sm:flex-grow mb-2 sm:mb-0"
            style={{ 
              backgroundColor: colors.dark.card,
              borderColor: colors.dark.border
            }}
          />
          <button 
            className="px-6 py-3 rounded-r-lg text-white font-medium"
            style={{ backgroundColor: colors.accent.main }}
          >
            Quero Participar
          </button>
        </div>
        <p className="text-xs" style={{ color: colors.dark.subtext }}>
          Ao se inscrever, você concorda em receber comunicações exclusivas sobre o projeto.
        </p>
      </form>
    </div>
  );
};

export default CTA;

import React from 'react';
import { colors } from '../utils/colors';

const Header = () => {
  return (
    <header className="w-full bg-[#004f4f] text-white p-6 flex justify-between items-center">
          
      <div 
        className="text-2xl font-bold" 
        style={{ 
          backgroundImage: `linear-gradient(90deg, ${colors.primary.main}, ${colors.accent.main})`,
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          color: 'transparent'
        }}
      >
        <img src={'assets/images/logo-systentando.png'} alt={'Systentando Logo'} />
      </div>
      <button 
        className="px-4 py-2 rounded-full" 
        style={{ 
          backgroundColor: colors.accent.main,
          color: colors.accent.contrastText
        }}
      >
        Reservar Acesso
      </button>
    </header>
  );
};

export default Header;

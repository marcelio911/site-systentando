import React from 'react';
import { colors } from '../utils/colors';

const Footer = () => {
  return (
    <footer className="w-full py-8 px-6 text-center" style={{ backgroundColor: colors.dark.card }}>
      <div className="text-sm" style={{ color: colors.dark.subtext }}>
        © 2025 Zen Launcher & Systentando One. Todos os direitos reservados.
      </div>
      <div className="flex justify-center gap-4 mt-4">
        <a href="#" className="hover:text-white transition-colors" style={{ color: colors.dark.subtext }}>Instagram</a>
        <a href="#" className="hover:text-white transition-colors" style={{ color: colors.dark.subtext }}>Twitter</a>
        <a href="#" className="hover:text-white transition-colors" style={{ color: colors.dark.subtext }}>LinkedIn</a>
        <a href="#" className="hover:text-white transition-colors" style={{ color: colors.dark.subtext }}>Discord</a>
      </div>
    </footer>
  );
};

export default Footer;

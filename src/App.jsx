import React from 'react';
import { colors } from './utils/colors';
import Header from './components/Header';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import Projects from './components/Projects';
import CTA from './components/CTA';
import Footer from './components/Footer';

const App = () => {
  return (
    <div style={{ 
      backgroundColor: colors.dark.background,
      color: '#ffffff',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <Header />
      <Hero />
      <Philosophy />
      <Projects />
      <CTA />
      <Footer />
    </div>
  );
};

export default App;

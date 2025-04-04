import React from 'react';
import { colors } from './utils/colors';

// Componentes
import NavigationBar from './components/NavigationBar';
import HeroSection from './components/HeroSection';
import ProcessSection from './components/ProcessSection';
import PrincipiosSection from './components/PrincipiosSection';
import EcossistemaSolucoes from './components/EcossistemaSolucoes';
import ImpactoSocialSection from './components/ImpactoSocialSection';
import ValuationSection from './components/ValuationSection';
import JornadaEmpreendedora from './components/JornadaEmpreendedora';
import Footer from './components/Footer';

const App = () => {
  return (
    <div style={{ 
      backgroundColor: colors.dark.background,
      color: '#ffffff',
      minHeight: '100vh'
    }}>
      <NavigationBar />
      <HeroSection />
      <ProcessSection />
      <PrincipiosSection />
      <EcossistemaSolucoes />
      <ImpactoSocialSection />
      <ValuationSection />
      <JornadaEmpreendedora />
      <Footer />
    </div>
  );
};

export default App;

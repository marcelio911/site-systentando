import React, { lazy, Suspense } from 'react';
import { colors } from './utils/colors';

// Componentes de fallback para cada seção
const SectionSkeleton = ({ height = '300px', width = '100%', title = true }) => (
  <div style={{
    padding: '4rem 1rem',
    backgroundColor: colors.dark.background,
    position: 'relative'
  }}>
    <div className="container mx-auto">
      {title && (
        <div style={{ 
          textAlign: 'center',
          marginBottom: '2rem'
        }}>
          <div style={{ 
            height: '24px', 
            width: '180px', 
            backgroundColor: `${colors.dark.card}`, 
            borderRadius: '4px',
            margin: '0 auto 1rem'
          }} />
          <div style={{ 
            height: '4px', 
            width: '60px', 
            backgroundColor: colors.primary.main,
            margin: '0 auto'
          }} />
        </div>
      )}
      
      <div style={{ 
        height, 
        width, 
        backgroundColor: colors.dark.card,
        borderRadius: '8px',
        margin: '0 auto',
        animation: 'pulse 1.5s infinite'
      }} />
    </div>
    
    <style className="jsx-styles">{`
      @keyframes pulse {
        0% { opacity: 0.6; }
        50% { opacity: 0.8; }
        100% { opacity: 0.6; }
      }
    `}</style>
  </div>
);

// Componentes carregados imediatamente (prioritários para o carregamento inicial)
import NavigationBar from './components/NavigationBar';
import HeroSection from './components/HeroSection';

// Componentes com carregamento lazy
const ProcessSection = lazy(() => import('./components/ProcessSection'));
const PrincipiosSection = lazy(() => import('./components/PrincipiosSection'));
const EcossistemaSolucoes = lazy(() => import('./components/EcossistemaSolucoes'));
const ImpactoSocialSection = lazy(() => import('./components/ImpactoSocialSection'));
const ValuationSection = lazy(() => import('./components/ValuationSection'));
const JornadaEmpreendedora = lazy(() => import('./components/JornadaEmpreendedora'));
const Footer = lazy(() => import('./components/Footer'));

const App = () => {
  // Estado para controlar a visibilidade do indicador de carregamento
  const [loading, setLoading] = React.useState(true);
  
  // Função para pré-carregar os componentes após o carregamento inicial
  React.useEffect(() => {
    // Aguarda o carregamento inicial da página
    const timer = setTimeout(() => {
      // Pré-carrega todos os componentes lazy em segundo plano
      const preloadComponents = async () => {
        try {
          await Promise.all([
            import('./components/ProcessSection'),
            import('./components/PrincipiosSection'),
            import('./components/EcossistemaSolucoes'),
            import('./components/ImpactoSocialSection'),
            import('./components/ValuationSection'),
            import('./components/JornadaEmpreendedora'),
            import('./components/Footer')
          ]);
          // Esconde o indicador de carregamento quando tudo estiver pré-carregado
          setLoading(false);
        } catch (error) {
          console.error('Erro ao pré-carregar componentes:', error);
          setLoading(false);
        }
      };
      
      preloadComponents();
    }, 2000); // Inicia o pré-carregamento após 2 segundos

    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div style={{ 
      backgroundColor: colors.dark.background,
      color: '#ffffff',
      minHeight: '100vh'
    }}>
      {/* Indicador de carregamento no topo */}
      {loading && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '3px',
          backgroundColor: 'transparent',
          zIndex: 1000,
          overflow: 'hidden'
        }}>
          <div style={{
            height: '100%',
            width: '50%',
            backgroundColor: colors.accent.main,
            animation: 'loading-bar 1.5s infinite ease-in-out',
            transformOrigin: 'left center'
          }} />
          
          <style className="jsx-styles">{`
            @keyframes loading-bar {
              0% { transform: translateX(-100%); }
              50% { transform: translateX(100%); }
              100% { transform: translateX(300%); }
            }
          `}</style>
        </div>
      )}
      {/* Componentes carregados imediatamente */}
      <NavigationBar />
      <HeroSection />
      
      {/* Componentes com lazy loading individual */}
      <Suspense fallback={<SectionSkeleton height="400px" />}>
        <ProcessSection />
      </Suspense>
      
      <Suspense fallback={<SectionSkeleton height="450px" />}>
        <PrincipiosSection />
      </Suspense>
      
      <Suspense fallback={<SectionSkeleton height="650px" />}>
        <EcossistemaSolucoes />
      </Suspense>
      
      <Suspense fallback={<SectionSkeleton height="500px" />}>
        <ImpactoSocialSection />
      </Suspense>
      
      <Suspense fallback={<SectionSkeleton height="550px" />}>
        <ValuationSection />
      </Suspense>
      
      <Suspense fallback={<SectionSkeleton height="450px" />}>
        <JornadaEmpreendedora />
      </Suspense>
      
      <Suspense fallback={<SectionSkeleton height="300px" title={false} />}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default App;

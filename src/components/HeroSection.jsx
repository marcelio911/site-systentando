import React, { useState, useEffect, useRef } from 'react';
import { colors } from '../utils/colors';
// import { ArrowRight } from 'lucide-react'; // Removido - não está sendo utilizado

const HeroSection = () => {
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const phrases = [
    "transformando ideias em projetos que impactam vidas",
    "conectando desenvolvedores a oportunidades reais",
    "construindo um futuro mais equilibrado e produtivo",
    "potencializando o melhor do empreendedorismo"
  ];
  
  // Referência para o medidor de curiosidade
  const curiosityMeterRef = useRef(null);
  const [curiosityLevel, setCuriosityLevel] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  
  // Verificar se é dispositivo móvel
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  // Alternar frases a cada 3 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % phrases.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [phrases.length]); // Adicionando phrases.length como dependência
  
  // Animação de contagem regressiva
  const [countdown, setCountdown] = useState({
    days: 14,
    hours: 22,
    minutes: 45,
    seconds: 30
  });
  
  // Atualizar contagem regressiva
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(prev => {
        const newSeconds = prev.seconds - 1;
        
        if (newSeconds < 0) {
          const newMinutes = prev.minutes - 1;
          
          if (newMinutes < 0) {
            const newHours = prev.hours - 1;
            
            if (newHours < 0) {
              const newDays = prev.days - 1;
              return {
                days: Math.max(0, newDays),
                hours: newDays < 0 ? 0 : 23,
                minutes: newDays < 0 ? 0 : 59,
                seconds: newDays < 0 ? 0 : 59
              };
            }
            
            return {
              ...prev,
              hours: newHours,
              minutes: 59,
              seconds: 59
            };
          }
          
          return {
            ...prev,
            minutes: newMinutes,
            seconds: 59
          };
        }
        
        return {
          ...prev,
          seconds: newSeconds
        };
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);
  
  // Incrementar o medidor de curiosidade ao rolar
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const scrollPercentage = Math.min(scrollPosition / windowHeight, 1);
      
      setCuriosityLevel(Math.floor(scrollPercentage * 100));
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Desbloquear conteúdo baseado no nível de curiosidade
  const getUnlockedContent = () => {
    if (curiosityLevel >= 75) {
      return (
        <>
          <span style={{ color: colors.feedback.success }}>DESBLOQUEADO:</span> Acesso prioritário ao lançamento
        </>
      );
    } else if (curiosityLevel >= 50) {
      return (
        <>
          <span style={{ color: colors.feedback.info }}>DESBLOQUEADO:</span> Preview exclusivo dos projetos
        </>
      );
    } else if (curiosityLevel >= 25) {
      return (
        <>
          <span style={{ color: colors.categories.personal }}>DESBLOQUEADO:</span> Primeira pista sobre o ecossistema
        </>
      );
    }
    return "Role para desbloquear conteúdo exclusivo";
  };
  
  return (
    <section 
      id="hero"
      style={{
        backgroundColor: colors.systentando.background,
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        backgroundImage: 'radial-gradient(circle at 50% 50%, #1a1a1a 0%, #121212 100%)',
        padding: '2rem 5%',
        paddingTop: '8rem',
        overflow: 'hidden'
      }}
    >
      {/* Efeito de partículas no fundo (simulando conexões) */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          opacity: 0.2,
          zIndex: 1,
          background: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23${colors.accent.main.substring(1)}' fill-opacity='0.2' fill-rule='evenodd'/%3E%3C/svg%3E")`
        }}
      ></div>

      {/* Layout de duas colunas */}
      <div style={{ 
        display: 'flex', 
        flexDirection: isMobile ? 'column' : 'row', 
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        maxWidth: '1400px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 2
      }}>
        {/* Coluna Esquerda - Conteúdo Textual */}
        <div style={{ 
          flex: '1', 
          paddingRight: isMobile ? '0' : '2rem', 
          textAlign: 'left', 
          maxWidth: isMobile ? '100%' : '650px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: isMobile ? 'center' : 'flex-start',
          marginBottom: isMobile ? '2rem' : '0'
        }}>
          {/* Título principal com efeito de gradiente */}
          <h1 
            style={{
              fontSize: isMobile ? '2.5rem' : '4rem',
              fontWeight: 'bold',
              color: 'white',
              marginBottom: '0.5rem',
              background: `linear-gradient(to right, ${colors.primary.main}, ${colors.accent.main})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 0 20px rgba(0,79,79,0.3)',
              textAlign: isMobile ? 'center' : 'left'
            }}
          >
            Conexões que Transformam
          </h1>
          
          {/* Título secundário */}
          <h2 
            style={{
              fontSize: isMobile ? '1.8rem' : '2rem',
              fontWeight: 'bold',
              color: 'white',
              marginBottom: '1.5rem',
              textAlign: isMobile ? 'center' : 'left'
            }}
          >
            Systentando
          </h2>
          
          {/* Subtítulo dinâmico */}
          <h1 
            style={{
              fontSize: isMobile ? '2.5rem' : '4rem',
              fontWeight: 'bold',
              color: 'white',
              marginBottom: '0.5rem',
              background: `linear-gradient(to right, ${colors.primary.main}, ${colors.accent.main})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 0 20px rgba(0,79,79,0.3)',
              textAlign: isMobile ? 'center' : 'left'
            }}
          >
            <p 
            style={{
            fontSize: isMobile ? '1.3rem' : '1.5rem',
            color: colors.accent.main,
            fontWeight: 'bold',
            opacity: 1,
            transition: 'opacity 0.5s ease',
            textAlign: isMobile ? 'center' : 'left'
            }}
            >
              {phrases[currentPhrase]}
            </p>
          </h1>
          
          {/* Descrição com destaque em fato importante */}
          <p 
            style={{ 
              color: colors.dark.subtext,
              fontSize: isMobile ? '1.1rem' : '1.2rem',
              marginBottom: '2rem',
              lineHeight: '1.6',
              textAlign: isMobile ? 'center' : 'left'
            }}
          >
            Somos um HUB de desenvolvedores com visão empreendedora que está
            construindo um ecossistema integrado para{' '}
            <span style={{ color: colors.feedback.success, fontWeight: 'bold' }}>
              equilibrar produtividade, bem-estar e crescimento
            </span>{' '}
            através de tecnologia e conexões humanas.
          </p>
          
          
        </div>

        {/* Coluna Direita - Elementos Visuais */}
        <div style={{ 
          flex: '1', 
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          maxWidth: isMobile ? '100%' : '500px',
          width: isMobile ? '100%' : 'auto'
        }}>
          {/* Contagem regressiva com título */}
          <div style={{ width: '100%', textAlign: 'center', marginBottom: '2rem' }}>
            <p 
              style={{
                fontSize: '1rem',
                color: colors.accent.light,
                marginBottom: '0.5rem',
                fontWeight: 'bold'
              }}
            >
              LANÇAMENTO EM
            </p>
            
            <div 
            style={{
            display: 'flex',
            gap: isMobile ? '0.5rem' : '1rem',
            justifyContent: 'center',
            marginBottom: '1.5rem',
              flexWrap: isMobile ? 'wrap' : 'nowrap'
              }}
              >
              <div 
                style={{
                backgroundColor: colors.dark.card,
                padding: isMobile ? '0.75rem' : '1rem',
                borderRadius: '0.5rem',
                width: isMobile ? '70px' : '80px',
                border: `1px solid ${colors.primary.main}33`,
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                  margin: isMobile ? '0.25rem' : '0'
                }}
              >
                <div 
                style={{
                fontSize: isMobile ? '1.5rem' : '2rem',
                fontWeight: 'bold',
                color: 'white'
                }}
                >
                  {countdown.days}
                </div>
                <div 
                  style={{
                    fontSize: '0.8rem',
                    color: colors.dark.subtext
                  }}
                >
                  Dias
                </div>
              </div>
              
              <div 
                style={{
                  backgroundColor: colors.dark.card,
                  padding: '1rem',
                  borderRadius: '0.5rem',
                  width: '80px',
                  border: `1px solid ${colors.primary.main}33`,
                  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
                }}
              >
                <div 
                  style={{
                    fontSize: '2rem',
                    fontWeight: 'bold',
                    color: 'white'
                  }}
                >
                  {countdown.hours}
                </div>
                <div 
                  style={{
                    fontSize: '0.8rem',
                    color: colors.dark.subtext
                  }}
                >
                  Horas
                </div>
              </div>
              
              <div 
                style={{
                  backgroundColor: colors.dark.card,
                  padding: '1rem',
                  borderRadius: '0.5rem',
                  width: '80px',
                  border: `1px solid ${colors.primary.main}33`,
                  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
                }}
              >
                <div 
                  style={{
                    fontSize: '2rem',
                    fontWeight: 'bold',
                    color: 'white'
                  }}
                >
                  {countdown.minutes}
                </div>
                <div 
                  style={{
                    fontSize: '0.8rem',
                    color: colors.dark.subtext
                  }}
                >
                  Min
                </div>
              </div>
              
              <div 
                style={{
                  backgroundColor: colors.dark.card,
                  padding: '1rem',
                  borderRadius: '0.5rem',
                  width: '80px',
                  border: `1px solid ${colors.primary.main}33`,
                  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
                }}
              >
                <div 
                  style={{
                    fontSize: '2rem',
                    fontWeight: 'bold',
                    color: 'white'
                  }}
                >
                  {countdown.seconds}
                </div>
                <div 
                  style={{
                    fontSize: '0.8rem',
                    color: colors.dark.subtext
                  }}
                >
                  Seg
                </div>
              </div>
            </div>
          </div>
          
          {/* Badge de acesso limitado */}
          <div 
            style={{
              backgroundColor: `${colors.accent.main}33`,
              color: colors.accent.main,
              padding: '0.75rem 1.5rem',
              borderRadius: '2rem',
              fontSize: '0.9rem',
              fontWeight: 'bold',
              marginBottom: '1.5rem',
              border: `1px solid ${colors.accent.main}33`,
              backdropFilter: 'blur(5px)',
              display: 'inline-block',
              textAlign: 'center',
              width: 'auto'
            }}
          >
            <span style={{ fontWeight: 'bold' }}>ACESSO LIMITADO</span> • Apenas 25 participantes na fase beta
          </div>
          
          
          {/* Estatística de impacto */}
          <div 
            style={{
              backgroundColor: colors.dark.card,
              padding: '1rem 2rem',
              borderRadius: '0.75rem',
              marginBottom: '2.5rem',
              display: 'inline-block',
              border: `1px solid ${colors.primary.main}33`,
              textAlign: 'center'
            }}
          >
            <span style={{ color: colors.dark.subtext }}>Impacto projetado: </span>
            <span style={{ color: 'white', fontWeight: 'bold' }}>+10.000 desenvolvedores </span>
            <span style={{ color: colors.dark.subtext }}>e </span>
            <span style={{ color: 'white', fontWeight: 'bold' }}>$2.5M </span>
            <span style={{ color: colors.dark.subtext }}>em valuation nos próximos 3 anos</span>
          </div>

          {/* Prova social */}
          <div 
            style={{
              backgroundColor: `${colors.dark.card}aa`,
              padding: '1.5rem',
              borderRadius: '0.75rem',
              width: '100%',
              backdropFilter: 'blur(5px)',
              border: `1px solid ${colors.dark.border}`,
              marginBottom: '2rem'
            }}
          >
            <div 
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '1rem',
                marginBottom: '1rem',
                flexWrap: 'wrap'
              }}
            >
              {/* Avatares de especialistas (círculos) */}
              {Array.from({ length: 5 }).map((_, index) => (
                <div 
                  key={index}
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    backgroundColor: [
                      colors.accent.main, 
                      colors.primary.main, 
                      colors.categories.health, 
                      colors.categories.work, 
                      colors.categories.personal
                    ][index],
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: '0.9rem',
                    border: '2px solid white'
                  }}
                >
                  {['JL', 'MT', 'RS', 'AP', 'BT'][index]}
                </div>
              ))}
            </div>
            
            <p style={{ color: colors.dark.subtext, fontSize: '0.9rem', textAlign: 'center' }}>
              <span style={{ color: 'white', fontWeight: 'bold' }}>Respaldado por especialistas</span> em desenvolvimento, 
              empreendedorismo, produtividade e bem-estar digital
            </p>
          </div>

        </div>
        
      </div>
      
      {/* Nova div para separar os botões de ação das colunas */}
      <div style={{ 
        width: '100%',
        maxWidth: '1400px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 2
      }}>
        {/* Botões de ação centralizados */}
        <div 
          style={{
            display: 'flex',
            gap: isMobile ? '0.75rem' : '1rem',
            justifyContent: 'center',
            margin: '2rem auto',
            flexWrap: 'wrap',
            flexDirection: isMobile ? 'column' : 'row',
            width: isMobile ? '90%' : 'auto'
          }}
        >
          <button 
            style={{
              backgroundColor: colors.accent.main,
              color: 'white',
              padding: '1rem 2rem',
              borderRadius: '2rem',
              fontSize: '1.2rem',
              fontWeight: 'bold',
              border: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              cursor: 'pointer',
              transition: 'transform 0.3s ease, opacity 0.3s ease, box-shadow 0.3s ease',
              boxShadow: '0 10px 15px -3px rgba(255, 125, 80, 0.3)'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.opacity = '0.9';
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 15px 20px -3px rgba(255, 125, 80, 0.4)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.opacity = '1';
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(255, 125, 80, 0.3)';
            }}
            onClick={() => {
              document.querySelector('#ecossistema').scrollIntoView({
                behavior: 'smooth'
              });
            }}
          >
            Explorar o Ecossistema
          </button>
          
          <button 
            style={{
              backgroundColor: 'transparent',
              color: 'white',
              padding: '1rem 2rem',
              borderRadius: '2rem',
              fontSize: '1.2rem',
              fontWeight: 'bold',
              border: `2px solid ${colors.primary.main}`,
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              cursor: 'pointer',
              transition: 'transform 0.3s ease, opacity 0.3s ease, box-shadow 0.3s ease',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.opacity = '0.9';
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.backgroundColor = `${colors.primary.main}22`;
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.opacity = '1';
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.backgroundColor = 'transparent';
            }}
          >
            Reservar Acesso Antecipado
          </button>
        </div>
      </div>
      
      {/* Medidor de curiosidade centralizado próximo ao indicador de scroll */}
      <div 
        style={{
          position: 'relative',
          zIndex: 2,
          width: '100%',
          maxWidth: '500px',
          margin: '0 auto 3rem',
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <div 
          style={{
            width: '80%',
            backgroundColor: colors.dark.card,
            borderRadius: '1rem',
            padding: '1rem',
            border: `1px solid ${colors.primary.main}33`
          }}
        >
          <div 
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '0.5rem'
            }}
          >
            <span style={{ color: colors.dark.subtext, fontSize: '0.875rem' }}>
              Medidor de Curiosidade
            </span>
            <span style={{ color: 'white', fontWeight: 'bold', fontSize: '0.875rem' }}>
              {curiosityLevel}%
            </span>
          </div>
          
          <div 
            style={{
              width: '100%',
              height: '6px',
              backgroundColor: colors.dark.border,
              borderRadius: '3px',
              overflow: 'hidden',
              marginBottom: '0.75rem'
            }}
            ref={curiosityMeterRef}
          >
            <div 
              style={{
                width: `${curiosityLevel}%`,
                height: '100%',
                backgroundColor: colors.accent.main,
                borderRadius: '3px',
                transition: 'width 0.3s ease'
              }}
            ></div>
          </div>
          
          <div style={{ color: colors.dark.subtext, fontSize: '0.75rem', textAlign: 'center' }}>
            {getUnlockedContent()}
          </div>
        </div>
      </div>
      
      {/* Indicador de scroll */}
      <div 
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
          opacity: 0.7,
          zIndex: 2
        }}
      >
        <div 
          style={{
            width: '2px',
            height: '40px',
            backgroundColor: 'white',
            animation: 'scrollPulse 2s infinite'
          }}
        ></div>
        <p 
          style={{
            color: colors.dark.subtext,
            fontSize: '0.8rem'
          }}
        >
          Role para descobrir mais
        </p>
        
        <style className="jsx-styles">{`
          @keyframes scrollPulse {
            0% { transform: scaleY(0); transform-origin: top; }
            50% { transform: scaleY(1); transform-origin: top; }
            50.1% { transform-origin: bottom; }
            100% { transform: scaleY(0); transform-origin: bottom; }
          }
        `}</style>
      </div>
    </section>
  );
};

export default HeroSection;

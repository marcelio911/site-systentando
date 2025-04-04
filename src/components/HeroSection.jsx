import React, { useState, useEffect } from 'react';
import { colors } from '../utils/colors';

const HeroSection = () => {
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const phrases = [
    "transformando ideias em projetos rentáveis",
    "conectando desenvolvedores a oportunidades",
    "construindo soluções de impacto real",
    "fomentando o espírito empreendedor"
  ];
  
  // Alternar frases a cada 3 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % phrases.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [phrases.length]);
  
  // Animação de contagem regressiva
  const [countdown, setCountdown] = useState({
    days: 30,
    hours: 14,
    minutes: 22,
    seconds: 45
  });
  
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
                days: newDays < 0 ? 0 : newDays,
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
  
  return (
    <section 
      id="hero"
      style={{
        backgroundColor: colors.dark.background,
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        position: 'relative',
        backgroundImage: 'radial-gradient(circle at 50% 50%, #1a1a1a 0%, #121212 100%)',
        padding: '2rem'
      }}
    >
      {/* Badge superior */}
      <div 
        style={{
          backgroundColor: `${colors.accent.main}33`,
          color: colors.accent.main,
          padding: '0.5rem 1rem',
          borderRadius: '2rem',
          fontSize: '0.9rem',
          fontWeight: 'bold',
          marginBottom: '2rem'
        }}
      >
        Uma Força Criativa com Espírito Espartano
      </div>
      
      {/* Contagem regressiva */}
      <div 
        style={{
          display: 'flex',
          gap: '1rem',
          marginBottom: '3rem'
        }}
      >
        <div 
          style={{
            backgroundColor: colors.dark.card,
            padding: '1rem',
            borderRadius: '0.5rem',
            width: '80px'
          }}
        >
          <div 
            style={{
              fontSize: '2rem',
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
            width: '80px'
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
            width: '80px'
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
            width: '80px'
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
      
      {/* Título principal */}
      <h1 
        style={{
          fontSize: '3.5rem',
          fontWeight: 'bold',
          color: 'white',
          marginBottom: '1.5rem',
          maxWidth: '800px'
        }}
      >
        Systentando
      </h1>
      
      {/* Subtítulo dinâmico */}
      <div 
        style={{
          height: '2rem',
          marginBottom: '2rem'
        }}
      >
        <p 
          style={{
            fontSize: '1.5rem',
            color: colors.accent.main,
            fontWeight: 'bold',
            opacity: 1,
            transition: 'opacity 0.5s ease'
          }}
        >
          {phrases[currentPhrase]}
        </p>
      </div>
      
      {/* Descrição */}
      <p 
        style={{
          fontSize: '1.2rem',
          color: colors.dark.subtext,
          maxWidth: '600px',
          marginBottom: '3rem',
          lineHeight: '1.6'
        }}
      >
        Somos um HUB de desenvolvedores, que acreditamos que o empreendedorismo 
        pode mudar a nossa própria vida e a vida das pessoas ao nosso redor.
      </p>
      
      {/* Botão de ação */}
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
          transition: 'transform 0.3s ease, opacity 0.3s ease',
          marginBottom: '5rem'
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.opacity = '0.9';
          e.currentTarget.style.transform = 'scale(1.05)';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.opacity = '1';
          e.currentTarget.style.transform = 'scale(1)';
        }}
        onClick={() => document.querySelector('#processo').scrollIntoView({
          behavior: 'smooth'
        })}
      >
        Explorar ↓
      </button>
      
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
          opacity: 0.6
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
          Role para descobrir
        </p>
        
        <style jsx>{`
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

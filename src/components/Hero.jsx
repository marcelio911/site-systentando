import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const [currentPhase, setCurrentPhase] = useState(0);
  const [curiosityLevel, setCuriosityLevel] = useState(10);
  const [showHint, setShowHint] = useState(false);
  const [countdown, setCountdown] = useState({
    days: 30,
    hours: 14,
    minutes: 22,
    seconds: 45
  });
  
  const phases = [
    { name: "Zen Launcher", description: "Reimagine sua experiência digital" },
    { name: "Systentando One", description: "Conecte-se com propósito" },
    { name: "Ecossistema Completo", description: "Transforme sua realidade" }
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhase(prev => (prev + 1) % phases.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  const increaseCuriosity = () => {
    if (curiosityLevel < 100) {
      setCuriosityLevel(prev => prev + 10);
      if (curiosityLevel >= 90) {
        setShowHint(true);
      }
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-6 py-20 text-center">
      <div className="text-sm uppercase tracking-widest mb-2 text-purple-400">Uma Força Criativa com Espírito Espartano</div>
      <div className="flex justify-center gap-4 mb-10">
        <div className="bg-gray-900 p-3 rounded-lg">
          <div className="text-3xl font-bold">{countdown.days}</div>
          <div className="text-xs text-gray-400">Dias</div>
        </div>
        <div className="bg-gray-900 p-3 rounded-lg">
          <div className="text-3xl font-bold">{countdown.hours}</div>
          <div className="text-xs text-gray-400">Horas</div>
        </div>
        <div className="bg-gray-900 p-3 rounded-lg">
          <div className="text-3xl font-bold">{countdown.minutes}</div>
          <div className="text-xs text-gray-400">Min</div>
        </div>
        <div className="bg-gray-900 p-3 rounded-lg">
          <div className="text-3xl font-bold">{countdown.seconds}</div>
          <div className="text-xs text-gray-400">Seg</div>
        </div>
      </div>
      
      <h1 
        className="text-5xl font-bold mb-4"
        style={{
          backgroundImage: 'linear-gradient(90deg, #9333ea, #3b82f6, #22c55e)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          color: 'transparent'
        }}
      >
        {phases[currentPhase].name}
      </h1>
      <p className="text-xl mb-6 text-gray-300">
        {phases[currentPhase].description}
      </p>
      <p className="text-md mb-8 text-gray-400 max-w-2xl mx-auto">
        Somos impulsionados por uma equipe diversificada de engenheiros, desenvolvedores e estrategistas apaixonados, 
        mesclando experiência com talento inovador para construir soluções que impactam vidas reais.
      </p>
      
      <div className="mb-12">
        <button 
          onClick={increaseCuriosity}
          className="px-6 py-3 rounded-full text-white font-medium flex items-center gap-2 mx-auto"
          style={{ 
            backgroundImage: 'linear-gradient(90deg, #9333ea, #3b82f6)',
            transition: 'all 0.3s ease',
            cursor: 'pointer'
          }}
          onMouseOver={(e) => e.currentTarget.style.opacity = '0.9'}
          onMouseOut={(e) => e.currentTarget.style.opacity = '1'}
        >
          Explorar o Futuro <ArrowRight size={18} />
        </button>
        
        <div className="mt-6 w-full max-w-md mx-auto bg-gray-800 rounded-full h-4">
          <div 
            className="h-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-500"
            style={{ width: `${curiosityLevel}%` }}
          ></div>
        </div>
        <div className="text-xs mt-2 text-gray-400">Nível de Curiosidade: {curiosityLevel}%</div>
      </div>
      
      {showHint && (
        <div className="bg-gray-900 p-6 rounded-lg border border-purple-500 mb-12 max-w-2xl mx-auto">
          <h3 className="text-lg font-medium mb-2">Você desbloqueou uma pista!</h3>
          <p className="text-gray-300">
            "Nem tudo o que conecta é visível aos olhos. O verdadeiro poder está na conexão que transforma."
          </p>
          <div className="mt-4 text-purple-400 text-sm">Compartilhe esta pista para desbloquear mais informações.</div>
        </div>
      )}
    </div>
  );
};

export default Hero;

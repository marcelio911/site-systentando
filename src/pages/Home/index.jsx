import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  ChevronDown, 
  Brain, 
  Heart, 
  Utensils, 
  TrendingUp, 
  Users, 
  Zap,
  LifeBuoy,
  Code
} from 'lucide-react';

const HomePage = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [currentCuriosity, setCurrentCuriosity] = useState(0);

  // Simula um "medidor de curiosidade" que desbloqueia conteúdo
  const curiosityLevels = ['10%', '25%', '50%', '75%', '100%'];
  
  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    // Simula aumento gradual no medidor de curiosidade
    const interval = setInterval(() => {
      setCurrentCuriosity((prev) => (prev < curiosityLevels.length - 1 ? prev + 1 : prev));
    }, 5000);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(interval);
    };
  }, []);

  // Elementos que "seguem" sutilmente o cursor
  const calculateTransform = (factor = 0.02) => {
    const moveX = (cursorPosition.x - window.innerWidth / 2) * factor;
    const moveY = (cursorPosition.y - window.innerHeight / 2) * factor;
    return `translate(${moveX}px, ${moveY}px)`;
  };

  const steps = [
    {
      title: "Escolha Seu Desafio",
      description: "Identifique qual área deseja desenvolver: bem-estar nutricional, controle digital, investimentos ou empreendedorismo."
    },
    {
      title: "Conecte-se e Aprenda",
      description: "Junte-se à nossa comunidade de devs e entusiastas, compartilhando conhecimento e experiências."
    },
    {
      title: "Construa Soluções Reais",
      description: "Utilize nosso ecossistema modular para desenvolver aplicações que resolvem problemas reais."
    },
    {
      title: "Lance e Evolua",
      description: "Implemente suas soluções, obtenha feedback e continue aprimorando com o suporte da comunidade."
    }
  ];

  const principles = [
    {
      icon: <Code className="w-12 h-12 text-primary-main" />,
      title: "Abordagem Disciplinada",
      description: "Desenvolvimento estruturado e metódico que valoriza qualidade e consistência."
    },
    {
      icon: <LifeBuoy className="w-12 h-12 text-accent-main" />,
      title: "Impacto Tangível",
      description: "Foco em soluções que geram resultados mensuráveis na vida real."
    },
    {
      icon: <Brain className="w-12 h-12 text-categories-personal" />,
      title: "Inovação Colaborativa",
      description: "Criatividade potencializada pela colaboração entre desenvolvedores de diversas especialidades."
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-categories-finance" />,
      title: "Crescimento Sustentável",
      description: "Valorização do progresso contínuo e equilibrado, tanto tecnológico quanto humano."
    }
  ];

  const projects = [
    {
      icon: <Zap className="w-12 h-12 text-accent-main" />,
      title: "ZEN Launcher",
      description: "Minimize distrações e procrastinação com nosso launcher que equilibra produtividade e bem-estar digital.",
      value: "Redução média de 45% no tempo em aplicativos distrativos"
    },
    {
      icon: <Utensils className="w-12 h-12 text-categories-health" />,
      title: "Meu Nutri",
      description: "IA que analisa fotos das suas refeições, oferecendo feedback nutricional personalizado e gamificado.",
      value: "87% dos usuários melhoram seus hábitos alimentares em 30 dias"
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-categories-finance" />,
      title: "O Momento do Investimento",
      description: "Simulações e trilhas gamificadas para quem deseja iniciar no mundo dos investimentos.",
      value: "Aumento de 62% na confiança para investir após 45 dias de uso"
    },
    {
      icon: <Users className="w-12 h-12 text-categories-work" />,
      title: "Rodada de Negócios",
      description: "Plataforma colaborativa que estimula a criação e participação em projetos empreendedores reais.",
      value: "Mais de 230 novos negócios iniciados pela comunidade"
    }
  ];

  return (
    <div className="min-h-screen bg-dark-background text-dark-text overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-radial from-primary-dark via-dark-background to-dark-background opacity-30" />
        
        {/* Animated shapes */}
        <motion.div 
          className="absolute w-64 h-64 rounded-full bg-primary-main/10 blur-3xl"
          animate={{ 
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{ 
            repeat: Infinity,
            duration: 20,
            ease: "easeInOut"
          }}
          style={{ transform: calculateTransform(0.05) }}
        />
        
        <motion.div 
          className="absolute w-96 h-96 rounded-full bg-accent-main/10 blur-3xl -bottom-20 -right-20"
          animate={{ 
            x: [0, -70, 0],
            y: [0, 50, 0],
          }}
          transition={{ 
            repeat: Infinity,
            duration: 25,
            ease: "easeInOut",
            delay: 1
          }}
          style={{ transform: calculateTransform(0.03) }}
        />
        
        <div className="container mx-auto px-4 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary-light via-accent-light to-primary-light bg-clip-text text-transparent">
              Conexões que Transformam
            </h1>
            
            <p className="text-xl md:text-2xl mb-10 text-dark-subtext">
              Um ecossistema de soluções tecnológicas criadas por desenvolvedores <span className="text-accent-main">para desenvolvedores</span>, transformando desafios em oportunidades e hábitos em conquistas.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button className="bg-primary-main hover:bg-primary-dark text-white font-semibold py-3 px-8 rounded-full transition-all transform hover:scale-105 flex items-center">
                Explorar o Ecossistema
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              
              <button className="bg-transparent text-primary-light border border-primary-light hover:bg-primary-main/10 font-semibold py-3 px-8 rounded-full transition-all">
                Para Desenvolvedores
              </button>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 0.7 : 0 }}
          transition={{ duration: 0.8, delay: 2 }}
          className="absolute bottom-10 w-full flex justify-center"
        >
          <ChevronDown className="h-10 w-10 text-dark-subtext animate-bounce" />
        </motion.div>
      </section>

      {/* Como Funciona Section */}
      <section className="py-24 bg-dark-card border-t border-b border-dark-border">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Como o Systentando Funciona</h2>
            <p className="text-xl text-dark-subtext max-w-3xl mx-auto">
              Uma abordagem estruturada para transformar ideias em soluções impactantes, com apoio da nossa comunidade de desenvolvedores.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.6, delay: 0.3 + (index * 0.1) }}
                className={`bg-dark-background border ${activeStep === index ? 'border-primary-main' : 'border-dark-border'} rounded-xl p-6 cursor-pointer transition-all hover:border-primary-light`}
                onClick={() => setActiveStep(index)}
              >
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl ${activeStep === index ? 'bg-primary-main text-white' : 'bg-dark-card text-dark-subtext'}`}>
                    {index + 1}
                  </div>
                  <h3 className="ml-4 text-xl font-semibold">{step.title}</h3>
                </div>
                <p className="text-dark-subtext">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Nossos Princípios Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Nossos Princípios Fundamentais</h2>
            <p className="text-xl text-dark-subtext max-w-3xl mx-auto">
              Valores que orientam nossa abordagem e definem como construímos soluções com impacto real.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {principles.map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.6, delay: 0.3 + (index * 0.1) }}
                className="text-center"
              >
                <div className="bg-dark-card border border-dark-border rounded-2xl p-6 inline-block mb-4">
                  {principle.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{principle.title}</h3>
                <p className="text-dark-subtext">{principle.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Medidor de Curiosidade e Contagem Regressiva */}
      <section className="py-16 bg-dark-card border-t border-b border-dark-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8 }}
              className="bg-dark-background border border-dark-border rounded-xl p-8"
            >
              <h3 className="text-2xl font-bold mb-6 text-center">Descubra mais sobre o Systentando</h3>
              
              <div className="mb-8">
                <p className="mb-2 text-dark-subtext">Medidor de Curiosidade</p>
                <div className="h-4 bg-dark-border rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: "0%" }}
                    animate={{ width: curiosityLevels[currentCuriosity] }}
                    transition={{ duration: 1 }}
                    className="h-full bg-gradient-to-r from-primary-main to-accent-main"
                  />
                </div>
                <div className="flex justify-between text-xs text-dark-subtext mt-1">
                  <span>Interessado</span>
                  <span>Curioso</span>
                  <span>Fascinado</span>
                </div>
              </div>
              
              <div className="mb-8">
                <p className="mb-2 text-dark-subtext">Lançamento em</p>
                <div className="grid grid-cols-4 gap-4">
                  {["22", "15", "43", "07"].map((value, index) => (
                    <div key={index} className="bg-dark-card border border-dark-border rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold">{value}</div>
                      <div className="text-xs text-dark-subtext">
                        {index === 0 ? "Dias" : index === 1 ? "Horas" : index === 2 ? "Minutos" : "Segundos"}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {currentCuriosity >= 2 && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.8 }}
                  className="mb-6 overflow-hidden"
                >
                  <h4 className="text-xl font-semibold mb-3">Por que o Systentando é diferente?</h4>
                  <p className="text-dark-subtext">
                    Nosso ecossistema integra desenvolvimento tecnológico com propósito social, criando soluções que não apenas funcionam bem, mas também impactam positivamente a vida das pessoas.
                  </p>
                </motion.div>
              )}
              
              {currentCuriosity >= 4 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  className="text-center"
                >
                  <button className="bg-accent-main hover:bg-accent-dark text-white font-semibold py-3 px-8 rounded-full transition-all transform hover:scale-105 inline-flex items-center">
                    Garanta Seu Acesso Antecipado
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Nossos Projetos */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Projetos que Transformam</h2>
            <p className="text-xl text-dark-subtext max-w-3xl mx-auto">
              Soluções modulares que funcionam independentemente, mas se potencializam quando usadas em conjunto.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.6, delay: 0.3 + (index * 0.1) }}
                className="bg-dark-card border border-dark-border rounded-xl p-6 hover:border-primary-light transition-all"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-dark-background rounded-xl">
                    {project.icon}
                  </div>
                  <h3 className="ml-4 text-2xl font-bold">{project.title}</h3>
                </div>
                <p className="text-dark-subtext mb-6">{project.description}</p>
                <div className="bg-dark-background rounded-lg p-4 border-l-4 border-accent-main">
                  <p className="font-semibold text-accent-light">{project.value}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Chamada para Ação */}
      <section className="py-24 bg-gradient-to-b from-dark-background to-primary-dark/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Pronto para seu <span className="text-accent-main">novo começo</span> com propósito?
            </h2>
            <p className="text-xl text-dark-subtext mb-10">
              Junte-se a desenvolvedores que estão construindo o futuro através de soluções que importam. Nosso ecossistema está esperando por você.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button className="bg-accent-main hover:bg-accent-dark text-white font-semibold py-4 px-10 rounded-full transition-all transform hover:scale-105 flex items-center">
                Fazer Parte da Comunidade
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="bg-transparent text-primary-light border border-primary-light hover:bg-primary-main/10 font-semibold py-4 px-10 rounded-full transition-all">
                Ver Demonstração
              </button>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-dark-background border-t border-dark-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary-main to-accent-main bg-clip-text text-transparent">Systentando</h3>
              <p className="text-dark-subtext mb-4">
                Transformando ideias em soluções que importam. Construindo um futuro mais conectado e equilibrado.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-dark-subtext hover:text-primary-light transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a href="#" className="text-dark-subtext hover:text-primary-light transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a href="#" className="text-dark-subtext hover:text-primary-light transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-dark-text">Projetos</h4>
              <ul className="space-y-2 text-dark-subtext">
                <li><a href="#" className="hover:text-primary-light transition-colors">ZEN Launcher</a></li>
                <li><a href="#" className="hover:text-primary-light transition-colors">Meu Nutri</a></li>
                <li><a href="#" className="hover:text-primary-light transition-colors">O Momento do Investimento</a></li>
                <li><a href="#" className="hover:text-primary-light transition-colors">Rodada de Negócios</a></li>
                <li><a href="#" className="hover:text-primary-light transition-colors">Systentando ONE</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-dark-text">Desenvolvedores</h4>
              <ul className="space-y-2 text-dark-subtext">
                <li><a href="#" className="hover:text-primary-light transition-colors">Documentação</a></li>
                <li><a href="#" className="hover:text-primary-light transition-colors">Contribua</a></li>
                <li><a href="#" className="hover:text-primary-light transition-colors">GitHub</a></li>
                <li><a href="#" className="hover:text-primary-light transition-colors">Comunidade</a></li>
                <li><a href="#" className="hover:text-primary-light transition-colors">Roadmap</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-dark-text">Contato</h4>
              <ul className="space-y-2 text-dark-subtext">
                <li><a href="#" className="hover:text-primary-light transition-colors">Sobre Nós</a></li>
                <li><a href="#" className="hover:text-primary-light transition-colors">Entre em Contato</a></li>
                <li><a href="#" className="hover:text-primary-light transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-primary-light transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-primary-light transition-colors">Participe da Equipe</a></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-dark-border text-center text-dark-subtext">
            <p>&copy; {new Date().getFullYear()} Systentando. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;

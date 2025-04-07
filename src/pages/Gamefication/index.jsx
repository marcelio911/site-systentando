import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Users, Star, Target, Heart, Zap } from 'lucide-react';

const GamificationPage = () => {
  const [activeSection, setActiveSection] = useState('zen');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const projects = [
    {
      id: 'zen',
      title: 'ZEN Launcher',
      description: 'Reduza ansiedade, tempo de tela e procrastinação com nosso launcher minimalista focado em bem-estar digital.',
      icon: <Zap className="w-12 h-12 text-accent-main" />,
      benefits: [
        'Limita distrações e notificações',
        'Modos de foco customizáveis',
        'Dashboards de tempo de uso',
        'Sistema de recompensas por hábitos saudáveis'
      ],
      challenges: [
        { title: 'Desafio Digital Detox', description: 'Reduza o tempo de tela em 30% por uma semana' },
        { title: 'Foco Profundo', description: 'Complete 5 sessões de trabalho sem distrações' }
      ]
    },
    {
      id: 'nutri',
      title: 'Meu Nutri',
      description: 'IA que analisa suas refeições através de fotos, oferecendo orientação nutricional personalizada e gamificada.',
      icon: <Heart className="w-12 h-12 text-categories-health" />,
      benefits: [
        'Análise nutricional por foto',
        'Recomendações personalizadas',
        'Acompanhamento de progresso visual',
        'Desafios alimentares adaptados ao seu objetivo'
      ],
      challenges: [
        { title: 'Arco-Íris no Prato', description: 'Consuma alimentos de 5 cores diferentes em um dia' },
        { title: 'Hidratação Consciente', description: 'Registre consumo adequado de água por 7 dias' }
      ]
    },
    {
      id: 'invest',
      title: 'O Momento do Investimento',
      description: 'Simulações e trilhas de aprendizado para quem deseja iniciar no mundo dos investimentos de forma segura e educativa.',
      icon: <Target className="w-12 h-12 text-categories-finance" />,
      benefits: [
        'Simulações de cenários financeiros',
        'Trilhas de aprendizado gamificadas',
        'Conquistas por metas financeiras',
        'Comunidade de aprendizado colaborativo'
      ],
      challenges: [
        { title: 'Primeira Reserva', description: 'Economize seu primeiro montante para investimento' },
        { title: 'Diversificação Iniciante', description: 'Simule uma carteira com 3 classes diferentes de ativos' }
      ]
    },
    {
      id: 'rodada',
      title: 'Rodada de Negócios',
      description: 'Ambiente colaborativo que estimula a criação e participação em projetos reais, gerando competições criativas para resolver problemas.',
      icon: <Users className="w-12 h-12 text-categories-work" />,
      benefits: [
        'Desafios de empreendedorismo',
        'Formação de equipes multidisciplinares',
        'Feedback de mentores experientes',
        'Recompensas por soluções inovadoras'
      ],
      challenges: [
        { title: 'Pitch Perfeito', description: 'Apresente sua ideia e receba feedback da comunidade' },
        { title: 'MVP em 48h', description: 'Desenvolva um protótipo funcional em um final de semana' }
      ]
    }
  ];

  const activeProject = projects.find(p => p.id === activeSection);

  return (
    <div className="min-h-screen bg-dark-background text-dark-text">
      <div className="container mx-auto px-4 py-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary-main to-accent-main bg-clip-text text-transparent">
            Transforme Hábitos em Conquistas
          </h1>
          <p className="text-xl md:text-2xl text-dark-subtext max-w-3xl mx-auto">
            Nossa abordagem de gamificação torna o desenvolvimento pessoal uma jornada envolvente e recompensadora.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-8 border-l-4 border-primary-main pl-4">
              Como funciona nossa gamificação
            </h2>
            <div className="space-y-8">
              {[
                {
                  icon: <Star className="w-8 h-8 text-accent-main" />,
                  title: "Conquistas e Recompensas",
                  description: "Receba reconhecimento imediato por cada pequeno avanço em sua jornada."
                },
                {
                  icon: <Target className="w-8 h-8 text-accent-main" />,
                  title: "Desafios Personalizados",
                  description: "Enfrente missões adaptadas ao seu nível e objetivos específicos."
                },
                {
                  icon: <Users className="w-8 h-8 text-accent-main" />,
                  title: "Comunidade Engajada",
                  description: "Conecte-se com pessoas que compartilham seus interesses e metas."
                },
                {
                  icon: <Zap className="w-8 h-8 text-accent-main" />,
                  title: "Progressão Visível",
                  description: "Acompanhe sua evolução através de métricas claras e motivadoras."
                }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                  transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                  className="flex items-start space-x-4"
                >
                  <div className="p-2 bg-dark-card rounded-lg">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                    <p className="text-dark-subtext">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 50 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-dark-card p-8 rounded-xl border border-dark-border"
          >
            <h2 className="text-3xl font-bold mb-8">Nossos Projetos Gamificados</h2>
            
            <div className="flex flex-wrap gap-3 mb-8">
              {projects.map(project => (
                <button
                  key={project.id}
                  onClick={() => setActiveSection(project.id)}
                  className={`px-4 py-2 rounded-full transition-all ${
                    activeSection === project.id 
                      ? 'bg-primary-main text-dark-text' 
                      : 'bg-dark-background text-dark-subtext hover:bg-dark-border'
                  }`}
                >
                  {project.title}
                </button>
              ))}
            </div>
            
            {activeProject && (
              <motion.div
                key={activeProject.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-dark-background rounded-xl">
                    {activeProject.icon}
                  </div>
                  <h3 className="text-2xl font-bold">{activeProject.title}</h3>
                </div>
                
                <p className="text-dark-subtext">{activeProject.description}</p>
                
                <div>
                  <h4 className="text-lg font-semibold mb-3">Benefícios:</h4>
                  <ul className="space-y-2">
                    {activeProject.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <div className="mr-2 mt-1 text-primary-light">•</div>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold mb-3">Exemplos de Desafios:</h4>
                  <div className="space-y-3">
                    {activeProject.challenges.map((challenge, index) => (
                      <div key={index} className="bg-dark-background p-4 rounded-lg">
                        <h5 className="font-semibold text-accent-light">{challenge.title}</h5>
                        <p className="text-sm text-dark-subtext">{challenge.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-center mt-16"
        >
          <h2 className="text-3xl font-bold mb-8">Transforme seus objetivos em uma jornada emocionante</h2>
          <div className="inline-block">
            <button className="bg-accent-main hover:bg-accent-dark text-white font-bold py-4 px-8 rounded-full transition-all transform hover:scale-105">
              Comece Sua Jornada
            </button>
          </div>
          <div className="mt-8 animate-bounce">
            <ChevronDown className="mx-auto w-8 h-8 text-dark-subtext" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default GamificationPage;

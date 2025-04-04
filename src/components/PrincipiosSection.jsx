import React from 'react';
import { Clock, LineChart, Lightbulb, Users } from 'lucide-react';
import { colors } from '../utils/colors';

const PrincipiosSection = () => {
  const principles = [
    {
      title: "Abordagem Disciplinada",
      description: "Projetos em tempo real resolvem problemas reais com resultados tangíveis e progresso mensurável.",
      icon: <Clock size={32} color={colors.primary.main} />,
      color: colors.primary.main,
      tagline: "Espírito Espartano",
      example: "Lançamento do protótipo funcional do Zen Launcher em apenas 6 semanas, com uma equipe enxuta de 4 desenvolvedores."
    },
    {
      title: "Orientado a Resultados",
      description: "Entregamos provas em vez de promessas, lançando produtos funcionais de forma rápida e eficaz.",
      icon: <LineChart size={32} color={colors.accent.main} />,
      color: colors.accent.main,
      tagline: "Impacto Mensurável",
      example: "Meu Nutri já ajudou mais de 200 usuários beta a melhorar seus hábitos alimentares com feedback personalizados em tempo real."
    },
    {
      title: "Resiliência Criativa",
      description: "Criamos soluções únicas internamente com disciplina, engenhosidade e uso inteligente de recursos.",
      icon: <Lightbulb size={32} color={colors.categories.health} />,
      color: colors.categories.health,
      tagline: "Inovação Contínua",
      example: "Nossa plataforma de Rodada de Negócios conectou 15 empreendedores iniciantes com mentores experientes, gerando 5 MVPs em 30 dias."
    },
    {
      title: "Crescimento Coletivo",
      description: "Mentores experientes guiam aprendizes em um ecossistema simbiótico que eleva habilidades e resultados.",
      icon: <Users size={32} color={colors.categories.work} />,
      color: colors.categories.work,
      tagline: "Colaboração Efetiva",
      example: "O Momento do Investimento foi concebido, desenvolvido e testado em 45 dias, validando conceitos com usuários reais desde o primeiro protótipo."
    }
  ];

  return (
    <section 
      style={{ 
        backgroundColor: colors.dark.card,
        padding: '6rem 1rem'
      }}
      id="principios"
    >
      <div className="container mx-auto">
        <div 
          style={{ 
            textAlign: 'center',
            marginBottom: '4rem'
          }}
        >
          <h2 
            style={{ 
              color: 'white',
              fontSize: '2rem',
              fontWeight: 'bold',
              marginBottom: '1rem'
            }}
          >
            Princípios Fundamentais
          </h2>
          
          <div 
            style={{ 
              backgroundColor: colors.accent.main,
              height: '4px',
              width: '100px',
              margin: '0 auto 2rem'
            }}
          ></div>
          
          <p 
            style={{ 
              color: colors.dark.subtext,
              fontSize: '1.125rem',
              maxWidth: '800px',
              margin: '0 auto'
            }}
          >
            A base que orienta tudo o que construímos no Systentando.
          </p>
        </div>

        <div 
          style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '2rem'
          }}
        >
          {principles.map((principle, index) => (
            <div 
              key={index}
              style={{ 
                backgroundColor: colors.dark.background,
                borderRadius: '0.75rem',
                padding: '2rem',
                borderLeft: `4px solid ${principle.color}`,
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)'
              }}
            >
              <div 
                style={{ 
                  marginBottom: '1.5rem'
                }}
              >
                {principle.icon}
              </div>
              
              <h3 
                style={{ 
                  color: 'white',
                  fontSize: '1.25rem',
                  fontWeight: 'bold',
                  marginBottom: '1rem'
                }}
              >
                {principle.title}
              </h3>
              
              <p 
                style={{ 
                  color: colors.dark.subtext,
                  fontSize: '0.9rem',
                  marginBottom: '1.5rem',
                  lineHeight: '1.5'
                }}
              >
                {principle.description}
              </p>
              
              <div 
                style={{ 
                  marginBottom: '1.5rem',
                  height: '1px',
                  backgroundColor: colors.dark.border
                }}
              ></div>
              
              <p 
                style={{ 
                  fontSize: '0.9rem',
                  color: principle.color,
                  fontWeight: 'bold',
                  marginBottom: '0.5rem'
                }}
              >
                Exemplo:
              </p>
              
              <p 
                style={{ 
                  fontSize: '0.9rem',
                  color: colors.dark.subtext,
                  fontStyle: 'italic'
                }}
              >
                {principle.example}
              </p>
              
              <div 
                style={{ 
                  marginTop: '1.5rem',
                  backgroundColor: `${principle.color}22`,
                  display: 'inline-block',
                  padding: '0.5rem 1rem',
                  borderRadius: '1rem',
                  color: principle.color,
                  fontWeight: 'bold',
                  fontSize: '0.8rem'
                }}
              >
                {principle.tagline}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrincipiosSection;

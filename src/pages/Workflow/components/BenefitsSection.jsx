import React from 'react';
import { colors } from '../../../utils/colors';

const BenefitCard = ({ title, description, features, gradient }) => {
  return (
    <div
      style={{
        backgroundColor: colors.dark.card,
        borderRadius: '1rem',
        overflow: 'hidden',
        border: `1px solid ${colors.dark.border}`,
        transition: 'transform 0.3s ease, box-shadow 0.3s ease'
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.transform = 'translateY(-5px)';
        e.currentTarget.style.boxShadow = `0 10px 20px rgba(0, 0, 0, 0.3)`;
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      <div
        style={{
          height: '140px',
          background: gradient,
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <h3
          style={{
            fontSize: '1.75rem',
            color: 'white',
            textAlign: 'center',
            textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
            fontWeight: 'bold'
          }}
        >
          {title}
        </h3>
      </div>
      
      <div
        style={{
          padding: '1.5rem'
        }}
      >
        <p
          style={{
            color: colors.dark.subtext,
            marginBottom: '1.5rem',
            lineHeight: 1.6
          }}
        >
          {description}
        </p>
        
        <ul
          style={{
            listStyleType: 'none',
            padding: '0'
          }}
        >
          {features.map((feature, index) => (
            <li
              key={index}
              style={{
                marginBottom: '1rem',
                color: colors.dark.subtext,
                display: 'flex',
                alignItems: 'flex-start'
              }}
            >
              <span
                style={{
                  color: colors.accent.main,
                  marginRight: '0.75rem',
                  fontWeight: 'bold'
                }}
              >✓</span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const BenefitsSection = () => {
  const benefits = [
    {
      title: 'DevPack Toolkit',
      description: 'Acesso ao nosso conjunto de ferramentas de desenvolvimento que aumentará drasticamente sua produtividade.',
      features: [
        'Generators de componentes e serviços',
        'Ferramentas de análise de qualidade de código',
        'Componentes reutilizáveis para todos os produtos'
      ],
      gradient: `linear-gradient(135deg, ${colors.categories.work}, ${colors.primary.main})`
    },
    {
      title: 'Acesso Premium',
      description: 'Acesso completo a todos os produtos do ecossistema Systentando, com base no seu nível de contribuição.',
      features: [
        'ZEN Launcher para aumentar produtividade',
        'Meu Nutri para alimentação saudável',
        'Rodadas de Negócios e O Momento do Investimento'
      ],
      gradient: `linear-gradient(135deg, ${colors.categories.personal}, ${colors.accent.main})`
    },
    {
      title: 'Know-how Empreendedor',
      description: 'Acesso a conteúdos exclusivos, dados estratégicos e mentorias para desenvolver seu próprio negócio.',
      features: [
        'Documentação detalhada e estudos de caso',
        'Vídeos e tutoriais sobre empreendedorismo',
        'Dados e insights sobre mercados e tendências'
      ],
      gradient: `linear-gradient(135deg, ${colors.categories.finance}, ${colors.categories.health})`
    }
  ];

  return (
    <section
      id="benefits"
      style={{
        padding: '4rem 2rem',
        backgroundColor: `${colors.primary.dark}44`,
        borderTop: `1px solid ${colors.dark.border}`,
        borderBottom: `1px solid ${colors.dark.border}`
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}
      >
        <h2
          style={{
            fontSize: '2rem',
            fontWeight: 'bold',
            marginBottom: '3rem',
            color: colors.accent.main,
            textAlign: 'center'
          }}
        >
          O que você ganha ao contribuir
        </h2>
        
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}
        >
          {benefits.map((benefit, index) => (
            <BenefitCard 
              key={index}
              title={benefit.title}
              description={benefit.description}
              features={benefit.features}
              gradient={benefit.gradient}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;

import React from 'react';
import { colors } from '../../../utils/colors';

const ExpectationCard = ({ title, description, items, color }) => {
  return (
    <div
      style={{
        backgroundColor: colors.dark.card,
        borderRadius: '1rem',
        padding: '2rem',
        border: `1px solid ${colors.dark.border}`,
        transition: 'transform 0.3s ease, box-shadow 0.3s ease'
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.transform = 'translateY(-5px)';
        e.currentTarget.style.boxShadow = `0 10px 20px rgba(0, 0, 0, 0.2)`;
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      <h3
        style={{
          fontSize: '1.5rem',
          marginBottom: '1rem',
          color: color
        }}
      >
        {title}
      </h3>
      
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
          padding: 0
        }}
      >
        {items.map((item, index) => (
          <li
            key={index}
            style={{
              marginBottom: '0.75rem',
              display: 'flex',
              alignItems: 'flex-start'
            }}
          >
            <span
              style={{
                display: 'inline-block',
                width: '8px',
                height: '8px',
                backgroundColor: color,
                borderRadius: '50%',
                marginRight: '0.75rem',
                marginTop: '0.5rem'
              }}
            />
            <span style={{ color: colors.dark.subtext }}>
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const ExpectationsSection = () => {
  const expectations = [
    {
      title: 'Colaboração Ativa',
      description: 'Participe ativamente no desenvolvimento de código, documentação, testes ou design. Todas as contribuições são valiosas, independente do nível de experiência.',
      items: [
        'Pull requests que seguem nossos padrões de código',
        'Participação em discussões técnicas e revisões de código',
        'Melhoria contínua com base em feedback da comunidade'
      ],
      color: colors.categories.work
    },
    {
      title: 'Mentalidade Inovadora',
      description: 'Proponha novas ideias e soluções criativas para os desafios que enfrentamos. Estamos construindo o futuro do empreendedorismo para desenvolvedores.',
      items: [
        'Sugestão de novos recursos e melhorias',
        'Abordagem criativa para resolução de problemas',
        'Experimentação com novas tecnologias e abordagens'
      ],
      color: colors.categories.personal
    },
    {
      title: 'Compromisso com Resultados',
      description: 'Desenvolva com foco em impacto real, criando soluções que possam ser aplicadas na vida real dos empreendedores e suas empresas.',
      items: [
        'Cumprimento de prazos e compromissos',
        'Desenvolvimento orientado por métricas e impacto',
        'Validação constante com usuários reais'
      ],
      color: colors.categories.finance
    }
  ];

  return (
    <section
      id="expectations"
      style={{
        padding: '4rem 2rem',
        maxWidth: '1200px',
        margin: '0 auto'
      }}
    >
      <h2
        style={{
          fontSize: '2rem',
          fontWeight: 'bold',
          marginBottom: '2rem',
          color: colors.accent.main,
          textAlign: 'center'
        }}
      >
        O que esperamos dos nossos contribuidores
      </h2>
      
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          marginTop: '3rem'
        }}
      >
        {expectations.map((expectation, index) => (
          <ExpectationCard
            key={index}
            title={expectation.title}
            description={expectation.description}
            items={expectation.items}
            color={expectation.color}
          />
        ))}
      </div>
    </section>
  );
};

export default ExpectationsSection;

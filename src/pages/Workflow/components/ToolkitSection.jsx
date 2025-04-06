import React from 'react';
import { colors } from '../../../utils/colors';

const ToolCard = ({ title, description, features, icon }) => {
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
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          marginBottom: '1.5rem',
          gap: '1rem'
        }}
      >
        <div
          style={{
            width: '50px',
            height: '50px',
            borderRadius: '12px',
            backgroundColor: `${colors.primary.main}33`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: colors.accent.main,
            fontSize: '1.5rem'
          }}
        >
          {icon}
        </div>
        
        <h3
          style={{
            fontSize: '1.5rem',
            color: colors.dark.text,
            margin: 0
          }}
        >
          {title}
        </h3>
      </div>
      
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
          padding: 0,
          margin: 0
        }}
      >
        {features.map((feature, index) => (
          <li
            key={index}
            style={{
              margin: '0.75rem 0',
              color: colors.dark.subtext,
              display: 'flex',
              alignItems: 'flex-start'
            }}
          >
            <span
              style={{
                color: colors.accent.main,
                marginRight: '0.75rem'
              }}
            >→</span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};

const ToolkitSection = () => {
  const tools = [
    {
      title: 'DevPack CLI',
      description: 'Ferramenta de linha de comando que turbina seu fluxo de desenvolvimento, gerando código, configurações e templates automaticamente.',
      features: [
        'Scaffold de componentes e serviços completos',
        'Análise de qualidade e padrões de código',
        'Pipelines de CI/CD pré-configurados'
      ],
      icon: '⚙️'
    },
    {
      title: 'Design System',
      description: 'Biblioteca completa de componentes visuais e padrões de interface que garantem consistência em todos os produtos.',
      features: [
        'Componentes React com acessibilidade integrada',
        'Temas escuro e claro com cores personalizáveis',
        'Documentação interativa e exemplos de uso'
      ],
      icon: '🎨'
    },
    {
      title: 'API Integration Kit',
      description: 'Conjunto de ferramentas para facilitar a integração e consumo de APIs do ecossistema Systentando em seus projetos.',
      features: [
        'Clientes pré-configurados para todas as APIs',
        'Typings e validação automática de requests',
        'Cache inteligente e tratamento de erros'
      ],
      icon: '🔌'
    },
    {
      title: 'Dados e Analytics',
      description: 'Ferramentas para coleta, análise e visualização de dados de negócios aplicáveis em diversos contextos empreendedores.',
      features: [
        'Dashboards customizáveis para métricas de negócios',
        'Modelos preditivos para análise de tendências',
        'Integração com fontes externas de dados de mercado'
      ],
      icon: '📊'
    }
  ];

  return (
    <section
      id="toolkit"
      style={{
        padding: '4rem 2rem',
        backgroundColor: colors.dark.background
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
            marginBottom: '1rem',
            color: colors.accent.main,
            textAlign: 'center'
          }}
        >
          Toolkit do Desenvolvedor
        </h2>
        
        <p
          style={{
            fontSize: '1.1rem',
            maxWidth: '800px',
            margin: '0 auto 3rem',
            color: colors.dark.subtext,
            textAlign: 'center',
            lineHeight: 1.6
          }}
        >
          Conheça as ferramentas exclusivas que disponibilizamos para aumentar sua produtividade
          e capacidade de criar soluções de alto impacto
        </p>
        
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem'
          }}
        >
          {tools.map((tool, index) => (
            <ToolCard
              key={index}
              title={tool.title}
              description={tool.description}
              features={tool.features}
              icon={tool.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolkitSection;

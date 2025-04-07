import React from 'react';
import { colors } from '../../../utils/colors';

const LevelCard = ({ level, title, description, requirements, rewards }) => {
  return (
    <div
      style={{
        backgroundColor: colors.dark.card,
        borderRadius: '1rem',
        padding: '2rem',
        border: `1px solid ${colors.dark.border}`,
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem'
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem'
        }}
      >
        <div
          style={{
            width: '50px',
            height: '50px',
            backgroundColor: colors.primary.main,
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontWeight: 'bold',
            fontSize: '1.25rem'
          }}
        >
          {level}
        </div>
        
        <div>
          <h3
            style={{
              fontSize: '1.5rem',
              color: colors.dark.text,
              marginBottom: '0.25rem'
            }}
          >
            {title}
          </h3>
        </div>
      </div>
      
      <p
        style={{
          color: colors.dark.subtext,
          lineHeight: 1.6
        }}
      >
        {description}
      </p>
      
      <div>
        <h4
          style={{
            fontSize: '1.1rem',
            color: colors.accent.main,
            marginBottom: '0.75rem'
          }}
        >
          Requisitos
        </h4>
        
        <ul
          style={{
            listStyleType: 'none',
            padding: '0',
            marginBottom: '1.5rem'
          }}
        >
          {requirements.map((req, index) => (
            <li
              key={index}
              style={{
                marginBottom: '0.5rem',
                color: colors.dark.subtext,
                display: 'flex',
                alignItems: 'flex-start'
              }}
            >
              <span
                style={{
                  color: colors.primary.light,
                  marginRight: '0.75rem'
                }}
              >•</span>
              {req}
            </li>
          ))}
        </ul>
        
        <h4
          style={{
            fontSize: '1.1rem',
            color: colors.accent.main,
            marginBottom: '0.75rem'
          }}
        >
          Recompensas
        </h4>
        
        <ul
          style={{
            listStyleType: 'none',
            padding: '0'
          }}
        >
          {rewards.map((reward, index) => (
            <li
              key={index}
              style={{
                marginBottom: '0.5rem',
                color: colors.dark.subtext,
                display: 'flex',
                alignItems: 'flex-start'
              }}
            >
              <span
                style={{
                  color: colors.accent.light,
                  marginRight: '0.75rem'
                }}
              >•</span>
              {reward}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const ContributionLevelsSection = () => {
  const levels = [
    {
      level: 1,
      title: 'Explorador',
      description: 'Primeiro nível para os novos membros, obtido apenas por fornecer dados para nossos modelos de machine learning e participar das pesquisas iniciais.',
      requirements: [
        'Cadastro completo no portal de desenvolvedores',
        'Permissão para coleta de dados de uso para modelos de ML',
        'Participação em pesquisas de UX e feedback'
      ],
      rewards: [
        'Acesso ao DevPack básico (ferramentas de produtividade)',
        'Acesso ao ZEN Launcher versão padrão',
        'Insights personalizados baseados em seus dados'
      ]
    },
    {
      level: 2,
      title: 'Colaborador',
      description: 'Desenvolvedor com experiência no ecossistema, contribuindo regularmente e ajudando a comunidade.',
      requirements: [
        'Pelo menos 5 contribuições aceitas',
        'Revisão de código de outros desenvolvedores',
        'Solução de problemas de complexidade média'
      ],
      rewards: [
        'DevPack completo com templates avançados de código',
        'Acesso ao ZEN Launcher e Meu Nutri completos',
        'Acesso a modelos de ML básicos para integração em projetos'
      ]
    },
    {
      level: 3,
      title: 'Especialista',
      description: 'Membro altamente qualificado, especializado em um ou mais produtos do ecossistema e contribuindo significativamente.',
      requirements: [
        'Contribuições regulares por pelo menos 3 meses',
        'Desenvolvimento de novas funcionalidades completas',
        'Mentoria para novos desenvolvedores'
      ],
      rewards: [
        'Acesso a todo o ecossistema Systentando',
        'API completa para todos os modelos de ML treinados',
        'Conjuntos de dados anonimizados para análise e experimentação'
      ]
    },
    {
      level: 4,
      title: 'Líder',
      description: 'Membro que lidera iniciativas, define a direção do projeto e representa a comunidade.',
      requirements: [
        'Histórico comprovado de contribuições de alto impacto',
        'Liderança em pelo menos um projeto ou módulo',
        'Capacidade de tomar decisões técnicas complexas'
      ],
      rewards: [
        'Acesso antecipado a modelos experimentais de IA',
        'Infraestrutura para treinamento de modelos personalizados',
        'Co-autoria em publicações sobre os resultados dos modelos'
      ]
    }
  ];

  return (
    <section
      id="levels"
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
          marginBottom: '1rem',
          color: colors.accent.main,
          textAlign: 'center'
        }}
      >
        Níveis de Contribuição
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
          Seu progresso na comunidade é reconhecido através de níveis que desbloqueiam
          acesso a mais recursos, ferramentas de Machine Learning e conjuntos de dados para análise.
      </p>
      
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem'
        }}
      >
        {levels.map((level, index) => (
          <LevelCard
            key={index}
            level={level.level}
            title={level.title}
            description={level.description}
            requirements={level.requirements}
            rewards={level.rewards}
          />
        ))}
      </div>
    </section>
  );
};

export default ContributionLevelsSection;

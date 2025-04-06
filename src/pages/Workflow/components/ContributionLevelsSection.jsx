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
      description: 'Primeiro nível para os novos membros que estão conhecendo o ecossistema e começando suas primeiras contribuições.',
      requirements: [
        'Cadastro completo no portal de desenvolvedores',
        'Primeira contribuição aceita (documentação, bug fix simples)',
        'Participação ativa nas discussões do fórum'
      ],
      rewards: [
        'Acesso ao DevPack básico',
        'Acesso ao ZEN Launcher versão padrão',
        'Tutoriais e documentação técnica completa'
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
        'Acesso ao DevPack completo',
        'Acesso ao ZEN Launcher e Meu Nutri',
        'Workshops exclusivos sobre desenvolvimento e empreendedorismo'
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
        'Participação em Rodadas de Negócios',
        'Dados estratégicos de mercado e insights de negócios'
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
        'Acesso privilegiado a todas as ferramentas de negócio',
        'Participação nas decisões estratégicas do ecossistema',
        'Suporte para desenvolvimento do próprio negócio no ecossistema'
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
        acesso a mais recursos e benefícios
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

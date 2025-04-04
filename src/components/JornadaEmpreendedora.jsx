import React from 'react';
import { colors } from '../utils/colors';

const JornadaEmpreendedora = () => {
  const targetGroups = [
    {
      title: "Desenvolvedores",
      color: colors.primary.main,
      icon: "💻",
      description: "Construa soluções reais, aprenda com mentores e amplie suas habilidades técnicas e de negócio."
    },
    {
      title: "Empreendedores",
      color: colors.accent.main,
      icon: "💼",
      description: "Valide ideias rapidamente, conecte-se com talentos e escale seu negócio com tecnologia."
    },
    {
      title: "Mentores",
      color: colors.categories.health,
      icon: "💡",
      description: "Compartilhe conhecimento, inspire novos talentos e expanda sua rede de contatos."
    }
  ];

  const valueMetric = {
    title: "Valor",
    value: "3x",
    description: "ROI médio"
  };

  return (
    <section 
      style={{ 
        backgroundColor: colors.dark.background,
        padding: '6rem 1rem'
      }}
      id="jornada"
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
              marginBottom: '2rem'
            }}
          >
            Pronto Para Sua Jornada Empreendedora?
          </h2>
          <p 
            style={{ 
              color: colors.dark.subtext,
              fontSize: '1.125rem',
              maxWidth: '800px',
              margin: '0 auto'
            }}
          >
            Seja você um desenvolvedor buscando novos desafios, um empreendedor 
            querendo impactar vidas ou um investidor procurando projetos inovadores, 
            o Systentando oferece oportunidades únicas para moldar o futuro.
          </p>
        </div>

        <div 
          style={{ 
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '2rem',
            marginBottom: '4rem'
          }}
        >
          {/* Grupos-alvo */}
          {targetGroups.map((group, index) => (
            <div 
              key={index}
              style={{ 
                backgroundColor: colors.dark.card,
                borderRadius: '0.75rem',
                padding: '2rem',
                width: '100%',
                maxWidth: '320px',
                border: `1px solid ${group.color}`,
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)'
              }}
            >
              <div 
                style={{ 
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '1rem'
                }}
              >
                <div 
                  style={{ 
                    backgroundColor: `${group.color}22`,
                    borderRadius: '50%',
                    width: '48px',
                    height: '48px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '1rem',
                    fontSize: '24px'
                  }}
                >
                  {group.icon}
                </div>
                <h3 
                  style={{ 
                    color: group.color,
                    fontSize: '1.5rem',
                    fontWeight: 'bold'
                  }}
                >
                  {group.title}
                </h3>
              </div>
              
              <div 
                style={{ 
                  width: '50px',
                  height: '2px',
                  backgroundColor: group.color,
                  marginBottom: '1rem'
                }}
              ></div>
              
              <p 
                style={{ 
                  color: colors.dark.subtext,
                  fontSize: '1rem',
                  lineHeight: '1.6'
                }}
              >
                {group.description}
              </p>
            </div>
          ))}

          {/* Valor/Métrica */}
          <div 
            style={{ 
              backgroundColor: colors.primary.main,
              color: 'white',
              borderRadius: '0.75rem',
              padding: '2rem',
              width: '100%',
              maxWidth: '220px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <h3 
              style={{ 
                fontSize: '1.25rem',
                fontWeight: 'bold',
                marginBottom: '0.5rem'
              }}
            >
              {valueMetric.title}
            </h3>
            <div 
              style={{ 
                fontSize: '4rem',
                fontWeight: 'bold',
                marginBottom: '0.5rem'
              }}
            >
              {valueMetric.value}
            </div>
            <p>{valueMetric.description}</p>
          </div>
        </div>

        {/* Call to Action */}
        <div 
          style={{ 
            textAlign: 'center'
          }}
        >
          <button 
            style={{ 
              backgroundColor: colors.accent.main,
              color: 'white',
              borderRadius: '2rem',
              padding: '1rem 2rem',
              fontSize: '1.125rem',
              fontWeight: 'bold',
              border: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => e.currentTarget.style.opacity = '0.9'}
            onMouseOut={(e) => e.currentTarget.style.opacity = '1'}
          >
            Junte-se à Nossa Comunidade →
          </button>
        </div>
      </div>
    </section>
  );
};

export default JornadaEmpreendedora;

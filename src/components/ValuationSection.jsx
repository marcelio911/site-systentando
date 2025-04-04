import React from 'react';
import { colors } from '../utils/colors';

const ValuationSection = () => {
  const metrics = [
    {
      title: "Crescimento de Usuários",
      value: "87%",
      description: "Crescimento anual",
      color: colors.primary.main,
      percentage: 87
    },
    {
      title: "Projetos Concluídos",
      value: "75+",
      description: "Soluções implementadas",
      color: colors.accent.main,
      percentage: 75
    },
    {
      title: "Membros Ativos",
      value: "250+",
      description: "Desenvolvedores e mentores",
      color: colors.categories.health,
      percentage: 62
    }
  ];

  const projectValues = [
    { name: "ZEN", value: 50, color: colors.categories.personal },
    { name: "Nutri", value: 70, color: colors.categories.health },
    { name: "Negócios", value: 40, color: colors.categories.work },
    { name: "Investimento", value: 60, color: colors.categories.finance },
    { name: "Empreenda", value: 80, color: colors.feedback.warning },
    { name: "One", value: 100, color: colors.primary.main }
  ];

  // Função para criar um gráfico de círculo
  const CircleGraph = ({ percentage, color }) => {
    const radius = 40;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    return (
      <svg width={radius * 2 + 10} height={radius * 2 + 10} viewBox={`0 0 ${radius * 2 + 10} ${radius * 2 + 10}`}>
        <circle
          cx={radius + 5}
          cy={radius + 5}
          r={radius}
          fill="transparent"
          stroke={colors.dark.border}
          strokeWidth="8"
        />
        <circle
          cx={radius + 5}
          cy={radius + 5}
          r={radius}
          fill="transparent"
          stroke={color}
          strokeWidth="8"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          transform={`rotate(-90 ${radius + 5} ${radius + 5})`}
        />
      </svg>
    );
  };

  return (
    <section 
      style={{ 
        backgroundColor: colors.dark.background,
        padding: '6rem 1rem'
      }}
      id="valuation"
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
            Valuation do Ecossistema
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
            Métricas que demonstram o valor tangível gerado pelos nossos projetos.
          </p>
        </div>

        {/* Métricas */}
        <div 
          style={{ 
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '2rem',
            marginBottom: '4rem'
          }}
        >
          {metrics.map((metric, index) => (
            <div 
              key={index}
              style={{ 
                backgroundColor: colors.dark.card,
                borderRadius: '0.75rem',
                padding: '2rem',
                width: '100%',
                maxWidth: '300px',
                textAlign: 'center',
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)'
              }}
            >
              <h3 
                style={{ 
                  color: 'white',
                  fontSize: '1.25rem',
                  fontWeight: 'bold',
                  marginBottom: '1.5rem'
                }}
              >
                {metric.title}
              </h3>
              
              <div 
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  marginBottom: '1.5rem'
                }}
              >
                <CircleGraph percentage={metric.percentage} color={metric.color} />
              </div>
              
              <div 
                style={{ 
                  fontSize: '2rem',
                  fontWeight: 'bold',
                  color: metric.color,
                  marginBottom: '0.5rem'
                }}
              >
                {metric.value}
              </div>
              
              <p 
                style={{ 
                  color: colors.dark.subtext
                }}
              >
                {metric.description}
              </p>
            </div>
          ))}
        </div>

        {/* Gráfico de Valores por Projeto */}
        <div 
          style={{ 
            backgroundColor: colors.dark.card,
            borderRadius: '0.75rem',
            padding: '2rem',
            marginBottom: '2rem',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)'
          }}
        >
          <h3 
            style={{ 
              color: 'white',
              fontSize: '1.25rem',
              fontWeight: 'bold',
              marginBottom: '2rem',
              textAlign: 'center'
            }}
          >
            Projeção de Valor por Projeto
          </h3>
          
          <div 
            style={{ 
              position: 'relative',
              height: '200px',
              marginBottom: '1rem',
              padding: '0 2rem'
            }}
          >
            {/* Linha de valor total */}
            <div 
              style={{ 
                position: 'absolute',
                top: '20px',
                left: '40px',
                right: '40px',
                height: '2px',
                backgroundColor: colors.accent.main,
                borderStyle: 'dashed'
              }}
            >
              <div 
                style={{ 
                  position: 'absolute',
                  right: '-60px',
                  top: '-12px',
                  color: colors.accent.main,
                  fontWeight: 'bold'
                }}
              >
                $2.5M
              </div>
              <div 
                style={{ 
                  position: 'absolute',
                  right: '-60px',
                  top: '5px',
                  color: colors.dark.subtext,
                  fontSize: '0.75rem'
                }}
              >
                Valuation
              </div>
            </div>
            
            {/* Eixo X */}
            <div 
              style={{ 
                position: 'absolute',
                bottom: '0',
                left: '40px',
                right: '40px',
                height: '2px',
                backgroundColor: colors.dark.border
              }}
            ></div>
            
            {/* Eixo Y */}
            <div 
              style={{ 
                position: 'absolute',
                bottom: '0',
                left: '40px',
                width: '2px',
                height: '160px',
                backgroundColor: colors.dark.border
              }}
            ></div>
            
            {/* Barras */}
            <div 
              style={{ 
                display: 'flex',
                justifyContent: 'space-between',
                height: '160px',
                position: 'absolute',
                bottom: '0',
                left: '60px',
                right: '60px'
              }}
            >
              {projectValues.map((project, index) => (
                <div 
                  key={index}
                  style={{ 
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: '60px'
                  }}
                >
                  <div 
                    style={{ 
                      backgroundColor: project.color,
                      width: '40px',
                      height: `${project.value}px`,
                      marginBottom: '10px'
                    }}
                  ></div>
                  <div style={{ color: colors.dark.subtext, fontSize: '0.8rem' }}>
                    {project.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Resumo de Valor */}
        <div style={{ textAlign: 'center' }}>
          <p style={{ color: colors.dark.subtext, maxWidth: '800px', margin: '0 auto', fontSize: '1rem' }}>
            O Systentando One e seus projetos integrados representam uma proposta de valor única,
            com potencial de mercado estimado em $2.5M nos próximos 3 anos de operação.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ValuationSection;

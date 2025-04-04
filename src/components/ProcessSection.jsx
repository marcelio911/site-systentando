import React from 'react';
import { colors } from '../utils/colors';

const ProcessSection = () => {
  const steps = [
    {
      number: 1,
      title: "Escolha Seu Desafio",
      description: "Selecione entre projetos curados como ZEN Launcher, Meu Nutri ou O Momento do Investimento, baseados nos seus interesses."
    },
    {
      number: 2,
      title: "Conecte-se e Aprenda",
      description: "Trabalhe com mentores experientes em sprints estruturados, adquirindo conhecimento prático através do desenvolvimento ativo."
    },
    {
      number: 3,
      title: "Construa Soluções Reais",
      description: "Desenvolva aplicações funcionais que atendem necessidades reais de negócios, com suporte de nossas ferramentas e mentoria."
    },
    {
      number: 4,
      title: "Lance e Evolua",
      description: "Transforme projetos bem sucedidos em protótipos ou aproveite sua experiência para avançar na carreira e explorar novas oportunidades."
    }
  ];

  return (
    <section 
      style={{ 
        backgroundColor: colors.dark.background,
        padding: '6rem 1rem'
      }}
      id="processo"
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
            Como o Systentando Funciona
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
            Nossa abordagem disciplinada de quatro etapas conecta desenvolvedores a projetos de impacto real.
          </p>
        </div>

        <div 
          style={{ 
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '2rem'
          }}
        >
          {steps.map((step, index) => (
            <div 
              key={index}
              style={{ 
                backgroundColor: colors.dark.card,
                borderRadius: '0.75rem',
                padding: '2rem',
                width: '100%',
                maxWidth: '250px',
                position: 'relative',
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)'
              }}
            >
              {/* Número do passo */}
              <div 
                style={{ 
                  backgroundColor: colors.accent.main,
                  color: 'white',
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  marginBottom: '1.5rem'
                }}
              >
                {step.number}
              </div>
              
              {/* Linha conectora */}
              {index < steps.length - 1 && (
                <div 
                  style={{ 
                    position: 'absolute',
                    top: '30px',
                    right: '-22px',
                    width: '40px',
                    height: '2px',
                    backgroundColor: colors.accent.main,
                    zIndex: 10
                  }}
                ></div>
              )}
              
              <h3 
                style={{ 
                  color: 'white',
                  fontSize: '1.25rem',
                  fontWeight: 'bold',
                  marginBottom: '1rem'
                }}
              >
                {step.title}
              </h3>
              
              <p 
                style={{ 
                  color: colors.dark.subtext,
                  fontSize: '0.9rem',
                  lineHeight: '1.5'
                }}
              >
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;

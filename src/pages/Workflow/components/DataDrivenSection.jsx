import React from 'react';
import { colors } from '../../../utils/colors';

const FeatureCard = ({ title, description, icon, gradient }) => {
  return (
    <div
      style={{
        backgroundColor: colors.dark.card,
        borderRadius: '1rem',
        overflow: 'hidden',
        border: `1px solid ${colors.dark.border}`,
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease'
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.transform = 'translateY(-8px)';
        e.currentTarget.style.boxShadow = '0 12px 30px rgba(0, 0, 0, 0.2)';
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      {/* Header with gradient */}
      <div
        style={{
          background: gradient,
          height: '8px'
        }}
      />
      
      <div
        style={{
          padding: '2rem',
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            marginBottom: '1.5rem'
          }}
        >
          <div
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: '1rem',
              fontSize: '24px'
            }}
          >
            {icon}
          </div>
          
          <h3
            style={{
              margin: 0,
              fontSize: '1.5rem',
              color: 'white',
              fontWeight: 'bold'
            }}
          >
            {title}
          </h3>
        </div>
        
        <p
          style={{
            color: colors.dark.subtext,
            lineHeight: 1.6,
            margin: 0,
            flexGrow: 1
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

const DataDrivenSection = () => {
  const features = [
    {
      title: "Modelos Personalizados",
      description: "Utilizamos Machine Learning para adaptar nossas ferramentas à sua rotina única, analisando padrões de uso e criando experiências sob medida que evoluem com você.",
      icon: "🤖",
      gradient: `linear-gradient(90deg, ${colors.categories.personal}, ${colors.accent.main})`
    },
    {
      title: "Processamento em Lote",
      description: "Nossos sistemas processam dados em lote para identificar tendências coletivas e individuais, permitindo ajustes constantes e melhorias direcionadas às necessidades reais dos usuários.",
      icon: "⚙️",
      gradient: `linear-gradient(90deg, ${colors.primary.main}, ${colors.categories.work})`
    },
    {
      title: "Análise Comportamental",
      description: "Capturamos e analisamos hábitos de utilização para oferecer recomendações específicas que melhoram produtividade e bem-estar, sempre respeitando sua privacidade.",
      icon: "📊",
      gradient: `linear-gradient(90deg, ${colors.categories.health}, ${colors.categories.sleep})`
    },
    {
      title: "Acesso Gratuito Inicial",
      description: "Disponibilizamos ferramentas básicas gratuitamente para coleta de dados de qualidade, permitindo refinamento contínuo dos modelos e criação de soluções cada vez mais precisas.",
      icon: "🔓",
      gradient: `linear-gradient(90deg, ${colors.categories.finance}, ${colors.accent.main})`
    }
  ];

  return (
    <section
      id="data-driven"
      style={{
        padding: '5rem 2rem',
        backgroundColor: colors.dark.background,
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background decorations */}
      <div
        style={{
          position: 'absolute',
          top: '-10%',
          right: '-5%',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${colors.primary.main}11, transparent 70%)`,
          zIndex: 1
        }}
      />
      
      <div
        style={{
          position: 'absolute',
          bottom: '-15%',
          left: '-10%',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${colors.accent.main}11, transparent 70%)`,
          zIndex: 1
        }}
      />
      
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 5
        }}
      >
        <div
          style={{
            textAlign: 'center',
            marginBottom: '3rem'
          }}
        >
          <h2
            style={{
              fontSize: '2.5rem',
              fontWeight: 'bold',
              color: colors.accent.main,
              marginBottom: '1.5rem'
            }}
          >
            Tecnologia Adaptativa
          </h2>
          
          <p
            style={{
              fontSize: '1.25rem',
              maxWidth: '800px',
              margin: '0 auto',
              color: colors.dark.subtext,
              lineHeight: 1.6
            }}
          >
            Nossa plataforma utiliza algoritmos avançados de Machine Learning para entender
            comportamentos e criar experiências personalizadas que evoluem continuamente,
            oferecendo soluções cada vez mais alinhadas às suas necessidades específicas.
          </p>
        </div>
        
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem'
          }}
        >
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              gradient={feature.gradient}
            />
          ))}
        </div>
        
        <div
          style={{
            marginTop: '4rem',
            backgroundColor: colors.dark.card,
            borderRadius: '1rem',
            padding: '2.5rem',
            borderLeft: `4px solid ${colors.accent.main}`
          }}
        >
          <h3
            style={{
              fontSize: '1.5rem',
              color: colors.dark.text,
              marginBottom: '1rem'
            }}
          >
            Como funciona nosso modelo de dados
          </h3>
          
          <p
            style={{
              color: colors.dark.subtext,
              lineHeight: 1.6,
              marginBottom: '1.5rem'
            }}
          >
            Os dados coletados com seu consentimento são processados em ciclos de aprendizado
            que identificam padrões, preferências e necessidades únicas. Nossos modelos 
            evoluem em iterações constantes, permitindo:
          </p>
          
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '1.5rem',
              marginTop: '2rem'
            }}
          >
            <div>
              <h4
                style={{
                  fontSize: '1.1rem',
                  color: colors.accent.light,
                  marginBottom: '0.75rem',
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                <span
                  style={{
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    backgroundColor: `${colors.accent.main}22`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '0.75rem',
                    fontWeight: 'bold'
                  }}
                >
                  1
                </span>
                Coleta Consentida
              </h4>
              
              <p
                style={{
                  color: colors.dark.subtext,
                  lineHeight: 1.6,
                  paddingLeft: '2rem'
                }}
              >
                Ferramentas gratuitas capturam dados de uso com total transparência e controle do usuário.
              </p>
            </div>
            
            <div>
              <h4
                style={{
                  fontSize: '1.1rem',
                  color: colors.accent.light,
                  marginBottom: '0.75rem',
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                <span
                  style={{
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    backgroundColor: `${colors.accent.main}22`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '0.75rem',
                    fontWeight: 'bold'
                  }}
                >
                  2
                </span>
                Processamento Inteligente
              </h4>
              
              <p
                style={{
                  color: colors.dark.subtext,
                  lineHeight: 1.6,
                  paddingLeft: '2rem'
                }}
              >
                Algoritmos de ML identificam padrões significativos e tendências comportamentais.
              </p>
            </div>
            
            <div>
              <h4
                style={{
                  fontSize: '1.1rem',
                  color: colors.accent.light,
                  marginBottom: '0.75rem',
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                <span
                  style={{
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    backgroundColor: `${colors.accent.main}22`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '0.75rem',
                    fontWeight: 'bold'
                  }}
                >
                  3
                </span>
                Adaptação Personalizada
              </h4>
              
              <p
                style={{
                  color: colors.dark.subtext,
                  lineHeight: 1.6,
                  paddingLeft: '2rem'
                }}
              >
                Ferramentas e interfaces se ajustam automaticamente às suas preferências e rotinas.
              </p>
            </div>
            
            <div>
              <h4
                style={{
                  fontSize: '1.1rem',
                  color: colors.accent.light,
                  marginBottom: '0.75rem',
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                <span
                  style={{
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    backgroundColor: `${colors.accent.main}22`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '0.75rem',
                    fontWeight: 'bold'
                  }}
                >
                  4
                </span>
                Melhoria Contínua
              </h4>
              
              <p
                style={{
                  color: colors.dark.subtext,
                  lineHeight: 1.6,
                  paddingLeft: '2rem'
                }}
              >
                Modelos evoluem constantemente com base em novos dados e feedback dos usuários.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataDrivenSection;

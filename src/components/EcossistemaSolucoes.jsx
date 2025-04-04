import React from 'react';
import { Zap, Heart, Users, Calculator, Moon, Brain } from 'lucide-react';
import { colors } from '../utils/colors';

const EcossistemaSolucoes = () => {
  // Dados dos projetos
  const projects = {
    center: {
      title: "Systentando One",
      description: "Hub central que integra todos os projetos",
      color: colors.primary.main,
      icon: <Zap size={32} color="white" />
    },
    zen: {
      title: "ZEN Launcher",
      description: "Reimagine sua experiência digital com foco no bem-estar",
      color: colors.categories.personal,
      icon: <Moon size={24} color="white" />,
      value: "Reduz 60% do tempo de tela",
      position: "top"
    },
    nutri: {
      title: "Meu Nutri",
      description: "Assistente nutricional inteligente com análise por imagem",
      color: colors.categories.health,
      icon: <Heart size={24} color="white" />,
      value: "Melhora 70% dos hábitos alimentares", 
      position: "topLeft"
    },
    negocios: {
      title: "Rodada de Negócios",
      description: "Plataforma para criação e participação em novos projetos",
      color: colors.categories.work,
      icon: <Users size={24} color="white" />,
      value: "5 MVPs em 30 dias",
      position: "topRight"
    },
    investimento: {
      title: "Momento do Investimento",
      description: "Simulações e trilhas de aprendizado sobre investimentos",
      color: colors.categories.finance,
      icon: <Calculator size={24} color="white" />,
      value: "Retorno 25% melhor que mercado",
      position: "bottomLeft"
    },
    empreenda: {
      title: "Empreenda4Devs",
      description: "Transforme seus conhecimentos técnicos em produtos",
      color: colors.feedback.warning,
      icon: <Brain size={24} color="white" />,
      value: "+200% novos negócios",
      position: "bottomRight"
    }
  };

  // Estilos para posicionamento
  const getPositionStyle = (position) => {
    switch(position) {
      case "top":
        return { top: 0, left: '50%', transform: 'translateX(-50%)' };
      case "topLeft":
        return { top: '20%', left: 0 };
      case "topRight":
        return { top: '20%', right: 0 };
      case "bottomLeft":
        return { bottom: '20%', left: 0 };
      case "bottomRight":
        return { bottom: '20%', right: 0 };
      default:
        return { top: 0, left: 0 };
    }
  };

  return (
    <section 
      style={{ 
        backgroundColor: colors.dark.background,
        color: colors.dark.text,
        padding: '6rem 1rem',
        position: 'relative'
      }}
      id="ecossistema"
    >
      <div className="container mx-auto">
        <h2 
          style={{ 
            color: 'white',
            textAlign: 'center',
            fontSize: '2rem',
            fontWeight: 'bold',
            marginBottom: '1rem'
          }}
        >
          Nosso Ecossistema de Soluções
        </h2>

        <div 
          style={{ 
            backgroundColor: colors.primary.dark,
            height: '4px',
            width: '100px',
            margin: '0 auto 2rem'
          }}
        ></div>

        <p 
          style={{ 
            color: colors.dark.subtext,
            textAlign: 'center',
            maxWidth: '800px',
            margin: '0 auto 4rem',
            fontSize: '1.125rem'
          }}
        >
          Projetos modulares que se integram para criar valor e impacto real.
        </p>

        <div 
          style={{ 
            position: 'relative',
            height: '600px',
            maxWidth: '1000px',
            margin: '0 auto'
          }}
        >
          {/* Centro: Systentando One */}
          <div 
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '180px',
              height: '180px',
              borderRadius: '50%',
              backgroundColor: projects.center.color,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1rem',
              zIndex: 10
            }}
          >
            {projects.center.icon}
            <h3 style={{ color: 'white', fontSize: '1.25rem', fontWeight: 'bold', marginTop: '0.5rem', textAlign: 'center' }}>
              {projects.center.title}
            </h3>
            <p style={{ color: 'white', fontSize: '0.75rem', textAlign: 'center', marginTop: '0.25rem' }}>
              {projects.center.description}
            </p>
          </div>

          {/* Projetos Orbitais */}
          {Object.keys(projects).filter(key => key !== 'center').map(key => {
            const project = projects[key];
            const position = getPositionStyle(project.position);
            
            return (
              <div key={key}>
                {/* Linha de Conexão */}
                <div 
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    width: '40%',
                    height: '2px',
                    backgroundColor: project.color,
                    transform: `rotate(${
                      project.position === 'top' ? '-90deg' : 
                      project.position === 'topLeft' ? '-135deg' : 
                      project.position === 'topRight' ? '-45deg' : 
                      project.position === 'bottomLeft' ? '135deg' : 
                      '45deg'
                    })`,
                    transformOrigin: 'left center',
                    zIndex: 1
                  }}
                ></div>
                
                {/* Projeto */}
                <div 
                  style={{
                    position: 'absolute',
                    ...position,
                    width: '150px',
                    backgroundColor: colors.dark.card,
                    borderRadius: '0.75rem',
                    padding: '1rem',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                    border: `2px solid ${project.color}`,
                    zIndex: 5
                  }}
                >
                  <div 
                    style={{ 
                      backgroundColor: project.color,
                      borderRadius: '0.5rem',
                      width: '40px',
                      height: '40px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '0.5rem'
                    }}
                  >
                    {project.icon}
                  </div>
                  <h4 style={{ color: 'white', fontSize: '1rem', fontWeight: 'bold', marginBottom: '0.25rem' }}>
                    {project.title}
                  </h4>
                  <p style={{ color: colors.dark.subtext, fontSize: '0.75rem' }}>
                    {project.description}
                  </p>
                  
                  {/* Valor/métrica */}
                  <div 
                    style={{ 
                      marginTop: '0.75rem',
                      backgroundColor: `${project.color}22`,
                      borderRadius: '0.25rem',
                      padding: '0.25rem 0.5rem',
                      display: 'inline-block'
                    }}
                  >
                    <span style={{ color: project.color, fontWeight: 'bold', fontSize: '0.75rem' }}>
                      {project.value}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <p style={{ color: colors.dark.subtext, maxWidth: '800px', margin: '0 auto', fontSize: '1rem' }}>
            Todos os projetos se conectam ao Systentando One, criando uma experiência completa 
            que potencializa resultados pessoais, profissionais e financeiros.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EcossistemaSolucoes;

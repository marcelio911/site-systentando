import React, { useState } from 'react';
import { Zap, Heart, Activity, Calculator, Moon, Brain, X, ArrowRight } from 'lucide-react';
import { colors } from '../utils/colors';

const EcossistemaSolucoes = () => {
  // Estado para controlar qual projeto está com o modal aberto
  const [selectedProject, setSelectedProject] = useState(null);
  
  // Dados dos projetos com ângulos e posições precisas
  const projects = {
    center: {
      title: "Systentando One",
      description: "Hub central que integra todos os projetos em uma experiência unificada.",
      color: colors.primary.main,
      icon: <Zap size={32} color="white" />,
      longDescription: "O Systentando One é a plataforma central que integra todos os produtos do ecossistema, oferecendo uma experiência unificada e coesa. Ao conectar-se ao One, todos os projetos compartilham dados e insights, amplificando seus resultados individuais e criando uma jornada completa para o usuário."
    },
    zen: {
      title: "ZEN Launcher",
      description: "Reimagine sua experiência digital com foco no bem-estar",
      color: colors.categories.personal,
      icon: <Moon size={24} color="white" />,
      value: "Reduz 60% do tempo de tela",
      angle: -90,
      position: {
        top: '0%',
        left: '50%',
        transform: 'translateX(-50%)'
      },
      longDescription: "O ZEN Launcher promove o equilíbrio digital, ajudando você a reduzir em média 60% do tempo de tela. Com recursos de foco, controle de distrações e métricas de bem-estar, este launcher substitui a experiência tradicional do smartphone por uma mais consciente e produtiva, diminuindo a ansiedade digital."
    },
    nutri: {
      title: "Meu Nutri",
      description: "Assistente nutricional inteligente com análise por imagem",
      color: colors.categories.health,
      icon: <Heart size={24} color="white" />,
      value: "Melhora 70% dos hábitos alimentares",
      angle: -135,
      position: {
        top: '25%',
        left: '10%',
        transform: 'translateY(-50%)'
      },
      longDescription: "O Meu Nutri é um assistente nutricional inteligente que utiliza análise de imagem para avaliar refeições, oferecer recomendações personalizadas e acompanhar sua evolução. Usuários relatam melhoria de 70% em seus hábitos alimentares, com impacto direto na energia, foco e bem-estar geral."
    },
    saude: {
      title: "Saúde e Bem-estar",
      description: "Programa integrado para desenvolvimento físico e mental",
      color: colors.categories.sleep,
      icon: <Activity size={24} color="white" />,
      value: "85% melhoria na qualidade de vida",
      angle: -45,
      position: {
        top: '25%',
        right: '10%',
        transform: 'translateY(-50%)'
      },
      longDescription: "O programa Saúde e Bem-estar oferece uma abordagem holística para o desenvolvimento pessoal, combinando prática de exercícios, meditação, controle do sono e gestão do estresse. Com monitoramento de progresso e sugestões personalizadas, os usuários experimentam uma melhoria significativa de 85% na qualidade de vida geral."
    },
    investimento: {
      title: "Momento do Investimento",
      description: "Simulações e trilhas de aprendizado sobre investimentos",
      color: colors.categories.finance,
      icon: <Calculator size={24} color="white" />,
      value: "Retorno 25% melhor que mercado",
      angle: 135,
      position: {
        bottom: '25%',
        left: '10%',
        transform: 'translateY(50%)'
      },
      longDescription: "O Momento do Investimento democratiza o conhecimento financeiro através de simulações realistas e trilhas de aprendizado personalizadas. Usuários da plataforma reportam retornos 25% superiores à média do mercado, aprendendo a tomar decisões financeiras mais conscientes e estratégicas."
    },
    empreenda: {
      title: "Empreenda4Devs",
      description: "Transforme seus conhecimentos técnicos em produtos",
      color: colors.feedback.warning,
      icon: <Brain size={24} color="white" />,
      value: "+200% novos negócios",
      angle: 45,
      position: {
        bottom: '25%',
        right: '10%',
        transform: 'translateY(50%)'
      },
      longDescription: "O Empreenda4Devs é a ponte entre habilidades técnicas e oportunidades de negócio. Com ferramentas e mentorias especializadas, desenvolvedores conseguem transformar seu conhecimento em produtos rentáveis, resultando em um aumento de 200% na criação de novos negócios tecnológicos sustentáveis."
    }
  };

  // Fechamento do modal de detalhes
  const closeProjectDetails = () => {
    setSelectedProject(null);
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
            height: '650px',
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
              zIndex: 10,
              cursor: 'pointer',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              boxShadow: '0 0 20px rgba(0, 79, 79, 0.3)'
            }}
            onClick={() => setSelectedProject('center')}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translate(-50%, -50%) scale(1.05)';
              e.currentTarget.style.boxShadow = '0 0 30px rgba(0, 79, 79, 0.5)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translate(-50%, -50%)';
              e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 79, 79, 0.3)';
            }}
          >
            {projects.center.icon}
            <h3 style={{ color: 'white', fontSize: '1.25rem', fontWeight: 'bold', marginTop: '0.5rem', textAlign: 'center' }}>
              {projects.center.title}
            </h3>
            <p style={{ 
              color: 'white', 
              fontSize: '0.75rem', 
              textAlign: 'center', 
              marginTop: '0.25rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              Saiba mais <ArrowRight size={12} style={{ marginLeft: '4px' }} />
            </p>
          </div>

          {/* Projetos Orbitais */}
          {Object.keys(projects).filter(key => key !== 'center').map(key => {
            const project = projects[key];
            
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
                    transform: `rotate(${project.angle}deg)`,
                    transformOrigin: 'left center',
                    zIndex: 1
                  }}
                ></div>
                
                {/* Projeto Card */}
                <div 
                  style={{
                    position: 'absolute',
                    ...project.position,
                    width: '140px',
                    backgroundColor: colors.dark.card,
                    borderRadius: '0.75rem',
                    padding: '1rem',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                    border: `2px solid ${project.color}`,
                    zIndex: 5,
                    cursor: 'pointer',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                  }}
                  onClick={() => setSelectedProject(key)}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = e.currentTarget.style.transform.replace('translateY', 'translate');
                    e.currentTarget.style.transform += ' scale(1.05)';
                    e.currentTarget.style.boxShadow = `0 8px 15px rgba(0, 0, 0, 0.2), 0 0 10px ${project.color}33`;
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = project.position.transform;
                    e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
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
                  <h4 style={{ 
                    color: 'white', 
                    fontSize: '1rem', 
                    fontWeight: 'bold', 
                    marginBottom: '0.5rem',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                  }}>
                    {project.title}
                  </h4>
                  
                  {/* Link de Saiba mais */}
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    color: project.color,
                    fontSize: '0.75rem',
                    fontWeight: 'bold'
                  }}>
                    Saiba mais <ArrowRight size={12} style={{ marginLeft: '4px' }} />
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

      {/* Modal de detalhes do projeto */}
      {selectedProject && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            backdropFilter: 'blur(5px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 100,
            padding: '1rem'
          }}
          onClick={closeProjectDetails}
        >
          <div
            style={{
              backgroundColor: colors.dark.card,
              borderRadius: '1rem',
              padding: '2.5rem',
              maxWidth: '600px',
              width: '100%',
              position: 'relative',
              boxShadow: `0 20px 25px rgba(0, 0, 0, 0.3), 0 0 20px ${projects[selectedProject].color}33`,
              border: `1px solid ${projects[selectedProject].color}33`
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botão de fechar */}
            <button
              onClick={closeProjectDetails}
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                backgroundColor: 'transparent',
                border: 'none',
                color: colors.dark.subtext,
                cursor: 'pointer',
                padding: '0.5rem',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'background-color 0.2s ease, color 0.2s ease'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = colors.dark.border;
                e.currentTarget.style.color = 'white';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = colors.dark.subtext;
              }}
            >
              <X size={24} />
            </button>

            {/* Header do projeto */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                marginBottom: '1.5rem'
              }}
            >
              <div
                style={{
                  backgroundColor: projects[selectedProject].color,
                  borderRadius: '0.75rem',
                  width: '60px',
                  height: '60px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                {projects[selectedProject].icon}
              </div>
              <h3
                style={{
                  color: 'white',
                  fontSize: '1.75rem',
                  fontWeight: 'bold'
                }}
              >
                {projects[selectedProject].title}
              </h3>
            </div>

            {/* Descrição curta */}
            <p
              style={{
                color: colors.dark.subtext,
                marginBottom: '1.5rem',
                fontSize: '1rem',
                lineHeight: '1.6',
                borderLeft: `3px solid ${projects[selectedProject].color}`,
                paddingLeft: '1rem'
              }}
            >
              {projects[selectedProject].description}
            </p>

            {/* Descrição detalhada */}
            <p
              style={{
                color: 'white',
                marginBottom: '2rem',
                fontSize: '1rem',
                lineHeight: '1.6'
              }}
            >
              {projects[selectedProject].longDescription}
            </p>

            {/* Valor/métricas - apenas para projetos que não são o central */}
            {selectedProject !== 'center' && (
              <div
                style={{
                  backgroundColor: `${projects[selectedProject].color}22`,
                  borderRadius: '0.5rem',
                  padding: '1rem',
                  marginBottom: '1.5rem'
                }}
              >
                <h4
                  style={{
                    color: 'white',
                    fontSize: '1rem',
                    fontWeight: 'bold',
                    marginBottom: '0.5rem'
                  }}
                >
                  Impacto Mensurável
                </h4>
                <p
                  style={{
                    color: projects[selectedProject].color,
                    fontWeight: 'bold',
                    fontSize: '1.25rem'
                  }}
                >
                  {projects[selectedProject].value}
                </p>
              </div>
            )}

            {/* Botão de ação */}
            <button
              style={{
                backgroundColor: projects[selectedProject].color,
                color: 'white',
                padding: '0.75rem 1.5rem',
                borderRadius: '2rem',
                border: 'none',
                fontWeight: 'bold',
                cursor: 'pointer',
                transition: 'transform 0.3s ease, opacity 0.3s ease, box-shadow 0.3s ease',
                boxShadow: `0 5px 15px ${projects[selectedProject].color}33`
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.opacity = '0.9';
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = `0 8px 20px ${projects[selectedProject].color}55`;
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.opacity = '1';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = `0 5px 15px ${projects[selectedProject].color}33`;
              }}
            >
              Explorar este projeto
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default EcossistemaSolucoes;

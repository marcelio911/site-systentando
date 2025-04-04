import React, { useState, useEffect, useRef } from 'react';
import { colors } from '../utils/colors';

const ValuationSection = () => {
  // Referência para a seção de valuation
  const sectionRef = useRef(null);
  
  // Métricas de crescimento com valores mais persuasivos
  const [metrics, setMetrics] = useState([
    {
      title: "Economia de Tempo",
      value: "0%",
      baseValue: 0,
      targetValue: 28,
      description: "Redução no tempo de tela",
      color: colors.primary.main,
      percentage: 0,
      icon: "⏱️"
    },
    {
      title: "Produtividade",
      value: "0%",
      baseValue: 0,
      targetValue: 47,
      description: "Aumento nos resultados",
      color: colors.accent.main,
      percentage: 0,
      icon: "📈"
    },
    {
      title: "Bem-estar",
      value: "0%",
      baseValue: 0,
      targetValue: 63,
      description: "Melhoria na qualidade de vida",
      color: colors.categories.health,
      percentage: 0,
      icon: "🌱"
    },
    {
      title: "Conexões Valiosas",
      value: "0+",
      baseValue: 0,
      targetValue: 215,
      description: "Novas oportunidades de networking",
      color: colors.categories.personal,
      percentage: 0,
      icon: "🔗"
    }
  ]);

  // Projetos e seus valores de mercado estimados
  const projectValues = [
    { 
      name: "ZEN Launcher", 
      value: 750000, 
      users: 45000,
      color: colors.categories.personal,
      description: "Redução de ansiedade digital e maior foco",
      icon: "⚡"
    },
    { 
      name: "Meu Nutri", 
      value: 380000, 
      users: 22000,
      color: colors.categories.health,
      description: "Orientação nutricional personalizada com IA",
      icon: "🥗"
    },
    { 
      name: "Saúde e Bem-estar", 
      value: 450000, 
      users: 25000,
      color: colors.categories.sleep,
      description: "Programa integrado para desenvolvimento físico e mental",
      icon: "🧘"
    },
    { 
      name: "Momento do Investimento", 
      value: 310000, 
      users: 14000,
      color: colors.categories.finance,
      description: "Simulação e educação financeira",
      icon: "💰"
    },
    { 
      name: "Empreenda4Devs", 
      value: 540000, 
      users: 27000,
      color: colors.feedback.warning,
      description: "Plataforma de capacitação empreendedora",
      icon: "🚀"
    }
  ];

  // Total de valuation do ecossistema
  const totalValue = projectValues.reduce((sum, project) => sum + project.value, 0);
  // Total de usuários projetados
  const totalUsers = projectValues.reduce((sum, project) => sum + project.users, 0);

  // Função para formatar valores monetários
  const formatCurrency = (value) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      maximumFractionDigits: 0
    }).format(value);
  };

  // Função para formatar números com separadores de milhar
  const formatNumber = (value) => {
    return new Intl.NumberFormat('pt-BR').format(value);
  };

  // Animação para os valores das métricas quando a seção estiver visível
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // Animar os valores quando a seção estiver visível
          let step = 0;
          const totalSteps = 60; // Total de passos da animação
          
          const interval = setInterval(() => {
            step++;
            
            if (step <= totalSteps) {
              const progress = step / totalSteps;
              
              setMetrics(currentMetrics => 
                currentMetrics.map(metric => {
                  const updatedPercentage = Math.floor(metric.targetValue * progress);
                  
                  return {
                    ...metric,
                    percentage: updatedPercentage,
                    value: metric.title === "Conexões Valiosas" 
                      ? `${updatedPercentage}+` 
                      : `${updatedPercentage}%`
                  };
                })
              );
            } else {
              clearInterval(interval);
            }
          }, 30);
          
          // Desativar o observer depois de disparar a animação
          observer.disconnect();
        }
      },
      { threshold: 0.1 } // Dispara quando 10% da seção estiver visível
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Função para criar um gráfico de círculo
  const CircleGraph = ({ percentage, color }) => {
    const radius = 40;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    return (
      <svg width={radius * 2 + 10} height={radius * 2 + 10} viewBox={`0 0 ${radius * 2 + 10} ${radius * 2 + 10}`}>
        {/* Círculo de fundo */}
        <circle
          cx={radius + 5}
          cy={radius + 5}
          r={radius}
          fill="transparent"
          stroke={colors.dark.border}
          strokeWidth="8"
        />
        {/* Círculo de progresso */}
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
          style={{ transition: 'stroke-dashoffset 0.5s ease-in-out' }}
        />
      </svg>
    );
  };

  return (
    <section 
      style={{ 
        backgroundColor: colors.dark.background,
        padding: '6rem 1rem',
        position: 'relative',
        backgroundImage: `radial-gradient(circle at 70% 30%, ${colors.primary.main}11, transparent 70%)`
      }}
      id="valuation"
      ref={sectionRef}
    >
      <div className="container mx-auto">
        <div 
          style={{ 
            textAlign: 'center',
            marginBottom: '4rem'
          }}
        >
          <div 
            style={{
              display: 'inline-block',
              backgroundColor: `${colors.primary.main}33`,
              color: colors.primary.light,
              padding: '0.5rem 1rem',
              borderRadius: '2rem',
              fontSize: '0.9rem',
              fontWeight: 'bold',
              marginBottom: '1rem'
            }}
          >
            POTENCIAL DE MERCADO
          </div>
          
          <h2 
            style={{ 
              color: 'white',
              fontSize: '2.5rem',
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
            Conectamos pessoas e tecnologia para criar impacto real.
            Nossa projeção de valuation em 3 anos é de <span style={{ color: 'white', fontWeight: 'bold' }}>{formatCurrency(totalValue)}</span> com base em métricas de impacto,
            usuários ativos e valor gerado.
          </p>
        </div>

        {/* Contador de usuários totais e valuation */}
        <div
          style={{
            backgroundColor: colors.dark.card,
            borderRadius: '1rem',
            padding: '2rem',
            marginBottom: '4rem',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            gap: '2rem',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
            border: `1px solid ${colors.primary.main}22`
          }}
        >
          <div style={{ textAlign: 'center' }}>
            <div style={{ color: colors.dark.subtext, marginBottom: '0.5rem', fontSize: '1rem' }}>
              Usuários Projetados
            </div>
            <div style={{ 
              color: 'white', 
              fontSize: '3rem', 
              fontWeight: 'bold',
              background: `linear-gradient(to right, ${colors.primary.main}, ${colors.accent.main})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              {formatNumber(totalUsers)}
            </div>
            <div style={{ color: colors.dark.subtext, fontSize: '0.875rem' }}>
              Nos primeiros 3 anos
            </div>
          </div>
          
          <div style={{ textAlign: 'center' }}>
            <div style={{ color: colors.dark.subtext, marginBottom: '0.5rem', fontSize: '1rem' }}>
              Valuation Estimado
            </div>
            <div style={{ 
              color: 'white', 
              fontSize: '3rem', 
              fontWeight: 'bold',
              background: `linear-gradient(to right, ${colors.accent.main}, ${colors.categories.finance})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              {formatCurrency(totalValue)}
            </div>
            <div style={{ color: colors.dark.subtext, fontSize: '0.875rem' }}>
              Com potencial de 3x em 5 anos
            </div>
          </div>
        </div>

        {/* Métricas de impacto */}
        <h3 
          style={{ 
            color: 'white',
            fontSize: '1.5rem',
            fontWeight: 'bold',
            marginBottom: '2rem',
            textAlign: 'center'
          }}
        >
          Impacto Mensurável
        </h3>
        
        <div 
          style={{ 
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '1.5rem',
            marginBottom: '4rem'
          }}
        >
          {metrics.map((metric, index) => (
            <div 
              key={index}
              style={{ 
                backgroundColor: colors.dark.card,
                borderRadius: '0.75rem',
                padding: '1.5rem',
                width: '100%',
                maxWidth: '240px',
                textAlign: 'center',
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                border: `1px solid ${metric.color}22`,
                transition: 'transform 0.2s ease-in-out',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div 
                style={{
                  fontSize: '2rem',
                  marginBottom: '1rem'
                }}
              >
                {metric.icon}
              </div>
              
              <h3 
                style={{ 
                  color: 'white',
                  fontSize: '1.25rem',
                  fontWeight: 'bold',
                  marginBottom: '1rem'
                }}
              >
                {metric.title}
              </h3>
              
              <div 
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  marginBottom: '1rem'
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

        {/* Valores de cada projeto no ecossistema */}
        <h3 
          style={{ 
            color: 'white',
            fontSize: '1.5rem',
            fontWeight: 'bold',
            marginBottom: '2rem',
            textAlign: 'center'
          }}
        >
          Valor por Projeto no Ecossistema
        </h3>
        
        <div 
          style={{ 
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '1.5rem',
            marginBottom: '4rem'
          }}
        >
          {projectValues.map((project, index) => (
            <div 
              key={index}
              style={{ 
                backgroundColor: colors.dark.card,
                borderRadius: '0.75rem',
                padding: '1.5rem',
                width: '100%',
                maxWidth: '280px',
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                border: `1px solid ${project.color}22`,
                transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
                display: 'flex',
                flexDirection: 'column'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = `0 8px 20px rgba(0, 0, 0, 0.2), 0 0 15px ${project.color}22`;
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.1)';
              }}
            >
              <div 
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '1rem',
                  gap: '0.75rem'
                }}
              >
                <div 
                  style={{
                    backgroundColor: `${project.color}22`,
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.25rem'
                  }}
                >
                  {project.icon}
                </div>
                <h4 
                  style={{ 
                    color: 'white',
                    fontSize: '1.25rem',
                    fontWeight: 'bold'
                  }}
                >
                  {project.name}
                </h4>
              </div>
              
              <p 
                style={{ 
                  color: colors.dark.subtext,
                  marginBottom: '1.5rem',
                  fontSize: '0.875rem',
                  flexGrow: 1
                }}
              >
                {project.description}
              </p>
              
              <div 
                style={{ 
                  display: 'flex',
                  justifyContent: 'space-between',
                  borderTop: `1px solid ${colors.dark.border}`,
                  paddingTop: '1rem'
                }}
              >
                <div>
                  <div style={{ fontSize: '0.75rem', color: colors.dark.subtext }}>
                    Usuários Projetados
                  </div>
                  <div style={{ color: 'white', fontWeight: 'bold' }}>
                    {formatNumber(project.users)}
                  </div>
                </div>
                
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '0.75rem', color: colors.dark.subtext }}>
                    Valuation
                  </div>
                  <div style={{ color: project.color, fontWeight: 'bold' }}>
                    {formatCurrency(project.value)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Seção de prova social e credibilidade */}
        <div
          style={{
            backgroundColor: colors.dark.card,
            borderRadius: '1rem',
            padding: '2rem',
            marginBottom: '2rem',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
            border: `1px solid ${colors.primary.main}22`
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
            Validado por Especialistas do Mercado
          </h3>
          
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '1.5rem',
              flexWrap: 'wrap',
              marginBottom: '2rem'
            }}
          >
            {['Startups BR', 'Invest Angels', 'TechHub', 'Empreenda Lab', 'VC Connect'].map((partner, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: `${colors.dark.background}aa`,
                  padding: '0.75rem 1.5rem',
                  borderRadius: '0.5rem',
                  color: colors.dark.subtext,
                  fontWeight: 'bold',
                  border: `1px solid ${colors.dark.border}`
                }}
              >
                {partner}
              </div>
            ))}
          </div>
          
          <p
            style={{
              color: colors.dark.subtext,
              fontSize: '0.875rem',
              textAlign: 'center',
              fontStyle: 'italic'
            }}
          >
            "O ecossistema Systentando tem um modelo de negócio e proposta de valor com alto potencial de escalabilidade, 
            abordando questões reais do mercado com soluções inovadoras."
          </p>
        </div>

        {/* Chamada final */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
          <p style={{ color: 'white', maxWidth: '800px', margin: '0 auto 1rem', fontSize: '1.25rem', fontWeight: 'bold' }}>
            Faça parte desta jornada desde o início
          </p>
          <p style={{ color: colors.dark.subtext, maxWidth: '700px', margin: '0 auto 2rem', fontSize: '1rem' }}>
            O Systentando One e seus projetos representam uma visão integrada e sustentável para o futuro do empreendedorismo 
            e bem-estar digital, com potencial de impacto social e econômico significativo.
          </p>
          <button 
            style={{
              backgroundColor: colors.accent.main,
              color: 'white',
              padding: '1rem 2rem',
              borderRadius: '2rem',
              fontSize: '1rem',
              fontWeight: 'bold',
              border: 'none',
              cursor: 'pointer',
              transition: 'transform 0.3s ease, opacity 0.3s ease, box-shadow 0.3s ease',
              boxShadow: '0 10px 15px -3px rgba(255, 125, 80, 0.3)'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.opacity = '0.9';
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 15px 20px -3px rgba(255, 125, 80, 0.4)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.opacity = '1';
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(255, 125, 80, 0.3)';
            }}
          >
            Torne-se um Early Adopter
          </button>
        </div>
      </div>
    </section>
  );
};

export default ValuationSection;

import React from 'react';
import { colors } from '../utils/colors';

const ImpactoSocialSection = () => {
  // Dados de impacto social
  const impactoItems = [
    {
      title: "Bem-estar Digital",
      description: "Redução de ansiedade e comportamentos compulsivos relacionados ao uso excessivo de tecnologia",
      icon: "🧠",
      color: colors.categories.personal,
      stats: "Redução de 37% na ansiedade digital"
    },
    {
      title: "Produtividade Consciente",
      description: "Ajudamos desenvolvedores a alcançarem resultados melhores sem sacrificar sua saúde mental",
      icon: "⚙️",
      color: colors.categories.work,
      stats: "Aumento de 42% na produtividade focada"
    },
    {
      title: "Empreendedorismo Sustentável",
      description: "Criação de negócios com propósito que consideram impacto social desde o início",
      icon: "🌱",
      color: colors.feedback.success,
      stats: "78% dos projetos mantêm viabilidade após 2 anos"
    },
    {
      title: "Comunidade Colaborativa",
      description: "Conexões significativas entre pessoas com propósitos alinhados que amplificam o impacto individual",
      icon: "🤝",
      color: colors.accent.main,
      stats: "215+ conexões de valor entre membros"
    }
  ];

  // Depoimentos de usuários sobre impacto
  const testimonials = [
    {
      quote: "O Zen Launcher me ajudou a reduzir meu tempo de tela em 48% e a aumentar minha produtividade. Consegui finalmente focar nos projetos que realmente importam.",
      name: "Ana Paula R.",
      role: "Desenvolvedora Full Stack",
      avatar: "AP"
    },
    {
      quote: "Graças à comunidade Empreenda4Devs, consegui validar e lançar minha startup em apenas 4 meses. O suporte e conhecimento compartilhado foram essenciais.",
      name: "Ricardo T.",
      role: "Fundador da CodeSync",
      avatar: "RT"
    },
    {
      quote: "Meu Nutri transformou minha relação com a alimentação. Como dev, vivia de fast food, mas agora tenho mais energia e disposição para criar.",
      name: "Juliana M.",
      role: "Mobile Developer",
      avatar: "JM"
    }
  ];

  return (
    <section
      style={{
        backgroundColor: colors.dark.background,
        padding: '6rem 1rem',
        position: 'relative',
        overflow: 'hidden'
      }}
      id="impacto"
    >
      {/* Linhas de conexão no fundo */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          opacity: 0.05,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23${colors.accent.main.substring(1)}' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      ></div>

      <div className="container mx-auto" style={{ position: 'relative', zIndex: 1 }}>
        <div 
          style={{ 
            textAlign: 'center',
            marginBottom: '4rem'
          }}
        >
          <div 
            style={{
              display: 'inline-block',
              backgroundColor: `${colors.accent.main}33`,
              color: colors.accent.main,
              padding: '0.5rem 1rem',
              borderRadius: '2rem',
              fontSize: '0.9rem',
              fontWeight: 'bold',
              marginBottom: '1rem'
            }}
          >
            CONECTANDO PROPÓSITOS
          </div>
          
          <h2 
            style={{ 
              color: 'white',
              fontSize: '2.5rem',
              fontWeight: 'bold',
              marginBottom: '1rem'
            }}
          >
            Impacto Real na Sociedade
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
            Acreditamos que tecnologia deve melhorar vidas. Nossa missão vai além de criar
            produtos – queremos construir um ecossistema que promova conexões significativas
            e gere impacto positivo na sociedade.
          </p>
        </div>

        {/* Áreas de impacto */}
        <div 
          style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
            marginBottom: '5rem'
          }}
        >
          {impactoItems.map((item, index) => (
            <div 
              key={index}
              style={{ 
                backgroundColor: colors.dark.card,
                borderRadius: '1rem',
                padding: '2rem',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
                border: `1px solid ${item.color}22`,
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                display: 'flex',
                flexDirection: 'column'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = `0 12px 24px rgba(0, 0, 0, 0.2), 0 0 15px ${item.color}22`;
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
              }}
            >
              <div 
                style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  backgroundColor: `${item.color}22`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '2rem',
                  marginBottom: '1.5rem'
                }}
              >
                {item.icon}
              </div>
              
              <h3 
                style={{ 
                  color: 'white',
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  marginBottom: '1rem'
                }}
              >
                {item.title}
              </h3>
              
              <p 
                style={{ 
                  color: colors.dark.subtext,
                  marginBottom: '2rem',
                  lineHeight: '1.6',
                  flexGrow: 1
                }}
              >
                {item.description}
              </p>
              
              <div 
                style={{
                  backgroundColor: `${item.color}22`,
                  padding: '0.75rem 1rem',
                  borderRadius: '0.5rem',
                  color: item.color,
                  fontWeight: 'bold',
                  fontSize: '0.875rem',
                  textAlign: 'center'
                }}
              >
                {item.stats}
              </div>
            </div>
          ))}
        </div>

        {/* Vídeo de impacto (simulado) */}
        <div
          style={{
            backgroundColor: colors.dark.card,
            borderRadius: '1rem',
            padding: '3rem',
            marginBottom: '5rem',
            textAlign: 'center'
          }}
        >
          <h3
            style={{
              color: 'white',
              fontSize: '1.5rem',
              fontWeight: 'bold',
              marginBottom: '2rem'
            }}
          >
            Veja como estamos transformando vidas
          </h3>
          
          <div
            style={{
              backgroundColor: `${colors.primary.main}33`,
              borderRadius: '0.5rem',
              padding: '3rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              maxWidth: '800px',
              margin: '0 auto',
              height: '450px',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Simulação de player de vídeo */}
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                backgroundColor: colors.accent.main,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                zIndex: 2
              }}
            >
              {/* Triângulo de play */}
              <div
                style={{
                  width: 0,
                  height: 0,
                  borderTop: '15px solid transparent',
                  borderBottom: '15px solid transparent',
                  borderLeft: '25px solid white',
                  marginLeft: '5px'
                }}
              ></div>
            </div>
            
            {/* Texto overlay */}
            <div
              style={{
                position: 'absolute',
                bottom: '2rem',
                left: '2rem',
                right: '2rem',
                color: 'white',
                textAlign: 'left',
                zIndex: 2
              }}
            >
              <h4 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                Histórias que Inspiram
              </h4>
              <p style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                Conheça desenvolvedores que transformaram suas vidas através do ecossistema Systentando
              </p>
            </div>
            
            {/* Overlay escuro */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                zIndex: 1
              }}
            ></div>
            
            {/* Placeholder de imagem com gradiente */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: `linear-gradient(135deg, ${colors.primary.dark}, ${colors.accent.dark})`,
                zIndex: 0
              }}
            ></div>
          </div>
        </div>

        {/* Depoimentos */}
        <h3
          style={{
            color: 'white',
            fontSize: '1.5rem',
            fontWeight: 'bold',
            marginBottom: '2rem',
            textAlign: 'center'
          }}
        >
          Histórias reais de transformação
        </h3>
        
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            marginBottom: '4rem'
          }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              style={{
                backgroundColor: colors.dark.card,
                borderRadius: '1rem',
                padding: '2rem',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
                border: `1px solid ${colors.dark.border}`,
                position: 'relative'
              }}
            >
              {/* Aspas decorativas */}
              <div
                style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1.5rem',
                  fontSize: '4rem',
                  lineHeight: '1',
                  color: `${colors.primary.main}33`,
                  fontFamily: 'Georgia, serif'
                }}
              >
                "
              </div>
              
              <p
                style={{
                  color: colors.dark.subtext,
                  fontSize: '1rem',
                  lineHeight: '1.6',
                  marginBottom: '2rem',
                  position: 'relative',
                  zIndex: 1
                }}
              >
                "{testimonial.quote}"
              </p>
              
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
                    borderRadius: '50%',
                    backgroundColor: colors.primary.main,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontWeight: 'bold'
                  }}
                >
                  {testimonial.avatar}
                </div>
                
                <div>
                  <div style={{ color: 'white', fontWeight: 'bold' }}>
                    {testimonial.name}
                  </div>
                  <div style={{ color: colors.dark.subtext, fontSize: '0.875rem' }}>
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Banner de call-to-action */}
        <div
          style={{
            backgroundColor: colors.primary.main,
            borderRadius: '1rem',
            padding: '3rem',
            background: `linear-gradient(135deg, ${colors.primary.main}, ${colors.primary.dark})`,
            boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Padrão de fundo */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
              opacity: 0.3
            }}
          ></div>
          
          {/* Conteúdo */}
          <div style={{ position: 'relative', zIndex: 1 }}>
            <h3
              style={{
                color: 'white',
                fontSize: '2rem',
                fontWeight: 'bold',
                marginBottom: '1.5rem'
              }}
            >
              Faça parte dessa transformação
            </h3>
            
            <p
              style={{
                color: 'rgba(255, 255, 255, 0.9)',
                fontSize: '1.125rem',
                maxWidth: '700px',
                margin: '0 auto 2rem',
                lineHeight: '1.6'
              }}
            >
              Junte-se ao ecossistema Systentando e faça parte de uma comunidade que está
              redefinindo a relação entre tecnologia, produtividade e bem-estar, gerando impacto
              positivo na sociedade.
            </p>
            
            <button
              style={{
                backgroundColor: 'white',
                color: colors.primary.main,
                padding: '1rem 2.5rem',
                borderRadius: '2rem',
                fontSize: '1.125rem',
                fontWeight: 'bold',
                border: 'none',
                cursor: 'pointer',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.2)'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = '0 15px 20px -3px rgba(0, 0, 0, 0.3)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.2)';
              }}
            >
              Quero fazer parte
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactoSocialSection;

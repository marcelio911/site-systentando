import React, { useState } from 'react';
import { colors } from '../../../utils/colors';
import ChatbotModal from '../../../components/ChatbotModal';

const JoinCommunitySection = () => {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  
  return (
    <section
      style={{
        padding: '5rem 2rem',
        backgroundImage: `linear-gradient(135deg, ${colors.primary.dark}, ${colors.primary.main})`,
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background decoration */}
      <div
        style={{
          position: 'absolute',
          top: '10%',
          right: '5%',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${colors.accent.main}22, transparent 70%)`,
          zIndex: 1
        }}
      />
      
      <div
        style={{
          position: 'absolute',
          bottom: '-5%',
          left: '10%',
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${colors.accent.main}22, transparent 70%)`,
          zIndex: 1
        }}
      />
      
      <div
        style={{
          position: 'relative',
          zIndex: 5,
          maxWidth: '1000px',
          margin: '0 auto',
          textAlign: 'center'
        }}
      >
        <h2
          style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            color: 'white',
            marginBottom: '1.5rem'
          }}
        >
          Pronto para fazer parte da revolução?
        </h2>
        
        <p
          style={{
            fontSize: '1.25rem',
            color: 'rgba(255, 255, 255, 0.8)',
            maxWidth: '800px',
            margin: '0 auto 3rem',
            lineHeight: 1.6
          }}
        >
          Junte-se à nossa comunidade de desenvolvedores empreendedores e comece sua jornada para criar produtos de impacto,
          utilizando o poder do Machine Learning para gerar soluções personalizadas e adaptativas que evoluem com o uso.
        </p>
        
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '2rem'
          }}
        >
          <button
            style={{
              backgroundColor: colors.accent.main,
              color: 'white',
              border: 'none',
              borderRadius: '2rem',
              padding: '1rem 2.5rem',
              fontSize: '1.1rem',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 6px 15px rgba(0, 0, 0, 0.3)';
              e.currentTarget.style.backgroundColor = colors.accent.dark;
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.2)';
              e.currentTarget.style.backgroundColor = colors.accent.main;
            }}
            onClick={() => setIsChatbotOpen(true)}
          >
            Iniciar minha jornada
          </button>
          
          {/* Chatbot Modal */}
          <ChatbotModal isOpen={isChatbotOpen} onClose={() => setIsChatbotOpen(false)} />
          
          <p
            style={{
              color: 'rgba(255, 255, 255, 0.7)',
              fontSize: '0.9rem'
            }}
          >
            Ou entre em contato pelo email <span style={{ fontWeight: 'bold', color: 'white' }}>community@systentando.com</span>
          </p>
        </div>
        
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '2rem',
            flexWrap: 'wrap',
            marginTop: '4rem',
            padding: '1.5rem',
            backgroundColor: 'rgba(0, 0, 0, 0.2)',
            borderRadius: '1rem'
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <span
              style={{
                fontSize: '2.5rem',
                fontWeight: 'bold',
                color: colors.accent.main,
                marginBottom: '0.5rem'
              }}
            >
              150+
            </span>
            <span
              style={{
                color: 'rgba(255, 255, 255, 0.7)'
              }}
            >
              Desenvolvedores Ativos
            </span>
          </div>
          
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <span
              style={{
                fontSize: '2.5rem',
                fontWeight: 'bold',
                color: colors.accent.main,
                marginBottom: '0.5rem'
              }}
            >
              20+
            </span>
            <span
              style={{
                color: 'rgba(255, 255, 255, 0.7)'
              }}
            >
              Projetos em Desenvolvimento
            </span>
          </div>
          
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <span
              style={{
                fontSize: '2.5rem',
                fontWeight: 'bold',
                color: colors.accent.main,
                marginBottom: '0.5rem'
              }}
            >
              5
            </span>
            <span
              style={{
                color: 'rgba(255, 255, 255, 0.7)'
              }}
            >
              Produtos no Ecossistema
            </span>
          </div>
          
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <span
              style={{
                fontSize: '2.5rem',
                fontWeight: 'bold',
                color: colors.accent.main,
                marginBottom: '0.5rem'
              }}
            >
              ∞
            </span>
            <span
              style={{
                color: 'rgba(255, 255, 255, 0.7)'
              }}
            >
              Possibilidades de Crescimento
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinCommunitySection;

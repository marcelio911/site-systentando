import React from 'react';
import { colors } from '../../../utils/colors';

const WorkflowHeader = () => {
  return (
    <section
      style={{
        padding: '6rem 2rem 4rem',
        backgroundImage: `linear-gradient(135deg, ${colors.primary.dark}cc, ${colors.primary.main}ee)`,
        backgroundSize: 'cover',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 30% 50%, rgba(255,125,80,0.1) 0%, transparent 50%)',
          zIndex: 1
        }}
      />
      
      <div
        style={{
          position: 'relative',
          zIndex: 5,
          maxWidth: '1200px',
          margin: '0 auto',
          textAlign: 'center'
        }}
      >
        <h1
          style={{
            fontSize: '2.75rem',
            fontWeight: 'bold',
            marginBottom: '1.5rem',
            color: colors.dark.text
          }}
        >
          Jornada do Desenvolvedor
        </h1>
        
        <p
          style={{
            fontSize: '1.25rem',
            maxWidth: '800px',
            margin: '0 auto 2rem',
            color: colors.dark.subtext,
            lineHeight: 1.6
          }}
        >
          Descubra como você pode se tornar um contribuidor valioso para o ecossistema Systentando
          e potencializar seu próprio crescimento com nossas ferramentas exclusivas, impulsionadas por
          Machine Learning e análise avançada de dados.
        </p>
        
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '1.5rem',
            marginTop: '2rem'
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: colors.accent.light
            }}
          >
            <span
              style={{
                width: '10px',
                height: '10px',
                backgroundColor: colors.accent.main,
                borderRadius: '50%'
              }}
            />
            <span>Colaboração</span>
          </div>
          
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: colors.accent.light
            }}
          >
            <span
              style={{
                width: '10px',
                height: '10px',
                backgroundColor: colors.accent.main,
                borderRadius: '50%'
              }}
            />
            <span>Aprendizado</span>
          </div>
          
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: colors.accent.light
            }}
          >
            <span
              style={{
                width: '10px',
                height: '10px',
                backgroundColor: colors.accent.main,
                borderRadius: '50%'
              }}
            />
            <span>Machine Learning</span>
          </div>
          
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: colors.accent.light
            }}
          >
            <span
              style={{
                width: '10px',
                height: '10px',
                backgroundColor: colors.accent.main,
                borderRadius: '50%'
              }}
            />
            <span>Inovação</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowHeader;

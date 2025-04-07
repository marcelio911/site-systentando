import React from 'react';
import { colors } from '../../../utils/colors';
import { User, Star, Target, Code, Package, Award } from 'lucide-react';

const UserProfileCard = () => {
  // Dados mockados para o perfil do usuário
  const userData = {
    name: 'Ana Silva',
    level: 7,
    rank: 'Especialista',
    pointsTotal: 2850,
    pointsToNextLevel: 350,
    joinDate: '09/01/2025',
    projects: 4,
    contributions: 28,
    rating: 4.8,
    badges: [
      {
        name: 'Contribuidor Ativo',
        icon: <Code size={14} />,
        color: colors.categories.work
      },
      {
        name: 'Especialista UX',
        icon: <Package size={14} />,
        color: colors.categories.personal
      },
      {
        name: 'Super Saudável',
        icon: <Target size={14} />,
        color: colors.categories.health
      }
    ]
  };

  // Cálculo da barra de progresso
  const progressPercentage = Math.min(
    ((userData.pointsTotal % 1000) / 1000) * 100, 
    100
  );

  return (
    <div style={{
      backgroundColor: colors.dark.card,
      borderRadius: '8px',
      overflow: 'hidden',
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    }}>
      {/* Cabeçalho do cartão */}
      <div style={{
        backgroundColor: colors.primary.dark,
        padding: '1.5rem',
        position: 'relative'
      }}>
        {/* Avatar e informações básicas */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem'
        }}>
          <div style={{
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            backgroundColor: colors.primary.main,
            border: `3px solid ${colors.accent.main}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden'
          }}>
            <User size={40} />
          </div>
          
          <div>
            <h3 style={{ fontWeight: 'bold', fontSize: '1.25rem', marginBottom: '0.25rem' }}>
              {userData.name}
            </h3>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              marginBottom: '0.5rem'
            }}>
              <div style={{
                backgroundColor: colors.accent.main,
                color: 'white',
                fontSize: '0.75rem',
                fontWeight: 'bold',
                padding: '0.25rem 0.5rem',
                borderRadius: '4px',
                display: 'flex',
                alignItems: 'center',
                gap: '0.25rem'
              }}>
                <Star size={12} />
                Nível {userData.level}
              </div>
              <div style={{
                fontSize: '0.875rem',
                color: colors.dark.subtext
              }}>
                {userData.rank}
              </div>
            </div>
            
            <div style={{
              fontSize: '0.75rem',
              color: colors.dark.subtext
            }}>
              Membro desde {userData.joinDate}
            </div>
          </div>
        </div>
        
        {/* Barra de progresso para o próximo nível */}
        <div style={{
          marginTop: '1.25rem'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '0.5rem',
            fontSize: '0.75rem',
            color: colors.dark.subtext
          }}>
            <span>XP: {userData.pointsTotal}</span>
            <span>Próximo nível: +{userData.pointsToNextLevel} XP</span>
          </div>
          
          <div style={{
            height: '8px',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '4px',
            overflow: 'hidden'
          }}>
            <div style={{
              height: '100%',
              width: `${progressPercentage}%`,
              backgroundColor: colors.accent.main,
              borderRadius: '4px',
              transition: 'width 0.5s ease-in-out'
            }} />
          </div>
        </div>
      </div>
      
      {/* Corpo do cartão */}
      <div style={{
        padding: '1.5rem',
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column'
      }}>
        {/* Estatísticas */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1rem',
          marginBottom: '1.5rem'
        }}>
          <div style={{
            textAlign: 'center',
            backgroundColor: 'rgba(0, 79, 79, 0.15)',
            padding: '0.75rem',
            borderRadius: '6px'
          }}>
            <div style={{ fontSize: '1.25rem', fontWeight: 'bold', color: colors.primary.light }}>
              {userData.projects}
            </div>
            <div style={{ fontSize: '0.75rem', color: colors.dark.subtext }}>
              Projetos
            </div>
          </div>
          
          <div style={{
            textAlign: 'center',
            backgroundColor: 'rgba(255, 125, 80, 0.15)',
            padding: '0.75rem',
            borderRadius: '6px'
          }}>
            <div style={{ fontSize: '1.25rem', fontWeight: 'bold', color: colors.accent.main }}>
              {userData.contributions}
            </div>
            <div style={{ fontSize: '0.75rem', color: colors.dark.subtext }}>
              Contribuições
            </div>
          </div>
          
          <div style={{
            textAlign: 'center',
            backgroundColor: 'rgba(253, 203, 110, 0.15)',
            padding: '0.75rem',
            borderRadius: '6px'
          }}>
            <div style={{ fontSize: '1.25rem', fontWeight: 'bold', color: colors.feedback.warning }}>
              {userData.rating}
            </div>
            <div style={{ fontSize: '0.75rem', color: colors.dark.subtext }}>
              Avaliação
            </div>
          </div>
        </div>
        
        {/* Badges/Emblemas */}
        <div>
          <h4 style={{ 
            fontSize: '0.875rem', 
            marginBottom: '0.75rem',
            color: colors.dark.subtext,
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <Award size={14} />
            Principais Emblemas
          </h4>
          
          <div style={{
            display: 'flex',
            gap: '0.75rem',
            flexWrap: 'wrap'
          }}>
            {userData.badges.map((badge, index) => (
              <div 
                key={index}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.375rem',
                  backgroundColor: 'rgba(0, 0, 0, 0.2)',
                  padding: '0.375rem 0.625rem',
                  borderRadius: '4px',
                  fontSize: '0.75rem',
                  color: badge.color
                }}
              >
                {badge.icon}
                {badge.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfileCard;

import React, { useState } from 'react';
import { colors } from '../../../utils/colors';
import { Trophy, ChevronDown, ChevronUp } from 'lucide-react';

const LeaderboardCard = () => {
  const [activeCategory, setActiveCategory] = useState('general');
  const [expanded, setExpanded] = useState(false);
  
  // Dados mockados para o leaderboard
  const categories = [
    { id: 'general', label: 'Geral' },
    { id: 'coding', label: 'Código' },
    { id: 'health', label: 'Saúde' },
    { id: 'productivity', label: 'Produtividade' }
  ];
  
  const leaderboardData = {
    general: [
      { rank: 1, name: 'João Mendes', points: 4250, isCurrentUser: false },
      { rank: 2, name: 'Mariana Costa', points: 3980, isCurrentUser: false },
      { rank: 3, name: 'Rafael Souza', points: 3720, isCurrentUser: false },
      { rank: 4, name: 'Ana Silva', points: 2850, isCurrentUser: true },
      { rank: 5, name: 'Carlos Eduardo', points: 2690, isCurrentUser: false },
      { rank: 6, name: 'Julia Ferreira', points: 2520, isCurrentUser: false },
      { rank: 7, name: 'Lucas Oliveira', points: 2380, isCurrentUser: false },
      { rank: 8, name: 'Fernanda Alves', points: 2240, isCurrentUser: false },
      { rank: 9, name: 'Bruno Martins', points: 2170, isCurrentUser: false },
      { rank: 10, name: 'Camila Santos', points: 2080, isCurrentUser: false }
    ],
    coding: [
      { rank: 1, name: 'Rafael Souza', points: 1820, isCurrentUser: false },
      { rank: 2, name: 'João Mendes', points: 1680, isCurrentUser: false },
      { rank: 3, name: 'Ana Silva', points: 1450, isCurrentUser: true },
      { rank: 4, name: 'Mariana Costa', points: 1320, isCurrentUser: false },
      { rank: 5, name: 'Bruno Martins', points: 1180, isCurrentUser: false }
    ],
    health: [
      { rank: 1, name: 'Mariana Costa', points: 1560, isCurrentUser: false },
      { rank: 2, name: 'João Mendes', points: 1480, isCurrentUser: false },
      { rank: 3, name: 'Carlos Eduardo', points: 1320, isCurrentUser: false },
      { rank: 4, name: 'Julia Ferreira', points: 1250, isCurrentUser: false },
      { rank: 5, name: 'Ana Silva', points: 1120, isCurrentUser: true }
    ],
    productivity: [
      { rank: 1, name: 'João Mendes', points: 1780, isCurrentUser: false },
      { rank: 2, name: 'Ana Silva', points: 1640, isCurrentUser: true },
      { rank: 3, name: 'Rafael Souza', points: 1520, isCurrentUser: false },
      { rank: 4, name: 'Fernanda Alves', points: 1380, isCurrentUser: false },
      { rank: 5, name: 'Mariana Costa', points: 1290, isCurrentUser: false }
    ]
  };
  
  // Função para obter as medalhas com base na posição
  const getMedalColor = (rank) => {
    switch (rank) {
      case 1:
        return '#FFD700'; // Gold
      case 2:
        return '#C0C0C0'; // Silver
      case 3:
        return '#CD7F32'; // Bronze
      default:
        return 'transparent';
    }
  };
  
  // Quantidade de itens a mostrar quando não expandido
  const displayCount = 5;
  
  // Lista atual com base na categoria selecionada
  const currentList = leaderboardData[activeCategory] || [];
  
  // Lista filtrada com base no estado de expansão
  const displayList = expanded ? currentList : currentList.slice(0, displayCount);
  
  // Encontrar a posição do usuário atual se não estiver nos primeiros 5
  const currentUserRank = !expanded && 
    currentList.findIndex(item => item.isCurrentUser) >= displayCount ? 
    currentList.find(item => item.isCurrentUser) : 
    null;
  
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
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <h3 style={{
          fontWeight: 'bold',
          fontSize: '1.125rem',
          margin: 0,
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem'
        }}>
          <Trophy size={18} style={{ color: '#FFD700' }} />
          Ranking
        </h3>
        
        {/* Seleção de categorias */}
        <div style={{
          display: 'flex',
          gap: '0.5rem'
        }}>
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              style={{
                backgroundColor: activeCategory === category.id ? 
                  'rgba(255, 255, 255, 0.15)' : 
                  'transparent',
                border: 'none',
                borderRadius: '4px',
                padding: '0.375rem 0.625rem',
                fontSize: '0.75rem',
                color: activeCategory === category.id ? 
                  'white' : 
                  colors.dark.subtext,
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>
      
      {/* Corpo do cartão */}
      <div style={{
        padding: '1rem',
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column'
      }}>
        {/* Lista do ranking */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '0.75rem'
        }}>
          {displayList.map((item) => (
            <div 
              key={item.rank}
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '0.75rem',
                borderRadius: '6px',
                backgroundColor: item.isCurrentUser ? 
                  'rgba(255, 125, 80, 0.15)' : 
                  'rgba(255, 255, 255, 0.05)',
                border: item.isCurrentUser ? 
                  `1px solid ${colors.accent.main}33` : 
                  '1px solid transparent'
              }}
            >
              {/* Rank com medalha para os 3 primeiros */}
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                backgroundColor: item.rank <= 3 ? 
                  'rgba(255, 255, 255, 0.1)' : 
                  'rgba(255, 255, 255, 0.05)',
                border: `2px solid ${getMedalColor(item.rank)}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.875rem',
                fontWeight: 'bold',
                marginRight: '0.75rem'
              }}>
                {item.rank}
              </div>
              
              {/* Nome do usuário */}
              <div style={{
                flexGrow: 1,
                fontSize: '0.875rem',
                fontWeight: item.isCurrentUser ? 'bold' : 'normal'
              }}>
                {item.name}
                {item.isCurrentUser && (
                  <span style={{ 
                    fontSize: '0.75rem',
                    opacity: 0.7,
                    marginLeft: '0.5rem'
                  }}>
                    (você)
                  </span>
                )}
              </div>
              
              {/* Pontuação */}
              <div style={{
                backgroundColor: 'rgba(0, 0, 0, 0.2)',
                padding: '0.375rem 0.625rem',
                borderRadius: '4px',
                fontSize: '0.75rem',
                fontWeight: 'bold',
                color: item.rank <= 3 ? 
                  colors.accent.main : 
                  colors.dark.subtext
              }}>
                {item.points} pts
              </div>
            </div>
          ))}
          
          {/* Mostrar a posição do usuário atual se estiver fora dos primeiros 5 */}
          {currentUserRank && (
            <>
              {/* Separador */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '0.25rem 0.75rem'
              }}>
                <div style={{ 
                  height: '1px', 
                  backgroundColor: colors.dark.border,
                  flexGrow: 1
                }} />
                <div style={{ 
                  fontSize: '0.75rem', 
                  color: colors.dark.subtext
                }}>
                  •••
                </div>
                <div style={{ 
                  height: '1px', 
                  backgroundColor: colors.dark.border,
                  flexGrow: 1
                }} />
              </div>
              
              {/* Linha do usuário atual */}
              <div 
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '0.75rem',
                  borderRadius: '6px',
                  backgroundColor: 'rgba(255, 125, 80, 0.15)',
                  border: `1px solid ${colors.accent.main}33`
                }}
              >
                <div style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.875rem',
                  fontWeight: 'bold',
                  marginRight: '0.75rem'
                }}>
                  {currentUserRank.rank}
                </div>
                
                <div style={{
                  flexGrow: 1,
                  fontSize: '0.875rem',
                  fontWeight: 'bold'
                }}>
                  {currentUserRank.name}
                  <span style={{ 
                    fontSize: '0.75rem',
                    opacity: 0.7,
                    marginLeft: '0.5rem'
                  }}>
                    (você)
                  </span>
                </div>
                
                <div style={{
                  backgroundColor: 'rgba(0, 0, 0, 0.2)',
                  padding: '0.375rem 0.625rem',
                  borderRadius: '4px',
                  fontSize: '0.75rem',
                  fontWeight: 'bold',
                  color: colors.dark.subtext
                }}>
                  {currentUserRank.points} pts
                </div>
              </div>
            </>
          )}
        </div>
        
        {/* Botão para expandir/recolher */}
        {currentList.length > displayCount && (
          <button 
            onClick={() => setExpanded(!expanded)}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              border: 'none',
              borderRadius: '4px',
              padding: '0.5rem',
              fontSize: '0.75rem',
              color: colors.dark.subtext,
              cursor: 'pointer',
              marginTop: '1rem',
              transition: 'all 0.2s ease'
            }}
          >
            {expanded ? (
              <>
                <ChevronUp size={14} />
                Mostrar menos
              </>
            ) : (
              <>
                <ChevronDown size={14} />
                Ver ranking completo
              </>
            )}
          </button>
        )}
      </div>
    </div>
  );
};

export default LeaderboardCard;

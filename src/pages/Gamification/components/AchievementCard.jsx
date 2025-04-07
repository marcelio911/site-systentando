import React, { useState } from 'react';
import { colors } from '../../../utils/colors';
import { Award, Check, Code, Heart, Clock, Users, Target, Lightbulb, Star, Zap, GitPullRequest, Layers, Bug, Activity, TrendingUp, MessageCircle } from 'lucide-react';

const AchievementCard = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  // Dados mockados para conquistas
  const categories = [
    { id: 'all', label: 'Todos', icon: <Award size={14} /> },
    { id: 'coding', label: 'Código', icon: <Code size={14} /> },
    { id: 'health', label: 'Saúde', icon: <Heart size={14} /> },
    { id: 'productivity', label: 'Produtividade', icon: <Clock size={14} /> },
    { id: 'community', label: 'Comunidade', icon: <Users size={14} /> }
  ];
  
  const achievements = [
    // Conquistas de código
    {
      id: 1,
      name: 'Primeiro Pull Request',
      description: 'Envie seu primeiro PR para qualquer projeto',
      category: 'coding',
      icon: <GitPullRequest size={20} />,
      color: colors.categories.work,
      earned: true,
      date: '10/01/2025',
      progress: 100,
      xp: 100
    },
    {
      id: 2,
      name: 'Especialista em Componentes',
      description: 'Contribua com 5 componentes UI reutilizáveis',
      category: 'coding',
      icon: <Code size={20} />,
      color: colors.categories.work,
      earned: true,
      date: '25/01/2025',
      progress: 100,
      xp: 250
    },
    {
      id: 3,
      name: 'Arquiteto de Soluções',
      description: 'Tenha 3 designs de sistema aprovados',
      category: 'coding',
      icon: <Layers size={20} />,
      color: colors.categories.work,
      earned: false,
      progress: 66,
      xp: 500
    },
    {
      id: 4,
      name: 'Caçador de Bugs',
      description: 'Reporte e corrija 10 bugs críticos',
      category: 'coding',
      icon: <Bug size={20} />,
      color: colors.categories.work,
      earned: false,
      progress: 40,
      xp: 300
    },
    
    // Conquistas de saúde
    {
      id: 5,
      name: 'Adepto do Bem-estar',
      description: 'Complete 7 dias consecutivos registrando sua alimentação',
      category: 'health',
      icon: <Heart size={20} />,
      color: colors.categories.health,
      earned: true,
      date: '15/01/2025',
      progress: 100,
      xp: 150
    },
    {
      id: 6,
      name: 'Maratonista Digital',
      description: 'Atinja 10.000 passos diários por 5 dias seguidos',
      category: 'health',
      icon: <Activity size={20} />,
      color: colors.categories.health,
      earned: false,
      progress: 80,
      xp: 200
    },
    {
      id: 7,
      name: 'Equilíbrio Nutricional',
      description: 'Mantenha a proporção ideal de macronutrientes por 14 dias',
      category: 'health',
      icon: <Target size={20} />,
      color: colors.categories.health,
      earned: false,
      progress: 50,
      xp: 300
    },
    
    // Conquistas de produtividade
    {
      id: 8,
      name: 'Mestre do Foco',
      description: 'Use o ZEN Launcher por 10 dias consecutivos',
      category: 'productivity',
      icon: <Clock size={20} />,
      color: colors.categories.personal,
      earned: true,
      date: '22/01/2025',
      progress: 100,
      xp: 200
    },
    {
      id: 9,
      name: 'Minimalista Digital',
      description: 'Reduza seu tempo em redes sociais em 30%',
      category: 'productivity',
      icon: <Zap size={20} />,
      color: colors.categories.personal,
      earned: true,
      date: '01/02/2025',
      progress: 100,
      xp: 250
    },
    {
      id: 10,
      name: 'Produtividade Constante',
      description: 'Mantenha a proporção de tempo produtivo acima de 60% por 21 dias',
      category: 'productivity',
      icon: <TrendingUp size={20} />,
      color: colors.categories.personal,
      earned: false,
      progress: 33,
      xp: 400
    },
    
    // Conquistas de comunidade
    {
      id: 11,
      name: 'Mentor Iniciante',
      description: 'Ajude 3 novos membros com suas dúvidas',
      category: 'community',
      icon: <Users size={20} />,
      color: colors.feedback.info,
      earned: true,
      date: '05/02/2025',
      progress: 100,
      xp: 150
    },
    {
      id: 12,
      name: 'Colaborador Ativo',
      description: 'Participe de 5 rodadas de negócios',
      category: 'community',
      icon: <MessageCircle size={20} />,
      color: colors.feedback.info,
      earned: false,
      progress: 60,
      xp: 300
    }
  ];
  
  // Filtra conquistas com base na categoria selecionada
  const filteredAchievements = activeCategory === 'all'
    ? achievements
    : achievements.filter(achievement => achievement.category === activeCategory);
  
  // Agrupa conquistas por obtidas/não obtidas
  const earnedAchievements = filteredAchievements.filter(a => a.earned);
  const inProgressAchievements = filteredAchievements.filter(a => !a.earned);
  
  // Calcula estatísticas
  const totalEarned = achievements.filter(a => a.earned).length;
  const totalAchievements = achievements.length;
  const earnedPercentage = Math.round((totalEarned / totalAchievements) * 100);
  const totalXP = achievements.filter(a => a.earned).reduce((sum, a) => sum + a.xp, 0);
  
  return (
    <div>
      {/* Estatísticas de conquistas */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
        gap: '1rem',
        marginBottom: '1.5rem'
      }}>
        <div style={{
          backgroundColor: 'rgba(0, 79, 79, 0.15)',
          padding: '1rem',
          borderRadius: '8px',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.5rem'
        }}>
          <div style={{ 
            fontSize: '0.75rem', 
            color: colors.dark.subtext 
          }}>
            Conquistas Obtidas
          </div>
          <div style={{ 
            display: 'flex', 
            alignItems: 'flex-end', 
            gap: '0.5rem' 
          }}>
            <div style={{ 
              fontSize: '1.5rem', 
              fontWeight: 'bold', 
              color: colors.primary.light 
            }}>
              {totalEarned}
            </div>
            <div style={{ 
              fontSize: '0.875rem', 
              color: colors.dark.subtext,
              paddingBottom: '0.25rem'
            }}>
              de {totalAchievements}
            </div>
          </div>
          <div style={{ 
            height: '4px', 
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '2px',
            overflow: 'hidden'
          }}>
            <div style={{
              height: '100%',
              width: `${earnedPercentage}%`,
              backgroundColor: colors.primary.light,
              borderRadius: '2px'
            }} />
          </div>
        </div>
        
        <div style={{
          backgroundColor: 'rgba(255, 125, 80, 0.15)',
          padding: '1rem',
          borderRadius: '8px',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.5rem'
        }}>
          <div style={{ 
            fontSize: '0.75rem', 
            color: colors.dark.subtext 
          }}>
            XP Total de Conquistas
          </div>
          <div style={{ 
            fontSize: '1.5rem', 
            fontWeight: 'bold', 
            color: colors.accent.main 
          }}>
            {totalXP}
          </div>
          <div style={{ 
            fontSize: '0.75rem', 
            color: colors.dark.subtext 
          }}>
            <Star size={12} style={{ display: 'inline', marginRight: '0.25rem' }} />
            Contribui para seu nível
          </div>
        </div>
        
        <div style={{
          backgroundColor: 'rgba(0, 184, 148, 0.15)',
          padding: '1rem',
          borderRadius: '8px',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.5rem'
        }}>
          <div style={{ 
            fontSize: '0.75rem', 
            color: colors.dark.subtext 
          }}>
            Próxima Conquista
          </div>
          <div style={{ 
            fontSize: '0.875rem', 
            fontWeight: 'medium', 
            color: colors.feedback.success 
          }}>
            {inProgressAchievements.sort((a, b) => b.progress - a.progress)[0]?.name || 'Nenhuma pendente'}
          </div>
          <div style={{ 
            fontSize: '0.75rem', 
            color: colors.dark.subtext 
          }}>
            {inProgressAchievements.length > 0 
              ? `${Math.max(...inProgressAchievements.map(a => a.progress))}% concluído` 
              : 'Você conquistou tudo!'}
          </div>
        </div>
      </div>
      
      {/* Navegação por categorias */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '0.5rem',
        marginBottom: '1.5rem'
      }}>
        {categories.map(category => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              backgroundColor: activeCategory === category.id ? 
                'rgba(255, 255, 255, 0.15)' : 
                'rgba(255, 255, 255, 0.05)',
              border: 'none',
              padding: '0.5rem 0.75rem',
              borderRadius: '6px',
              fontSize: '0.875rem',
              color: activeCategory === category.id ? 
                'white' : 
                colors.dark.subtext,
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            {category.icon}
            {category.label}
            {category.id === 'all' && (
              <span style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                fontSize: '0.75rem',
                marginLeft: '0.25rem'
              }}>
                {totalEarned}
              </span>
            )}
          </button>
        ))}
      </div>
      
      {/* Conquistas obtidas */}
      {earnedAchievements.length > 0 && (
        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ 
            fontSize: '1rem', 
            fontWeight: 'medium',
            marginBottom: '1rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <Check size={16} style={{ color: colors.feedback.success }} />
            Conquistas Obtidas
          </h3>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '1rem'
          }}>
            {earnedAchievements.map(achievement => (
              <div 
                key={achievement.id}
                style={{
                  display: 'flex',
                  gap: '1rem',
                  padding: '1rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '8px',
                  border: `1px solid ${achievement.color}33`
                }}
              >
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  backgroundColor: `${achievement.color}22`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: achievement.color
                }}>
                  {achievement.icon}
                </div>
                
                <div style={{ flexGrow: 1 }}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    marginBottom: '0.25rem'
                  }}>
                    <div style={{ 
                      fontSize: '0.875rem', 
                      fontWeight: 'bold' 
                    }}>
                      {achievement.name}
                    </div>
                    <div style={{
                      backgroundColor: `${achievement.color}22`,
                      color: achievement.color,
                      padding: '0.125rem 0.375rem',
                      borderRadius: '4px',
                      fontSize: '0.75rem',
                      fontWeight: 'bold'
                    }}>
                      +{achievement.xp} XP
                    </div>
                  </div>
                  
                  <div style={{ 
                    fontSize: '0.75rem', 
                    color: colors.dark.subtext,
                    marginBottom: '0.5rem' 
                  }}>
                    {achievement.description}
                  </div>
                  
                  <div style={{ 
                    fontSize: '0.75rem', 
                    color: colors.dark.subtext,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.25rem'
                  }}>
                    <Check size={12} style={{ color: colors.feedback.success }} />
                    Obtido em {achievement.date}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {/* Conquistas em andamento */}
      {inProgressAchievements.length > 0 && (
        <div>
          <h3 style={{ 
            fontSize: '1rem', 
            fontWeight: 'medium',
            marginBottom: '1rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <Target size={16} style={{ color: colors.feedback.warning }} />
            Em Progresso
          </h3>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '1rem'
          }}>
            {inProgressAchievements.map(achievement => (
              <div 
                key={achievement.id}
                style={{
                  display: 'flex',
                  gap: '1rem',
                  padding: '1rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '8px',
                  border: `1px solid ${colors.dark.border}`
                }}
              >
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: colors.dark.subtext
                }}>
                  {achievement.icon}
                </div>
                
                <div style={{ flexGrow: 1 }}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    marginBottom: '0.25rem'
                  }}>
                    <div style={{ 
                      fontSize: '0.875rem', 
                      fontWeight: 'medium' 
                    }}>
                      {achievement.name}
                    </div>
                    <div style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      color: colors.dark.subtext,
                      padding: '0.125rem 0.375rem',
                      borderRadius: '4px',
                      fontSize: '0.75rem'
                    }}>
                      +{achievement.xp} XP
                    </div>
                  </div>
                  
                  <div style={{ 
                    fontSize: '0.75rem', 
                    color: colors.dark.subtext,
                    marginBottom: '0.75rem' 
                  }}>
                    {achievement.description}
                  </div>
                  
                  <div style={{ marginBottom: '0.5rem' }}>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: '0.25rem'
                    }}>
                      <div style={{ 
                        fontSize: '0.75rem', 
                        color: colors.dark.subtext 
                      }}>
                        Progresso
                      </div>
                      <div style={{ 
                        fontSize: '0.75rem', 
                        color: colors.dark.subtext 
                      }}>
                        {achievement.progress}%
                      </div>
                    </div>
                    
                    <div style={{
                      height: '4px',
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      borderRadius: '2px',
                      overflow: 'hidden'
                    }}>
                      <div style={{
                        height: '100%',
                        width: `${achievement.progress}%`,
                        backgroundColor: achievement.color,
                        borderRadius: '2px'
                      }} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AchievementCard;

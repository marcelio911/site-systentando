import React from 'react';
import { colors } from '../../../utils/colors';
import { GitPullRequest, GitMerge, Code, MessageSquare, Award, Heart, Activity, Star, Users, ThumbsUp } from 'lucide-react';

const ActivityFeed = () => {
  // Dados mockados para atividades
  const activities = [
    {
      id: 1,
      type: 'pr_opened',
      title: 'Você abriu um novo pull request',
      description: 'Implementação do dashboard de gamificação',
      project: 'Systentando/landingpage',
      time: '2 dias atrás',
      icon: <GitPullRequest size={16} />,
      color: colors.feedback.info
    },
    {
      id: 2,
      type: 'achievement',
      title: 'Você conquistou um emblema',
      description: 'Minimalista Digital',
      project: 'ZEN Launcher',
      time: '3 dias atrás',
      icon: <Award size={16} />,
      color: colors.accent.main
    },
    {
      id: 3,
      type: 'review',
      title: 'Você recebeu uma aprovação',
      description: 'Correção de bugs no componente de nutrição',
      project: 'Systentando/meu-nutri',
      time: '4 dias atrás',
      icon: <ThumbsUp size={16} />,
      color: colors.feedback.success
    },
    {
      id: 4,
      type: 'pr_merged',
      title: 'Seu pull request foi mesclado',
      description: 'Correção de bugs no componente de nutrição',
      project: 'Systentando/meu-nutri',
      time: '4 dias atrás',
      icon: <GitMerge size={16} />,
      color: colors.categories.personal
    },
    {
      id: 5,
      type: 'health',
      title: 'Você atingiu sua meta de nutrição',
      description: '7 dias consecutivos de equilíbrio nutricional',
      project: 'Meu Nutri',
      time: '1 semana atrás',
      icon: <Heart size={16} />,
      color: colors.categories.health
    },
    {
      id: 6,
      type: 'activity',
      title: 'Você superou sua meta de exercícios',
      description: '5 dias consecutivos com mais de 8.000 passos',
      project: 'ZEN Launcher',
      time: '1 semana atrás',
      icon: <Activity size={16} />,
      color: colors.categories.work
    },
    {
      id: 7,
      type: 'level_up',
      title: 'Você subiu de nível',
      description: 'Nível 7: Especialista',
      project: 'Systentando',
      time: '1 semana atrás',
      icon: <Star size={16} />,
      color: colors.accent.main
    },
    {
      id: 8,
      type: 'code',
      title: 'Você contribuiu com código',
      description: 'Implementou 2 novos componentes reutilizáveis',
      project: 'Systentando/ui-components',
      time: '2 semanas atrás',
      icon: <Code size={16} />,
      color: colors.categories.work
    },
    {
      id: 9,
      type: 'community',
      title: 'Você ajudou um novo membro',
      description: 'Respondeu dúvidas e auxiliou no onboarding',
      project: 'Comunidade Systentando',
      time: '2 semanas atrás',
      icon: <Users size={16} />,
      color: colors.feedback.info
    },
    {
      id: 10,
      type: 'comment',
      title: 'Seu comentário foi destacado',
      description: 'Sugestão de melhoria no sistema de emblemas',
      project: 'Systentando/gamification',
      time: '3 semanas atrás',
      icon: <MessageSquare size={16} />,
      color: colors.feedback.warning
    }
  ];
  
  // Agrupar atividades por dia/semana
  const groupActivitiesByTime = () => {
    const groups = {};
    
    activities.forEach(activity => {
      let groupKey;
      
      if (activity.time.includes('dia')) {
        groupKey = 'Esta semana';
      } else if (activity.time.includes('semana')) {
        groupKey = 'Este mês';
      } else {
        groupKey = 'Anterior';
      }
      
      if (!groups[groupKey]) {
        groups[groupKey] = [];
      }
      
      groups[groupKey].push(activity);
    });
    
    return groups;
  };
  
  const groupedActivities = groupActivitiesByTime();
  
  return (
    <div>
      {Object.entries(groupedActivities).map(([group, activities]) => (
        <div key={group} style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ 
            fontSize: '0.875rem', 
            fontWeight: 'medium',
            color: colors.dark.subtext,
            marginBottom: '1rem',
            paddingBottom: '0.5rem',
            borderBottom: `1px solid ${colors.dark.border}`
          }}>
            {group}
          </h3>
          
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}>
            {activities.map(activity => (
              <div 
                key={activity.id}
                style={{
                  display: 'flex',
                  gap: '1rem',
                  padding: '1rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '8px'
                }}
              >
                <div style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  backgroundColor: `${activity.color}22`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: activity.color
                }}>
                  {activity.icon}
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
                      {activity.title}
                    </div>
                    <div style={{
                      fontSize: '0.75rem',
                      color: colors.dark.subtext
                    }}>
                      {activity.time}
                    </div>
                  </div>
                  
                  <div style={{ 
                    fontSize: '0.8125rem', 
                    marginBottom: '0.375rem' 
                  }}>
                    {activity.description}
                  </div>
                  
                  <div style={{ 
                    fontSize: '0.75rem', 
                    color: colors.dark.subtext,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.25rem'
                  }}>
                    {activity.project}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ActivityFeed;

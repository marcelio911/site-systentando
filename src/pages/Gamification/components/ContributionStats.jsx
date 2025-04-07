import React from 'react';
import { colors } from '../../../utils/colors';
import { GitPullRequest, Star, Code, GitMerge, GitBranch, Activity, Layers, MessageCircle } from 'lucide-react';

const ContributionStats = () => {
  // Dados mockados para as estatísticas de contribuição
  const contributionData = {
    totalContributions: 28,
    acceptedPRs: 22,
    rejectedPRs: 2,
    pendingPRs: 4,
    commitCount: 147,
    linesAdded: 3820,
    linesRemoved: 1240,
    codeReviews: 14,
    level: {
      current: 'Especialista',
      next: 'Líder',
      progress: 65
    },
    recentActivity: [
      {
        type: 'pr_merged',
        title: 'Refatoração do componente de navegação',
        date: '2 dias atrás',
        project: 'ZEN Launcher'
      },
      {
        type: 'code_review',
        title: 'Revisão da API de nutrição',
        date: '4 dias atrás',
        project: 'Meu Nutri'
      },
      {
        type: 'pr_opened',
        title: 'Implementação do dashboard de estatísticas',
        date: '1 semana atrás',
        project: 'Empreenda4Devs'
      }
    ]
  };

  // Define os ícones para os tipos de atividade
  const activityIcons = {
    pr_merged: <GitMerge size={14} style={{ color: colors.categories.work }} />,
    code_review: <Code size={14} style={{ color: colors.categories.personal }} />,
    pr_opened: <GitPullRequest size={14} style={{ color: colors.accent.main }} />
  };

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
          <Code size={18} />
          Contribuições
        </h3>
        
        {/* Nível de contribuição */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem'
        }}>
          <Star size={16} style={{ color: colors.accent.main }} />
          <span style={{ fontSize: '0.875rem' }}>
            {contributionData.level.current}
          </span>
        </div>
      </div>
      
      {/* Corpo do cartão */}
      <div style={{
        padding: '1.5rem',
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem'
      }}>
        {/* Progresso para o próximo nível */}
        <div>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '0.5rem',
            fontSize: '0.75rem'
          }}>
            <span style={{ color: colors.dark.subtext }}>
              {contributionData.level.current}
            </span>
            <span style={{ color: colors.dark.subtext }}>
              {contributionData.level.next}
            </span>
          </div>
          
          <div style={{
            height: '6px',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '3px',
            overflow: 'hidden'
          }}>
            <div style={{
              height: '100%',
              width: `${contributionData.level.progress}%`,
              backgroundColor: colors.primary.main,
              borderRadius: '3px',
              transition: 'width 0.5s ease-in-out'
            }} />
          </div>
          
          <div style={{
            textAlign: 'center',
            marginTop: '0.5rem',
            fontSize: '0.75rem',
            color: colors.dark.subtext
          }}>
            {contributionData.level.progress}% para se tornar um {contributionData.level.next}
          </div>
        </div>
        
        {/* Estatísticas principais */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '1rem'
        }}>
          <div style={{
            backgroundColor: 'rgba(0, 79, 79, 0.15)',
            padding: '1rem',
            borderRadius: '6px',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <GitPullRequest size={16} style={{ color: colors.primary.light }} />
              <span style={{ fontSize: '0.75rem', color: colors.dark.subtext }}>
                Pull Requests
              </span>
            </div>
            
            <div style={{ 
              fontSize: '1.25rem', 
              fontWeight: 'bold', 
              color: colors.primary.light 
            }}>
              {contributionData.totalContributions}
            </div>
            
            <div style={{
              display: 'flex',
              gap: '0.5rem',
              fontSize: '0.75rem'
            }}>
              <span style={{ color: colors.feedback.success }}>
                {contributionData.acceptedPRs} aceitos
              </span>
              <span style={{ color: colors.dark.subtext }}>•</span>
              <span style={{ color: colors.feedback.error }}>
                {contributionData.rejectedPRs} rejeitados
              </span>
              <span style={{ color: colors.dark.subtext }}>•</span>
              <span style={{ color: colors.feedback.warning }}>
                {contributionData.pendingPRs} pendentes
              </span>
            </div>
          </div>
          
          <div style={{
            backgroundColor: 'rgba(255, 125, 80, 0.15)',
            padding: '1rem',
            borderRadius: '6px',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <GitBranch size={16} style={{ color: colors.accent.main }} />
              <span style={{ fontSize: '0.75rem', color: colors.dark.subtext }}>
                Commits
              </span>
            </div>
            
            <div style={{ 
              fontSize: '1.25rem', 
              fontWeight: 'bold', 
              color: colors.accent.main 
            }}>
              {contributionData.commitCount}
            </div>
            
            <div style={{
              display: 'flex',
              gap: '0.5rem',
              fontSize: '0.75rem',
              color: colors.dark.subtext
            }}>
              <span style={{ color: colors.feedback.success }}>
                +{contributionData.linesAdded} linhas
              </span>
              <span>•</span>
              <span style={{ color: colors.feedback.error }}>
                -{contributionData.linesRemoved} linhas
              </span>
            </div>
          </div>
        </div>
        
        {/* Atividades recentes */}
        <div>
          <h4 style={{ 
            fontSize: '0.875rem', 
            marginBottom: '0.75rem',
            color: colors.dark.subtext,
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <MessageCircle size={14} />
            Atividades Recentes
          </h4>
          
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem'
          }}>
            {contributionData.recentActivity.map((activity, index) => (
              <div 
                key={index}
                style={{
                  display: 'flex',
                  gap: '0.75rem',
                  padding: '0.75rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '6px'
                }}
              >
                <div style={{
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(0, 0, 0, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {activityIcons[activity.type]}
                </div>
                
                <div style={{ flexGrow: 1 }}>
                  <div style={{ 
                    fontSize: '0.8125rem', 
                    fontWeight: 'medium',
                    marginBottom: '0.25rem'
                  }}>
                    {activity.title}
                  </div>
                  
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontSize: '0.75rem',
                    color: colors.dark.subtext
                  }}>
                    <span>{activity.project}</span>
                    <span>•</span>
                    <span>{activity.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContributionStats;

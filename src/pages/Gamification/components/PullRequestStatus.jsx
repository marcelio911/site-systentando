import React, { useState } from 'react';
import { colors } from '../../../utils/colors';
import { GitPullRequest, Check, X, Clock, Github, ExternalLink, MessageSquare, Code, Eye } from 'lucide-react';

const PullRequestStatus = () => {
  const [filter, setFilter] = useState('all');
  
  // Dados mockados para PRs
  const pullRequests = [
    {
      id: 'PR-123',
      title: 'Implementação do dashboard de gamificação',
      repository: 'Systentando/landingpage',
      status: 'open',
      created: '2 dias atrás',
      updated: '5 horas atrás',
      reviewers: 2,
      comments: 5,
      additions: 480,
      deletions: 120,
      approvals: 1,
      changes: 0,
      reviews: [
        { type: 'approved', user: 'João Mendes', time: '1 dia atrás' },
        { type: 'pending', user: 'Mariana Costa', time: 'pendente' }
      ]
    },
    {
      id: 'PR-114',
      title: 'Correção de bugs no componente de nutrição',
      repository: 'Systentando/meu-nutri',
      status: 'merged',
      created: '1 semana atrás',
      updated: '3 dias atrás',
      merged: '3 dias atrás',
      reviewers: 2,
      comments: 3,
      additions: 45,
      deletions: 12,
      approvals: 2,
      changes: 0,
      reviews: [
        { type: 'approved', user: 'Carlos Eduardo', time: '4 dias atrás' },
        { type: 'approved', user: 'Rafael Souza', time: '4 dias atrás' }
      ]
    },
    {
      id: 'PR-109',
      title: 'Refatoração do sistema de autenticação',
      repository: 'Systentando/auth-service',
      status: 'closed',
      created: '2 semanas atrás',
      updated: '1 semana atrás',
      closed: '1 semana atrás',
      reviewers: 3,
      comments: 8,
      additions: 320,
      deletions: 290,
      approvals: 1,
      changes: 2,
      reviews: [
        { type: 'approved', user: 'Mariana Costa', time: '10 dias atrás' },
        { type: 'changes', user: 'João Mendes', time: '9 dias atrás' },
        { type: 'changes', user: 'Rafael Souza', time: '9 dias atrás' }
      ]
    },
    {
      id: 'PR-098',
      title: 'Integração com API do ZEN Launcher',
      repository: 'Systentando/zen-launcher',
      status: 'merged',
      created: '3 semanas atrás',
      updated: '2 semanas atrás',
      merged: '2 semanas atrás',
      reviewers: 2,
      comments: 4,
      additions: 150,
      deletions: 30,
      approvals: 2,
      changes: 0,
      reviews: [
        { type: 'approved', user: 'Carlos Eduardo', time: '2 semanas atrás' },
        { type: 'approved', user: 'João Mendes', time: '2 semanas atrás' }
      ]
    },
    {
      id: 'PR-087',
      title: 'Novo sistema de emblemas',
      repository: 'Systentando/gamification',
      status: 'merged',
      created: '1 mês atrás',
      updated: '3 semanas atrás',
      merged: '3 semanas atrás',
      reviewers: 3,
      comments: 7,
      additions: 420,
      deletions: 85,
      approvals: 3,
      changes: 1,
      reviews: [
        { type: 'approved', user: 'Mariana Costa', time: '3 semanas atrás' },
        { type: 'approved', user: 'Rafael Souza', time: '24 dias atrás' },
        { type: 'approved', user: 'Carlos Eduardo', time: '22 dias atrás' }
      ]
    }
  ];

  // Filtra PRs com base no filtro selecionado
  const filteredPRs = filter === 'all' 
    ? pullRequests 
    : pullRequests.filter(pr => pr.status === filter);
  
  // Status de PR para exibição
  const getStatusDetails = (status) => {
    switch (status) {
      case 'open':
        return {
          text: 'Aberto',
          color: colors.feedback.info,
          icon: <GitPullRequest size={14} />
        };
      case 'merged':
        return {
          text: 'Mesclado',
          color: colors.categories.personal,
          icon: <Check size={14} />
        };
      case 'closed':
        return {
          text: 'Fechado',
          color: colors.feedback.error,
          icon: <X size={14} />
        };
      default:
        return {
          text: 'Desconhecido',
          color: colors.dark.subtext,
          icon: <Clock size={14} />
        };
    }
  };
  
  return (
    <div>
      {/* Filtros */}
      <div style={{
        display: 'flex',
        gap: '0.5rem',
        marginBottom: '1.5rem'
      }}>
        <button
          onClick={() => setFilter('all')}
          style={{
            backgroundColor: filter === 'all' ? 
              'rgba(255, 255, 255, 0.15)' : 
              'rgba(255, 255, 255, 0.05)',
            border: 'none',
            padding: '0.5rem 0.75rem',
            borderRadius: '6px',
            fontSize: '0.875rem',
            color: filter === 'all' ? 
              'white' : 
              colors.dark.subtext,
            cursor: 'pointer',
            transition: 'all 0.2s ease'
          }}
        >
          Todos ({pullRequests.length})
        </button>
        
        <button
          onClick={() => setFilter('open')}
          style={{
            backgroundColor: filter === 'open' ? 
              'rgba(9, 132, 227, 0.15)' : 
              'rgba(255, 255, 255, 0.05)',
            border: 'none',
            padding: '0.5rem 0.75rem',
            borderRadius: '6px',
            fontSize: '0.875rem',
            color: filter === 'open' ? 
              colors.feedback.info : 
              colors.dark.subtext,
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}
        >
          <GitPullRequest size={14} />
          Abertos ({pullRequests.filter(pr => pr.status === 'open').length})
        </button>
        
        <button
          onClick={() => setFilter('merged')}
          style={{
            backgroundColor: filter === 'merged' ? 
              'rgba(155, 89, 182, 0.15)' : 
              'rgba(255, 255, 255, 0.05)',
            border: 'none',
            padding: '0.5rem 0.75rem',
            borderRadius: '6px',
            fontSize: '0.875rem',
            color: filter === 'merged' ? 
              colors.categories.personal : 
              colors.dark.subtext,
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}
        >
          <Check size={14} />
          Mesclados ({pullRequests.filter(pr => pr.status === 'merged').length})
        </button>
        
        <button
          onClick={() => setFilter('closed')}
          style={{
            backgroundColor: filter === 'closed' ? 
              'rgba(214, 48, 49, 0.15)' : 
              'rgba(255, 255, 255, 0.05)',
            border: 'none',
            padding: '0.5rem 0.75rem',
            borderRadius: '6px',
            fontSize: '0.875rem',
            color: filter === 'closed' ? 
              colors.feedback.error : 
              colors.dark.subtext,
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}
        >
          <X size={14} />
          Fechados ({pullRequests.filter(pr => pr.status === 'closed').length})
        </button>
      </div>
      
      {/* Lista de PRs */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem'
      }}>
        {filteredPRs.length === 0 ? (
          <div style={{
            textAlign: 'center',
            padding: '2rem',
            color: colors.dark.subtext
          }}>
            Nenhum pull request encontrado com os filtros atuais.
          </div>
        ) : (
          filteredPRs.map((pr) => {
            const status = getStatusDetails(pr.status);
            
            return (
              <div 
                key={pr.id}
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  border: `1px solid ${status.color}22`
                }}
              >
                {/* Cabeçalho do PR */}
                <div style={{
                  padding: '1rem',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start'
                }}>
                  <div>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      marginBottom: '0.5rem'
                    }}>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.25rem',
                        color: status.color,
                        fontSize: '0.75rem',
                        padding: '0.125rem 0.375rem',
                        backgroundColor: `${status.color}22`,
                        borderRadius: '4px'
                      }}>
                        {status.icon}
                        {status.text}
                      </div>
                      
                      <div style={{
                        fontSize: '0.75rem',
                        color: colors.dark.subtext
                      }}>
                        {pr.id}
                      </div>
                    </div>
                    
                    <h4 style={{
                      fontSize: '1rem',
                      fontWeight: 'medium',
                      margin: 0,
                      marginBottom: '0.375rem'
                    }}>
                      {pr.title}
                    </h4>
                    
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      fontSize: '0.75rem',
                      color: colors.dark.subtext
                    }}>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.25rem'
                      }}>
                        <Github size={12} />
                        {pr.repository}
                      </div>
                      
                      <span>•</span>
                      
                      <div>
                        Criado {pr.created}
                      </div>
                      
                      {pr.status === 'merged' && (
                        <>
                          <span>•</span>
                          <div style={{ color: colors.categories.personal }}>
                            Mesclado {pr.merged}
                          </div>
                        </>
                      )}
                      
                      {pr.status === 'closed' && (
                        <>
                          <span>•</span>
                          <div style={{ color: colors.feedback.error }}>
                            Fechado {pr.closed}
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                  
                  <a 
                    href="#" 
                    style={{
                      color: colors.dark.subtext,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.25rem',
                      fontSize: '0.75rem',
                      textDecoration: 'none',
                      padding: '0.25rem 0.5rem',
                      borderRadius: '4px',
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <ExternalLink size={12} />
                    Abrir
                  </a>
                </div>
                
                {/* Estatísticas do PR */}
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  padding: '0.75rem'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1.5rem',
                    flexWrap: 'wrap'
                  }}>
                    {/* Comentários */}
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.375rem',
                      fontSize: '0.75rem',
                      color: colors.dark.subtext
                    }}>
                      <MessageSquare size={14} />
                      {pr.comments} comentários
                    </div>
                    
                    {/* Código alterado */}
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.375rem',
                      fontSize: '0.75rem',
                      color: colors.dark.subtext
                    }}>
                      <Code size={14} />
                      <span style={{ color: colors.feedback.success }}>+{pr.additions}</span>
                      <span style={{ color: colors.feedback.error }}>-{pr.deletions}</span>
                    </div>
                    
                    {/* Revisores */}
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.375rem',
                      fontSize: '0.75rem',
                      color: colors.dark.subtext
                    }}>
                      <Eye size={14} />
                      {pr.reviewers} revisores
                    </div>
                    
                    {/* Status de revisão */}
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.375rem',
                      fontSize: '0.75rem',
                      color: colors.dark.subtext
                    }}>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.25rem',
                        color: colors.feedback.success
                      }}>
                        <Check size={14} />
                        {pr.approvals}
                      </div>
                      
                      {pr.changes > 0 && (
                        <div style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.25rem',
                          color: colors.feedback.warning,
                          marginLeft: '0.5rem'
                        }}>
                          <Clock size={14} />
                          {pr.changes}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                
                {/* Revisões */}
                {pr.reviews.length > 0 && (
                  <div style={{
                    padding: '0.75rem',
                    paddingTop: 0
                  }}>
                    <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.5rem'
                    }}>
                      {pr.reviews.map((review, idx) => {
                        let icon, color;
                        
                        switch(review.type) {
                          case 'approved':
                            icon = <Check size={12} />;
                            color = colors.feedback.success;
                            break;
                          case 'changes':
                            icon = <Clock size={12} />;
                            color = colors.feedback.warning;
                            break;
                          case 'pending':
                            icon = <Clock size={12} />;
                            color = colors.dark.subtext;
                            break;
                          default:
                            icon = <Clock size={12} />;
                            color = colors.dark.subtext;
                        }
                        
                        return (
                          <div 
                            key={idx}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '0.5rem',
                              fontSize: '0.75rem',
                              color: colors.dark.subtext,
                              padding: '0.375rem 0.5rem',
                              backgroundColor: 'rgba(255, 255, 255, 0.025)',
                              borderRadius: '4px'
                            }}
                          >
                            <div style={{
                              color: color,
                              display: 'flex',
                              alignItems: 'center',
                              gap: '0.25rem'
                            }}>
                              {icon}
                              {review.type === 'approved' ? 'Aprovado' : 
                               review.type === 'changes' ? 'Solicitou alterações' : 
                               'Pendente'}
                            </div>
                            
                            <span>•</span>
                            
                            <div>
                              {review.user}
                            </div>
                            
                            <span>•</span>
                            
                            <div>
                              {review.time}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default PullRequestStatus;

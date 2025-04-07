import React, { useState, useEffect, lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { colors } from '../../utils/colors';
import { Home, ChevronLeft, Award, Activity, Code, Heart, Clock, Users, GitPullRequest } from 'lucide-react';

// Componentes de fallback para cada seção
const SectionSkeleton = ({ height = '300px', width = '100%' }) => (
  <div style={{
    backgroundColor: colors.dark.card,
    height,
    width,
    borderRadius: '8px',
    animation: 'pulse 1.5s infinite',
    marginBottom: '1rem'
  }}>
    <style className="jsx-styles">{`
      @keyframes pulse {
        0% { opacity: 0.6; }
        50% { opacity: 0.8; }
        100% { opacity: 0.6; }
      }
    `}</style>
  </div>
);

// Importações de componentes com lazy loading
const UserProfileCard = lazy(() => import('./components/UserProfileCard'));
const LeaderboardCard = lazy(() => import('./components/LeaderboardCard'));
const ProgressChart = lazy(() => import('./components/ProgressChart.jsx'));
const AchievementCard = lazy(() => import('./components/AchievementCard'));
const ContributionStats = lazy(() => import('./components/ContributionStats'));
const ActivityFeed = lazy(() => import('./components/ActivityFeed'));
const PullRequestStatus = lazy(() => import('./components/PullRequestStatus'));
const NavigationTabs = lazy(() => import('./components/NavigationTabs'));

const GamificationPage = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [loading, setLoading] = useState(true);

  // Simular carregamento de dados
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ 
      backgroundColor: colors.dark.background,
      color: colors.dark.text,
      minHeight: '100vh',
      paddingBottom: '2rem'
    }}>
      {/* Cabeçalho */}
      <header style={{
        backgroundColor: colors.primary.main,
        padding: '1rem 0',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
      }}>
        <div className="container mx-auto px-4">
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <h1 style={{ 
              fontSize: '1.5rem', 
              fontWeight: 'bold',
              margin: 0,
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <Award size={24} />
              Systentando Arena
            </h1>
            
            <Link to="/" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: colors.dark.text,
              textDecoration: 'none',
              padding: '0.5rem 1rem',
              borderRadius: '4px',
              backgroundColor: 'rgba(0, 0, 0, 0.2)',
              transition: 'all 0.2s ease-in-out'
            }}>
              <ChevronLeft size={16} />
              <Home size={16} />
              Página Inicial
            </Link>
          </div>
        </div>
      </header>

      {/* Conteúdo Principal */}
      <main className="container mx-auto px-4 mt-6">
        {/* Navegação por abas (dashboard, progresso, conquistas, contribuições) */}
        <Suspense fallback={<SectionSkeleton height="60px" />}>
          <NavigationTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        </Suspense>

        {/* Conteúdo baseado na aba ativa */}
        <div className="mt-6">
          {activeTab === 'dashboard' && (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1.5rem'
            }}>
              {/* Perfil do Usuário */}
              <Suspense fallback={<SectionSkeleton height="350px" />}>
                <UserProfileCard />
              </Suspense>
              
              {/* Estatísticas de Contribuição */}
              <Suspense fallback={<SectionSkeleton height="350px" />}>
                <ContributionStats />
              </Suspense>
              
              {/* Ranking/Leaderboard */}
              <Suspense fallback={<SectionSkeleton height="350px" />}>
                <LeaderboardCard />
              </Suspense>
            </div>
          )}

          {activeTab === 'progress' && (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1.5rem'
            }}>
              {/* Gráficos de Progresso do ZEN Launcher */}
              <div style={{
                gridColumn: '1 / -1',
                backgroundColor: colors.dark.card,
                borderRadius: '8px',
                padding: '1.5rem',
                marginBottom: '1.5rem'
              }}>
                <h2 style={{ 
                  fontSize: '1.25rem', 
                  marginBottom: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  <Clock size={20} />
                  Uso do Tempo (ZEN Launcher)
                </h2>
                <Suspense fallback={<SectionSkeleton height="300px" />}>
                  <ProgressChart 
                    type="timeUsage" 
                    title="Evolução do Tempo de Tela"
                  />
                </Suspense>
              </div>
              
              {/* Gráficos de Progresso do Meu Nutri */}
              <div style={{
                gridColumn: '1 / -1',
                backgroundColor: colors.dark.card,
                borderRadius: '8px',
                padding: '1.5rem',
                marginBottom: '1.5rem'
              }}>
                <h2 style={{ 
                  fontSize: '1.25rem', 
                  marginBottom: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  <Heart size={20} />
                  Saúde e Bem-estar (Meu Nutri)
                </h2>
                <Suspense fallback={<SectionSkeleton height="300px" />}>
                  <ProgressChart 
                    type="nutrition" 
                    title="Evolução Nutricional"
                  />
                </Suspense>
              </div>
              
              {/* Gráficos de Atividades Físicas */}
              <div style={{
                gridColumn: '1 / -1',
                backgroundColor: colors.dark.card,
                borderRadius: '8px',
                padding: '1.5rem'
              }}>
                <h2 style={{ 
                  fontSize: '1.25rem', 
                  marginBottom: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  <Activity size={20} />
                  Exercícios e Atividades
                </h2>
                <Suspense fallback={<SectionSkeleton height="300px" />}>
                  <ProgressChart 
                    type="exercise" 
                    title="Evolução dos Exercícios"
                  />
                </Suspense>
              </div>
            </div>
          )}

          {activeTab === 'achievements' && (
            <div>
              <div style={{
                backgroundColor: colors.dark.card,
                borderRadius: '8px',
                padding: '1.5rem',
                marginBottom: '1.5rem'
              }}>
                <h2 style={{ 
                  fontSize: '1.25rem', 
                  marginBottom: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  <Award size={20} />
                  Suas Conquistas e Emblemas
                </h2>
                
                <Suspense fallback={<SectionSkeleton height="400px" />}>
                  <AchievementCard />
                </Suspense>
              </div>
            </div>
          )}

          {activeTab === 'contributions' && (
            <div>
              {/* Status dos Pull Requests */}
              <div style={{
                backgroundColor: colors.dark.card,
                borderRadius: '8px',
                padding: '1.5rem',
                marginBottom: '1.5rem'
              }}>
                <h2 style={{ 
                  fontSize: '1.25rem', 
                  marginBottom: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  <GitPullRequest size={20} />
                  Status dos Pull Requests
                </h2>
                
                <Suspense fallback={<SectionSkeleton height="300px" />}>
                  <PullRequestStatus />
                </Suspense>
              </div>
              
              {/* Feed de Atividades */}
              <div style={{
                backgroundColor: colors.dark.card,
                borderRadius: '8px',
                padding: '1.5rem'
              }}>
                <h2 style={{ 
                  fontSize: '1.25rem', 
                  marginBottom: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  <Users size={20} />
                  Atividades Recentes
                </h2>
                
                <Suspense fallback={<SectionSkeleton height="300px" />}>
                  <ActivityFeed />
                </Suspense>
              </div>
            </div>
          )}
        </div>
      </main>
      
      {/* Rodapé */}
      <footer style={{
        backgroundColor: colors.dark.card,
        padding: '1rem 0',
        marginTop: '3rem',
        borderTop: `1px solid ${colors.dark.border}`
      }}>
        <div className="container mx-auto px-4">
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: '0.875rem',
            color: colors.dark.subtext
          }}>
            <p>© 2025 Systentando. Todos os direitos reservados.</p>
            <div style={{
              display: 'flex',
              gap: '1rem'
            }}>
              <a href="#" style={{ color: colors.dark.subtext }}>Termos de Uso</a>
              <a href="#" style={{ color: colors.dark.subtext }}>Privacidade</a>
              <a href="#" style={{ color: colors.dark.subtext }}>Suporte</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GamificationPage;

import React, { lazy, Suspense } from 'react';
import { colors } from '../../utils/colors';

// Componente de fallback para lazy loading
const ComponentSkeleton = () => (
  <div style={{
    padding: '2rem',
    backgroundColor: colors.dark.card,
    borderRadius: '1rem',
    margin: '1rem 0',
    animation: 'pulse 1.5s infinite'
  }}>
    <div style={{ 
      height: '24px', 
      width: '180px', 
      backgroundColor: `${colors.dark.border}`, 
      borderRadius: '4px',
      marginBottom: '1rem'
    }} />
    <div style={{ 
      height: '100px', 
      width: '100%', 
      backgroundColor: colors.dark.border,
      borderRadius: '4px'
    }} />
    <style jsx>{`
      @keyframes pulse {
        0% { opacity: 0.6; }
        50% { opacity: 0.8; }
        100% { opacity: 0.6; }
      }
    `}</style>
  </div>
);

// Lazy loading dos componentes
const WorkflowNavBar = lazy(() => import('./components/WorkflowNavBar'));
const WorkflowHeader = lazy(() => import('./components/WorkflowHeader'));
const ExpectationsSection = lazy(() => import('./components/ExpectationsSection'));
const BenefitsSection = lazy(() => import('./components/BenefitsSection'));
const DataDrivenSection = lazy(() => import('./components/DataDrivenSection'));
const ContributionLevelsSection = lazy(() => import('./components/ContributionLevelsSection'));
const ToolkitSection = lazy(() => import('./components/ToolkitSection'));
const CommitmentRulesSection = lazy(() => import('./components/CommitmentRulesSection'));
const JoinCommunitySection = lazy(() => import('./components/JoinCommunitySection'));
const Footer = lazy(() => import('../../components/Footer'));

const WorkflowPage = () => {
  return (
    <div style={{ 
      backgroundColor: colors.dark.background,
      color: colors.dark.text,
      minHeight: '100vh'
    }}>
      <Suspense fallback={<div style={{ height: '60px' }} />}>
        <WorkflowNavBar />
      </Suspense>
      
      <Suspense fallback={<ComponentSkeleton />}>
        <WorkflowHeader />
      </Suspense>
      
      <Suspense fallback={<ComponentSkeleton />}>
        <ExpectationsSection />
      </Suspense>
      
      <Suspense fallback={<ComponentSkeleton />}>
        <BenefitsSection />
      </Suspense>
      
      <Suspense fallback={<ComponentSkeleton />}>
        <DataDrivenSection />
      </Suspense>
      
      <Suspense fallback={<ComponentSkeleton />}>
        <ContributionLevelsSection />
      </Suspense>
      
      <Suspense fallback={<ComponentSkeleton />}>
        <ToolkitSection />
      </Suspense>
      
      <Suspense fallback={<ComponentSkeleton />}>
        <CommitmentRulesSection />
      </Suspense>
      
      <Suspense fallback={<ComponentSkeleton />}>
        <JoinCommunitySection />
      </Suspense>
      
      <Suspense fallback={<ComponentSkeleton />}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default WorkflowPage;

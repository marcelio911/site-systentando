import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { colors } from './utils/colors';

// Loading Skeleton
const PageSkeleton = () => (
  <div style={{
    padding: '4rem 1rem',
    backgroundColor: colors.dark.background,
    position: 'relative',
    minHeight: '100vh'
  }}>
    <div className="container mx-auto">
      <div style={{ 
        height: '300px', 
        width: '100%', 
        backgroundColor: colors.dark.card,
        borderRadius: '8px',
        margin: '5rem auto 0',
        animation: 'pulse 1.5s infinite'
      }} />
    </div>
    
    <style className="jsx-styles">{`
      @keyframes pulse {
        0% { opacity: 0.6; }
        50% { opacity: 0.8; }
        100% { opacity: 0.6; }
      }
    `}</style>
  </div>
);

// Importar a página principal (página inicial)
const App = lazy(() => import('./App'));

// Importar a página de workflow
const WorkflowPage = lazy(() => import('./pages/Workflow'));

const AppRoutes = () => {
  return (
    <Router>
      <Suspense fallback={<PageSkeleton />}>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/workflow" element={<WorkflowPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default AppRoutes;

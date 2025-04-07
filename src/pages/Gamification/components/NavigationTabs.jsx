import React from 'react';
import { colors } from '../../../utils/colors';
import { LayoutDashboard, Activity, Award, GitPullRequest } from 'lucide-react';

const NavigationTabs = ({ activeTab, setActiveTab }) => {
  const tabs = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: <LayoutDashboard size={18} />
    },
    {
      id: 'progress',
      label: 'Progresso',
      icon: <Activity size={18} />
    },
    {
      id: 'achievements',
      label: 'Conquistas',
      icon: <Award size={18} />
    },
    {
      id: 'contributions',
      label: 'Contribuições',
      icon: <GitPullRequest size={18} />
    }
  ];

  return (
    <div style={{
      display: 'flex',
      gap: '0.5rem',
      flexWrap: 'wrap',
      justifyContent: 'center',
      backgroundColor: colors.dark.card,
      borderRadius: '8px',
      padding: '0.75rem',
      marginBottom: '1.5rem'
    }}>
      {tabs.map(tab => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            backgroundColor: activeTab === tab.id ? colors.primary.main : 'transparent',
            color: activeTab === tab.id ? 'white' : colors.dark.subtext,
            border: 'none',
            padding: '0.75rem 1.25rem',
            borderRadius: '6px',
            cursor: 'pointer',
            fontWeight: activeTab === tab.id ? 'bold' : 'normal',
            fontSize: '0.875rem',
            transition: 'all 0.2s ease-in-out'
          }}
        >
          {tab.icon}
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default NavigationTabs;

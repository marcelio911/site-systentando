import React, { useState } from 'react';
import { colors } from '../../../utils/colors';
import { communityRules, contributionGuidelines, rewardTiers } from './rules';

const TabButton = ({ active, onClick, children }) => (
  <button
    style={{
      padding: '0.75rem 1.5rem',
      backgroundColor: active ? colors.accent.main : 'transparent',
      color: active ? 'white' : colors.dark.subtext,
      border: `1px solid ${active ? colors.accent.main : colors.dark.border}`,
      borderRadius: '0.5rem',
      fontSize: '1rem',
      fontWeight: active ? 'bold' : 'normal',
      cursor: 'pointer',
      transition: 'all 0.3s ease'
    }}
    onClick={onClick}
  >
    {children}
  </button>
);

const CommitmentRulesSection = () => {
  const [activeTab, setActiveTab] = useState('rules');

  return (
    <section
      id="rules"
      style={{
        padding: '4rem 2rem',
        backgroundColor: `${colors.primary.dark}22`,
        borderTop: `1px solid ${colors.dark.border}`,
        borderBottom: `1px solid ${colors.dark.border}`
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}
      >
        <h2
          style={{
            fontSize: '2rem',
            fontWeight: 'bold',
            marginBottom: '1rem',
            color: colors.accent.main,
            textAlign: 'center'
          }}
        >
          Nosso Compromisso com a Comunidade
        </h2>
        
        <p
          style={{
            fontSize: '1.1rem',
            maxWidth: '800px',
            margin: '0 auto 3rem',
            color: colors.dark.subtext,
            textAlign: 'center',
            lineHeight: 1.6
          }}
        >
          Para construir uma comunidade forte e produtiva, estabelecemos regras claras e
          recompensas justas que garantem um ambiente colaborativo e de crescimento mútuo.
        </p>
        
        {/* Tabs */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem',
            marginBottom: '3rem',
            flexWrap: 'wrap'
          }}
        >
          <TabButton 
            active={activeTab === 'rules'} 
            onClick={() => setActiveTab('rules')}
          >
            Regras da Comunidade
          </TabButton>
          
          <TabButton 
            active={activeTab === 'guidelines'} 
            onClick={() => setActiveTab('guidelines')}
          >
            Diretrizes de Contribuição
          </TabButton>
          
          <TabButton 
            active={activeTab === 'rewards'} 
            onClick={() => setActiveTab('rewards')}
          >
            Sistema de Recompensas
          </TabButton>
        </div>
        
        {/* Tab Content */}
        <div>
          {/* Rules Tab */}
          {activeTab === 'rules' && (
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                gap: '2rem'
              }}
            >
              {communityRules.map((rule, index) => (
                <div
                  key={index}
                  style={{
                    backgroundColor: colors.dark.card,
                    borderRadius: '1rem',
                    padding: '2rem',
                    border: `1px solid ${colors.dark.border}`
                  }}
                >
                  <h3
                    style={{
                      fontSize: '1.25rem',
                      color: colors.accent.main,
                      marginBottom: '1rem',
                      display: 'flex',
                      alignItems: 'center'
                    }}
                  >
                    <span
                      style={{
                        width: '24px',
                        height: '24px',
                        borderRadius: '50%',
                        backgroundColor: `${colors.accent.main}22`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginRight: '0.75rem',
                        fontSize: '0.875rem',
                        fontWeight: 'bold',
                        color: colors.accent.main
                      }}
                    >
                      {index + 1}
                    </span>
                    {rule.title}
                  </h3>
                  
                  <p
                    style={{
                      color: colors.dark.subtext,
                      lineHeight: 1.6
                    }}
                  >
                    {rule.description}
                  </p>
                </div>
              ))}
            </div>
          )}
          
          {/* Guidelines Tab */}
          {activeTab === 'guidelines' && (
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                gap: '2rem'
              }}
            >
              {contributionGuidelines.map((guideline, index) => (
                <div
                  key={index}
                  style={{
                    backgroundColor: colors.dark.card,
                    borderRadius: '1rem',
                    padding: '2rem',
                    border: `1px solid ${colors.dark.border}`
                  }}
                >
                  <h3
                    style={{
                      fontSize: '1.25rem',
                      color: colors.primary.light,
                      marginBottom: '1.5rem'
                    }}
                  >
                    {guideline.title}
                  </h3>
                  
                  <ul
                    style={{
                      listStyleType: 'none',
                      padding: 0,
                      margin: 0
                    }}
                  >
                    {guideline.items.map((item, idx) => (
                      <li
                        key={idx}
                        style={{
                          color: colors.dark.subtext,
                          padding: '0.75rem 0',
                          borderBottom: idx < guideline.items.length - 1 ? `1px solid ${colors.dark.border}` : 'none',
                          display: 'flex',
                          alignItems: 'center'
                        }}
                      >
                        <span
                          style={{
                            color: colors.primary.light,
                            marginRight: '0.75rem'
                          }}
                        >•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
          
          {/* Rewards Tab */}
          {activeTab === 'rewards' && (
            <div>
              {rewardTiers.map((tier, index) => (
                <div
                  key={index}
                  style={{
                    backgroundColor: colors.dark.card,
                    borderRadius: '1rem',
                    padding: '2rem',
                    border: `1px solid ${colors.dark.border}`,
                    marginBottom: '1.5rem'
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: '1.5rem',
                      flexWrap: 'wrap',
                      gap: '1rem'
                    }}
                  >
                    <h3
                      style={{
                        fontSize: '1.5rem',
                        color: colors.dark.text,
                        margin: 0
                      }}
                    >
                      {tier.name}
                    </h3>
                    
                    <div
                      style={{
                        backgroundColor: `${colors.primary.main}22`,
                        padding: '0.5rem 1rem',
                        borderRadius: '2rem',
                        color: colors.primary.light,
                        fontSize: '0.875rem',
                        fontWeight: 'bold'
                      }}
                    >
                      {tier.requirements}
                    </div>
                  </div>
                  
                  <div
                    style={{
                      width: '100%',
                      height: '1px',
                      backgroundColor: colors.dark.border,
                      margin: '1rem 0'
                    }}
                  />
                  
                  <h4
                    style={{
                      fontSize: '1.1rem',
                      color: colors.accent.main,
                      marginBottom: '1rem'
                    }}
                  >
                    Recompensas:
                  </h4>
                  
                  <ul
                    style={{
                      listStyleType: 'none',
                      padding: 0,
                      margin: 0,
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                      gap: '1rem'
                    }}
                  >
                    {tier.rewards.map((reward, idx) => (
                      <li
                        key={idx}
                        style={{
                          color: colors.dark.subtext,
                          display: 'flex',
                          alignItems: 'center'
                        }}
                      >
                        <span
                          style={{
                            color: colors.accent.main,
                            marginRight: '0.75rem',
                            fontSize: '1.25rem'
                          }}
                        >★</span>
                        {reward}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CommitmentRulesSection;

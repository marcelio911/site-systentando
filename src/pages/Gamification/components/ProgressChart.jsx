import React, { useState } from 'react';
import { colors } from '../../../utils/colors';
import { Calendar, ChevronLeft, ChevronRight, Info, Activity, Clock, Heart } from 'lucide-react';

const ProgressChart = ({ type, title }) => {
  const [timeframe, setTimeframe] = useState('week');
  
  // Dados mockados para os diferentes tipos de gráficos
  const mockData = {
    timeUsage: {
      week: [
        { day: 'Seg', screenTime: 5.2, goalTime: 4, socialMedia: 2.5, productive: 2.7 },
        { day: 'Ter', screenTime: 6.1, goalTime: 4, socialMedia: 3.2, productive: 2.9 },
        { day: 'Qua', screenTime: 4.3, goalTime: 4, socialMedia: 1.8, productive: 2.5 },
        { day: 'Qui', screenTime: 3.9, goalTime: 4, socialMedia: 1.5, productive: 2.4 },
        { day: 'Sex', screenTime: 4.8, goalTime: 4, socialMedia: 2.3, productive: 2.5 },
        { day: 'Sáb', screenTime: 2.5, goalTime: 3, socialMedia: 1.2, productive: 1.3 },
        { day: 'Dom', screenTime: 2.2, goalTime: 3, socialMedia: 1.0, productive: 1.2 }
      ],
      month: [
        { day: 'Semana 1', screenTime: 5.1, goalTime: 4, socialMedia: 2.6, productive: 2.5 },
        { day: 'Semana 2', screenTime: 4.7, goalTime: 4, socialMedia: 2.3, productive: 2.4 },
        { day: 'Semana 3', screenTime: 4.3, goalTime: 4, socialMedia: 2.0, productive: 2.3 },
        { day: 'Semana 4', screenTime: 3.9, goalTime: 4, socialMedia: 1.7, productive: 2.2 }
      ]
    },
    nutrition: {
      week: [
        { day: 'Seg', calories: 2100, protein: 110, carbs: 220, fat: 70 },
        { day: 'Ter', calories: 2200, protein: 115, carbs: 230, fat: 75 },
        { day: 'Qua', calories: 1950, protein: 105, carbs: 200, fat: 65 },
        { day: 'Qui', calories: 2050, protein: 108, carbs: 210, fat: 68 },
        { day: 'Sex', calories: 2150, protein: 112, carbs: 225, fat: 72 },
        { day: 'Sáb', calories: 2300, protein: 120, carbs: 240, fat: 78 },
        { day: 'Dom', calories: 2250, protein: 118, carbs: 235, fat: 76 }
      ],
      month: [
        { day: 'Semana 1', calories: 2150, protein: 112, carbs: 225, fat: 72 },
        { day: 'Semana 2', calories: 2100, protein: 110, carbs: 220, fat: 70 },
        { day: 'Semana 3', calories: 2050, protein: 108, carbs: 215, fat: 68 },
        { day: 'Semana 4', calories: 2000, protein: 105, carbs: 210, fat: 66 }
      ]
    },
    exercise: {
      week: [
        { day: 'Seg', duration: 45, steps: 8500, calories: 320 },
        { day: 'Ter', duration: 0, steps: 6200, calories: 180 },
        { day: 'Qua', duration: 60, steps: 9800, calories: 420 },
        { day: 'Qui', duration: 30, steps: 7500, calories: 250 },
        { day: 'Sex', duration: 0, steps: 5800, calories: 160 },
        { day: 'Sáb', duration: 90, steps: 12000, calories: 550 },
        { day: 'Dom', duration: 40, steps: 8000, calories: 300 }
      ],
      month: [
        { day: 'Semana 1', duration: 210, steps: 42000, calories: 1500 },
        { day: 'Semana 2', duration: 240, steps: 45000, calories: 1650 },
        { day: 'Semana 3', duration: 270, steps: 48000, calories: 1800 },
        { day: 'Semana 4', duration: 300, steps: 52000, calories: 2000 }
      ]
    }
  };
  
  // Seletor de dados com base no tipo e timeframe
  const data = mockData[type]?.[timeframe] || [];
  
  // Configurações específicas por tipo
  const chartConfig = {
    timeUsage: {
      barColor: colors.accent.main,
      goalColor: colors.feedback.warning,
      socialMediaColor: colors.categories.personal,
      productiveColor: colors.feedback.success,
      labels: ['Tempo total', 'Meta', 'Redes Sociais', 'Produtivo'],
      yAxisLabel: 'Horas',
      description: 'Acompanhe seu tempo de tela e veja como está distribuído entre atividades produtivas e redes sociais.',
      icon: <Clock size={16} />
    },
    nutrition: {
      barColor: colors.categories.health,
      proteinColor: colors.feedback.success,
      carbsColor: colors.feedback.warning,
      fatColor: colors.feedback.error,
      labels: ['Calorias (x10)', 'Proteínas (g)', 'Carboidratos (g/10)', 'Gorduras (g)'],
      yAxisLabel: 'Quantidade',
      description: 'Visualize sua ingestão calórica e distribuição de macronutrientes.',
      icon: <Heart size={16} />
    },
    exercise: {
      barColor: colors.categories.work,
      stepsColor: colors.feedback.info,
      caloriesColor: colors.feedback.error,
      labels: ['Duração (min)', 'Passos (x100)', 'Calorias queimadas'],
      yAxisLabel: 'Quantidade',
      description: 'Monitore seu tempo de exercício, passos e calorias queimadas.',
      icon: <Activity size={16} />
    }
  };
  
  // Configuração atual
  const config = chartConfig[type] || chartConfig.timeUsage;
  
  // Função para encontrar o valor máximo para escala do gráfico
  const getMaxValue = () => {
    if (type === 'timeUsage') {
      return Math.max(...data.map(d => d.screenTime)) * 1.2;
    } else if (type === 'nutrition') {
      return Math.max(...data.map(d => d.calories / 10)) * 1.2;
    } else if (type === 'exercise') {
      return Math.max(
        ...data.map(d => d.duration),
        ...data.map(d => d.steps / 100)
      ) * 1.2;
    }
    
    return 100;
  };
  
  // Altura máxima para barras (em pixels)
  const maxBarHeight = 180;
  // Valor máximo para escala
  const maxValue = getMaxValue();
  
  // Função para calcular altura da barra com base no valor
  const calculateBarHeight = (value) => {
    return (value / maxValue) * maxBarHeight;
  };
  
  // Renderização das barras de acordo com o tipo
  const renderBars = () => {
    if (type === 'timeUsage') {
      return data.map((item, index) => (
        <div 
          key={index}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.5rem',
            width: `${100 / data.length}%`,
            maxWidth: '80px'
          }}
        >
          <div style={{
            height: maxBarHeight,
            width: '100%',
            display: 'flex',
            flexDirection: 'column-reverse',
            alignItems: 'center',
            position: 'relative'
          }}>
            {/* Barra de tempo total */}
            <div 
              style={{
                width: '24px',
                height: `${calculateBarHeight(item.screenTime)}px`,
                backgroundColor: config.barColor,
                borderRadius: '2px 2px 0 0',
                position: 'relative',
                zIndex: 1
              }}
              title={`Tempo total: ${item.screenTime}h`}
            />
            
            {/* Linha da meta */}
            <div 
              style={{
                position: 'absolute',
                bottom: `${calculateBarHeight(item.goalTime)}px`,
                width: '40px',
                height: '2px',
                backgroundColor: config.goalColor,
                zIndex: 2
              }}
              title={`Meta: ${item.goalTime}h`}
            />
            
            {/* Barras detalhadas sobrepostas (apenas para visualização em hover) */}
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: '50%',
              transform: 'translateX(-50%)',
              width: '24px',
              zIndex: 0,
              opacity: 0,
              transition: 'opacity 0.2s'
            }}>
              <div style={{
                width: '100%',
                height: `${calculateBarHeight(item.socialMedia)}px`,
                backgroundColor: config.socialMediaColor,
                position: 'absolute',
                bottom: 0,
                borderRadius: '2px 2px 0 0'
              }} 
              title={`Redes sociais: ${item.socialMedia}h`}
              />
              
              <div style={{
                width: '100%',
                height: `${calculateBarHeight(item.productive)}px`,
                backgroundColor: config.productiveColor,
                position: 'absolute',
                bottom: 0,
                marginBottom: `${calculateBarHeight(item.socialMedia)}px`,
                borderRadius: '2px 2px 0 0'
              }}
              title={`Produtivo: ${item.productive}h`}
              />
            </div>
          </div>
          
          <div style={{ 
            fontSize: '0.75rem', 
            color: colors.dark.subtext 
          }}>
            {item.day}
          </div>
        </div>
      ));
    } else if (type === 'nutrition') {
      return data.map((item, index) => (
        <div 
          key={index}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.5rem',
            width: `${100 / data.length}%`,
            maxWidth: '80px'
          }}
        >
          <div style={{
            height: maxBarHeight,
            width: '100%',
            display: 'flex',
            flexDirection: 'column-reverse',
            alignItems: 'center',
            position: 'relative'
          }}>
            {/* Barra principal de calorias */}
            <div 
              style={{
                width: '24px',
                height: `${calculateBarHeight(item.calories / 10)}px`,
                backgroundColor: config.barColor,
                borderRadius: '2px 2px 0 0',
                position: 'relative',
                zIndex: 1
              }}
              title={`Calorias: ${item.calories}`}
            />
            
            {/* Barras detalhadas (em hover) */}
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: '50%',
              transform: 'translateX(-50%)',
              width: '36px',
              display: 'flex',
              justifyContent: 'space-between',
              zIndex: 0,
              opacity: 0,
              transition: 'opacity 0.2s'
            }}>
              <div style={{
                width: '10px',
                height: `${calculateBarHeight(item.protein)}px`,
                backgroundColor: config.proteinColor,
                borderRadius: '2px 2px 0 0'
              }}
              title={`Proteína: ${item.protein}g`}
              />
              
              <div style={{
                width: '10px',
                height: `${calculateBarHeight(item.carbs / 10)}px`,
                backgroundColor: config.carbsColor,
                borderRadius: '2px 2px 0 0'
              }}
              title={`Carboidratos: ${item.carbs}g`}
              />
              
              <div style={{
                width: '10px',
                height: `${calculateBarHeight(item.fat)}px`,
                backgroundColor: config.fatColor,
                borderRadius: '2px 2px 0 0'
              }}
              title={`Gorduras: ${item.fat}g`}
              />
            </div>
          </div>
          
          <div style={{ 
            fontSize: '0.75rem', 
            color: colors.dark.subtext 
          }}>
            {item.day}
          </div>
        </div>
      ));
    } else if (type === 'exercise') {
      return data.map((item, index) => (
        <div 
          key={index}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.5rem',
            width: `${100 / data.length}%`,
            maxWidth: '80px'
          }}
        >
          <div style={{
            height: maxBarHeight,
            width: '100%',
            display: 'flex',
            flexDirection: 'column-reverse',
            alignItems: 'center',
            position: 'relative'
          }}>
            {/* Barra principal de duração */}
            <div 
              style={{
                width: '24px',
                height: `${calculateBarHeight(item.duration)}px`,
                backgroundColor: config.barColor,
                borderRadius: '2px 2px 0 0',
                position: 'relative',
                zIndex: 1
              }}
              title={`Duração: ${item.duration} min`}
            />
            
            {/* Barras detalhadas (em hover) */}
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: '50%',
              transform: 'translateX(-50%)',
              width: '36px',
              display: 'flex',
              justifyContent: 'space-between',
              zIndex: 0,
              opacity: 0,
              transition: 'opacity 0.2s'
            }}>
              <div style={{
                width: '10px',
                height: `${calculateBarHeight(item.steps / 100)}px`,
                backgroundColor: config.stepsColor,
                borderRadius: '2px 2px 0 0'
              }}
              title={`Passos: ${item.steps}`}
              />
              
              <div style={{
                width: '10px',
                height: `${calculateBarHeight(item.calories / 5)}px`,
                backgroundColor: config.caloriesColor,
                borderRadius: '2px 2px 0 0'
              }}
              title={`Calorias: ${item.calories}`}
              />
            </div>
          </div>
          
          <div style={{ 
            fontSize: '0.75rem', 
            color: colors.dark.subtext 
          }}>
            {item.day}
          </div>
        </div>
      ));
    }
    
    return null;
  };
  
  // Renderização da legenda
  const renderLegend = () => {
    const legendItems = [];
    
    if (type === 'timeUsage') {
      legendItems.push(
        { color: config.barColor, label: 'Tempo total' },
        { color: config.goalColor, label: 'Meta diária' },
        { color: config.socialMediaColor, label: 'Redes sociais' },
        { color: config.productiveColor, label: 'Tempo produtivo' }
      );
    } else if (type === 'nutrition') {
      legendItems.push(
        { color: config.barColor, label: 'Calorias' },
        { color: config.proteinColor, label: 'Proteínas' },
        { color: config.carbsColor, label: 'Carboidratos' },
        { color: config.fatColor, label: 'Gorduras' }
      );
    } else if (type === 'exercise') {
      legendItems.push(
        { color: config.barColor, label: 'Duração' },
        { color: config.stepsColor, label: 'Passos' },
        { color: config.caloriesColor, label: 'Calorias' }
      );
    }
    
    return (
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '1rem',
        marginTop: '1rem'
      }}>
        {legendItems.map((item, index) => (
          <div 
            key={index}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
          >
            <div style={{
              width: '12px',
              height: '12px',
              backgroundColor: item.color,
              borderRadius: '3px'
            }} />
            <span style={{ 
              fontSize: '0.75rem', 
              color: colors.dark.subtext 
            }}>
              {item.label}
            </span>
          </div>
        ))}
      </div>
    );
  };
  
  // Renderização dos indicadores de eixo Y
  const renderYAxis = () => {
    const steps = 4; // Número de marcadores no eixo Y
    const increment = maxValue / steps;
    
    return (
      <div style={{
        position: 'absolute',
        left: 0,
        top: 0,
        height: maxBarHeight,
        display: 'flex',
        flexDirection: 'column-reverse',
        justifyContent: 'space-between',
        paddingRight: '0.5rem'
      }}>
        {Array.from({ length: steps + 1 }).map((_, index) => {
          const value = Math.round(increment * index * 10) / 10;
          return (
            <div 
              key={index}
              style={{
                display: 'flex',
                alignItems: 'center',
                height: '20px',
              }}
            >
              <span style={{ 
                fontSize: '0.7rem', 
                color: colors.dark.subtext,
                marginRight: '0.25rem' 
              }}>
                {value}
              </span>
              
              <div style={{
                width: '4px',
                height: '1px',
                backgroundColor: colors.dark.border
              }} />
            </div>
          );
        })}
      </div>
    );
  };
  
  return (
    <div style={{
      height: '100%'
    }}>
      {/* Cabeçalho com controles */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '1rem'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem'
        }}>
          {config.icon}
          <span style={{ fontSize: '0.875rem', color: colors.dark.subtext }}>
            {config.description}
          </span>
        </div>
        
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem'
        }}>
          <button
            onClick={() => setTimeframe('week')}
            style={{
              backgroundColor: timeframe === 'week' ? 
                'rgba(255, 255, 255, 0.15)' : 
                'transparent',
              border: 'none',
              borderRadius: '4px',
              padding: '0.375rem 0.625rem',
              fontSize: '0.75rem',
              color: timeframe === 'week' ? 
                'white' : 
                colors.dark.subtext,
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            Semana
          </button>
          
          <button
            onClick={() => setTimeframe('month')}
            style={{
              backgroundColor: timeframe === 'month' ? 
                'rgba(255, 255, 255, 0.15)' : 
                'transparent',
              border: 'none',
              borderRadius: '4px',
              padding: '0.375rem 0.625rem',
              fontSize: '0.75rem',
              color: timeframe === 'month' ? 
                'white' : 
                colors.dark.subtext,
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            Mês
          </button>
          
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.25rem',
            padding: '0.25rem 0.5rem',
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            borderRadius: '4px'
          }}>
            <button
              style={{
                background: 'none',
                border: 'none',
                color: colors.dark.subtext,
                padding: '0.25rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
            >
              <ChevronLeft size={14} />
            </button>
            
            <Calendar size={14} style={{ color: colors.dark.subtext }} />
            
            <button
              style={{
                background: 'none',
                border: 'none',
                color: colors.dark.subtext,
                padding: '0.25rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
            >
              <ChevronRight size={14} />
            </button>
          </div>
        </div>
      </div>
      
      {/* Área do gráfico */}
      <div style={{
        position: 'relative',
        paddingLeft: '2rem',
        marginBottom: '0.5rem'
      }}>
        {/* Eixo Y */}
        {renderYAxis()}
        
        {/* Linhas de grade */}
        <div style={{
          position: 'absolute',
          left: '2rem',
          right: 0,
          top: 0,
          height: maxBarHeight,
          pointerEvents: 'none'
        }}>
          {Array.from({ length: 5 }).map((_, index) => (
            <div 
              key={index}
              style={{
                position: 'absolute',
                bottom: `${index * (maxBarHeight / 4)}px`,
                left: 0,
                right: 0,
                height: '1px',
                backgroundColor: index === 0 ? 
                  'rgba(255, 255, 255, 0.1)' : 
                  'rgba(255, 255, 255, 0.05)'
              }}
            />
          ))}
        </div>
        
        {/* Barras do gráfico */}
        <div style={{
          display: 'flex',
          height: maxBarHeight,
          paddingTop: '0.5rem',
          paddingBottom: '0.5rem'
        }}>
          {renderBars()}
        </div>
      </div>
      
      {/* Legenda */}
      {renderLegend()}
      
      {/* Resumo com estatísticas */}
      <div style={{
        marginTop: '1.5rem',
        padding: '1rem',
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        borderRadius: '6px',
        fontSize: '0.75rem',
        color: colors.dark.subtext
      }}>
        {type === 'timeUsage' && (
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem'
          }}>
            <div>
              <div style={{ fontWeight: 'medium', marginBottom: '0.25rem' }}>
                Média diária
              </div>
              <div style={{ 
                color: 'white', 
                fontSize: '1rem', 
                fontWeight: 'bold' 
              }}>
                {(data.reduce((acc, item) => acc + item.screenTime, 0) / data.length).toFixed(1)}h
              </div>
            </div>
            
            <div>
              <div style={{ fontWeight: 'medium', marginBottom: '0.25rem' }}>
                Produtividade
              </div>
              <div style={{ 
                color: 'white', 
                fontSize: '1rem', 
                fontWeight: 'bold' 
              }}>
                {(data.reduce((acc, item) => acc + item.productive, 0) / 
                data.reduce((acc, item) => acc + item.screenTime, 0) * 100).toFixed(1)}%
              </div>
            </div>
            
            <div>
              <div style={{ fontWeight: 'medium', marginBottom: '0.25rem' }}>
                Adesão à meta
              </div>
              <div style={{ 
                color: 'white', 
                fontSize: '1rem', 
                fontWeight: 'bold' 
              }}>
                {(data.filter(item => item.screenTime <= item.goalTime).length / data.length * 100).toFixed(0)}%
              </div>
            </div>
          </div>
        )}
        
        {type === 'nutrition' && (
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem'
          }}>
            <div>
              <div style={{ fontWeight: 'medium', marginBottom: '0.25rem' }}>
                Média calórica
              </div>
              <div style={{ 
                color: 'white', 
                fontSize: '1rem', 
                fontWeight: 'bold' 
              }}>
                {Math.round(data.reduce((acc, item) => acc + item.calories, 0) / data.length)} kcal
              </div>
            </div>
            
            <div>
              <div style={{ fontWeight: 'medium', marginBottom: '0.25rem' }}>
                Proteína diária
              </div>
              <div style={{ 
                color: 'white', 
                fontSize: '1rem', 
                fontWeight: 'bold' 
              }}>
                {Math.round(data.reduce((acc, item) => acc + item.protein, 0) / data.length)}g
              </div>
            </div>
            
            <div>
              <div style={{ fontWeight: 'medium', marginBottom: '0.25rem' }}>
                Proporção de macros
              </div>
              <div style={{ 
                color: 'white', 
                fontSize: '1rem', 
                fontWeight: 'bold' 
              }}>
                {Math.round(data.reduce((acc, item) => acc + item.protein, 0) / data.length)}P / 
                {Math.round(data.reduce((acc, item) => acc + item.carbs, 0) / data.length)}C / 
                {Math.round(data.reduce((acc, item) => acc + item.fat, 0) / data.length)}G
              </div>
            </div>
          </div>
        )}
        
        {type === 'exercise' && (
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem'
          }}>
            <div>
              <div style={{ fontWeight: 'medium', marginBottom: '0.25rem' }}>
                Tempo médio
              </div>
              <div style={{ 
                color: 'white', 
                fontSize: '1rem', 
                fontWeight: 'bold' 
              }}>
                {Math.round(data.reduce((acc, item) => acc + item.duration, 0) / data.length)} min/dia
              </div>
            </div>
            
            <div>
              <div style={{ fontWeight: 'medium', marginBottom: '0.25rem' }}>
                Passos diários
              </div>
              <div style={{ 
                color: 'white', 
                fontSize: '1rem', 
                fontWeight: 'bold' 
              }}>
                {Math.round(data.reduce((acc, item) => acc + item.steps, 0) / data.length).toLocaleString()}
              </div>
            </div>
            
            <div>
              <div style={{ fontWeight: 'medium', marginBottom: '0.25rem' }}>
                Calorias/semana
              </div>
              <div style={{ 
                color: 'white', 
                fontSize: '1rem', 
                fontWeight: 'bold' 
              }}>
                {data.reduce((acc, item) => acc + item.calories, 0).toLocaleString()} kcal
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProgressChart;

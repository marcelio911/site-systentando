import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { colors } from '../utils/colors';
import { projectsData } from '../utils/projectsData';

const Projects = () => {
  const [activeTab, setActiveTab] = useState('zen');

  return (
    <div className="w-full py-20" style={{ backgroundColor: colors.dark.background }}>
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Nossos Desafios e Projetos</h2>
        
        <div className="mb-8 flex space-x-2 justify-center flex-wrap">
          {Object.keys(projectsData).map(key => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 m-1 ${activeTab === key ? 'text-white' : 'text-gray-400'}`}
              style={{ 
                backgroundColor: activeTab === key ? projectsData[key].color : 'transparent',
                borderWidth: '1px',
                borderColor: projectsData[key].color,
                borderStyle: 'solid'
              }}
            >
              {projectsData[key].title}
            </button>
          ))}
        </div>
        
        <div className="mb-12 p-8 rounded-lg border" style={{ 
          backgroundColor: colors.dark.card,
          borderColor: projectsData[activeTab].color
        }}>
          <div className="flex items-start mb-6">
            <div className="mr-4" style={{ color: projectsData[activeTab].color }}>
              {projectsData[activeTab].icon}
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2" style={{ color: projectsData[activeTab].color }}>
                {projectsData[activeTab].title}
              </h3>
              <p className="text-gray-300 mb-6">
                {projectsData[activeTab].description}
              </p>
            </div>
          </div>
          
          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-3 text-white">Principais características:</h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {projectsData[activeTab].features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <div className="mr-2 mt-1" style={{ color: projectsData[activeTab].color }}>
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: projectsData[activeTab].color }}></div>
                  </div>
                  <span className="text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-gray-900 p-4 rounded-lg mb-6 border-l-4" style={{ borderColor: projectsData[activeTab].color }}>
            <h5 className="font-medium mb-2" style={{ color: projectsData[activeTab].color }}>
              Caso de Uso - {projectsData[activeTab].title}
            </h5>
            <p className="text-sm text-gray-300">
              {projectsData[activeTab].caseStudy}
            </p>
          </div>
          
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium" style={{ color: projectsData[activeTab].color }}>
                Progresso do desenvolvimento
              </span>
              <span className="text-sm font-medium" style={{ color: projectsData[activeTab].color }}>
                {projectsData[activeTab].progress}%
              </span>
            </div>
            <div className="h-3 w-full bg-gray-700 rounded-full overflow-hidden">
              <div 
                className="h-full rounded-full transition-all duration-500" 
                style={{ 
                  backgroundColor: projectsData[activeTab].color,
                  width: `${projectsData[activeTab].progress}%`
                }}
              ></div>
            </div>
          </div>
          
          <div className="mt-8 flex justify-center">
            <button className="px-6 py-3 rounded-lg text-white font-medium flex items-center gap-2" style={{ 
              backgroundColor: projectsData[activeTab].color
            }}>
              Quero saber mais sobre {projectsData[activeTab].title} <ArrowRight size={18} />
            </button>
          </div>
        </div>
        
        <div className="text-center">
          <p className="text-lg text-gray-400 mb-6">
            Todos os nossos projetos são construídos com nossa filosofia espartana: disciplina, eficiência e foco em resultados tangíveis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;

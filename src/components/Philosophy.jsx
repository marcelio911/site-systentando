import React from 'react';
import { Zap, Globe, Users, Brain } from 'lucide-react';
import { colors } from '../utils/colors';

const Philosophy = () => {
  return (
    <div className="w-full py-20" style={{ backgroundColor: colors.dark.card }}>
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-4 text-center">Nossa Filosofia e Propósito</h2>
        <p className="text-center mb-12 max-w-2xl mx-auto" style={{ color: colors.dark.subtext }}>
          Misturamos expertise com talento inovador, criando um ecossistema único onde desenvolvemos 
          habilidades construindo soluções de IA tangíveis e impactantes.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 rounded-lg" style={{ backgroundColor: colors.dark.background, borderLeft: `4px solid ${colors.primary.main}` }}>
            <Zap size={36} style={{ color: colors.primary.main }} className="mb-4" />
            <h3 className="text-xl font-bold mb-2">Abordagem Disciplinada</h3>
            <p style={{ color: colors.dark.subtext }}>
              Nossa metodologia espartana garante eficiência e originalidade, reduzindo dependências 
              externas e comprovando nosso modelo rapidamente.
            </p>
            <div className="mt-4 text-sm" style={{ color: colors.primary.light }}>
              <strong>Exemplo:</strong> Lançamento do protótipo funcional do Zen Launcher em apenas 
              6 semanas, com uma equipe enxuta de 4 desenvolvedores.
            </div>
          </div>
          
          <div className="p-6 rounded-lg" style={{ backgroundColor: colors.dark.background, borderLeft: `4px solid ${colors.categories.health}` }}>
            <Globe size={36} style={{ color: colors.categories.health }} className="mb-4" />
            <h3 className="text-xl font-bold mb-2">Soluções de Impacto Real</h3>
            <p style={{ color: colors.dark.subtext }}>
              Desenvolvemos produtos que transformam positivamente a vida das pessoas, 
              impulsionados por IA e direcionados por propósito.
            </p>
            <div className="mt-4 text-sm" style={{ color: colors.categories.health }}>
              <strong>Exemplo:</strong> Meu Nutri já ajudou mais de 200 usuários beta a melhorar 
              seus hábitos alimentares com feedback personalizados em tempo real.
            </div>
          </div>
          
          <div className="p-6 rounded-lg" style={{ backgroundColor: colors.dark.background, borderLeft: `4px solid ${colors.categories.work}` }}>
            <Users size={36} style={{ color: colors.categories.work }} className="mb-4" />
            <h3 className="text-xl font-bold mb-2">Ecossistema Colaborativo</h3>
            <p style={{ color: colors.dark.subtext }}>
              Criamos um ambiente onde aprendizes desenvolvem habilidades práticas ao lado de 
              mentores experientes, gerando inovação constante.
            </p>
            <div className="mt-4 text-sm" style={{ color: colors.categories.work }}>
              <strong>Exemplo:</strong> Nossa plataforma de Rodada de Negócios conectou 
              15 empreendedores iniciantes com mentores experientes, gerando 5 MVPs em 30 dias.
            </div>
          </div>
          
          <div className="p-6 rounded-lg" style={{ backgroundColor: colors.dark.background, borderLeft: `4px solid ${colors.categories.finance}` }}>
            <Brain size={36} style={{ color: colors.categories.finance }} className="mb-4" />
            <h3 className="text-xl font-bold mb-2">Espírito Empreendedor</h3>
            <p style={{ color: colors.dark.subtext }}>
              Nossa força criativa é movida pela mentalidade de construir soluções tangíveis 
              que comprovam rapidamente seu valor no mercado.
            </p>
            <div className="mt-4 text-sm" style={{ color: colors.categories.finance }}>
              <strong>Exemplo:</strong> O Momento do Investimento foi concebido, desenvolvido e 
              testado em 45 dias, validando conceitos com usuários reais desde o primeiro protótipo.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Philosophy;

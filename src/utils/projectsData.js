import { Moon, Heart, Users, Calculator, Zap } from 'lucide-react';
import { colors } from './colors';
import React from 'react';

export const projectsData = {
  zen: {
    title: "ZEN Launcher",
    description: "Um launcher que transmite fluidez, minimalismo e equilíbrio, perfeito para quem busca alta produtividade sem perder o foco no bem-estar.",
    features: [
      "Redução do tempo de tela e procrastinação",
      "Interface minimalista que minimiza distrações",
      "Sistema de desafios para promover hábitos saudáveis",
      "Controle inteligente de notificações e interrupções"
    ],
    color: colors.categories.personal,
    progress: 75,
    icon: <Moon size={36} />,
    caseStudy: "João passava mais de 6 horas por dia em seu smartphone, principalmente em redes sociais. Após 2 semanas usando o Zen Launcher, reduziu seu tempo de tela para 2,5 horas diárias, eliminou 80% das notificações desnecessárias e completou 5 desafios de bem-estar, incluindo leitura e exercícios físicos."
  },
  nutri: {
    title: "Meu Nutri",
    description: "Assistente nutricional inteligente que avalia e reage às fotos dos pratos, oferecendo orientação personalizada e dicas para cada refeição.",
    features: [
      "Análise nutricional por foto do prato",
      "Guia personalizado para cada tipo de alimento",
      "Recomendações baseadas em objetivos pessoais",
      "Biblioteca de alternativas saudáveis para suas refeições favoritas"
    ],
    color: colors.categories.health,
    progress: 60,
    icon: <Heart size={36} />,
    caseStudy: "Marina queria melhorar sua alimentação mas não sabia por onde começar. Usando o Meu Nutri, recebeu feedback instantâneo sobre cada refeição e, em 30 dias, aumentou seu consumo de vegetais em 70%, reduziu açúcares processados e descobriu alternativas saudáveis para seus pratos favoritos."
  },
  negocios: {
    title: "Rodada de Negócios",
    description: "Plataforma que estimula o processo de criação ou participação em novos projetos e gerenciamento de negócios existentes.",
    features: [
      "Desafios entre participantes para resolução de problemas reais",
      "Ambiente colaborativo para troca de ideias e perspectivas",
      "Mentoria de empreendedores experientes",
      "Simulações de cenários de negócios para aprendizado prático"
    ],
    color: colors.categories.work,
    progress: 50,
    icon: <Users size={36} />,
    caseStudy: "Grupo de 5 desenvolvedores participou de um desafio para criar uma solução de logística para pequenos comércios. Em 2 semanas de colaboração, desenvolveram um MVP que foi validado com 3 comerciantes locais e atualmente está em fase de expansão com potencial de impactar 200+ negócios."
  },
  investimento: {
    title: "O Momento do Investimento",
    description: "Simulações e trilhas de aprendizado sobre diferentes tipos de investimento, tornando o caminho mais simples para iniciantes.",
    features: [
      "Simulações interativas de cenários de investimento",
      "Trilhas de aprendizado progressivas para diferentes perfis",
      "Comparativo visual entre opções de investimento",
      "Calculadoras de projeção financeira personalizadas"
    ],
    color: colors.categories.finance,
    progress: 40,
    icon: <Calculator size={36} />,
    caseStudy: "Carlos, iniciante em investimentos, estava confuso com tantas opções. Seguindo a trilha personalizada do Momento do Investimento, aprendeu conceitos básicos em 1 semana, simulou diferentes cenários e iniciou sua carteira com confiança, diversificando em 3 classes de ativos adequados ao seu perfil de risco."
  },
  systentando: {
    title: "Systentando One",
    description: "O hub central que integra todos os projetos, reforçando nossa identidade e oferecendo uma experiência tudo-em-um.",
    features: [
      "Integração perfeita entre todos os produtos do ecossistema",
      "Dashboard personalizado para acompanhamento de progresso",
      "Sistema de recompensas por engajamento e resultados",
      "Comunidade de apoio para troca de experiências"
    ],
    color: colors.primary.main,
    progress: 55,
    icon: <Zap size={36} />,
    caseStudy: "Família de 4 pessoas integrou suas rotinas no Systentando One. Em 2 meses, melhoraram hábitos alimentares com o Meu Nutri, reduziram tempo de tela com o Zen Launcher e iniciaram um planejamento financeiro colaborativo. O resultado foi uma melhoria de 40% na qualidade das interações familiares e 25% de redução nos gastos desnecessários."
  }
};

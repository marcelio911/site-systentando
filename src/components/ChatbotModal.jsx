import React, { useState, useEffect, useRef } from 'react';
import { colors } from '../utils/colors';
import { X, Send, Loader, Check } from 'lucide-react';
import { graphQLClient } from '../utils/graphql';

// Função para registro de usuário usando GraphQL
const registerUserWithGraphQL = async (userData) => {
  try {
    const response = await graphQLClient.mutate('registerUser', { input: userData });
    console.log('Resposta da API:', response);
    
    if (response && response.success) {
      // Salvar dados para ML em paralelo
      graphQLClient.mutate('saveUserData', { input: userData })
        .then(dataResponse => {
          console.log(`Dados salvos para ML: ${dataResponse.dataPoints} pontos de dados`);
        })
        .catch(error => {
          console.error('Erro ao salvar dados para ML:', error);
        });
    }
    
    return response;
  } catch (error) {
    console.error('Erro ao registrar usuário:', error);
    throw error;
  }
};


// Estágios de conversa
const CONVERSATION_STAGES = {
  WELCOME: 'welcome',
  PERSONAL_INFO: 'personal_info',
  HABITS: 'habits',
  FITNESS: 'fitness',
  NUTRITION: 'nutrition',
  DATA_CONSENT: 'data_consent',
  COMPLETED: 'completed'
};

// Perguntas por estágio
const STAGE_QUESTIONS = {
  [CONVERSATION_STAGES.WELCOME]: {
    message: 'Olá! Estou animado para conhecer você e ajudar em sua jornada no Systentando. Vamos começar com algumas perguntas rápidas?',
    options: [
      { label: 'Vamos lá!', value: 'start' },
      { label: 'Agora não', value: 'cancel' }
    ],
    input: false
  },
  [CONVERSATION_STAGES.PERSONAL_INFO]: [
    {
      id: 'name',
      message: 'Qual é o seu nome completo?',
      placeholder: 'Digite seu nome',
      input: true,
      required: true
    },
    {
      id: 'email',
      message: 'Qual é o seu email profissional?',
      placeholder: 'seuemail@exemplo.com',
      input: true,
      required: true,
      validation: (value) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(value) ? true : 'Por favor, informe um email válido';
      }
    },
    {
      id: 'role',
      message: 'Qual é a sua área de atuação como desenvolvedor?',
      placeholder: 'Ex: Frontend, Backend, Full-stack, etc.',
      input: true
    }
  ],
  [CONVERSATION_STAGES.HABITS]: [
    {
      id: 'screenTime',
      message: 'Quantas horas por dia, em média, você passa em frente às telas?',
      options: [
        { label: 'Menos de 4 horas', value: '<4' },
        { label: '4-8 horas', value: '4-8' },
        { label: '8-12 horas', value: '8-12' },
        { label: 'Mais de 12 horas', value: '>12' }
      ],
      input: false
    },
    {
      id: 'workHours',
      message: 'Qual é seu horário mais produtivo de trabalho?',
      options: [
        { label: 'Manhã cedo (5h-9h)', value: 'early_morning' },
        { label: 'Manhã (9h-12h)', value: 'morning' },
        { label: 'Tarde (13h-18h)', value: 'afternoon' },
        { label: 'Noite (18h-22h)', value: 'evening' },
        { label: 'Madrugada (22h-5h)', value: 'night' }
      ],
      input: false
    },
    {
      id: 'procrastination',
      message: 'Você costuma procrastinar tarefas importantes?',
      options: [
        { label: 'Raramente', value: 'rarely' },
        { label: 'Às vezes', value: 'sometimes' },
        { label: 'Frequentemente', value: 'often' },
        { label: 'Sempre', value: 'always' }
      ],
      input: false
    }
  ],
  [CONVERSATION_STAGES.FITNESS]: [
    {
      id: 'exercise',
      message: 'Com que frequência você pratica exercícios físicos?',
      options: [
        { label: 'Diariamente', value: 'daily' },
        { label: '3-5 vezes por semana', value: '3-5_week' },
        { label: '1-2 vezes por semana', value: '1-2_week' },
        { label: 'Raramente', value: 'rarely' },
        { label: 'Nunca', value: 'never' }
      ],
      input: false
    },
    {
      id: 'exerciseType',
      message: 'Quais tipos de exercícios você prefere?',
      options: [
        { label: 'Musculação', value: 'strength' },
        { label: 'Cardio (corrida, ciclismo)', value: 'cardio' },
        { label: 'Esportes coletivos', value: 'team_sports' },
        { label: 'Yoga/Pilates', value: 'mind_body' },
        { label: 'Caminhada', value: 'walking' },
        { label: 'Não pratico exercícios', value: 'none' }
      ],
      multiSelect: true,
      input: false
    }
  ],
  [CONVERSATION_STAGES.NUTRITION]: [
    {
      id: 'mealPrep',
      message: 'Você costuma preparar suas próprias refeições?',
      options: [
        { label: 'Sempre', value: 'always' },
        { label: 'Na maioria das vezes', value: 'mostly' },
        { label: 'Às vezes', value: 'sometimes' },
        { label: 'Raramente', value: 'rarely' },
        { label: 'Nunca', value: 'never' }
      ],
      input: false
    },
    {
      id: 'dietPreference',
      message: 'Você segue alguma dieta ou restrição alimentar específica?',
      options: [
        { label: 'Sem restrições', value: 'none' },
        { label: 'Vegetariano', value: 'vegetarian' },
        { label: 'Vegano', value: 'vegan' },
        { label: 'Low-carb', value: 'low_carb' },
        { label: 'Sem glúten', value: 'gluten_free' },
        { label: 'Sem lactose', value: 'lactose_free' },
        { label: 'Outra', value: 'other' }
      ],
      input: false
    }
  ],
  [CONVERSATION_STAGES.DATA_CONSENT]: {
    message: 'Para oferecer a melhor experiência possível, gostaríamos de utilizar seus dados para personalizar nossas ferramentas e aprimorar nossos modelos de Machine Learning. Seus dados serão tratados com segurança e privacidade de acordo com nossa política. Você concorda com isso?',
    detail: 'Ao concordar, você terá acesso completo às ferramentas básicas do Systentando, incluindo ZEN Launcher e contribuirá para o aprimoramento de nossa tecnologia adaptativa.',
    options: [
      { label: 'Concordo', value: 'agree' },
      { label: 'Não concordo', value: 'disagree' }
    ],
    input: false
  },
  [CONVERSATION_STAGES.COMPLETED]: {
    message: 'Obrigado por compartilhar suas informações! Estamos muito felizes em ter você na comunidade Systentando.',
    detail: 'Seus dados foram registrados com sucesso. Você receberá um email em breve com suas credenciais de acesso e próximos passos. Enquanto isso, você já pode começar a explorar nossa documentação e comunidade.',
    options: [
      { label: 'Fechar', value: 'close' }
    ],
    input: false
  }
};

const ChatbotModal = ({ isOpen, onClose }) => {
  const [stage, setStage] = useState(CONVERSATION_STAGES.WELCOME);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userResponses, setUserResponses] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState(null);
  
  const chatContainerRef = useRef(null);
  const inputRef = useRef(null);
  
  // Limpa estados quando modal abre/fecha
  useEffect(() => {
    if (isOpen) {
      setStage(CONVERSATION_STAGES.WELCOME);
      setCurrentQuestionIndex(0);
      setUserResponses({});
      setMessages([
        {
          type: 'bot',
          content: STAGE_QUESTIONS[CONVERSATION_STAGES.WELCOME].message
        }
      ]);
    }
  }, [isOpen]);
  
  // Scroll para última mensagem
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);
  
  // Foca no input quando necessário
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [stage, currentQuestionIndex]);
  
  // Gerencia estágios da conversa
  const getCurrentQuestion = () => {
    const stageQuestions = STAGE_QUESTIONS[stage];
    
    // Se estágio atual tem uma única pergunta (objeto)
    if (!Array.isArray(stageQuestions)) {
      return stageQuestions;
    }
    
    // Se estágio atual tem múltiplas perguntas (array)
    return stageQuestions[currentQuestionIndex];
  };
  
  const handleNextQuestion = () => {
    const stageQuestions = STAGE_QUESTIONS[stage];
    
    // Se estágio atual tem múltiplas perguntas
    if (Array.isArray(stageQuestions)) {
      if (currentQuestionIndex < stageQuestions.length - 1) {
        // Avança para próxima pergunta do estágio atual
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        
        // Adiciona pergunta ao chat
        addBotMessage(stageQuestions[currentQuestionIndex + 1].message);
      } else {
        // Avança para próximo estágio
        moveToNextStage();
      }
    } else {
      // Avança para próximo estágio
      moveToNextStage();
    }
  };
  
  const moveToNextStage = () => {
    setCurrentQuestionIndex(0);
    
    // Determina próximo estágio com base no atual
    switch (stage) {
      case CONVERSATION_STAGES.WELCOME:
        setStage(CONVERSATION_STAGES.PERSONAL_INFO);
        addBotMessage(STAGE_QUESTIONS[CONVERSATION_STAGES.PERSONAL_INFO][0].message);
        break;
      case CONVERSATION_STAGES.PERSONAL_INFO:
        setStage(CONVERSATION_STAGES.HABITS);
        addBotMessage(STAGE_QUESTIONS[CONVERSATION_STAGES.HABITS][0].message);
        break;
      case CONVERSATION_STAGES.HABITS:
        setStage(CONVERSATION_STAGES.FITNESS);
        addBotMessage(STAGE_QUESTIONS[CONVERSATION_STAGES.FITNESS][0].message);
        break;
      case CONVERSATION_STAGES.FITNESS:
        setStage(CONVERSATION_STAGES.NUTRITION);
        addBotMessage(STAGE_QUESTIONS[CONVERSATION_STAGES.NUTRITION][0].message);
        break;
      case CONVERSATION_STAGES.NUTRITION:
        setStage(CONVERSATION_STAGES.DATA_CONSENT);
        addBotMessage(STAGE_QUESTIONS[CONVERSATION_STAGES.DATA_CONSENT].message);
        
        // Adiciona detalhe na próxima mensagem para consent
        setTimeout(() => {
          addBotMessage(STAGE_QUESTIONS[CONVERSATION_STAGES.DATA_CONSENT].detail, true);
        }, 500);
        break;
      case CONVERSATION_STAGES.DATA_CONSENT:
        handleSubmitData();
        break;
      case CONVERSATION_STAGES.COMPLETED:
        onClose();
        break;
    }
  };
  
  // Funções auxiliares
  const addBotMessage = (message, isDetail = false) => {
    setMessages(prev => [
      ...prev,
      {
        type: isDetail ? 'bot-detail' : 'bot',
        content: message
      }
    ]);
  };
  
  const addUserMessage = (message) => {
    setMessages(prev => [
      ...prev,
      {
        type: 'user',
        content: message
      }
    ]);
  };
  
  // Manipuladores de input
  const handleInputSubmit = () => {
    if (!inputValue.trim()) return;
    
    const currentQuestion = getCurrentQuestion();
    
    // Validação, se existir
    if (currentQuestion.validation) {
      const validationResult = currentQuestion.validation(inputValue);
      if (validationResult !== true) {
        setError(validationResult);
        return;
      }
    }
    
    // Limpa erro se existir
    setError(null);
    
    // Salva resposta
    setUserResponses(prev => ({
      ...prev,
      [currentQuestion.id]: inputValue
    }));
    
    // Adiciona resposta ao chat
    addUserMessage(inputValue);
    
    // Limpa input
    setInputValue('');
    
    // Próxima pergunta
    setTimeout(() => {
      handleNextQuestion();
    }, 500);
  };
  
  const handleOptionSelect = (option) => {
    const currentQuestion = getCurrentQuestion();
    
    if (stage === CONVERSATION_STAGES.WELCOME && option.value === 'cancel') {
      onClose();
      return;
    }
    
    if (currentQuestion.multiSelect) {
      // Para perguntas com múltipla escolha
      let newSelection;
      
      if (selectedOptions.includes(option.value)) {
        // Remove se já selecionado
        newSelection = selectedOptions.filter(val => val !== option.value);
      } else {
        // Adiciona se não selecionado
        newSelection = [...selectedOptions, option.value];
      }
      
      setSelectedOptions(newSelection);
      return;
    }
    
    // Para perguntas de escolha única
    
    // Salva resposta
    setUserResponses(prev => ({
      ...prev,
      [Array.isArray(STAGE_QUESTIONS[stage]) 
        ? getCurrentQuestion().id 
        : stage]: option.value
    }));
    
    // Para perguntas com múltipla escolha, salvamos todas as seleções
    if (currentQuestion.multiSelect) {
      setUserResponses(prev => ({
        ...prev,
        [getCurrentQuestion().id]: selectedOptions
      }));
    }
    
    // Adiciona resposta ao chat
    addUserMessage(option.label);
    
    // Reseta seleções para múltipla escolha
    setSelectedOptions([]);
    
    // Próxima pergunta
    setTimeout(() => {
      handleNextQuestion();
    }, 500);
  };
  
  const handleMultiOptionSubmit = () => {
    const currentQuestion = getCurrentQuestion();
    
    if (selectedOptions.length === 0) return;
    
    // Salva resposta
    setUserResponses(prev => ({
      ...prev,
      [currentQuestion.id]: selectedOptions
    }));
    
    // Encontra labels das opções selecionadas
    const selectedLabels = currentQuestion.options
      .filter(option => selectedOptions.includes(option.value))
      .map(option => option.label)
      .join(', ');
    
    // Adiciona resposta ao chat
    addUserMessage(selectedLabels);
    
    // Reseta seleções
    setSelectedOptions([]);
    
    // Próxima pergunta
    setTimeout(() => {
      handleNextQuestion();
    }, 500);
  };
  
  // Envio final de dados
  const handleSubmitData = async () => {
    setIsSubmitting(true);
    
    try {
      // Simula envio para API via GraphQL
      const response = await registerUserWithGraphQL(userResponses);
      
      // Adiciona mensagem de sucesso
      setTimeout(() => {
        setStage(CONVERSATION_STAGES.COMPLETED);
        addBotMessage(STAGE_QUESTIONS[CONVERSATION_STAGES.COMPLETED].message);
        
        // Adiciona detalhe na próxima mensagem
        setTimeout(() => {
          addBotMessage(STAGE_QUESTIONS[CONVERSATION_STAGES.COMPLETED].detail, true);
        }, 500);
        
        setIsSubmitting(false);
      }, 1000);
      
    } catch (error) {
      console.error('Erro ao enviar dados:', error);
      addBotMessage('Ocorreu um erro ao enviar seus dados. Por favor, tente novamente mais tarde.');
      setIsSubmitting(false);
    }
  };
  
  // Não renderiza nada se modal estiver fechado
  if (!isOpen) return null;
  
  const currentQuestion = getCurrentQuestion();
  
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
        padding: '1rem'
      }}
    >
      <div
        style={{
          backgroundColor: colors.dark.card,
          borderRadius: '1rem',
          width: '100%',
          maxWidth: '500px',
          maxHeight: '600px',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)'
        }}
      >
        {/* Header */}
        <div
          style={{
            padding: '1rem',
            borderBottom: `1px solid ${colors.dark.border}`,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: colors.primary.main
          }}
        >
          <h3
            style={{
              margin: 0,
              fontSize: '1.2rem',
              color: 'white',
              fontWeight: 'bold'
            }}
          >
            Chatbot Systentando
          </h3>
          <button
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              color: 'white',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '0.25rem'
            }}
            aria-label="Fechar"
          >
            <X size={20} />
          </button>
        </div>
        
        {/* Messages area */}
        <div
          ref={chatContainerRef}
          style={{
            padding: '1rem',
            flexGrow: 1,
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem'
          }}
        >
          {messages.map((message, index) => (
            <div
              key={index}
              style={{
                alignSelf: message.type.startsWith('bot') ? 'flex-start' : 'flex-end',
                maxWidth: '80%'
              }}
            >
              <div
                style={{
                  backgroundColor: message.type.startsWith('bot') 
                    ? colors.dark.background 
                    : colors.primary.main,
                  padding: message.type === 'bot-detail' ? '0.5rem 1rem' : '0.75rem 1rem',
                  borderRadius: message.type.startsWith('bot') 
                    ? '0.75rem 0.75rem 0.75rem 0' 
                    : '0.75rem 0.75rem 0 0.75rem',
                  color: message.type.startsWith('bot') ? colors.dark.text : 'white',
                  fontSize: message.type === 'bot-detail' ? '0.9rem' : '1rem',
                  opacity: message.type === 'bot-detail' ? 0.85 : 1
                }}
              >
                {message.content}
              </div>
            </div>
          ))}
          
          {isSubmitting && (
            <div
              style={{
                alignSelf: 'flex-start',
                backgroundColor: colors.dark.background,
                padding: '0.75rem 1rem',
                borderRadius: '0.75rem 0.75rem 0.75rem 0',
                color: colors.dark.text,
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              <Loader size={16} style={{ animation: 'spin 1s linear infinite' }} />
              <span>Processando...</span>
              
              <style>{`
                @keyframes spin {
                  0% { transform: rotate(0deg); }
                  100% { transform: rotate(360deg); }
                }
              `}</style>
            </div>
          )}
        </div>
        
        {/* Input area */}
        <div
          style={{
            padding: '1rem',
            borderTop: `1px solid ${colors.dark.border}`,
            backgroundColor: colors.dark.background
          }}
        >
          {error && (
            <div
              style={{
                color: colors.feedback.error,
                fontSize: '0.9rem',
                marginBottom: '0.5rem'
              }}
            >
              {error}
            </div>
          )}
          
          {/* Text input */}
          {currentQuestion && currentQuestion.input && (
            <div
              style={{
                display: 'flex',
                gap: '0.5rem'
              }}
            >
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder={currentQuestion.placeholder}
                style={{
                  flex: 1,
                  padding: '0.75rem 1rem',
                  backgroundColor: colors.dark.card,
                  border: `1px solid ${error ? colors.feedback.error : colors.dark.border}`,
                  borderRadius: '0.5rem',
                  color: colors.dark.text,
                  fontSize: '1rem'
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleInputSubmit();
                  }
                }}
              />
              <button
                onClick={handleInputSubmit}
                disabled={!inputValue.trim()}
                style={{
                  backgroundColor: colors.accent.main,
                  color: 'white',
                  border: 'none',
                  borderRadius: '0.5rem',
                  padding: '0.75rem',
                  cursor: inputValue.trim() ? 'pointer' : 'not-allowed',
                  opacity: inputValue.trim() ? 1 : 0.7,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Send size={20} />
              </button>
            </div>
          )}
          
          {/* Options */}
          {currentQuestion && !currentQuestion.input && (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem'
              }}
            >
              {currentQuestion.options && currentQuestion.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleOptionSelect(option)}
                  style={{
                    backgroundColor: currentQuestion.multiSelect && selectedOptions.includes(option.value)
                      ? colors.primary.main
                      : colors.dark.card,
                    color: currentQuestion.multiSelect && selectedOptions.includes(option.value)
                      ? 'white'
                      : colors.dark.text,
                    border: `1px solid ${
                      currentQuestion.multiSelect && selectedOptions.includes(option.value)
                        ? colors.primary.main
                        : colors.dark.border
                    }`,
                    borderRadius: '0.5rem',
                    padding: '0.75rem 1rem',
                    cursor: 'pointer',
                    textAlign: 'left',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                >
                  {option.label}
                  {currentQuestion.multiSelect && selectedOptions.includes(option.value) && (
                    <Check size={18} />
                  )}
                </button>
              ))}
              
              {/* Botão de envio para múltipla escolha */}
              {currentQuestion.multiSelect && (
                <button
                  onClick={handleMultiOptionSubmit}
                  disabled={selectedOptions.length === 0}
                  style={{
                    backgroundColor: colors.accent.main,
                    color: 'white',
                    border: 'none',
                    borderRadius: '0.5rem',
                    padding: '0.75rem 1rem',
                    marginTop: '0.5rem',
                    cursor: selectedOptions.length > 0 ? 'pointer' : 'not-allowed',
                    opacity: selectedOptions.length > 0 ? 1 : 0.7
                  }}
                >
                  Enviar seleção
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatbotModal;

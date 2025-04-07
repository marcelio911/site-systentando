/**
 * Este arquivo contém as funções mock para simular chamadas GraphQL
 * Em um ambiente de produção, seria substituído por chamadas reais para a API
 */

// Simulação de delay para requests
const simulateNetworkDelay = (minMs = 500, maxMs = 1500) => {
  const delay = Math.floor(Math.random() * (maxMs - minMs + 1)) + minMs;
  return new Promise(resolve => setTimeout(resolve, delay));
};

/**
 * Registrar novo usuário via GraphQL (simulado)
 * 
 * Mutation equivalente:
 * ```
 * mutation RegisterUser($input: UserRegistrationInput!) {
 *   registerUser(input: $input) {
 *     id
 *     name
 *     email
 *     level
 *     createdAt
 *     success
 *     message
 *   }
 * }
 * ```
 */
export const registerUser = async (userData) => {
  // Log dos dados recebidos (para desenvolvimento)
  console.log('GraphQL Mutation - registerUser:', userData);
  
  // Simula tempo de processamento da API
  await simulateNetworkDelay();
  
  // Simulação de resposta de sucesso
  // Em um ambiente real, estes dados viriam do backend
  return {
    id: `user_${Math.floor(Math.random() * 1000000)}`,
    name: userData.name || 'Usuário',
    email: userData.email || 'email@exemplo.com',
    level: 'EXPLORADOR',
    createdAt: new Date().toISOString(),
    success: true,
    message: 'Usuário registrado com sucesso!'
  };
};

/**
 * Consultar perfil de usuário (simulado)
 * 
 * Query equivalente:
 * ```
 * query GetUserProfile($id: ID!) {
 *   user(id: $id) {
 *     id
 *     name
 *     email
 *     level
 *     avatarUrl
 *     contributions
 *     joinedAt
 *     products {
 *       id
 *       name
 *       accessLevel
 *     }
 *   }
 * }
 * ```
 */
export const getUserProfile = async (userId) => {
  // Log da requisição (para desenvolvimento)
  console.log('GraphQL Query - getUserProfile:', userId);
  
  // Simula tempo de processamento da API
  await simulateNetworkDelay();
  
  // Simulação de resposta
  return {
    id: userId,
    name: 'João Silva',
    email: 'joao.silva@exemplo.com',
    level: 'EXPLORADOR',
    avatarUrl: 'https://via.placeholder.com/150',
    contributions: 0,
    joinedAt: new Date().toISOString(),
    products: [
      {
        id: 'zen_launcher',
        name: 'ZEN Launcher',
        accessLevel: 'BÁSICO'
      }
    ]
  };
};

/**
 * Salvar dados coletados para Machine Learning (simulado)
 * 
 * Mutation equivalente:
 * ```
 * mutation SaveUserData($input: UserDataInput!) {
 *   saveUserData(input: $input) {
 *     success
 *     message
 *     dataPoints
 *   }
 * }
 * ```
 */
export const saveUserData = async (userData) => {
  // Log dos dados recebidos (para desenvolvimento)
  console.log('GraphQL Mutation - saveUserData:', userData);
  
  // Simula tempo de processamento da API
  await simulateNetworkDelay();
  
  // Calcula o número de pontos de dados coletados
  const dataPoints = Object.keys(userData).length;
  
  // Simulação de resposta de sucesso
  return {
    success: true,
    message: 'Dados salvos com sucesso!',
    dataPoints: dataPoints
  };
};

// Classe para integração com SWR ou React Query
export class GraphQLClient {
  constructor() {
    this.endpoint = '/api/graphql'; // Endpoint fictício
  }
  
  async query(queryName, variables = {}) {
    console.log(`Executing query: ${queryName}`, variables);
    
    // Roteamento para funções mock conforme o nome da query
    switch (queryName) {
      case 'getUserProfile':
        return await getUserProfile(variables.id);
      default:
        throw new Error(`Query not implemented: ${queryName}`);
    }
  }
  
  async mutate(mutationName, variables = {}) {
    console.log(`Executing mutation: ${mutationName}`, variables);
    
    // Roteamento para funções mock conforme o nome da mutation
    switch (mutationName) {
      case 'registerUser':
        return await registerUser(variables.input);
      case 'saveUserData':
        return await saveUserData(variables.input);
      default:
        throw new Error(`Mutation not implemented: ${mutationName}`);
    }
  }
}

// Singleton para uso em toda a aplicação
export const graphQLClient = new GraphQLClient();

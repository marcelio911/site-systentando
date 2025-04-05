# Systentando Landing Page

## Sobre o Projeto

Landing page para o projeto Systentando One, um HUB de desenvolvedores com visão empreendedora.

## Configuração do Ambiente

### Pré-requisitos

- Node.js (versão 16+)
- npm ou yarn
- Firebase CLI (para deploy)

### Instalação

```bash
# Instalar dependências
npm install

# Configurar Git Hooks (Husky)
npm run prepare
chmod +x .husky/install-hooks.sh
./.husky/install-hooks.sh

# Iniciar servidor de desenvolvimento
npm start

# Construir para produção
npm run build
```

## Validação de Código

Este projeto utiliza Husky para garantir a qualidade do código:

- **pre-commit**: Executa ESLint para validar o código antes do commit
- **pre-push**: Executa build e testes completos antes do push

Se necessário, você pode executar a validação manualmente:

```bash
# Executar apenas ESLint
npm run lint

# Executar validação completa (ESLint + build)
npm run validate
```

## Deployment CI/CD

Este projeto utiliza GitHub Actions para CI/CD automatizado com deploy para Firebase Hosting.

### Configuração Inicial (apenas uma vez)

1. Certifique-se de ter permissões de administrador no projeto Firebase
2. Execute o script de configuração:

```bash
chmod +x .github/workflows/firebase-setup.sh
./.github/workflows/firebase-setup.sh
```

3. Siga as instruções exibidas para configurar o secret `FIREBASE_SERVICE_ACCOUNT` no GitHub

### Fluxo de Trabalho

- **Pull Requests para `main`**: Executa build e testes para validação
- **Push para `main`**: Realiza deploy automático para o Firebase Hosting

## Estrutura do Projeto

- `/src`: Código fonte da aplicação
  - `/components`: Componentes React reutilizáveis
  - `/utils`: Utilitários e configurações
  - `/assets`: Imagens e outros recursos estáticos
- `/.github/workflows`: Configurações de CI/CD
- `/.husky`: Git hooks para validação de código

## Tecnologias Utilizadas

- React.js
- Tailwind CSS
- Firebase Hosting
- GitHub Actions
- Husky (Git Hooks)
- ESLint

## Licença

Todos os direitos reservados.

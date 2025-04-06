## Rotas da Aplicação

A aplicação possui duas rotas principais:

- `/`: Página inicial da landing page, apresentando o ecossistema Systentando
- `/workflow`: Página de jornada do desenvolvedor, explicando o processo de contribuição

### Página de Workflow

A página de workflow foi projetada para novos membros entenderem:

- O que esperamos dos contribuidores
- Benefícios de fazer parte da comunidade
- Níveis de contribuição e recompensas
- Toolkit de desenvolvimento disponível
- Regras e diretrizes da comunidade

Esta página está estruturada com navegação por seções e pode ser acessada através dos botões "Junte-se à nossa comunidade", "Quero Participar" e "Quero fazer parte" na página inicial.

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

# Validação e Padrões de Código

Este projeto utiliza ferramentas automatizadas para garantir a qualidade do código:

### Husky (Git Hooks)

- **pre-commit**: Executa ESLint para validar o código antes do commit
- **pre-push**: Executa build e testes completos antes do push
- **commit-msg**: Valida as mensagens de commit com Commitlint

### Convenção de Commits

Utilizamos uma convenção padronizada para mensagens de commit:

```
<tipo>(<escopo>): <descrição>
```

Exemplo: `feat(navbar): adicionar menu responsivo`

[Ver documentação completa sobre commits](./docs/COMMIT_CONVENTION.md)

# Execução de scripts manuais

```bash
# Executar apenas ESLint
npm run lint

# Executar validação completa (ESLint + build)
npm run validate

# Corrigir problemas de acessibilidade automaticamente
npm run fix-a11y
```

### Acessibilidade

Este projeto segue as boas práticas de acessibilidade web. Temos ferramentas para detectar e corrigir problemas comuns de acessibilidade:

- **Validação automática**: O ESLint identifica problemas de acessibilidade durante o desenvolvimento
- **Correção assistida**: O script `fix-a11y` corrige automaticamente muitos problemas comuns
- **Documentação**: Consulte [nosso guia de acessibilidade](./docs/ACCESSIBILITY.md) para orientações detalhadas

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
- `/docs`: Documentação do projeto
  - `COMMIT_CONVENTION.md`: Padrões para mensagens de commit
  - `ACCESSIBILITY.md`: Guia de acessibilidade

## Tecnologias Utilizadas

- React.js
- Tailwind CSS
- Firebase Hosting
- GitHub Actions
- Husky (Git Hooks)
- ESLint (incluindo plugins de acessibilidade)
- Commitlint

## Licença

Todos os direitos reservados.

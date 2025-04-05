# GitHub Actions Workflows

Este diretório contém os workflows de CI/CD para o projeto Systentando Landing Page.

## Workflows Disponíveis

### `firebase-deploy.yml`

Este workflow automatiza o processo de build e deploy para o Firebase Hosting.

#### Gatilhos:
- Push para a branch `main` (deploy automático)
- Pull requests para a branch `main` (apenas validação)

#### Jobs:
1. **build_and_test**: Constrói e valida o código
   - Checkout do código-fonte
   - Configuração do Node.js
   - Instalação de dependências
   - Execução do ESLint
   - Build do projeto
   - Upload do artefato de build

2. **deploy_to_firebase**: Realiza o deploy para o Firebase Hosting
   - Executado apenas para push na branch `main`
   - Utiliza o artefato de build gerado no job anterior
   - Deploy na plataforma Firebase Hosting

## Configuração Necessária

Para que o workflow funcione corretamente, é necessário configurar o secret `FIREBASE_SERVICE_ACCOUNT` no GitHub.

Utilize o script `firebase-setup.sh` disponível na raiz do projeto para gerar este secret.

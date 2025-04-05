# CI/CD com GitHub Actions para Systentando Landing Page

## Visão Geral

Este documento detalha a configuração de CI/CD implementada para automatizar o processo de build, teste e deploy da Landing Page Systentando usando GitHub Actions e Firebase Hosting.

## Arquitetura do CI/CD

![Diagrama de CI/CD](https://i.imgur.com/RtKQTKF.png)

## Workflow Implementado

O workflow `firebase-deploy.yml` é acionado nos seguintes casos:
- Push para a branch `main`
- Pull requests direcionadas à branch `main`

### Estágios do Workflow

1. **Build e Teste**
   - Checkout do código
   - Configuração do Node.js v18
   - Instalação de dependências via `npm ci`
   - Verificação de qualidade de código com ESLint
   - Build do projeto
   - Armazenamento do artefato de build

2. **Deploy para Firebase Hosting**
   - Executado apenas para push em `main`
   - Recupera o artefato de build
   - Realiza deploy automático para Firebase Hosting usando ação oficial do Firebase

## Segredos Necessários

O workflow requer o seguinte segredo configurado no GitHub:

- `FIREBASE_SERVICE_ACCOUNT`: Credenciais de serviço do Firebase para autorizar o deploy

## Configuração Inicial

Para configurar este workflow pela primeira vez, siga estas etapas:

1. Certifique-se de ter acesso administrativo ao projeto Firebase
2. Execute o script de configuração:
   ```bash
   chmod +x .github/workflows/firebase-setup.sh
   ./.github/workflows/firebase-setup.sh
   ```
3. Siga as instruções para adicionar o segredo ao repositório GitHub

## Validação Local

Para validar localmente antes de fazer push:

```bash
chmod +x validate.sh
./validate.sh
```

Este script verifica:
- ESLint para qualidade de código
- Build do projeto para detectar erros de compilação

## Monitoramento e Resolução de Problemas

- Verifique a aba "Actions" no GitHub para visualizar o status dos workflows
- Erros no ESLint podem ser resolvidos seguindo as diretrizes de estilo de código
- Falhas de build geralmente estão relacionadas a erros de código ou dependências

## Referências

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Firebase Hosting Documentation](https://firebase.google.com/docs/hosting)
- [Firebase GitHub Action](https://github.com/FirebaseExtended/action-hosting-deploy)

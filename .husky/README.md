# Configuração de Git Hooks com Husky

Este diretório contém a configuração do Husky para automatizar verificações antes de commit e push.

## Hooks Configurados

### pre-commit
- Executa o ESLint para validar a qualidade do código
- Impede commits com erros de código

### pre-push
- Executa o script de validação completo (`validate.sh`)
- Realiza build e testes
- Impede push de código quebrado para o repositório remoto

## Instalação e configuração

Após clonar o repositório, execute:

```bash
npm install
npm run prepare
chmod +x .husky/install-hooks.sh
./.husky/install-hooks.sh
```

## Desabilitando temporariamente

Para ignorar os hooks em caso de necessidade:

```bash
git commit --no-verify -m "Mensagem do commit"
git push --no-verify
```

**Observação**: Use apenas em casos excepcionais, pois os hooks são importantes para manter a qualidade do código.

# Convenção de Commits

Este projeto segue convenções estritas para mensagens de commit a fim de manter um histórico claro e facilitar a geração automática de changelogs.

## Formato

Cada mensagem de commit consiste em um **cabeçalho**, um **corpo** e um **rodapé**:

```
<tipo>(<escopo>): <descrição>

<corpo>

<rodapé>
```

## Cabeçalho

O cabeçalho é obrigatório e deve seguir este formato:

- **tipo**: O tipo de alteração sendo feita (feat, fix, etc.)
- **escopo** (opcional): O escopo da alteração (componente, arquivo)
- **descrição**: Descrição curta da alteração

### Tipos permitidos

- **feat**: Nova funcionalidade
- **fix**: Correção de bug
- **docs**: Alterações na documentação
- **style**: Formatação, ponto e vírgula, etc. (sem alteração funcional)
- **refactor**: Refatoração de código de produção
- **perf**: Melhorias de performance
- **test**: Adição ou refatoração de testes
- **build**: Alterações no sistema de build ou dependências
- **ci**: Alterações em configurações de CI ou scripts
- **chore**: Outras alterações que não modificam código de produção
- **revert**: Reverte um commit anterior

## Corpo

O corpo é opcional e deve fornecer o contexto da alteração e explicar o que foi feito.

## Rodapé

O rodapé é opcional e é usado para referenciar issues, PRs ou outras informações relacionadas.

## Exemplos

```
feat(auth): implementar autenticação com Firebase

Adiciona componentes de login e registro usando Firebase Auth
Configura rotas protegidas e armazenamento de tokens

Closes #123
```

```
fix(navbar): corrigir menu hambúrguer em telas pequenas

O menu não estava sendo exibido corretamente em dispositivos móveis
devido a um problema com a detecção de largura da tela.
```

```
docs: atualizar README com instruções de instalação
```

```
refactor(components): reorganizar estrutura de pastas

- Move componentes específicos para pastas dedicadas
- Melhora importações usando index.js
- Padroniza nomenclatura de arquivos
```

## Ferramentas

Este projeto utiliza:

- **Commitlint**: Valida as mensagens de commit segundo as regras definidas
- **Husky**: Executa o Commitlint antes de finalizar um commit

## Configuração Local

A configuração é feita automaticamente quando você executa:

```bash
npm install
npm run prepare
./.husky/install-hooks.sh
```

## Dicas

- Use o presente do indicativo ("adiciona", não "adicionado")
- Primeira letra da descrição em minúsculo
- Sem ponto final na descrição
- Seja conciso mas informativo

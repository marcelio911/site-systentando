module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat', // Nova funcionalidade
        'fix', // Correção de bugs
        'docs', // Documentação
        'style', // Formatação, ponto e vírgula faltando, etc
        'refactor', // Refatoração de código
        'perf', // Melhorias de performance
        'test', // Adição/refatoração de testes
        'chore', // Tarefas de build, ajustes de ferramentas, etc
        'ci', // Tarefas de integração contínua
        'revert', // Reverter commits
        'build', // Alterações no sistema de build ou dependências
      ],
    ],
    'type-case': [2, 'always', 'lower'],
    'type-empty': [2, 'never'],
    'scope-case': [2, 'always', 'lower'],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'header-max-length': [2, 'always', 72],
    'body-leading-blank': [2, 'always'],
    'footer-leading-blank': [1, 'always'],
  },
  parserPreset: {
    parserOpts: {
      headerPattern: /^(\w*)(?:\((\w*)\))?: (.*)$/,
      headerCorrespondence: ['type', 'scope', 'subject'],
    },
  },
};

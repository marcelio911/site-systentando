#!/bin/bash

# Tornar os hooks executáveis
chmod +x .husky/pre-commit
chmod +x .husky/pre-push
chmod +x .husky/commit-msg
chmod +x .husky/_/husky.sh
chmod +x validate.sh

# Configurar o template de commit
git config --local commit.template .github/commit-template.txt

echo "✅ Hooks do Husky instalados e configurados com sucesso!"
echo "✅ Template de commit configurado!"

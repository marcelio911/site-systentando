#!/bin/bash

# Tornar os hooks executáveis
chmod +x .husky/pre-commit
chmod +x .husky/pre-push
chmod +x .husky/_/husky.sh
chmod +x validate.sh

echo "✅ Hooks do Husky instalados e configurados com sucesso!"

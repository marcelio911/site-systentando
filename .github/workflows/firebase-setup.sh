#!/bin/bash

# Script para configurar o Firebase localmente e preparar as credenciais para o CI/CD
# Execute este script apenas uma vez para configurar seu projeto

# Verifica se o Firebase CLI está instalado
if ! command -v firebase &> /dev/null; then
    echo "Firebase CLI não está instalado. Instalando..."
    npm install -g firebase-tools
fi

# Login no Firebase
echo "Fazendo login no Firebase..."
firebase login

# Obtém o ID do projeto atual
PROJECT_ID=$(grep -o '"default": "[^"]*' .firebaserc | cut -d'"' -f4)
echo "Projeto atual: $PROJECT_ID"

# Cria o token CI para o Firebase
echo "Criando token CI para o Firebase..."
FIREBASE_TOKEN=$(firebase ci:token --project $PROJECT_ID)

echo "==========================================="
echo "INSTRUÇÕES PARA CONFIGURAR O GITHUB ACTIONS:"
echo "==========================================="
echo "1. Vá para o seu repositório no GitHub"
echo "2. Clique em Settings > Secrets and variables > Actions"
echo "3. Clique em 'New repository secret'"
echo "4. Adicione um novo secret com o nome 'FIREBASE_SERVICE_ACCOUNT'"
echo "5. Cole o seguinte valor no campo do secret:"
echo ""
echo "Para obter o valor completo do secret, execute:"
echo "firebase init hosting:github"
echo ""
echo "Isso configurará automaticamente o repositório com o secret correto."
echo "==========================================="

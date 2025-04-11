#!/bin/bash

# Script para validar o projeto localmente antes de fazer commit/push
# Simula as verificações que serão executadas no CI/CD

echo "========================================"
echo "Iniciando validação local do projeto"
echo "========================================"

# Instalar dependências se necessário
if [ ! -d "node_modules" ]; then
  echo "Instalando dependências..."
  npm ci
fi

# Executar o ESLint para validar o código
echo "Executando ESLint..."
npx eslint src

# Verificando se há problemas críticos no ESLint
if [ $? -eq 0 ]; then
  echo "✅ ESLint passou sem erros críticos"
else
  echo "⚠️ ESLint identificou problemas."
  
  # Perguntar se deseja executar o corretor automático de acessibilidade
  read -p "Deseja tentar corrigir automaticamente os problemas de acessibilidade? (s/n): " fix_accessibility
  
  if [ "$fix_accessibility" = "s" ] || [ "$fix_accessibility" = "S" ]; then
    echo "Executando corretor de acessibilidade..."
    node fix-accessibility.js
    
    # Verificar novamente com ESLint
    echo "Verificando novamente com ESLint..."
    npx eslint src
    
    if [ $? -eq 0 ]; then
      echo "✅ Todos os problemas foram corrigidos!"
    else
      echo "⚠️ Alguns problemas persistem. Você precisará corrigí-los manualmente."
      echo "Consulte o guia em docs/ACCESSIBILITY.md para ajuda."
    fi
  fi
fi

# Executar o build
echo "Executando build..."
npm run build

# Verificar se o build foi bem-sucedido
if [ $? -eq 0 ]; then
  echo "✅ Build concluído com sucesso"
else
  echo "❌ Falha no build. Corrija os erros antes de fazer commit."
  exit 1
fi

echo "========================================"
echo "✅ Validação concluída! O projeto está pronto para commit/push."
echo "========================================"

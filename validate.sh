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
  echo "⚠️ ESLint identificou problemas. Considere corrigir antes de fazer commit."
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

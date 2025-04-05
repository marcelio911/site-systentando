#!/bin/bash

# Script interativo para ajudar a criar um commit padronizado

echo "🚀 Criando um commit padronizado"
echo "===============================\n"

# Exibir os tipos disponíveis
echo "Tipos de commit disponíveis:"
echo "1) feat:     Nova funcionalidade"
echo "2) fix:      Correção de bug"
echo "3) docs:     Alterações na documentação"
echo "4) style:    Formatação (sem alteração funcional)"
echo "5) refactor: Refatoração de código"
echo "6) perf:     Melhorias de performance"
echo "7) test:     Adição/refatoração de testes"
echo "8) chore:    Outras alterações (ferramentas, etc)"
echo "9) ci:       Alterações em configurações de CI"
echo "10) build:   Alterações no sistema de build"
echo "11) revert:  Reverter um commit anterior\n"

# Solicitar o tipo
read -p "Selecione o tipo de commit (1-11): " type_choice

# Mapear a escolha para o tipo
case $type_choice in
  1) type="feat" ;;
  2) type="fix" ;;
  3) type="docs" ;;
  4) type="style" ;;
  5) type="refactor" ;;
  6) type="perf" ;;
  7) type="test" ;;
  8) type="chore" ;;
  9) type="ci" ;;
  10) type="build" ;;
  11) type="revert" ;;
  *) echo "Escolha inválida"; exit 1 ;;
esac

# Solicitar o escopo (opcional)
read -p "Escopo (opcional, pressione enter para pular): " scope

# Solicitar a descrição
read -p "Descrição (obrigatória): " description

if [ -z "$description" ]; then
  echo "❌ A descrição é obrigatória!"
  exit 1
fi

# Construir o cabeçalho do commit
if [ -z "$scope" ]; then
  commit_header="$type: $description"
else
  commit_header="$type($scope): $description"
fi

# Perguntar se deseja adicionar um corpo
read -p "Adicionar um corpo detalhado ao commit? (s/n): " add_body

if [ "$add_body" = "s" ] || [ "$add_body" = "S" ]; then
  echo "Digite o corpo do commit (pressione Ctrl+D quando terminar):"
  commit_body=$(cat)
  
  # Construir a mensagem de commit completa
  commit_message="$commit_header\n\n$commit_body"
else
  commit_message="$commit_header"
fi

# Exibir a mensagem final
echo -e "\nMensagem de commit final:"
echo -e "$commit_message\n"

# Confirmar antes de commitar
read -p "Confirmar e criar o commit? (s/n): " confirm

if [ "$confirm" = "s" ] || [ "$confirm" = "S" ]; then
  # Criar o commit
  git commit -m "$commit_message"
  echo "✅ Commit criado com sucesso!"
else
  echo "❌ Operação cancelada"
fi

#!/bin/bash

# Instalar dependências
echo "Instalando dependências..."
npm install

# Verificar se o tailwindcss está instalado
if ! npm list tailwindcss > /dev/null 2>&1; then
  echo "Instalando tailwindcss..."
  npm install -D tailwindcss postcss autoprefixer
  npx tailwindcss init -p
fi

# Verificar se a lucide-react está instalada
if ! npm list lucide-react > /dev/null 2>&1; then
  echo "Instalando lucide-react..."
  npm install lucide-react
fi

echo "Configuração concluída. Execute 'npm start' para iniciar o servidor de desenvolvimento."

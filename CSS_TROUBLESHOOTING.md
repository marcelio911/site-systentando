# Solucionando Problemas de CSS na Landing Page Systentando

Se você estiver enfrentando problemas com os estilos CSS não carregando corretamente, siga estes passos para solucionar:

## 1. Verifique as dependências

Certifique-se de que todas as dependências estão instaladas corretamente:

```bash
# Execute o script de configuração
chmod +x setup.sh
./setup.sh
```

## 2. Verifique a configuração do Tailwind CSS

Certifique-se de que o arquivo `tailwind.config.js` está configurado corretamente:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          main: '#004f4f',
          light: '#006d6d',
          dark: '#003535',
        },
        accent: {
          main: '#ff7d50',
          light: '#ff9b78',
          dark: '#dd5c30',
        },
        dark: {
          background: '#121212',
          card: '#1e1e1e',
          border: '#333333',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
```

## 3. Verifique a importação do CSS

Certifique-se de que seu arquivo `index.css` contém as diretivas do Tailwind no início:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## 4. Limpe o cache

Limpe o cache do navegador e reinicie o servidor de desenvolvimento:

```bash
# Pare o servidor (Ctrl+C) e reinicie
npm start
```

## 5. Use estilos inline como fallback

Se você ainda estiver enfrentando problemas, use estilos inline como uma solução temporária. Exemplo:

```jsx
<div 
  style={{ 
    backgroundImage: 'linear-gradient(90deg, #004f4f, #ff7d50)',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    color: 'transparent',
    fontSize: '1.5rem',
    fontWeight: 'bold'
  }}
>
  SYSTENTANDO
</div>
```

## 6. Construa para produção

Às vezes, o problema pode estar relacionado ao ambiente de desenvolvimento. Tente construir a versão de produção:

```bash
npm run build
```

E então sirva-a localmente para testar:

```bash
npx serve -s build
```

## 7. Verifique erros no console

Inspecione o console do navegador (F12) para ver se há erros relacionados ao carregamento de CSS ou JavaScript.

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Certifique-se de que este é o ponto de entrada correto
const root = document.getElementById('root');
if (root) {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error("Elemento com id 'root' não encontrado");
}

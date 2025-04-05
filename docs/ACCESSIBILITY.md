# Guia de Acessibilidade

Este documento fornece orientações para resolver problemas comuns de acessibilidade no código da landing page.

## Problemas Comuns e Soluções

### 1. Elementos Não-Interativos com Manipuladores de Clique

**Problema:**
```jsx
<div onClick={handleClick}>Clique aqui</div>
```

**Solução:**
Adicionar `role`, `tabIndex` e manipulador de eventos de teclado:
```jsx
<div 
  onClick={handleClick}
  onKeyDown={(e) => { 
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleClick(e);
    }
  }}
  role="button"
  tabIndex="0"
>
  Clique aqui
</div>
```

**Melhor Solução:**
Usar um elemento nativo de botão:
```jsx
<button onClick={handleClick}>Clique aqui</button>
```

### 2. Eventos de Mouse sem Equivalentes de Teclado

**Problema:**
```jsx
<div 
  onMouseOver={() => setIsHovered(true)}
  onMouseOut={() => setIsHovered(false)}
>
  Passe o mouse
</div>
```

**Solução:**
Adicionar eventos de foco equivalentes:
```jsx
<div 
  onMouseOver={() => setIsHovered(true)}
  onMouseOut={() => setIsHovered(false)}
  onFocus={() => setIsHovered(true)}
  onBlur={() => setIsHovered(false)}
  tabIndex="0"
>
  Passe o mouse ou use o teclado
</div>
```

### 3. Aspas Duplas Não Escapadas

**Problema:**
```jsx
<p>Ele disse "olá" para todos</p>
```

**Solução:**
Escapar aspas usando entidades HTML:
```jsx
<p>Ele disse "olá" para todos</p>
```

### 4. Propriedades JSX Desconhecidas

**Problema:**
```jsx
<style jsx>{`...`}</style>
```

**Solução:**
Usar abordagens alternativas, como styled-components ou className:
```jsx
<style className="jsx-styles">{`...`}</style>
```

## Verificando Acessibilidade

Você pode verificar a acessibilidade do seu código usando:

```bash
npm run lint
```

Para aplicar correções automáticas para muitos problemas comuns:

```bash
npm run fix-a11y
```

## Importância da Acessibilidade

Garantir que nossa landing page seja acessível é crucial para:

1. **Inclusão:** Permitir que pessoas com deficiência usem nosso site
2. **SEO:** Melhorar o ranking nos motores de busca
3. **Usabilidade:** Tornar o site mais fácil de usar para todos
4. **Conformidade:** Atender a diretrizes e regulamentos legais

## Recursos Adicionais

- [WAI-ARIA Authoring Practices](https://www.w3.org/TR/wai-aria-practices-1.1/)
- [WebAIM: Web Accessibility In Mind](https://webaim.org/)
- [Documentação do React sobre Acessibilidade](https://reactjs.org/docs/accessibility.html)
- [A11Y Project Checklist](https://www.a11yproject.com/checklist/)

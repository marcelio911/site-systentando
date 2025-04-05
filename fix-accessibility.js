const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, 'src', 'components');
const filesToFix = [
  'EcossistemaSolucoes.jsx',
  'Footer.jsx',
  'HeroSection.jsx',
  'ImpactoSocialSection.jsx',
  'JornadaEmpreendedora.jsx',
  'NavigationBar.jsx',
  'ValuationSection.jsx'
];

// Função para adicionar propriedades de acessibilidade a elementos com eventos de mouse
function addKeyboardEquivalents(content) {
  // Adicionar onFocus onde há onMouseOver
  let updatedContent = content.replace(
    /onMouseOver={(.*?)}\s+(?!.*onFocus)/g,
    'onMouseOver={$1} onFocus={$1} '
  );
  
  // Adicionar onBlur onde há onMouseOut
  updatedContent = updatedContent.replace(
    /onMouseOut={(.*?)}\s+(?!.*onBlur)/g,
    'onMouseOut={$1} onBlur={$1} '
  );
  
  return updatedContent;
}

// Função para corrigir elementos não-interativos com manipuladores de clique
function fixNonInteractiveElements(content) {
  // Adicionar role="button" e tabIndex="0" a elementos div com onClick
  let updatedContent = content.replace(
    /<div\s+([^>]*?)onClick={(.*?)}\s+(?!.*role=|.*tabIndex=)/g,
    '<div $1onClick={$2} role="button" tabIndex="0" onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); $2(e); } }} '
  );
  
  return updatedContent;
}

// Função para escapar aspas duplas em texto JSX
function escapeQuotes(content) {
  // Um regex mais simples para localizar aspas não escapadas em texto JSX
  // Nota: esta é uma aproximação, pode precisar de ajustes manuais em casos complexos
  let updatedContent = content.replace(
    /(\>)([^<]*?)"([^<]*?)"/g,
    (match, before, prefix, suffix) => `${before}${prefix}&quot;${suffix}&quot;`
  );
  
  return updatedContent;
}

// Função para corrigir a propriedade jsx desconhecida
function fixJsxProperty(content) {
  // Trocar jsx por className (caso específico do HeroSection.jsx)
  return content.replace(/<style jsx>/, '<style className="jsx-styles">');
}

// Processar cada arquivo
filesToFix.forEach(filename => {
  const filePath = path.join(componentsDir, filename);
  
  try {
    console.log(`Processando ${filename}...`);
    
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Aplicar correções
    content = addKeyboardEquivalents(content);
    content = fixNonInteractiveElements(content);
    
    // Casos específicos
    if (filename === 'ImpactoSocialSection.jsx' || filename === 'ValuationSection.jsx') {
      content = escapeQuotes(content);
    }
    
    if (filename === 'HeroSection.jsx') {
      content = fixJsxProperty(content);
    }
    
    // Verificar se houve mudanças
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Correções aplicadas em ${filename}`);
    } else {
      console.log(`⚠️ Nenhuma correção automática encontrada em ${filename}`);
    }
  } catch (error) {
    console.error(`❌ Erro ao processar ${filename}:`, error);
  }
});

console.log('\n✅ Processo de correção concluído!');
console.log('\n⚠️ Este script aplicou correções automáticas, mas pode não ter resolvido todos os problemas.');
console.log('📝 Por favor, execute npm run lint novamente para verificar os resultados.');

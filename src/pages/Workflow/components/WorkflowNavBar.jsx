import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, X, Home } from 'lucide-react';
import { colors } from '../../../utils/colors';

const WorkflowNavBar = () => {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  
  // Verificar se é dispositivo móvel
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Detectar scroll para mudar o estilo da barra de navegação
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Lista de seções na página de workflow
  const sections = [
    { id: 'expectations', label: 'Expectativas' },
    { id: 'benefits', label: 'Benefícios' },
    { id: 'levels', label: 'Níveis' },
    { id: 'toolkit', label: 'Ferramentas' },
    { id: 'rules', label: 'Regras' }
  ];
  
  // Função para scroll suave até uma seção
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };
  
  return (
    <nav 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: colors.systentando.background,
        transition: 'background-color 0.3s ease, padding 0.3s ease, backdrop-filter 0.3s ease',
        padding: isScrolled ? '0.5rem 2rem' : '1rem 2rem',
        zIndex: 100,
        boxShadow: isScrolled ? '0 4px 6px rgba(0, 0, 0, 0.1)' : 'none',
        backdropFilter: isScrolled ? 'blur(10px)' : 'none',
        WebkitBackdropFilter: isScrolled ? 'blur(10px)' : 'none',
        borderBottom: isScrolled ? `1px solid ${colors.dark.border}` : 'none'
      }}
    >
      <div 
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          maxWidth: '1200px',
          margin: '0 auto'
        }}
      >
        {/* Logo */}
        <div 
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem'
          }}
        >
          <button
            onClick={() => navigate('/')}
            style={{
              background: 'none',
              border: 'none',
              padding: 0,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center'
            }}
            aria-label="Voltar para página inicial"
          >
            <img 
              src='/assets/images/systentando-logo.png' 
              alt='Systentando Logo' 
              style={{
                height: '40px'
              }}
            />
          </button>
          
          <div 
            style={{
              color: colors.dark.text,
              fontSize: '1.2rem',
              fontWeight: 'bold',
              opacity: 0.9
            }}
          >
            | Jornada do Dev
          </div>
        </div>
        
        {/* Menu Hambúrguer (móvel) */}
        {isMobile && (
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: 'none',
              border: 'none',
              color: 'white',
              cursor: 'pointer',
              padding: '0.5rem',
              zIndex: 101
            }}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        )}

        {/* Links de navegação (desktop) */}
        {!isMobile && (
          <div 
            style={{
              display: 'flex',
              gap: '1.5rem',
              alignItems: 'center'
            }}
          >
            {sections.map(section => (
              <button
                key={section.id}
                style={{
                  color: 'white',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  fontWeight: 'normal',
                  padding: '0.5rem 0',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'color 0.3s ease'
                }}
                onClick={() => scrollToSection(section.id)}
              >
                {section.label}
              </button>
            ))}
            
            <button
              style={{
                backgroundColor: 'transparent',
                color: colors.dark.text,
                padding: '0.5rem',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: `1px solid ${colors.dark.border}`,
                cursor: 'pointer',
                marginLeft: '0.5rem'
              }}
              onClick={() => navigate('/')}
              title="Voltar para página inicial"
            >
              <Home size={18} />
            </button>
          </div>
        )}
        
        {/* Menu móvel expandido */}
        {isMobile && menuOpen && (
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: colors.systentando.background,
              zIndex: 100,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1.5rem',
              paddingTop: '4rem'
            }}
          >
            {sections.map(section => (
              <button
                key={section.id}
                style={{
                  color: 'white',
                  textDecoration: 'none',
                  fontSize: '1.2rem',
                  fontWeight: 'normal',
                  padding: '0.75rem 0',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'color 0.3s ease'
                }}
                onClick={() => scrollToSection(section.id)}
              >
                {section.label}
              </button>
            ))}
            
            <button 
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: colors.accent.main,
                color: 'white',
                padding: '0.75rem 1.5rem',
                borderRadius: '2rem',
                border: 'none',
                fontWeight: 'bold',
                fontSize: '1rem',
                cursor: 'pointer',
                marginTop: '1rem',
                transition: 'all 0.3s ease'
              }}
              onClick={() => navigate('/')}
            >
              <Home size={16} />
              Página Inicial
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default WorkflowNavBar;

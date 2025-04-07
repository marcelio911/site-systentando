import React, { useState, useEffect, useMemo } from 'react';
import { colors } from '../utils/colors';
import { Menu, X, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  
  // Lista de seções para navegação - envolvida em useMemo para evitar recriação a cada renderização
  const navItems = useMemo(() => [
    { id: 'inicio', label: 'Início', href: '#hero' },
    { id: 'processo', label: 'Como Funciona', href: '#processo' },
    { id: 'principios', label: 'Princípios', href: '#principios' },
    { id: 'ecossistema', label: 'Projetos', href: '#ecossistema' },
    { id: 'impacto', label: 'Impacto', href: '#impacto' },
    { id: 'valuation', label: 'Valuation', href: '#valuation' },
    { id: 'jornada', label: 'Junte-se', href: '#jornada' }
  ], []);
  
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
      
      // Determinar qual seção está visível
      const sections = navItems.map(item => item.id);
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);
  
  // Navegação principal
  return (
    <nav 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        // backgroundColor: isScrolled ? colors.systentando.background : 'transparent',
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
            fontWeight: 'bold',
            fontSize: '1.5rem',
            background: `linear-gradient(90deg, ${colors.primary.main}, ${colors.accent.main})`,
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
            textShadow: `0 0 10px ${colors.primary.main}33`
          }}
        >
          <img src={'assets/images/systentando-logo.png'} alt={'Systentando Logo'} />
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
              gap: '1.5rem'
            }}
          >
          {navItems.map(item => (
            <a
              key={item.id}
              href={item.href}
              style={{
                color: activeSection === item.id ? colors.accent.main : 'white',
                textDecoration: 'none',
                fontSize: '0.9rem',
                fontWeight: activeSection === item.id ? 'bold' : 'normal',
                padding: '0.5rem 0',
                position: 'relative',
                transition: 'color 0.3s ease'
              }}
              onClick={(e) => {
                e.preventDefault();
                document.querySelector(item.href).scrollIntoView({
                  behavior: 'smooth'
                });
              }}
            >
              {/* Indicador de seção ativa */}
              {activeSection === item.id && (
                <span 
                  style={{
                    position: 'absolute',
                    bottom: '0',
                    left: '0',
                    right: '0',
                    height: '2px',
                    backgroundColor: colors.accent.main,
                    borderRadius: '1px'
                  }}
                ></span>
              )}
              {item.label}
            </a>
          ))}
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
            {navItems.map(item => (
              <a
                key={item.id}
                href={item.href}
                style={{
                  color: activeSection === item.id ? colors.accent.main : 'white',
                  textDecoration: 'none',
                  fontSize: '1.2rem',
                  fontWeight: activeSection === item.id ? 'bold' : 'normal',
                  padding: '0.75rem 0',
                  position: 'relative',
                  transition: 'color 0.3s ease'
                }}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(item.href).scrollIntoView({
                    behavior: 'smooth'
                  });
                  setMenuOpen(false);
                }}
              >
                {item.label}
              </a>
            ))}
            
            <div style={{
              marginTop: '1rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem',
              width: '100%',
              padding: '0 2rem'
            }}>
              <Link
                to="/gamification"
                style={{
                  backgroundColor: colors.categories.personal,
                  color: 'white',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '2rem',
                  border: 'none',
                  fontWeight: 'bold',
                  fontSize: '1rem',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: `0 4px 10px ${colors.categories.personal}44`,
                  textDecoration: 'none',
                  textAlign: 'center',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem'
                }}
                onClick={() => setMenuOpen(false)}
              >
                <Trophy size={18} />
                Arena
              </Link>
              
              <button 
                style={{
                  backgroundColor: colors.accent.main,
                  color: 'white',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '2rem',
                  border: 'none',
                  fontWeight: 'bold',
                  fontSize: '1rem',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: `0 4px 10px ${colors.accent.main}44`
                }}
                onClick={() => {
                  document.querySelector('#jornada').scrollIntoView({
                    behavior: 'smooth'
                  });
                  setMenuOpen(false);
                }}
              >
                Participe
              </button>
            </div>
          </div>
        )}
        
        {/* Botões de ação (desktop) */}
        {!isMobile && (
          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <Link 
              to="/gamification"
              style={{
                backgroundColor: colors.categories.personal,
                color: 'white',
                padding: '0.5rem 1rem',
                borderRadius: '2rem',
                border: 'none',
                fontWeight: 'bold',
                fontSize: '0.9rem',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: `0 4px 10px ${colors.categories.personal}44`,
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.opacity = '0.9';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = `0 6px 12px ${colors.categories.personal}66`;
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.opacity = '1';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = `0 4px 10px ${colors.categories.personal}44`;
              }}
            >
              <Trophy size={16} />
              Arena
            </Link>
            
            <button 
              style={{
                backgroundColor: colors.accent.main,
                color: 'white',
                padding: '0.5rem 1rem',
                borderRadius: '2rem',
                border: 'none',
                fontWeight: 'bold',
                fontSize: '0.9rem',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: `0 4px 10px ${colors.accent.main}44`
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.opacity = '0.9';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = `0 6px 12px ${colors.accent.main}66`;
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.opacity = '1';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = `0 4px 10px ${colors.accent.main}44`;
              }}
              onClick={() => document.querySelector('#jornada').scrollIntoView({
                behavior: 'smooth'
              })}
            >
              Participe
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavigationBar;

import React from 'react';
import { colors } from '../utils/colors';

const Footer = () => {
  const links = [
    {
      title: "Sobre",
      items: [
        { name: "Nossa História", href: "#" },
        { name: "Equipe", href: "#" },
        { name: "Filosofia", href: "#principios" },
        { name: "Trabalhe Conosco", href: "#" }
      ]
    },
    {
      title: "Projetos",
      items: [
        { name: "ZEN Launcher", href: "#" },
        { name: "Meu Nutri", href: "#" },
        { name: "Rodada de Negócios", href: "#" },
        { name: "Momento do Investimento", href: "#" },
        { name: "Empreenda4Devs", href: "#" }
      ]
    },
    {
      title: "Recursos",
      items: [
        { name: "Documentação", href: "#" },
        { name: "Tutoriais", href: "#" },
        { name: "FAQ", href: "#" },
        { name: "Suporte", href: "#" }
      ]
    }
  ];
  
  const socialLinks = [
    { icon: "GitHub", href: "https://github.com/systentando", label: "GitHub" },
    { icon: "Twitter", href: "https://twitter.com/systentando", label: "Twitter" },
    { icon: "LinkedIn", href: "https://linkedin.com/company/systentando", label: "LinkedIn" },
    { icon: "Instagram", href: "https://instagram.com/systentando", label: "Instagram" }
  ];
  
  return (
    <footer 
      style={{
        backgroundColor: colors.dark.background,
        color: 'white',
        padding: '4rem 1rem 2rem'
      }}
    >
      <div 
        style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}
      >
        <div 
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            marginBottom: '3rem'
          }}
        >
          {/* Logo e descrição */}
          <div 
            style={{
              maxWidth: '300px',
              marginBottom: '2rem'
            }}
          >
            <div 
              style={{
                fontWeight: 'bold',
                fontSize: '1.5rem',
                marginBottom: '1rem',
                background: `linear-gradient(90deg, ${colors.primary.main}, ${colors.accent.main})`,
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent'
              }}
            >
              SYSTENTANDO
            </div>
            <p 
              style={{
                color: colors.dark.subtext,
                marginBottom: '1.5rem',
                fontSize: '0.9rem',
                lineHeight: '1.5'
              }}
            >
              Um HUB de desenvolvedores que acredita no poder do empreendedorismo 
              para transformar vidas através de projetos rentáveis e sustentáveis.
            </p>
            <div 
              style={{
                display: 'flex',
                gap: '1rem'
              }}
            >
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  style={{
                    backgroundColor: colors.dark.card,
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: colors.dark.subtext,
                    transition: 'all 0.3s ease'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = colors.primary.main;
                    e.currentTarget.style.color = 'white';
                    e.currentTarget.style.transform = 'translateY(-3px)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = colors.dark.card;
                    e.currentTarget.style.color = colors.dark.subtext;
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          
          {/* Links */}
          {links.map((group, index) => (
            <div 
              key={index}
              style={{
                marginBottom: '2rem',
                minWidth: '160px'
              }}
            >
              <h3 
                style={{
                  fontSize: '1.1rem',
                  fontWeight: 'bold',
                  marginBottom: '1.5rem',
                  color: 'white'
                }}
              >
                {group.title}
              </h3>
              <ul 
                style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0
                }}
              >
                {group.items.map((item, idx) => (
                  <li key={idx} style={{ marginBottom: '0.8rem' }}>
                    <a
                      href={item.href}
                      style={{
                        color: colors.dark.subtext,
                        textDecoration: 'none',
                        fontSize: '0.9rem',
                        transition: 'color 0.3s ease'
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.color = colors.accent.main;
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.color = colors.dark.subtext;
                      }}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          
          {/* Newsletter */}
          <div 
            style={{
              maxWidth: '300px',
              marginBottom: '2rem'
            }}
          >
            <h3 
              style={{
                fontSize: '1.1rem',
                fontWeight: 'bold',
                marginBottom: '1.5rem',
                color: 'white'
              }}
            >
              Fique Atualizado
            </h3>
            <p 
              style={{
                color: colors.dark.subtext,
                marginBottom: '1rem',
                fontSize: '0.9rem'
              }}
            >
              Receba novidades sobre nossos projetos e oportunidades.
            </p>
            <div 
              style={{
                display: 'flex',
                marginBottom: '1rem'
              }}
            >
              <input
                type="email"
                placeholder="Seu e-mail"
                style={{
                  backgroundColor: colors.dark.card,
                  border: `1px solid ${colors.dark.border}`,
                  padding: '0.8rem 1rem',
                  borderRadius: '0.5rem 0 0 0.5rem',
                  color: 'white',
                  fontSize: '0.9rem',
                  flexGrow: 1,
                  outline: 'none'
                }}
              />
              <button
                style={{
                  backgroundColor: colors.accent.main,
                  color: 'white',
                  border: 'none',
                  padding: '0.8rem 1rem',
                  borderRadius: '0 0.5rem 0.5rem 0',
                  fontWeight: 'bold',
                  fontSize: '0.9rem',
                  cursor: 'pointer',
                  transition: 'opacity 0.3s ease'
                }}
                onMouseOver={(e) => e.currentTarget.style.opacity = '0.9'}
                onMouseOut={(e) => e.currentTarget.style.opacity = '1'}
              >
                Assinar
              </button>
            </div>
            <p 
              style={{
                color: colors.dark.subtext,
                fontSize: '0.8rem'
              }}
            >
              Prometemos não enviar spam. Você pode cancelar a qualquer momento.
            </p>
          </div>
        </div>
        
        {/* Divisor */}
        <div 
          style={{
            height: '1px',
            backgroundColor: colors.dark.border,
            marginBottom: '2rem'
          }}
        ></div>
        
        {/* Copyright */}
        <div 
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: '0.9rem'
          }}
        >
          <p style={{ color: colors.dark.subtext, marginBottom: '1rem' }}>
            © {new Date().getFullYear()} Systentando. Todos os direitos reservados.
          </p>
          <div 
            style={{
              display: 'flex',
              gap: '2rem'
            }}
          >
            <a
              href="#"
              style={{
                color: colors.dark.subtext,
                textDecoration: 'none',
                transition: 'color 0.3s ease'
              }}
              onMouseOver={(e) => e.currentTarget.style.color = colors.accent.main}
              onMouseOut={(e) => e.currentTarget.style.color = colors.dark.subtext}
            >
              Termos de Uso
            </a>
            <a
              href="#"
              style={{
                color: colors.dark.subtext,
                textDecoration: 'none',
                transition: 'color 0.3s ease'
              }}
              onMouseOver={(e) => e.currentTarget.style.color = colors.accent.main}
              onMouseOut={(e) => e.currentTarget.style.color = colors.dark.subtext}
            >
              Política de Privacidade
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

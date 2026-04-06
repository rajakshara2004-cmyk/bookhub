import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

// Component: Navbar | 24BCE0020_AKSHARARAJ
const Navbar_24BCE0020 = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/sell', label: 'Sell' },
    { path: '/buy', label: 'Buy' },
    { path: '/rent', label: 'Rent' },
    { path: '/portfolio', label: 'Portfolio' },
  ];

  const navStyle = {
    position: 'fixed',
    top: 0, left: 0, right: 0,
    height: '70px',
    zIndex: 1000,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 40px',
    background: scrolled
      ? 'rgba(10,10,15,0.95)'
      : 'rgba(10,10,15,0.7)',
    backdropFilter: 'blur(20px)',
    borderBottom: scrolled ? '1px solid #2a2a3a' : '1px solid transparent',
    transition: 'all 0.3s ease',
  };

  const logoStyle = {
    fontFamily: "'Space Mono', monospace",
    fontSize: '1.3rem',
    fontWeight: 700,
    color: '#f5c842',
    letterSpacing: '-0.5px',
  };

  const logoSpanStyle = {
    color: '#00e5c8',
  };

  const linksWrapperStyle = {
    display: 'flex',
    gap: '8px',
    alignItems: 'center',
  };

  const getLinkStyle = (path) => ({
    padding: '8px 18px',
    borderRadius: '6px',
    fontSize: '0.9rem',
    fontWeight: 600,
    letterSpacing: '0.5px',
    transition: 'all 0.2s ease',
    color: location.pathname === path ? '#0a0a0f' : '#f0f0f5',
    background: location.pathname === path ? '#f5c842' : 'transparent',
    border: location.pathname === path ? 'none' : '1px solid transparent',
  });

  const hamburgerStyle = {
    display: 'none',
    flexDirection: 'column',
    gap: '5px',
    cursor: 'pointer',
    background: 'none',
    border: 'none',
  };

  return (
    <nav style={navStyle}>
      <div style={logoStyle}>
        Book<span style={logoSpanStyle}>Swap</span>Hub
      </div>
      <div style={linksWrapperStyle}>
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            style={getLinkStyle(link.path)}
            onMouseEnter={(e) => {
              if (location.pathname !== link.path) {
                e.target.style.background = '#1a1a26';
                e.target.style.borderColor = '#2a2a3a';
              }
            }}
            onMouseLeave={(e) => {
              if (location.pathname !== link.path) {
                e.target.style.background = 'transparent';
                e.target.style.borderColor = 'transparent';
              }
            }}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar_24BCE0020;

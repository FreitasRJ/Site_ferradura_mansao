
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Galeria' },
    { path: '/descricao', label: 'Descrição' },
    { path: '/contato', label: 'Contato' },
  ];

  return (
    <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] w-[90%] max-w-lg">
      <div className="glass border border-white/10 rounded-full px-6 py-4 flex items-center justify-around luxury-shadow">
        {navLinks.map((link) => {
          const isActive = location.pathname === link.path;
          return (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm md:text-base font-medium tracking-widest uppercase transition-all duration-300 hover:text-accent ${
                isActive ? 'text-accent' : 'text-white/70'
              }`}
            >
              {link.label}
              {isActive && (
                <span className="block h-0.5 w-full bg-accent mt-1 animate-pulse" />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;

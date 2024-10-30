import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="text-2xl font-bold">Loja Esportiva</div>
      <nav className="space-x-4">
        <Link to="/" className="nav-item">Home</Link>
        <Link to="/produtos" className="nav-item">Produtos</Link>
        <Link to="/contato" className="nav-item">Contato</Link>
        <Link to="/formulario" className="nav-item">Sugestões</Link>
      </nav>
    </header>
  );
};

export default Header;



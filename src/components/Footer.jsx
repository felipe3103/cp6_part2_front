import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white p-4 text-center">
      <p>© 2024 Loja Esportiva. Todos os direitos reservados.</p>
      <p>Felipe Fernandes RM: 554598</p>
      <p>Gustavo Henrique Martins RM: 556956</p>
      <p>Henrique Ignacio Bartalo RM: 555274</p>

      <div className="flex justify-center space-x-4 mt-4">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <FontAwesomeIcon icon={faFacebook} className="text-white text-2xl hover:text-blue-300" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <FontAwesomeIcon icon={faInstagram} className="text-white text-2xl hover:text-pink-300" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          <FontAwesomeIcon icon={faTwitter} className="text-white text-2xl hover:text-blue-400" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;


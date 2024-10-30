// src/components/Modal.jsx
import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null; // Retorna null para não renderizar o modal quando está fechado

  return (
    // Fundo do modal
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      {/* Conteúdo do modal */}
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg mx-4 relative">
        {/* Botão de fechar */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl font-bold"
        >
          ✕
        </button>
        
        {/* Conteúdo do modal */}
        {children}
      </div>
    </div>
  );
};

export default Modal;

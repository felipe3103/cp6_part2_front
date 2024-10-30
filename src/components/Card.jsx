// src/components/Card.jsx
import React, { useState } from 'react';
import Modal from './Modal';

const Card = ({ image, title, description, price }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div className="border border-gray-300 rounded-lg shadow-md overflow-hidden">
      {/* Contêiner de imagem com proporção fixa */}
      <div className="relative w-full h-48">
        <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover" />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-700">{description}</p>
        <p className="text-green-600 font-semibold mt-2">R${price}</p>
        <button
          onClick={openModal}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Ver Detalhes
        </button>
      </div>

      {/* Modal para exibir detalhes do produto */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2 className="text-xl font-bold mb-4">{title}</h2>
        <img src={image} alt={title} className="w-full h-auto object-cover rounded mb-4" />
        <p>{description}</p>
        <p className="font-semibold text-green-600 mt-4">Preço: R${price}</p>
        <button
          onClick={() => alert(`Produto ${title} comprado!`)}
          className="mt-6 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 w-full"
        >
          Comprar
        </button>
      </Modal>
    </div>
  );
};

export default Card;

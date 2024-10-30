// src/pages/FormularioPage.jsx
import React, { useState } from 'react';

const FormularioPage = () => {
  const [nome, setNome] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Obrigado pela sua mensagem, ${nome}!`);
    setNome('');
    setMensagem('');
  };

  return (
    <div className="formulario">
      <h2 className="text-2xl font-bold mb-4">Envie uma Sugestão</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Seu nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          className="formulario-input"
        />
        <textarea
          placeholder="Sua mensagem"
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
          className="formulario-input"
        />
        <button type="submit" className="formulario-button">Enviar</button>
      </form>
    </div>
  );
};

export default FormularioPage;

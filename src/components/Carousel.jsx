import React, { useState } from 'react';
import chuteira from '../assets/images/chuteira.png';
import bolaCampo from '../assets/images/bola_campo.webp';
import bolaFutsal from '../assets/images/bola_futsal.jpg';
import camisaSP from '../assets/images/camiseta_sp.jpeg';
import camisaCorinthians from '../assets/images/camiseta_corinthians.webp';
import BolaDeBasquete from '../assets/images/bola_basquete.jpg';

const Carousel = () => {
  const [index, setIndex] = useState(0);
  const images = [chuteira, bolaCampo, bolaFutsal,camisaSP,camisaCorinthians,BolaDeBasquete];

  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="carousel">
      <img src={images[index]} alt={`Imagem ${index + 1}`} />
      <button onClick={handlePrev} className="carousel-button carousel-button-left">
        Anterior
      </button>
      <button onClick={handleNext} className="carousel-button carousel-button-right">
        Próximo
      </button>
    </div>
  );
};

export default Carousel;

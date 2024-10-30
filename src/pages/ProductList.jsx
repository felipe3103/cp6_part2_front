// src/pages/ProductList.jsx
import React from 'react';
import Card from '../components/Card';
import products from '../data/products';

const ProductList = ({ limit }) => {
  // Limita o número de produtos a serem exibidos, se 'limit' for passado
  const displayedProducts = limit ? products.slice(0, limit) : products;

  return (
    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {displayedProducts.map((product) => (
        <Card
          key={product.id}
          image={product.image}
          title={product.title}
          description={product.description}
          price={product.price}
        />
      ))}
    </div>
  );
};

export default ProductList;

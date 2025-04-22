import React from 'react';
import './ProductList.css';

import { useSelector } from 'react-redux';

const ProductList = () => {
  // Aquí deberías obtener los productos de tu API
  const products = [
    { id: 1, name: 'Minecraft', price: 302, seller: 'Microsoft' },
    { id: 2, name: 'Balatro', price: 400, seller: 'Pepito ventas' },
    { id: 3, name: 'GTA V', price: 196, seller: 'Crazy games' }
  ];

  return (
    <div className="product-list">
      {products.map(product => (
        <div key={product.id} className="product-card">
          <h3>{product.name}</h3>
          <p>Vendido por: {product.seller}</p>
          <p>${product.price} MXN</p>
          <button>Agregar al carrito</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
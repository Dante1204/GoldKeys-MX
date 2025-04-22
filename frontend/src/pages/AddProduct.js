// frontend/src/pages/AddProduct.js
import React, { useState } from 'react';
import axios from 'axios';
import './AddProduct.css';


const AddProduct = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    category: 'Juegos',
    seller: '',
    image: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/products', formData);
      alert('Producto agregado exitosamente!');
      setFormData({
        name: '',
        description: '',
        price: '',
        category: 'Juegos',
        seller: '',
        image: ''
      });
    } catch (err) {
      console.error(err);
      alert('Error al agregar el producto');
    }
  };

  return (
    <div className="add-product">
      <h1>AGREGAR PRODUCTO</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nombre del producto</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Descripción del producto</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Precio del producto (MXN)</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Categoría del producto</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
          >
            <option value="Juegos">Juegos</option>
            <option value="Productividad">Productividad</option>
            <option value="Ofertas">Ofertas</option>
            <option value="Tarjetas">Tarjetas</option>
          </select>
        </div>
        <div className="form-group">
          <label>Vendido por</label>
          <input
            type="text"
            name="seller"
            value={formData.seller}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>URL de la imagen del producto</label>
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">AGREGAR PRODUCTO</button>
      </form>
    </div>
  );
};

export default AddProduct;
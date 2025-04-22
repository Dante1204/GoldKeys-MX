// frontend/src/pages/Cart.js
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../redux/actions/cartActions';
import './Cart.css';


const Cart = () => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const newTotal = cart.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    setTotal(newTotal);
  }, [cart]);

  const handleQuantityChange = (id, quantity) => {
    dispatch(updateQuantity(id, quantity));
  };

  return (
    <div className="cart-page">
      <h1>MI CARRITO</h1>
      {cart.items.map(item => (
        <div key={item._id} className="cart-item">
          <h3>{item.name}</h3>
          <p>Vendido por: {item.seller}</p>
          <p>${item.price} MXN</p>
          <div className="quantity-control">
            <button onClick={() => handleQuantityChange(item._id, item.quantity - 1)}>-</button>
            <span>{item.quantity}</span>
            <button onClick={() => handleQuantityChange(item._id, item.quantity + 1)}>+</button>
          </div>
          <button onClick={() => dispatch(removeFromCart(item._id))}>Eliminar</button>
        </div>
      ))}
      <div className="cart-summary">
        <h2>RESUMEN</h2>
        <div className="total">
          <span>TOTAL</span>
          <span>${total} MXN</span>
        </div>
        <button className="checkout-btn">CONTINUAR CON EL PAGO</button>
      </div>
    </div>
  );
};

export default Cart;
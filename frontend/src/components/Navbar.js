import { Link } from 'react-router-dom';
import './Navbar.css';


const Navbar = () => {
  return (
    <nav>
      <Link to="/">Inicio</Link>
      <Link to="/cart">Carrito</Link>
      <Link to="/add-product">Agregar Producto</Link>
    </nav>
  );
};

export default Navbar;
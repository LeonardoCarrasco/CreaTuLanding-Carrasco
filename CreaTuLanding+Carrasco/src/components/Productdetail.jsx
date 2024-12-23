import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import '../styles/ProductDetail.css';

const ProductDetail = ({ products }) => {
  const { id } = useParams(); 
  const producto = products.find(p => p.id === parseInt(id)); 

  const [cantidad, setcantidad] = useState(1); // Estado para la cantidad

  // Incrementar cantidad
  const increasecantidad = () => {
    setcantidad(cantidad + 1);
  };

  // Decrementar cantidad, asegurando que no baje de 0
  const decreasecantidad = () => {
    if (cantidad > 0) {
      setcantidad(cantidad - 1);
    }
  };

  if (!producto) {
    return (
      <div className="product-detail-container">
        <p>Producto no encontrado. Volver a la lista de productos.</p>
        <Link to="/productos" className="product-detail-back-button">
          Volver
        </Link>
      </div>
    );
  }

  return (
    <div className="product-detail-container">
      <div className="product-detail-header">
        <Link to="/productos" className="product-detail-back-button">
          Volver
        </Link>
        
      </div>
      <div className="product-detail-content">
        <img src={producto.imagen} alt={producto.nombre} className="product-detail-image" />
        <div className="product-detail-info">
          <h1 className="product-detail-title">{producto.nombre}</h1>
          <p className="product-detail-description">{producto.descripcion_larga}</p>
          <p className="product-detail-price">${producto.precio}</p>
          <div className="product-detail-cantidad">
            <button 
              className="cantidad-button" 
              onClick={decreasecantidad}
            >
              -
            </button>
            <span className="cantidad-display">{cantidad}</span>
            <button 
              className="cantidad-button" 
              onClick={increasecantidad}
            >
              +
            </button>
          </div>

          <button 
            className="product-detail-add-button"
          >
            Agregar {cantidad} al carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;


import { Link } from "react-router-dom";
const ProductCard = ({ product, onselectedProduct }) => {
    return (
        <div style={{
            border: '1px solid #ddd',
            borderRadius: '8px',
            width: '250px',
            padding: '16px',
            textAlign: 'center',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
        }}>
            <img 
                src={product.imagen} 
                alt={product.descripcion} 
                style={{
                    width: '100%',
                    height: '260px',
                    objectFit: 'contain',
                    borderRadius: '8px'
                }}
            />
            <h2 style={{ margin: '16px 0', fontSize: '18px', color: '#333' }}>
                {product.nombre}
            </h2>
            <h3 style={{ margin: '16px 0', fontSize: '15px', color: '#333', fontWeight: 'lighter' }}>
                {product.descripcion_corta}
            </h3>
            <p style={{ fontSize: '16px', fontWeight: 'bold', color: '#007BFF' }}>
                ${product.precio}
            </p>

            <div>
                <Link to={`/productos/${product.id}`}>
                    <button>
                    +info
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default ProductCard;

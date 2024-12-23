import '../styles/bienvenido.css';
import { Link } from 'react-router-dom';

const Bienvenido = () => {
    console.log("carga")
     return (
    <div className="welcome-container">
      <div className="welcome-bg"></div>
      <div className="welcome-content">
        <h1>¡Bienvenido a Brankka!</h1>
        <p>Descubre las mejores bebidas alcohólicas, seleccionadas especialmente para ti.</p>

        <Link to="/productos" className="welcome-button">
          <button className="shop-now-btn" >Compra ahora</button>
        </Link>
      </div>
    </div>
  );
};

export default Bienvenido;

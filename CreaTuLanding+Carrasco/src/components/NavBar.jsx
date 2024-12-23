import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

const NavBar = ( { onCartClick }) => {
    return (
        <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', backgroundColor: '#f8f9fa', fontSize:'1.2rem' }}>
            <div>
                <Link to="/"><h1 style={{color:'black'}}>BRANKKA</h1> </Link>
            </div>
            <ul style={{ display: 'flex', listStyle: 'none', gap: '1rem' }}>
                <Link to="/productos"><li>Productos</li></Link>
                <Link to="/contacto"><li>Contacto</li></Link>
            </ul>
            <CartWidget onClick={onCartClick}/>
        </nav>
    );
};

export default NavBar;

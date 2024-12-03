import CartWidget from './CartWidget';

const NavBar = ( {onCartClick}) => {
    return (
        <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', backgroundColor: '#f8f9fa', fontSize:'1.2rem' }}>
            <div>
                <h1 style={{color:'black'}}>BRANKKA</h1>
            </div>
            <ul style={{ display: 'flex', listStyle: 'none', gap: '1rem' }}>
                <li><a href="#home">Inicio</a></li>
                <li><a href="#products">Productos</a></li>
                <li><a href="#contact">Contacto</a></li>
            </ul>
            <CartWidget onClick={onCartClick}/>
        </nav>
    );
};

export default NavBar;

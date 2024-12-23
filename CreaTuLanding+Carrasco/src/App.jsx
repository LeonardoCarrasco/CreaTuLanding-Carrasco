import NavBar from '../src/components/NavBar';
import Contact from './components/Contact';
import { useState } from 'react';
import Bienvenido from './components/bienvenido';
import ProductItems from './components/ProductItems';
import ProductDetail from './components/Productdetail';
import products from './data/productos.json';

import { HashRouter as BrowserRouter, Routes, Route } from 'react-router-dom';
const App = () => {

  const [showItems, setShowItems] = useState(false); 
 
   // Maneja el clic en el botón del carrito
   const toggleItemList = () => {
    setShowItems(!showItems);
   }

    return (
        <BrowserRouter>
                <NavBar onCartClick={toggleItemList} />
                <Routes>
                    <Route path="/" element={<Bienvenido />} />
                    <Route path="/productos" element={<ProductItems />} />
                    <Route path="/productos/:id" element={<ProductDetail products={products}/>} />
                    <Route path="/contacto" element={<Contact />} />
                </Routes>
                <footer style={{padding:"1rem", textAlign:"center", fontSize:"1.2rem"}}>Desarrollado por Leonardo Carrasco &copy;2024</footer>   
        </BrowserRouter>
    );
};

export default App;


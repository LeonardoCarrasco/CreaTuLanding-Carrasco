import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Contact from './components/Contact';
import ProductItems from './components/ProductItems';
import { useState } from 'react';

const App = () => {

  const [showItems, setShowItems] = useState(false); 

   // Maneja el clic en el botón del carrito
   const toggleItemList = () => {
    setShowItems(!showItems);
};
    return (
        <div>
            <NavBar onCartClick={toggleItemList} />
            {showItems && <ItemListContainer saludo= "Aqui estara el listado del carrito! (En desarrollo)"/>}
            <ProductItems />
            <Contact />
        </div>
    );
};

export default App;


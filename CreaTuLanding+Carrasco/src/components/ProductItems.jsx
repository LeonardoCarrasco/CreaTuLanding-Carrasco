import ProductCard from "./ProductCard";
import productos from "../data/productos.json";
import { Link } from "react-router-dom";
const ProductItems = ( ) =>{
    return(
        <>
        <h3 style={{textAlign:"center"}}>Listado de productos:</h3>

            <div style={{display:"flex", gap:"2rem", justifyContent:"center", alignItems:"center", flexWrap:"wrap"}}>
                {productos.map((producto) => (
                    <Link to={`/productos/${producto.id}`} key={producto.id}>
                        <ProductCard 
                        key={producto.id}
                        product={producto} 
                        />
                  </Link>

                ))}
            </div>
        </>
    )
    
}

export default ProductItems;
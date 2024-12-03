import ProductCard from "./ProductCard";
import Vino from "../assets/botelladevinoelenemigo.jpg"
import Fernet from "../assets/fernetbranca.jpg"
import Sky from "../assets/botellasky.jpg"
import Gancia from "../assets/gancia.jpg"
import Whisky from "../assets/whisky.jpeg"
const ProductItems = () =>{
    return(
        <>
        <h3 style={{textAlign:"center"}}>Listado de productos:</h3>

            <div style={{display:"flex", gap:"2rem", justifyContent:"center"}}>
                <ProductCard 
                    image={Vino}
                    description="botella de vino 'El enemigo'"
                    price="17000"
                />

                <ProductCard 
                    image={Fernet}
                    description='Fernet Branca 750ml'
                    price='9000'
                />

                <ProductCard 
                    image={Sky}
                    description='Vodka skyy coco botella 750cc'
                    price='9000'
                />

                <ProductCard 
                    image={Gancia}
                    description='Botella gancia 1 litro'
                    price='9000'
                />

                 <ProductCard 
                    image={Whisky}
                    description='Johnnie Walker Blue label Whisky 1 litro'
                    price='9000'
                />
            </div>
        </>
    )
    
}

export default ProductItems;
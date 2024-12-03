
const ProductCard = (props) => {
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
                src={props.image} 
                alt={props.description} 
                style={{
                    width: '100%',
                    height: '260px',
                    objectFit: 'contain',
                    borderRadius: '8px'
                }}
            />
            <h3 style={{ margin: '16px 0', fontSize: '15px', color: '#333' }}>
                {props.description}
            </h3>
            <p style={{ fontSize: '16px', fontWeight: 'bold', color: '#007BFF' }}>
                ${props.price}
            </p>
        </div>
    );
};

export default ProductCard;

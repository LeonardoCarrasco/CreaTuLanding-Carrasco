

const CartWidget = ({ onClick }) => {
    return (
        <button 
            onClick={onClick} 
            style={{
                backgroundColor: 'white',
                border: 'none',
                borderRadius: '50%',
                padding: '0.5rem',
                cursor: 'pointer',
                height: '60px',
                fontSize:"1.5rem"
            }}
        >
            🛒
        </button>
    );
};

export default CartWidget;


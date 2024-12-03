
const Contact = () => {
    return (
        <div style={{ padding: '2rem', textAlign: 'center', maxWidth: '600px', margin: 'auto' }}>
            <h2 style={{ marginBottom: '1rem', color: '#333' }}>Contactanos!</h2>
            
            <div style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'center', gap: '2rem' }}>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                    <img 
                        src="https://cdn-icons-png.flaticon.com/512/174/174848.png" 
                        alt="Facebook" 
                        style={{ width: '40px', height: '40px' }} 
                    />
                </a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                    <img 
                        src="https://cdn-icons-png.flaticon.com/512/733/733579.png" 
                        alt="Twitter" 
                        style={{ width: '40px', height: '40px' }} 
                    />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <img 
                        src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" 
                        alt="Instagram" 
                        style={{ width: '40px', height: '40px' }} 
                    />
                </a>
            </div>
            
            <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <input 
                    type="text" 
                    placeholder="Tu nombre" 
                    style={{
                        padding: '0.5rem',
                        borderRadius: '4px',
                        border: '1px solid #ccc',
                        fontSize: '16px'
                    }}
                />
                <input 
                    type="email" 
                    placeholder="Tu email" 
                    style={{
                        padding: '0.5rem',
                        borderRadius: '4px',
                        border: '1px solid #ccc',
                        fontSize: '16px'
                    }}
                />
                <textarea 
                    placeholder="Mensaje..." 
                    rows="4" 
                    style={{
                        padding: '0.5rem',
                        borderRadius: '4px',
                        border: '1px solid #ccc',
                        fontSize: '16px'
                    }}
                ></textarea>
                <button 
                    type="submit" 
                    style={{
                        padding: '0.75rem',
                        backgroundColor: '#007BFF',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        fontSize: '16px',
                        cursor: 'pointer'
                    }}
                >
                    Enivar
                </button>
            </form>
        </div>
    );
};

export default Contact;

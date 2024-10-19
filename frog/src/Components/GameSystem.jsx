import React from 'react';

const GameSystem = () => {
  const systems = [
    {
      name: 'Equipment system',
      images: ['system-1.png']
    },
    {
      name: 'Material system',
      images: ['system-2.png']
    },
    {
      name: 'Item system',
      images: ['system-3.png']
    },
    {
      name: 'Fashion system',
      images: ['system-4.png']
    }
  ];

  return (
    <div style={{ 
      maxWidth: '1000px', 
      margin: '0 auto', 
      padding: '20px', 
      backgroundColor: '#f0e6d2', 
      borderRadius: '20px',
      border: 'solid 3px #3b321d'
    }}>
      <h2 style={{ 
        textAlign: 'center', 
        color: '#5d4037', 
        marginBottom: '20px', 
        fontSize: '24px',
        fontWeight: 'bold',
        border: 'solid 1px gray',
        padding: '10px 0',
        borderRadius: '10px',
      }}>
        Game System of Travel Frog
      </h2>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
        gap: '20px' 
      }}>
        {systems.map((system, index) => (
          <div key={index} style={{ 
            backgroundColor: '#d7ccc8', 
            borderRadius: '8px', 
            padding: '15px', 
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            border: 'solid 1px brown',
          }}>
            <h3 style={{ 
              color: '#4e342e', 
              marginBottom: '10px', 
              fontSize: '18px',
              textAlign: 'center'
            }}>
              {system.name}
            </h3>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-around', 
              alignItems: 'center', 
              flexWrap: 'wrap',
              padding: '20px 0',
              border: 'solid 2px #3b321d',
              borderRadius: '10px',

            }}>
              {system.images.map((image, imageIndex) => (
                <img 
                  key={imageIndex} 
                  src={`${process.env.PUBLIC_URL}/images/${image}`} 
                  alt={`${system.name} item ${imageIndex + 1}`} 
                  style={{ width: '150px', height: '40px', margin: '5px' }} 
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameSystem;

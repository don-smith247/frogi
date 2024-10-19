import React, { useState } from 'react';
import './Flag.css';

const Flag = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const flags = [
    { code: 'us', name: 'United States' },
    { code: 'gb', name: 'United Kingdom' },
    { code: 'fr', name: 'France' },
    { code: 'de', name: 'Germany' },
    { code: 'it', name: 'Italy' },
    { code: 'es', name: 'Spain' },
    { code: 'pt', name: 'Portugal' },
    { code: 'ru', name: 'Russia' },
    { code: 'jp', name: 'Japan' },
    { code: 'kr', name: 'South Korea' },
    { code: 'cn', name: 'China' },
    { code: 'in', name: 'India' },
  ];

  const filteredFlags = flags.filter(flag =>
    flag.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <div className="flag-grid">
        {filteredFlags.map((flag) => (
          <div key={flag.code} className="flag-card">
            <img
              src={`https://flagcdn.com/w320/${flag.code}.png`}
              alt={`${flag.name} flag`}
              className="flag-image"
              loading="lazy"
            />
            <div className="flag-name">{flag.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Flag;
import React from 'react';

function App() {
    
    const Fruits = [
        { name: 'Apple' },
        { name: 'Apricot' },
        { name: 'Honeyberry' },
        { name: 'Papaya' },
        { name: 'Jambul' },
        { name: 'Plum' },
        { name: 'Lemon' },
        { name: 'Pomelo' }
    ];

    return (
        <div>
            {Fruits.map(item => (
                <li key = "{item.name}">{item.name}</li>
            ))}
        </div>
    );
}

export default App;

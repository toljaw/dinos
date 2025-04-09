import React, { useEffect, useState } from 'react';

function DinoList() {
    const [dinos, setDinos] = useState([]);

    useEffect(() => {
        // API-Route ggf. anpassen
        fetch('/api/dino')
            .then((response) => response.json())
            .then((data) => setDinos(data))
            .catch((error) => console.error('Fehler beim Laden:', error));
    }, []);

    return (
        <div>
            <h2>Dino-Liste</h2>
            <ul>
                {dinos.map((dino) => (
                    <li key={dino.id}>
                        {dino.name} – {dino.description}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default DinoList;
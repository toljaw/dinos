const API_URL = 'http://localhost:5027/api/dinos';

// Funktion zum Abrufen der Dino Liste
export const fetchDinos = async () => {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error('Fehler beim Abrufen der Dino Liste');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Fehler: ', error);
        throw error;
    }
};

// Funktion zum Erstellen eines neuen Dinosauriers
export const createDino = async (newDino) => {
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newDino),
        });

        if (!response.ok) {
            throw new Error('Fehler beim Erstellen des Dinosauriers');
        }

        const data = await response.json();
        return data; // Gibt den erstellten Dino zurück
    } catch (error) {
        console.error('Fehler:', error);
        throw new Error(`Create Error: ${error.message}`);
    }
};
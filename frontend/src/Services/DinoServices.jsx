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
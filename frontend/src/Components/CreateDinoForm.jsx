import React, { useState } from 'react';
import {createDino} from "../Services/DinoServices.jsx";

const CreateDinoForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        erstesAufkommen: "",
        koerperLaenge: "",
        koerperHoehe: "",
        schaedelLaenge: "",
        gewicht: "",
        spiel: "dinos",
    });

    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Client-side validation
        if (!formData.name || !formData.erstesAufkommen || !formData.koerperLaenge || !formData.koerperHoehe || !formData.schaedelLaenge || !formData.gewicht) {
            setError('Bitte füllen Sie alle Felder aus.');
            return;
        }

        setError('');
        setSuccessMessage('');

        try {
            // Create Dino by calling the createDino function from DinoServices
            const newDino = {
                Name: formData.name,
                ErstesAufkommen: parseFloat(formData.erstesAufkommen),
                KoerperLaenge: parseFloat(formData.koerperLaenge),
                KoerperHoehe: parseFloat(formData.koerperHoehe),
                SchaedelLaenge: parseFloat(formData.schaedelLaenge),
                Gewicht: parseFloat(formData.gewicht),
                Spiel: formData.spiel,
            };

            const createdDino = await createDino(newDino);
            setSuccessMessage(`Dinosaurier "${createdDino.Name}" erfolgreich erstellt!`);

            // Clear the form
            setFormData({
                name: '',
                erstesAufkommen: '',
                koerperLaenge: '',
                koerperHoehe: '',
                schaedelLaenge: '',
                gewicht: '',
                spiel: 'dinos',
            });
        } catch (error) {
            setError('Fehler beim Erstellen des Dinosauriers.');
        }
    };

    return (
        <div>
            <h2>Neuen Dinosaurier erstellen</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="erstesAufkommen">Erstes Aufkommen (in Mio. Jahren):</label>
                    <input
                        type="number"
                        id="erstesAufkommen"
                        name="erstesAufkommen"
                        value={formData.erstesAufkommen}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="koerperLaenge">Körperlänge (in m):</label>
                    <input
                        type="number"
                        id="koerperLaenge"
                        name="koerperLaenge"
                        value={formData.koerperLaenge}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="koerperHoehe">Körperhöhe (in m):</label>
                    <input
                        type="number"
                        id="koerperHoehe"
                        name="koerperHoehe"
                        value={formData.koerperHoehe}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="schaedelLaenge">Schädellänge (in m):</label>
                    <input
                        type="number"
                        id="schaedelLaenge"
                        name="schaedelLaenge"
                        value={formData.schaedelLaenge}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="gewicht">Gewicht (in kg):</label>
                    <input
                        type="number"
                        id="gewicht"
                        name="gewicht"
                        value={formData.gewicht}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="spiel">Spiel:</label>
                    <input
                        type="text"
                        id="spiel"
                        name="spiel"
                        value={formData.spiel}
                        onChange={handleChange}
                    />
                </div>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
                <button type="submit">Erstellen</button>
            </form>
        </div>
    );
};

export default CreateDinoForm;
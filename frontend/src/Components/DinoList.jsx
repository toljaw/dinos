import React, { useEffect, useState } from 'react';
import {fetchDinos} from "../Services/DinoServices.jsx";

const DinoList = () => {
    const [dinos, setDinos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadData = async () => {
            try {
                const data = await fetchDinos();
                setDinos(data);
            } catch (error) {
                setError('Fehler beim Laden der Daten');
            } finally {
                setLoading(false);
            }
        };

        loadData();
    }, []);

    // Ladeanzeige
    if (loading) return <div>Loading...</div>;

    // Fehleranzeige
    if (error) return <div>{error}</div>;

    // Anzeige der Daten in einer Tabelle
    return (
        <div>
            <h2>Dino Liste</h2>
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Erstes Aufkommen</th>
                    <th>Körper Länge</th>
                    <th>Körper Höhe</th>
                    <th>Schädel Länge</th>
                    <th>Gewicht</th>
                </tr>
                </thead>
                <tbody>
                {dinos.map((dino) => (
                    <tr key={dino.id}>
                        <td>{dino.name}</td>
                        <td>{dino.erstesAufkommen}</td>
                        <td>{dino.koerperLaenge}</td>
                        <td>{dino.koerperHoehe}</td>
                        <td>{dino.schaedelLaenge}</td>
                        <td>{dino.gewicht}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};
export default DinoList;
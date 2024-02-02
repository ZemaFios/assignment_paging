'use client';
import { useEffect, useState } from 'react';
import styles from './clientComponent.module.css';
import DebugJson from '../debugJson/debugJson';

const ClientComponent = () => {

    const [data, setData] = useState([]); // Vi sætter data state til at være et tomt array som udgangspunkt.

    // Hook der kaldes når "html"´en er klar.
    useEffect(() => {

        // Vi opretter en "async" funktion og udnytter dermed "await" til vores fetch.
        const fetchData = async () => {

            // Vi fetcher fra vores endpoint.
            const response = await fetch(`http://localhost:3000/api/authors`);

            // Vi omdanner vores response fra tekst til json.
            const result = await response.json();

            // Vi opdatere data state, ved hjælp af setData() useState hook´en.
            setData(result);

        }

        // Vi kalder fetch data funktionen.
        fetchData();

    }, []);

    // Vores Template
    return (
        
        <div className={styles.container}>

            <div className={styles.header}>
                <h1>Client Component</h1>
                <p>Fetching Data</p>
            </div>

            {/* Vi udskriver indholdet af data */}
            {data.map((item, index) => (
                <DebugJson key={index} content={item.author} /> // Bemærk at vi skriver item.author, vi kunne vælge at skrive hele objektet ud med item 
            ))}

        </div>
    )
};
export default ClientComponent
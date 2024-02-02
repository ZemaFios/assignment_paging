'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import SearchField from '../searchField/searchField';
import SearchResults from '../searchResult/searchResults';
import styles from './imageSearch.module.css';
import { useEffect, useState } from 'react';
import Link from 'next/link';


const ImageSearch = () => {
    
    // Navigation Hooks
    const pathname = usePathname();
    const searchParams = useSearchParams();

    // States
    const [result, setResult] = useState([])
    const [totalPages, setTotalPages] = useState(0);

    // Variables
    const currentPage = Number(searchParams.get('page')) || 1;

    // Create url
    // Modtager sideTallet og afleverer en ny "page" url
    const createUrl = (pageNumber) => {

        const params = new URLSearchParams(searchParams);
        params.set('page', pageNumber.toString());

        return `${pathname}?${params.toString()}`;

    }

    // Deaktiver Next/previous knapper afhægig af siden vi er på.
    const prevDeactivateClass = (currentPage <= 1) ? styles.deactivate : null;
    const nextDeactivateClass = (currentPage === totalPages || totalPages === 0) ? styles.deactivate : null;

    // UseEffect der "lytter" på ændringer i "searchParams"
    useEffect( () => {

            // Får fat i data fra url´en.
            const params = new URLSearchParams(searchParams);

            // Hvis vi ikke har en "page" antager vi at siden er 1.
            params.set('page', params.get('page') || 1)
          
            // Fetcher fra endpoint
            fetch('http://localhost:3000/api/images?' + new URLSearchParams(params))
            .then(res => res.json())
            .then(data => {

                // Hvis der ingen metadata er tilstede er resultatet tomt.
                if(data[0].metadata.length > 0)
                {
                    let meta = data[0].metadata[0];

                    // Sætter det totale antal sider
                    setTotalPages(Math.ceil(meta.total / meta.itemsPrPage))
    
                    setResult(data[0])

                } else {
                    setResult([])
                }
               
    
            })
        
    }, [searchParams])

    return (
        <div className={styles.container}>

            <div>
                <h2>Side: {currentPage}</h2>
                <Link href={createUrl(currentPage - 1)} className={prevDeactivateClass}>PREV</Link>
                <Link href={createUrl(currentPage + 1)} className={nextDeactivateClass}>NEXT</Link>
            </div>

            <SearchField></SearchField>
            <SearchResults results={result}></SearchResults>


        </div>
    )

};
export default ImageSearch
'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import SearchField from '../searchField/searchField';
import styles from './imageSearch.module.css';
import { useEffect, useState } from 'react';
import SearchResults from '../searchResult/searchResults';
import Link from 'next/link';


const ImageSearch = () => {
    
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const [result, setResult] = useState([])
    
    const [total, setTotal] = useState(0);

    const currentPage = Number(searchParams.get('page')) || 1;

    const createUrl = (pageNumber) => {

        const params = new URLSearchParams(searchParams);
        params.set('page', pageNumber.toString());

        return `${pathname}?${params.toString()}`;

    }

    const prevDeactivateClass = (currentPage <= 1) ? styles.deactivate : null;
    const nextDeactivateClass = (currentPage === total || total === 0) ? styles.deactivate : null;

    useEffect( () => {

            const params = new URLSearchParams(searchParams);
            params.set('page', params.get('page') || 1)
          
            fetch('http://localhost:3000/api/images?' + new URLSearchParams(params))
            .then(res => res.json())
            .then(data => {

              
                let meta = data[0].metadata[0];
                setTotal(Math.ceil(meta.total / meta.itemsPrPage))

                setResult(data[0])
    
            })
        
    }, [searchParams])

    return (
        <div className={styles.container}>

            <div>
                <h2>page: {currentPage}</h2>
                <Link href={createUrl(currentPage - 1)} className={prevDeactivateClass}>PREV</Link>
                <Link href={createUrl(currentPage + 1)} className={nextDeactivateClass}>NEXT</Link>
            </div>

            <SearchField></SearchField>
            <SearchResults results={result}></SearchResults>


        </div>
    )

};
export default ImageSearch
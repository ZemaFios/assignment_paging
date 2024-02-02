'use client';
import { useDebouncedCallback } from 'use-debounce';
import styles from './searchField.module.css';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useRef } from 'react';

const SearchField = () => {

    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const inputRef = useRef(null)
    const params = new URLSearchParams(searchParams);

    
    const onChangeHandler = useDebouncedCallback((e) => {

        let searchterm = e.target.value;

        const params = new URLSearchParams(searchParams);

        if(searchterm) {
            params.set('searchterm', searchterm);
        } else {
            params.delete('searchterm')
            params.delete('page')
        }

       
        replace(`${pathname}?${params.toString()}`);

    }, 300) 

    return (
        <div className={styles.container}>
            <input type="text" ref={inputRef} placeholder="Search" onChange={onChangeHandler} defaultValue={params.get('searchterm')}/>
        </div>
    )
};


export default SearchField
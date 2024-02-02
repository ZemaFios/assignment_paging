import styles from './searchResults.module.css';

const SearchResults = ({results}) => {
  
    const resultItems = results.data;

    console.log('resultItems', results)

    return (

        <div className={styles.container}>
            {
                resultItems?.map( (item, index) => {

                    return <div className={styles.item} key={item._id}>
                        {item.author}
                    </div>

                })
            }
        </div>
    )
};
export default SearchResults
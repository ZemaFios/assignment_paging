import styles from './searchResults.module.css';

const SearchResults = ({results}) => {
  
    const resultItems = results.data;

    return (

        <div className={styles.container}>
            {
                resultItems?.map( (item, index) => {

                    return <div className={styles.item} key={item._id}>
                        <h3>{item.author}</h3>
                        <p>Gallery: {item.gallery}</p>
                        <p>Camera Model: {item.meta.image.Model}</p>
                        <hr/>
                    </div>

                })
            }
        </div>
    )
};
export default SearchResults
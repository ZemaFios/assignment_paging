import Link from 'next/link';
import styles from './searchResults.module.css';

const SearchResults = ({ results }) => {
  const resultItems = results.data;

  return (
    <div className={styles.container}>
      {resultItems?.map((item, index) => {
        return (
          <div className={styles.item} key={item._id}>
            <h3>
              <Link href={`/author/${item.author}`}>{item.author}</Link>
            </h3>
            <p>
              Gallery: <Link href={`/gallery/${item.gallery}`}>{item.gallery}</Link>
            </p>
            <p>Camera Model: {item.meta.image.Model}</p>
            <hr />
          </div>
        );
      })}
    </div>
  );
};
export default SearchResults;

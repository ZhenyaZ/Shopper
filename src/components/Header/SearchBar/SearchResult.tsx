import React from 'react';
import Product from '../../../types/Products';
import styles from '../Header.module.css';
import { useNavigate } from 'react-router-dom';
interface SearchResultProps {
  products: Product[];
}
function SearchResult(props: SearchResultProps) {
  const navigate = useNavigate();
  
  return (
    <div className={styles['search-result']}>
      {props.products.length !== 0 ? (
        props.products.map((product) => {
          return (
            <div
              key={product._id}
              className={styles['search-result__item']}
              onClick={() => navigate(`/product/${product._id}`, { state: { product: product } })}>
              {product.title}
            </div>
          );
        })
      ) : (
        <span></span>
      )}
    </div>
  );
}

export default SearchResult;

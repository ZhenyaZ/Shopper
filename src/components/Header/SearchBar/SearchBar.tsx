import React from 'react';
import SearchResult from './SearchResult';
import Product from '../../../types/Products';
import styles from '../Header.module.css';
interface SearchBarProps {
  products: Product[];
}

function SearchBar(props: SearchBarProps) {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [filteredProducts, setFilteredProducts] = React.useState([] as Product[]);
  const onSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
    setFilteredProducts(
      props.products.filter((product) => {
        return product.title.toLowerCase().includes(searchQuery.toLowerCase());
      }),
    );
  };
  return (
    <div className={styles['header-search']}>
      <input type="search" placeholder="Search items" value={searchQuery} onChange={(e) => onSearch(e)} />
      {filteredProducts.length !== 0 && searchQuery ? <SearchResult products={filteredProducts} /> : <span></span>}
    </div>
  );
}

export default SearchBar;

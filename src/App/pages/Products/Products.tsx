import React from 'react';

import loaderL from '@assets/img/LoaderL.svg';
import Items from '@components/Items';
import axios from 'axios';
import { itemType } from 'src/App/App';

import Search from '../Products/components/Search';
import Counter from './components/Counter';
import Filter from './components/Filter';
import styles from './Products.module.scss';

const Products = () => {
  const [items, setItems] = React.useState<itemType[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    const apiUrl = 'https://fakestoreapi.com/products';
    setIsLoading(true);
    axios.get(apiUrl).then((resp) => {
      setItems(resp.data);
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      {isLoading ? (
        <img className={styles.loader} src={loaderL} alt="Loader" />
      ) : (
        <>
          <div className={styles.promo}>
            <p>Products</p>
            <span>
              We display products based on the latest products we have, if you
              want to see our old products please enter the name of the item
            </span>
          </div>

          <div className={styles.options}>
            <Search />
            <Filter />
          </div>

          <div className={styles.title}>
            <p>Total Product</p>
            <Counter count={items.length} />
          </div>

          <Items items={items} />
        </>
      )}
    </>
  );
};

export default Products;

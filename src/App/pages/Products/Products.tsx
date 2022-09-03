import React from 'react';

import loaderL from '@assets/img/LoaderL.svg';
import Items from '@components/Items';
import { observer } from 'mobx-react-lite';

import { productsStore } from '../../../store/ProductsStore';
import Search from '../Products/components/Search';
import Counter from './components/Counter';
import Filter from './components/Filter';
import styles from './Products.module.scss';

const Products = () => {
  const { isLoading, products } = productsStore;

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
            <Counter count={products.length} />
          </div>

          <Items items={products} />
        </>
      )}
    </>
  );
};

export default observer(Products);

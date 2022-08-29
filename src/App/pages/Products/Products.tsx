import * as React from 'react';

import Items from '@components/Items/Items';

import { ItemsContext } from '../../App';
import Search from '../Products/components/Search/Search';
import Counter from './components/Counter/Counter';
import Filter from './components/Filter/Filter';
import styles from './Products.module.scss';

const Products = ({}) => {
  const { items } = React.useContext(ItemsContext);

  return (
    <>
      <div className={styles.promo}>
        <p>Products</p>
        <span>
          We display products based on the latest products we have, if you want
          to see our old products please enter the name of the item
        </span>
      </div>

      <div className={styles.options}>
        <Search />
        <Filter />
      </div>

      <div className={styles.title}>
        <p>Total Product</p>
        <Counter />
      </div>

      <Items items={items} />
    </>
  );
};

export default Products;

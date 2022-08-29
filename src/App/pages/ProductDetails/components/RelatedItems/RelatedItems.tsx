import React from 'react';

import Items from '@components/Items/Items';

import { ProductContext } from '../../ProductDetails';
import styles from './RelatedItems.module.scss';

const RelatedItems = () => {
  const { categoryItems } = React.useContext(ProductContext);

  return (
    <div className={styles.items}>
      <p>Related Items</p>
      <Items items={categoryItems} />
    </div>
  );
};

export default RelatedItems;

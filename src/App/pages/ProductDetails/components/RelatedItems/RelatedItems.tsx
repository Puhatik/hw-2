import React from 'react';

import Items from '@components/Items';
import { observer } from 'mobx-react-lite';

import { categoryStore } from '../../../../../store/CategoryStore';
import styles from './RelatedItems.module.scss';

type RelatedItemsProps = {
  category: string;
};

const RelatedItems: React.FC<RelatedItemsProps> = ({ category }) => {
  const { products, setCategory } = categoryStore;

  console.log(category, products);

  React.useEffect(() => {
    setCategory(category);
    console.log('succses');
  }, []);

  return (
    <div className={styles.items}>
      <p>Related Items</p>
      <Items items={products} />
    </div>
  );
};

export default observer(RelatedItems);

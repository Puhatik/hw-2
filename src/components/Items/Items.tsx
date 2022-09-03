import * as React from 'react';

import Card from '@components/Card/Card';
import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';
import { ItemTypeModel } from 'src/store/models/Products/ProductItem';

import styles from './Items.module.scss';

type ItemsProps = {
  items: ItemTypeModel[];
};

const Items: React.FC<ItemsProps> = ({ items }) => {
  return (
    <div className={styles.items}>
      {items.map((item: ItemTypeModel) => (
        <Link key={item.id} to={`/products/${item.id}`}>
          <Card
            key={item.id}
            image={item.image}
            title={item.title}
            category={item.category}
            price={item.price}
          />
        </Link>
      ))}
    </div>
  );
};

export default observer(Items);

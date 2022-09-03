import React from 'react';

import Card from '@components/Card';
import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';

import styles from './Items.module.scss';

type ItemsProps = {
  items: any[];
};

const Items: React.FC<ItemsProps> = ({ items }) => {
  return (
    <div className={styles.items}>
      {items.map((item) => (
        <Link key={item.id} to={`products/${item.id}`}>
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

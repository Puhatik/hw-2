import React from 'react';

import Button, { ButtonColor } from '@components/Button';

import { ProductContext } from '../../ProductDetails';
import styles from './CardDetail.module.scss';

const CardDetail = () => {
  const { item } = React.useContext(ProductContext);

  return (
    <div className={styles.card}>
      <img src={item.image} alt="itemImg" />
      <div className={styles.card_details}>
        <h1>{item.title}</h1>
        <span>{item.description}</span>
        <p className={styles.card_details_price}>${item.price}</p>
        <div className={styles.card_details_buttons}>
          <Button color={ButtonColor.primary}>Buy now</Button>
          <Button color={ButtonColor.secondary}>Add to Chart</Button>
        </div>
      </div>
    </div>
  );
};

export default React.memo(CardDetail);

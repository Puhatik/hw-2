import React from 'react';

import Button, { ButtonColor } from '@components/Button';
import { observer } from 'mobx-react-lite';

import { StoreContext } from '../../ProductDetails';
import styles from './CardDetail.module.scss';

const CardDetail = () => {
  const { productDetailsStore } = React.useContext(StoreContext);

  return (
    <div className={styles.card}>
      <img src={productDetailsStore.product.image} alt="itemImg" />
      <div className={styles.card_details}>
        <h1>{productDetailsStore.product.title}</h1>
        <span>{productDetailsStore.product.description}</span>
        <p className={styles.card_details_price}>
          ${productDetailsStore.product.price}
        </p>
        <div className={styles.card_details_buttons}>
          <Button color={ButtonColor.primary}>Buy now</Button>
          <Button color={ButtonColor.secondary}>Add to Chart</Button>
        </div>
      </div>
    </div>
  );
};

export default observer(CardDetail);

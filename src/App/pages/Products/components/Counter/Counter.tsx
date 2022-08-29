import React from 'react';

import { ItemsContext } from '../../../../App';
import styles from './Counter.module.scss';

const Counter = () => {
  const { items } = React.useContext(ItemsContext);

  return <button className={styles.counter}>{items.length}</button>;
};

export default Counter;

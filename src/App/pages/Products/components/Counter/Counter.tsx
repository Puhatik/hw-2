import React from 'react';

import styles from './Counter.module.scss';

type CounterProps = {
  count: number;
};

const Counter: React.FC<CounterProps> = ({ count }) => {
  return <button className={styles.counter}>{count}</button>;
};

export default React.memo(Counter);

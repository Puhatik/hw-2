import React from 'react';

import filterSvg from '@assets/img/filter.svg';

import styles from './Filter.module.scss';

const Filter = () => {
  return (
    <button className={styles.filter}>
      <img src={filterSvg} alt="filterImg" />
      Filter
    </button>
  );
};

export default React.memo(Filter);

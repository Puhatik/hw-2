import React from 'react';

import searchSvg from '@assets/img/search.svg';
import Button, { ButtonColor } from '@components/Button';
import Input from '@components/Input';

import styles from './Search.module.scss';

const Search = () => {
  return (
    <div className={styles.search}>
      <Input type="text" placeholder="Search property" />
      <img src={searchSvg} alt="SearchImg" />
      <Button color={ButtonColor.primary}>Find now</Button>
    </div>
  );
};

export default React.memo(Search);

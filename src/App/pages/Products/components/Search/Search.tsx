import Button, { ButtonColor } from '@components/Button/Button';
import Input from '@components/Input/Input';

import searchSvg from '../../../../../assets/img/search.svg';
import styles from './Search.module.scss';

const Search = () => {
  return (
    <div className={styles.search}>
      <Input type="text" placeholder="Search property" />
      <img src={searchSvg} alt="Search" />
      <Button color={ButtonColor.primary}>Find now</Button>
    </div>
  );
};

export default Search;

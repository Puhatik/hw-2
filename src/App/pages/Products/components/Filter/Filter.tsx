import filterSvg from '../../../../../assets/img/filter.svg';
import styles from './Filter.module.scss';

const Filter = () => {
  return (
    <button className={styles.filter}>
      <img src={filterSvg} />
      Filter
    </button>
  );
};

export default Filter;

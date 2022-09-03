import React from 'react';

import loaderL from '@assets/img/LoaderL.svg';
import { observer } from 'mobx-react-lite';
import { useParams } from 'react-router-dom';

import { productDetailsStore } from '../../../store/ProductDetailsStore';
import CardDetail from './components/CardDetail';
import RelatedItems from './components/RelatedItems';
import styles from './ProductDetails.module.scss';

export const StoreContext = React.createContext<any | null>(null);

const ProductDetails = () => {
  const { id } = useParams();
  const { product, isLoading, setId } = productDetailsStore;

  React.useEffect(() => {
    setId(id);
    console.log('succses');
  }, [id]);

  return (
    <>
      {isLoading ? (
        <img className={styles.loader} src={loaderL} alt="Loader" />
      ) : (
        <StoreContext.Provider value={{ productDetailsStore }}>
          <CardDetail />
          <RelatedItems category={product.category} />
        </StoreContext.Provider>
      )}
    </>
  );
};

export default observer(ProductDetails);

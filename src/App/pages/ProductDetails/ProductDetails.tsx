import React from 'react';

import loaderL from '@assets/img/LoaderL.svg';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { itemType } from 'src/App/App';

import CardDetail from './components/CardDetail';
import RelatedItems from './components/RelatedItems';
import styles from './ProductDetails.module.scss';

interface IProductContext {
  categoryItems: itemType[];
  item: itemType;
}

export const ProductContext = React.createContext<IProductContext>({
  categoryItems: [],
  item: {
    id: 0,
    title: 'title',
    price: 0,
    image: 'image',
    description: 'description',
    category: 'category',
    rating: {
      rate: 0,
      count: 0,
    },
  },
});

const ProductDetails = () => {
  const { id } = useParams();

  const [item, setItem] = React.useState<itemType>({
    id: 0,
    title: 'title',
    price: 0,
    image: 'image',
    description: 'description',
    category: 'category',
    rating: {
      rate: 0,
      count: 0,
    },
  });

  const [categoryItems, setCategoryItems] = React.useState<itemType[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);

  const fetchItem = async () => {
    setIsLoading(true);
    await axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        setItem(response.data);
        axios
          .get(
            `https://fakestoreapi.com/products/category/${response.data.category}`
          )
          .then((resp) => {
            const result = resp.data.filter((item: itemType) => item.id !== id);
            setCategoryItems(result.slice(0, 3));
            setIsLoading(false);
          });
      });
  };

  React.useEffect(() => {
    fetchItem();
  }, [id]);

  return (
    <>
      {isLoading ? (
        <img className={styles.loader} src={loaderL} alt="Loader" />
      ) : (
        <ProductContext.Provider value={{ categoryItems, item }}>
          <CardDetail />
          <RelatedItems />
        </ProductContext.Provider>
      )}
    </>
  );
};

export default ProductDetails;

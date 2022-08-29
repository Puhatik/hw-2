import React from 'react';

import axios from 'axios';
import { useParams } from 'react-router-dom';
import { itemType } from 'src/App/App';

import CardDetail from './components/CardDetail/CardDetail';
import RelatedItems from './components/RelatedItems/RelatedItems';

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
  const { id, category } = useParams();

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

  const fetchItem = async () => {
    await axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        setItem(response.data);
      });
  };

  const fetchCategory = async () => {
    await axios
      .get(`https://fakestoreapi.com/products/category/${category}`)
      .then((response) => {
        const result = response.data.filter((item: itemType) => item.id != id);
        setCategoryItems(result.slice(0, 3));
      });
  };

  React.useEffect(() => {
    fetchItem();
    fetchCategory();
  }, [id]);

  return (
    <ProductContext.Provider value={{ categoryItems, item }}>
      <CardDetail />
      <RelatedItems />
    </ProductContext.Provider>
  );
};

export default ProductDetails;

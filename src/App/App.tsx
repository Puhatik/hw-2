import * as React from 'react';

import Header from '@components/Header/Header';
import ScrollToTop from '@components/ScrollToTop/ScrollToTop';
import axios from 'axios';
import { Routes, Route, Navigate } from 'react-router-dom';

import styles from './App.module.scss';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import Products from './pages/Products/Products';

export type itemType = {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
  category: string;
  rating: {
    rate: number;
    count: number;
  };
};

interface IItemsContext {
  items: itemType[];
}

export const ItemsContext = React.createContext<IItemsContext>({ items: [] });

function App() {
  const [items, setItems] = React.useState<itemType[]>([]);

  React.useEffect(() => {
    const apiUrl = 'https://fakestoreapi.com/products';
    axios.get(apiUrl).then((resp) => {
      setItems(resp.data);
    });
  }, []);

  return (
    <div className={styles.wrapper}>
      <ItemsContext.Provider value={{ items }}>
        <Header />

        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="products/:category/:id" element={<ProductDetails />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </ScrollToTop>
      </ItemsContext.Provider>
    </div>
  );
}

export default App;

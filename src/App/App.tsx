import * as React from 'react';

import Header from '@components/Header';
import ScrollToTop from '@components/ScrollToTop';
import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom';

import styles from './App.module.scss';
import ProductDetails from './pages/ProductDetails';
import Products from './pages/Products';

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

function App() {
  return (
    <div className={styles.wrapper}>
      <BrowserRouter>
        <Header />

        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="products/:id" element={<ProductDetails />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
}

export default App;

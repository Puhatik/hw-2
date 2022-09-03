import axios from 'axios';
import { makeAutoObservable } from 'mobx';

import { ItemTypeModel } from './../models/Products/ProductItem';

type PrivateFields = '_products' | '_isLoading';

class ProductsStore {
  private _products: ItemTypeModel[] = [];
  private _isLoading: boolean = false;

  constructor() {
    this.fetchProducts();
    makeAutoObservable<ProductsStore, PrivateFields>(this);
  }

  fetchProducts = async () => {
    try {
      const apiUrl = 'https://fakestoreapi.com/products';
      this._isLoading = true;
      await axios.get(apiUrl).then((resp) => {
        this._products = [...resp.data];
      });
    } finally {
      this._isLoading = false;
    }
  };

  get products(): ItemTypeModel[] {
    return this._products;
  }

  get isLoading(): boolean {
    return this._isLoading;
  }
}

export const productsStore = new ProductsStore();

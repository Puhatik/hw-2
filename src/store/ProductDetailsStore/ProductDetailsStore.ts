import axios from 'axios';
import { makeAutoObservable, runInAction } from 'mobx';

import { ItemTypeModel } from '../models/Products/ProductItem';

type PrivateFields = '_id' | '_product' | '_isLoading';

class ProductDetailsStore {
  private _product: ItemTypeModel = {
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
  };
  private _isLoading: boolean = true;
  private _id: number = 0;

  setId = (id: number) => {
    this._id = id;
    this.fetchItem();
  };

  constructor() {
    makeAutoObservable<ProductDetailsStore, PrivateFields>(this);
  }

  fetchItem = async () => {
    this._isLoading = true;
    const response = await axios.get(
      `https://fakestoreapi.com/products/${this._id}`
    );
    runInAction(() => {
      this._product = response.data;
      this._isLoading = false;
    });
  };

  get product(): ItemTypeModel {
    return this._product;
  }

  get isLoading(): boolean {
    return this._isLoading;
  }
}

export const productDetailsStore = new ProductDetailsStore();

import axios from 'axios';
import { makeAutoObservable } from 'mobx';

import { ItemTypeModel } from './../models/Products/ProductItem';

class CategoryStore {
  private _products: ItemTypeModel[] = [];
  private _category: string = '';

  constructor() {
    makeAutoObservable<CategoryStore>(this);
  }

  setCategory = (category: string) => {
    this._category = category;
    this.fetchCategoryProducts();
  };

  fetchCategoryProducts = async () => {
    await axios
      .get(`https://fakestoreapi.com/products/category/${this._category}`)
      .then((resp) => {
        this._products = resp.data.slice(0, 3);
        console.log(resp);
      });
  };

  get products(): ItemTypeModel[] {
    return this._products;
  }
}

export const categoryStore = new CategoryStore();

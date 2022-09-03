export type ItemTypeApi = {
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

export type ItemTypeModel = {
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

export const normalizeItemType = (from: ItemTypeApi): ItemTypeModel => ({
  id: from.id,
  title: from.title,
  price: from.price,
  image: from.image,
  description: from.description,
  category: from.category,
  rating: {
    rate: from.rating.rate,
    count: from.rating.count,
  },
});

import { Product } from '@/types';
import qs from 'query-string';

const PRODUCTS_URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

type Query = {
  categoryId?: string;
  colorId?: string;
  sizeId?: string;
  isFeatured?: boolean;
};

const getProducts = async (query: Query): Promise<Product[]> => {
  const url = qs.stringify({
    url: PRODUCTS_URL,
    query
  });

  const res = await fetch(PRODUCTS_URL);
  return res.json();
};

export default getProducts;

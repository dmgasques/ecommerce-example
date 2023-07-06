import { Product } from '@/types';

const PRODUCTS_URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

const getProduct = async (id: string): Promise<Product> => {
  try {
    const res = await fetch(`${PRODUCTS_URL}/${id}`);
    return res.json();
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default getProduct;

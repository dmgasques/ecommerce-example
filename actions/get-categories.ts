import { Category } from '@/types';

const CATEGORIES_URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategories = async (): Promise<Category[]> => {
  console.log(CATEGORIES_URL);
  const res = await fetch(CATEGORIES_URL);

  return res.json();
};

export default getCategories;

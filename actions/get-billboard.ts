import { Billboard } from '@/types';

const BILLBOARDS_URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

const getBillboard = async (id: string): Promise<Billboard> => {
  try {
    const res = await fetch(`${BILLBOARDS_URL}/${id}`);
    return res.json();
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default getBillboard;

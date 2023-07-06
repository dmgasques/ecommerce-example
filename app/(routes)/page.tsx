import getBillboard from '@/actions/get-billboard';
import getProducts from '@/actions/get-products';
import Billboard from '@/components/billboard';
import ProductList from '@/components/product-list';
import Container from '@/components/ui/container';

export const revalidate = 0;

export default async function Home() {
  const products = await getProducts({
    isFeatured: true
  });
  const billboard = await getBillboard('5da03f0b-f33b-4540-a1ea-cd4c5aa1c7ad');

  return (
    <Container>
      <div className='space-y-10 pb-10'>
        <Billboard data={billboard} />
        <div className='flex flex-col gep-y-8 px-4 sm:px-6 lg:px-8'>
          <ProductList title='Featured Products' items={products} />
        </div>
      </div>
    </Container>
  );
}

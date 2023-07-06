import Footer from '@/components/footer';
import './globals.css';
import { Urbanist } from 'next/font/google';
import Navbar from '@/components/navbar';
import ModalProvider from '@/providers/modal-provider';

const urbanist = Urbanist({ subsets: ['latin'] });

export const metadata = {
  title: 'Store',
  description: 'New store'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className='dark'>
      <body className={urbanist.className}>
        <ModalProvider />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

import { Features } from '@sections/footer/Features';
import { Info } from '@sections/footer/Info';

const Footer = () => (
  <footer className='flex min-h-[530px] w-full flex-col items-center bg-white'>
    <Features />
    <Info />
  </footer>
);
export { Footer };

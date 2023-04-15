/* eslint-disable @next/next/no-img-element */
import { SectionTitle } from '@components/SectionTitle';

const Supermarket = () => (
  <section className='mt-[54px] max-w-[1200px] xs:w-[300px] sm:w-[500px] xl:w-full'>
    <SectionTitle
      title='Colecciones: Supermercado'
      subtitle={
        <svg
          width='15'
          height='9'
          viewBox='0 0 15 9'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M13.7149 0.75L7.44338 7.0065L1.17188 0.75'
            stroke='#3483FA'
            strokeWidth='1.5'
          />
        </svg>
      }
    />
    <div className='flex flex-col gap-4 xl:flex-row'>
      <div className='shadowed flex w-[300px] max-w-[383px] flex-col rounded bg-white xl:w-full'>
        <div>
          <img
            src='/images/collections/supermarket.png'
            alt='Productos supermercado'
            className='rounded-[4px_4px_0_0]'
          />
        </div>
        <div className='flex h-[100px] flex-col items-start justify-center rounded pl-[25px]'>
          <span className='text-[12px] uppercase tracking-[1.5px] text-[#4b4b4b]'>
            Descubre
          </span>
          <span className='text-[28px] uppercase text-[#4b4b4b]'>
            Supermercado
          </span>
        </div>
      </div>
      <div className='xl:first-line grid grid-cols-2 gap-[11px] xl:grid-cols-4'>
        <div className='h-[185px] w-[185px]'>
          <img
            src='/images/collections/c1.png'
            alt='Eucerin'
            className='shadowed'
          />
        </div>
        <div className='h-[185px] w-[185px]'>
          <img
            src='/images/collections/c2.png'
            alt='Cicatricure Sérum Facial'
            className='shadowed'
          />
        </div>
        <div className='h-[185px] w-[185px]'>
          <img
            src='/images/collections/c3.png'
            alt='Nivea'
            className='shadowed'
          />
        </div>
        <div className='h-[185px] w-[185px]'>
          <img
            src='/images/collections/c4.png'
            alt='Cicatricure Crema de Noche'
            className='shadowed'
          />
        </div>
        <div className='h-[185px] w-[185px]'>
          <img
            src='/images/collections/c5.png'
            alt='Nissin'
            className='shadowed'
          />
        </div>
        <div className='h-[185px] w-[185px]'>
          <img
            src='/images/collections/c6.png'
            alt='Ron'
            className='shadowed'
          />
        </div>
        <div className='h-[185px] w-[185px]'>
          <img
            src='/images/collections/c7.png'
            alt='Eucerin'
            className='shadowed'
          />
        </div>
        <div className='h-[185px] w-[185px]'>
          <img
            src='/images/collections/c8.png'
            alt='Tio Nacho'
            className='shadowed'
          />
        </div>
      </div>
    </div>
  </section>
);
export { Supermarket };

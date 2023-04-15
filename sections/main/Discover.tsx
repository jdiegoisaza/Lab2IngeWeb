import { SectionTitle } from '@components/SectionTitle';
import { Fragment } from 'react';

const ITEMS = [
  {
    title: 'RENUEVA TUS ESPACIOS',
    body: ['HOGAR Y MUEBLES', 'HASTA 50% OFF'],
    pic: '/images/discover/pic_01.svg',
    textBtn: 'Ver más',
  },
  {
    title: 'SUBSCRIBETEE AL NIVEL 6',
    body: ['POR SOLO', '$17.899 CADA MES'],
    pic: '/images/discover/pic_02.svg',
    textBtn: 'Subscribete',
  },
];

export const DiscoverComponent = () => (
  <section className='mt-[50px] max-w-[1200px] xs:w-[300px] sm:w-[500px] xl:w-full'>
    <div id='discover-section' className='w-full'>
      <SectionTitle title='Descubre' subtitle='' className='mt-[30px]' />
      <div className='mt-4 flex w-full flex-col space-y-2 lg:flex-row lg:space-x-2 lg:space-y-0'>
        {ITEMS.map((item) => (
          <div
            className='flex w-full justify-between rounded-lg bg-white'
            key={`item__${item.title}`}
          >
            <div className='left flex flex-col justify-center px-4 py-4'>
              <span className='text-xs'>{item.title}</span>

              {item.body.map((bodyValue) => (
                <Fragment
                  key={`item__body__${[...bodyValue].splice(0, 2).join('')}`}
                >
                  <span className='text-2xl font-semibold'> {bodyValue} </span>
                </Fragment>
              ))}

              <div className='flex cursor-pointer justify-center px-12 py-4 text-white'>
                <div className='rounded-[6px] bg-[#3483FA] px-8 py-2 text-center text-lg'>
                  {item.textBtn}
                </div>
              </div>
            </div>

            <div className='rounded-xl text-center'>
              <img className='rounded-lg' src={item.pic} alt='' />
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

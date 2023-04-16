import { DealCard } from '@components/DealCard';
import { SectionTitle } from '@components/SectionTitle';
import { Arrows } from '@components/deals-carousel/Arrows';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 320 },
    items: 1,
  },
};

const Deals = () => (
  <section className='mt-[50px] max-w-[1200px] xs:w-[300px] sm:w-[500px] xl:w-full'>
    <SectionTitle title='Ofertas' subtitle='Ver ofertas' />
    <div className='relative'>
      <Carousel
        responsive={responsive}
        containerClass='w-full'
        itemClass='max-w-[242px]'
        infinite
        draggable
        renderButtonGroupOutside
        arrows={false}
        customButtonGroup={<Arrows />}
      >
        <DealCard
          price={210900}
          discount={32}
          image='chair'
          imageDescription='Silla ejecutiva'
          freeShipping
        />
        <DealCard
          price={74990}
          discount={25}
          image='mic'
          imageDescription='Micrófono'
          freeShipping
          fullShipping
        />
        <DealCard
          price={134950}
          discount={50}
          image='razor'
          imageDescription='Afeitadora'
          freeShipping
        />
        <DealCard
          price={149900}
          discount={30}
          image='shell'
          imageDescription='Estantería'
          freeShipping
        />
        <DealCard
          price={69990}
          discount={17}
          image='curtains'
          imageDescription='Cortinas'
          fullShipping
        />
        <DealCard
          price={50000}
          discount={32}
          image='chair2'
          imageDescription='Silla gerencial'
          freeShipping
        />
        <DealCard
          price={90050}
          discount={25}
          image='mic2'
          imageDescription='Micrófono de Estudio'
          fullShipping
        />
        <DealCard
          price={567500}
          discount={50}
          image='razor2'
          imageDescription='Afeitadora inalambrica'
          freeShipping
        />
        <DealCard
          price={20425}
          discount={30}
          image='shell2'
          imageDescription='Estantería de Roble'
          fullShipping
        />
        <DealCard
          price={33210}
          discount={17}
          image='curtains2'
          imageDescription='Cortinas de Seda'
          freeShipping
        />
      </Carousel>
    </div>
  </section>
);
export { Deals };

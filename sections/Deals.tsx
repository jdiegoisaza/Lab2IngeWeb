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
        <DealCard price='210.900' discount={32} image='chair' freeShipping />
        <DealCard
          price='74.990'
          discount={32}
          image='mic'
          freeShipping
          fullShipping
        />
        <DealCard price='134.950' discount={32} image='razor' freeShipping />
        <DealCard price='149.900' discount={32} image='shell' freeShipping />
        <DealCard price='69.990' discount={32} image='curtains' fullShipping />
        <DealCard price='50.000' discount={32} image='chair' freeShipping />
        <DealCard price='90.050' discount={32} image='mic' fullShipping />
        <DealCard price='567.500' discount={32} image='razor' freeShipping />
        <DealCard price='20.425' discount={32} image='shell' fullShipping />
        <DealCard price='33.210' discount={32} image='curtains' freeShipping />
      </Carousel>
    </div>
  </section>
);
export { Deals };

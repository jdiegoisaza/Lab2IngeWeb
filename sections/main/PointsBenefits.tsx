import { SectionTitle } from '@components/SectionTitle';

const PointsBenefits = () => (
  <section className='w-full'>
    <SectionTitle
      title='Beneficios de Mercado Puntos'
      subtitle='Ver todos los beneficios'
      className='mt-[70px]'
    />
    <div className='flex flex-wrap items-center justify-between gap-0 xs:flex-col xs:gap-2 xl:flex-row'>
      <div className='h-auto w-[300px] sm:w-[384px]'>
        <img
          src='/images/subscription/dplus.png'
          alt='Beneficio de Disney+'
          className='h-full w-full'
        />
      </div>
      <div className='h-auto w-[300px] sm:w-[384px]'>
        <img
          src='/images/subscription/hbom.png'
          alt='Beneficio de HBO Max'
          className='h-full w-full'
        />
      </div>
      <div className='h-auto w-[300px] sm:w-[384px]'>
        <img
          src='/images/subscription/pplus.png'
          alt='Beneficio de Paramount+'
          className='h-full w-full'
        />
      </div>
    </div>
  </section>
);
export { PointsBenefits };

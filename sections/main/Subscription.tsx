const ITEMS = [
  {
    pic: '/images/subscription-level-6/dplus.svg',
    text: 'Disney+ sin cargo',
  },
  {
    pic: '/images/subscription-level-6/starplus.svg',
    text: 'Start+ sin cargo',
  },
  {
    pic: '/images/subscription-level-6/truckgift.svg',
    text: 'Envíos gratis y rápidos desde $ 90.000 y 40% OFF en envíos de menos de $ 90.000',
  },
];

export const SubscriptionComponent = () => (
  <section className='mt-[50px] max-w-[1200px] xs:w-[300px] sm:w-[500px] xl:w-full'>
    <div id='subscription-section' className='relative rounded-md bg-white'>
      <div className='gradient flex h-[90px] flex-col justify-between rounded-t-lg bg-[#A90F90] md:flex-row'>
        <div className='flex items-center pl-8'>
          <span className='text-2xl text-white'>Suscríbete al nivel 6</span>
        </div>

        <div className='flex items-center px-6 pr-4 md:px-2'>
          <div className='md:r-side border-l-white pl-3'>
            <div>
              <span className='text-sm text-[#EBEBEB] line-through'>
                $ 50.690
              </span>
            </div>

            <div className='text-[#EBEBEB]'>
              <span className='text-xl'>$ 17.899</span>
              <span className='text-sm'> / mes</span>
            </div>
          </div>
        </div>
      </div>

      <div className='pl-4 pt-4'>
        <span className='text-base'>
          Consigue los mejores beneficios en Mercado Libre
        </span>
      </div>

      <div className='benefits flex flex-col justify-center md:flex-row'>
        {ITEMS.map((item, index) => (
          <div className='flex w-full align-middle md:w-1/3' key={index}>
            {/* <!-- icon --> */}
            <div className='flex py-2 pl-4'>
              <img className='rounded-full' src={item.pic} alt='' />
            </div>

            {/* <!-- TEXT --> */}
            <div className='flex items-center px-2'>
              <span className='text'>{item.text}</span>
            </div>
          </div>
        ))}
      </div>

      {/* <!-- SUBSRIBE BUTTON --> */}
      <div className='flex justify-end'>
        <div className='m-3 cursor-pointer rounded-md bg-[#3483fa] px-[30px] py-2 text-[15px] font-semibold text-[#ffffff]'>
          Suscríbete
        </div>
      </div>
    </div>
  </section>
);

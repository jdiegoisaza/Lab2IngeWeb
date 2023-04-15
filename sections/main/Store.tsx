import { SectionTitle } from '@components/SectionTitle';

const ITEMS = [
  {
    picHeader: 'images/stores/item_01_header.svg',
    picLogo: 'images/stores/item_01_logo.svg',
    title: 'Lego',
    miniLogos: [
      'images/stores/item_01_pic_01.svg',
      'images/stores/item_01_pic_02.svg',
      'images/stores/item_01_pic_03.svg',
    ],
    buttonText: 'Ver tienda',
  },
  {
    picHeader: 'images/stores/item_02_header.svg',
    picLogo: 'images/stores/item_02_logo.svg',
    title: 'Xiaomi',
    miniLogos: [
      'images/stores/item_02_pic_01.svg',
      'images/stores/item_02_pic_02.svg',
      'images/stores/item_02_pic_03.svg',
    ],
    buttonText: 'Ver tienda',
  },
  {
    picHeader: 'images/stores/item_03_header.svg',
    picLogo: 'images/stores/item_03_logo.svg',
    title: 'Oster',
    miniLogos: [
      'images/stores/item_03_pic_01.svg',
      'images/stores/item_03_pic_02.svg',
      'images/stores/item_03_pic_03.svg',
    ],
    buttonText: 'Ver tienda',
  },
  {
    picHeader: 'images/stores/item_04_header.svg',
    picLogo: 'images/stores/item_04_logo.svg',
    title: 'Nikon',
    miniLogos: [
      'images/stores/item_04_pic_01.svg',
      'images/stores/item_04_pic_02.svg',
      'images/stores/item_04_pic_03.svg',
    ],
    buttonText: 'Ver tienda',
  },
];

export const StoreComponent = () => (
  <section className='mt-[50px] max-w-[1200px] xs:w-[300px] sm:w-[500px] xl:w-full'>
    <div id='stores-section' className='relative'>
      <SectionTitle
        title='Las mejores tiendas te esperan'
        subtitle='Ver tiendas'
        className='mt-[20px]'
      />

      <div className='flex flex-wrap'>
        {ITEMS.map((item) => (
          <div
            className='w-full py-1 sm:w-1/2 sm:p-1 lg:w-1/4'
            key={`store_item__${item.title}`}
          >
            <div className='rounded-xl bg-white pb-4'>
              <div className='item-header'>
                <img
                  className='w-full rounded-t-lg'
                  src={item.picHeader}
                  alt=''
                />
              </div>

              <div className='-mt-10 flex items-center justify-center'>
                <img
                  className='rounded-lg shadow-md'
                  src={item.picLogo}
                  alt=''
                />
              </div>

              <div className='text-center text-2xl font-semibold text-gray-700'>
                {item.title}
              </div>
              <div className='items my-4 flex w-full justify-center space-x-2'>
                {item.miniLogos.map((pictureSrc) => (
                  <img
                    className='w-1/4 rounded-lg border border-gray-200 p-[1px]'
                    src={pictureSrc}
                    alt=''
                    key={`store_item__${item.title}__${pictureSrc}`}
                  />
                ))}
              </div>

              <div className='cursor-pointer text-center text-lg font-semibold text-gray-400'>
                {item.buttonText}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

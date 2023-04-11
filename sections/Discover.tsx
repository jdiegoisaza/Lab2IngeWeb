import { SectionTitle } from '@components/SectionTitle';

const ITEMS = [
  {
    title: 'RENUEVA TUS ESPACIOS',
    body: [
      'HOGAR Y MUEBLES',
      'HASTA 50% OFF'
    ],
    pic: '/images/discover/pic_01.svg',
    textBtn: 'Ver más'
  },
  {
    title: 'SUBSCRIBETEE AL NIVEL 6',
    body: [
      'POR SOLO',
      '$17.899 CADA MES'
    ],
    pic: '/images/discover/pic_02.svg',
    textBtn: 'Subscribete'
  }
];

export function DiscoverComponent() {
  return <section className='mt-[50px] max-w-[1200px] xs:w-[300px] sm:w-[500px] xl:w-full'>
    <div id="discover-section" className="w-full">

      <SectionTitle
        title='Descubre'
        subtitle=''
        className='mt-[70px]'
      />

      <div className="flex flex-col lg:flex-row lg:space-x-2 space-y-2 lg:space-y-0 mt-4 w-full">

        {ITEMS.map((item) => {
          return <div className="flex justify-between rounded-lg w-full bg-white">

            <div className="left flex flex-col justify-center px-4 py-4">
              <span className="text-xs">
                {item.title}
              </span>

              {item.body.map((bodyValue) => <>
                <span className="text-2xl font-semibold"> {bodyValue} </span>
              </>)
              }

              <div className="flex px-12 py-4 justify-center cursor-pointer text-white">
                <div className="text-center px-8 py-2 ok-btn-blue text-lg">
                  {item.textBtn}
                </div>
              </div>

            </div>

            <div className="text-center rounded-xl">
              <img className="rounded-lg" src={item.pic} alt="" />
            </div>

          </div>
        })
        }

      </div>

    </div>

  </section>
}
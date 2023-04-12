import { SectionTitle } from "@components/SectionTitle";

const ITEMS = [
  {
    picHeader: "images/stores/item_01_header.svg",
    picLogo: "images/stores/item_01_logo.svg",
    title: 'Lego',
    miniLogos: [
      'images/stores/item_01_pic_01.svg',
      'images/stores/item_01_pic_02.svg',
      'images/stores/item_01_pic_03.svg'
    ],
    buttonText: 'Ver tienda'
  },
  {
    picHeader: "images/stores/item_02_header.svg",
    picLogo: "images/stores/item_02_logo.svg",
    title: 'Xiaomi',
    miniLogos: [
      'images/stores/item_02_pic_01.svg',
      'images/stores/item_02_pic_02.svg',
      'images/stores/item_02_pic_03.svg'
    ],
    buttonText: 'Ver tienda'
  },
  {
    picHeader: "images/stores/item_03_header.svg",
    picLogo: "images/stores/item_03_logo.svg",
    title: 'Oster',
    miniLogos: [
      'images/stores/item_03_pic_01.svg',
      'images/stores/item_03_pic_02.svg',
      'images/stores/item_03_pic_03.svg'
    ],
    buttonText: 'Ver tienda'
  },
  {
    picHeader: "images/stores/item_04_header.svg",
    picLogo: "images/stores/item_04_logo.svg",
    title: 'Nikon',
    miniLogos: [
      'images/stores/item_04_pic_01.svg',
      'images/stores/item_04_pic_02.svg',
      'images/stores/item_04_pic_03.svg'
    ],
    buttonText: 'Ver tienda'
  },

];


export function StoreComponent() {
  return <section className='mt-[50px] max-w-[1200px] xs:w-[300px] sm:w-[500px] xl:w-full'>

    <div id="stores-section" className="relative">

      <SectionTitle
        title='Las mejores tiendas te esperan'
        subtitle='Ver tiendas'
        className='mt-[70px]'
      />

      <div className="flex flex-wrap">
        {
          ITEMS.map((item) => {
            return <div className="w-full sm:w-1/2 lg:w-1/4 py-1 sm:p-1">

              <div className="pb-4 rounded-xl bg-white">
                <div className="item-header">
                  <img className="rounded-t-lg" src={item.picHeader} alt="" />
                </div>

                <div className="flex justify-center items-center -mt-10">
                  <img className="rounded-lg shadow-md" src={item.picLogo} alt="" />
                </div>

                <div className="text-center text-2xl font-semibold text-gray-700">{item.title}</div>
                <div className="items flex justify-center space-x-2 my-4 w-full">
                  {item.miniLogos.map(((pictureSrc) => <img
                    className="w-1/4 rounded-lg p-[1px] border border-gray-200"
                    src={pictureSrc} alt="" />))}
                </div>

                <div className="text-center text-lg font-semibold cursor-pointer text-gray-400">
                  {item.buttonText}
                </div>

              </div>

            </div>

          })
        }

      </div>
    </div>

  </section>
}

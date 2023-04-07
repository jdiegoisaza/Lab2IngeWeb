import { useProductActionContext } from '@context/ProductActionContext';
import Image from 'next/image';

interface DealCardProps {
  price: number;
  image: string;
  imageDescription: string;
  discount?: number;
  freeShipping?: boolean;
  fullShipping?: boolean;
}

const DealCard = ({
  price,
  discount,
  image,
  imageDescription,
  freeShipping = false,
  fullShipping = false,
}: DealCardProps) => {
  const { addProductToCart } = useProductActionContext();

  const handleClick = () => {
    addProductToCart({
      id: image,
      name: imageDescription,
      price: price,
      discount: discount,
    });
  };

  return (
    <button
      className='shadowed h-[350px] w-[225px] rounded-[4px] bg-white'
      onClick={handleClick}
    >
      <Image
        src={`/images/${image}.png`}
        alt='Silla ejecutiva'
        width={'224'}
        height={'224'}
        style={{ borderBottom: '1px solid #eeeeee' }}
      />
      <div
        className='h-[51px] w-[198px] pl-4 pt-[18px]'
        style={{ borderTop: '1px solid #eeeeee' }}
      >
        <div className='flex items-center gap-[5px]'>
          <span className='text-[23px]'>$ {price.toLocaleString('es-CO')}</span>
          {discount && (
            <span className='text-sm text-[#00a650]'>{discount}% OFF</span>
          )}
        </div>
        <div className='flex items-center gap-[5px]'>
          <>
            {freeShipping && (
              <span className='h-[23px] pt-[3px] text-[13px] font-semibold text-[#00a650]'>
                Envío gratis
              </span>
            )}
            {fullShipping && (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width={41}
                height={23}
                fill='none'
                className='relative top-[3px]'
              >
                <g clipPath='url(#a)'>
                  <path
                    fill='#00A650'
                    d='M3.548 5.346h5.127l-2.564 4.53h4.273l-6.836 8.153 1.709-5.435H.984l2.564-7.248Zm11.307 9.3h-1.912l1.634-7.331h5.432l-.367 1.649H16.12l-.244 1.143h3.433l-.367 1.649h-3.444l-.643 2.89Zm9.237.133c-2.277 0-3.4-1.078-3.4-2.616 0-.121.034-.374.056-.484l.978-4.364h1.943l-.966 4.32a1.562 1.562 0 0 0-.033.308c.011.605.478 1.188 1.422 1.188 1.022 0 1.544-.639 1.732-1.496l.967-4.32h1.933l-.966 4.353c-.4 1.78-1.377 3.111-3.666 3.111Zm9.87-.132h-4.887l1.632-7.332h1.911l-1.255 5.683h2.966l-.366 1.649Zm6.516 0H35.59l1.633-7.332h1.912l-1.256 5.683h2.966l-.367 1.649Z'
                  />
                </g>
                <defs>
                  <clipPath id='a'>
                    <path fill='#fff' d='M.984.688h40v22h-40z' />
                  </clipPath>
                </defs>
              </svg>
            )}
          </>
        </div>
      </div>
    </button>
  );
};

export { DealCard };

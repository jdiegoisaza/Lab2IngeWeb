import { useProductActionContext } from '@context/ProductActionContext';
import { FullShipping } from 'icons/main/deals/FullShipping';
import Image from 'next/image';
import { toast } from 'react-toastify';

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
    toast.success(`${imageDescription} se ha agregado al carrito`);
  };

  return (
    <button
      className='shadowed h-[350px] w-[225px] rounded-[4px] bg-white'
      onClick={handleClick}
    >
      <Image
        src={`/images/deals/${image}.png`}
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
            {fullShipping && <FullShipping />}
          </>
        </div>
      </div>
    </button>
  );
};

export { DealCard };

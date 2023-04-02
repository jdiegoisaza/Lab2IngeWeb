import { useSidebarContext } from '@context/SidebarContext';
import { AiOutlineMenu, AiOutlineMenuUnfold } from 'react-icons/ai';
import { ShoppingCart } from './ShoppingCart';

const Header = () => {
  const { isOpen, setIsOpen } = useSidebarContext();

  return (
    <>
      <header className='flex h-full w-screen justify-center bg-[#fff159]'>
        <div className='mx-4 my-0 flex h-[100px] w-[1200px] flex-col justify-center gap-[20px]'>
          <div className='relative flex items-center justify-center xs:flex-col xs:gap-1 lg:-left-4 lg:flex-row lg:gap-[50px] xl:justify-start'>
            <svg
              width='134'
              height='34'
              viewBox='0 0 134 34'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              xmlnsXlink='http://www.w3.org/1999/xlink'
            >
              <rect width='134' height='34' fill='url(#pattern0)' />
              <defs>
                <pattern
                  id='pattern0'
                  patternContentUnits='objectBoundingBox'
                  width='1'
                  height='1'
                >
                  <use
                    xlinkHref='#image0_1_6'
                    transform='scale(0.00746269 0.0294118)'
                  />
                </pattern>
                <image
                  id='image0_1_6'
                  width='134'
                  height='34'
                  xlinkHref='data:image/png;base64,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'
                />
              </defs>
            </svg>
            <div className='flex'>
              <input
                type='text'
                placeholder='Buscar productos, marcas y más...'
                className='shadowed h-[40px] w-[200px] border-none bg-white p-4 focus:outline-none md:w-[400px] lg:w-[600px]'
              />
              <button
                type='button'
                title='search'
                className='shadowed relative h-[40px] w-[40px] border-none bg-white'
              >
                <svg
                  className='relative left-[10px]'
                  width='16px'
                  height='16px'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M15 15L21 21'
                    stroke='#323232'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z'
                    stroke='#323232'
                    strokeWidth='2'
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className='relative hidden items-center justify-between gap-[100px] xl:flex'>
            <div>
              <ul className='links flex h-full items-center justify-start gap-[30px] text-black'>
                <li className='mr-6 text-black'>Ingresa tu domicilio</li>
                <li className='flex h-4 items-center gap-2'>
                  Categorías{' '}
                  <svg
                    width='9'
                    height='10'
                    viewBox='0 0 9 10'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <mask id='path-1-inside-1_1_16' fill='white'>
                      <path d='M4.54688 0.757355L8.78952 5L4.54688 9.24265L0.304229 5L4.54688 0.757355Z' />
                    </mask>
                    <path
                      d='M4.54688 9.24265L3.48621 10.3033L4.54688 11.364L5.60754 10.3033L4.54688 9.24265ZM7.72886 3.93934L3.48621 8.18199L5.60754 10.3033L9.85018 6.06066L7.72886 3.93934ZM5.60754 8.18199L1.36489 3.93934L-0.756431 6.06066L3.48621 10.3033L5.60754 8.18199Z'
                      fill='black'
                      fillOpacity='0.3'
                      mask='url(#path-1-inside-1_1_16)'
                    />
                  </svg>
                </li>
                <li>Ofertas</li>
                <li>Historial</li>
                <li>Supermercado</li>
                <li>Moda</li>
                <li>Vender</li>
                <li>Ayuda / PQR</li>
              </ul>
            </div>
            <div className='absolute -bottom-[30px] right-0 flex'>
              <ul className='flex h-full items-center justify-start gap-[10px] text-black'>
                <li>Crea tu cuenta</li>
                <li>Ingresa</li>
                <li>Mis compras</li>
              </ul>
              <div className='ml-12 cursor-pointer'>
                <ShoppingCart />
              </div>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className='absolute left-3 my-auto xl:hidden'
          >
            {isOpen ? (
              <AiOutlineMenuUnfold color='black' size={24} />
            ) : (
              <AiOutlineMenu color='black' size={24} />
            )}
          </button>
        </div>
      </header>
    </>
  );
};
export { Header };

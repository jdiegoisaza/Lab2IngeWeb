import { useSidebarContext } from '@context/SidebarContext';
import { AiOutlineMenu, AiOutlineMenuUnfold } from 'react-icons/ai';
import { ShoppingCart } from './ShoppingCart';
import { MercadoLibre } from 'icons/header/MercadoLibre';
import { Search } from 'icons/header/Search';
import { CategoriesChevron } from 'icons/header/CategoriesChevron';

const Header = () => {
  const { isOpen, setIsOpen } = useSidebarContext();

  return (
    <>
      <header className='flex h-full w-screen justify-center bg-[#fff159]'>
        <div className='mx-4 my-0 flex h-[100px] w-[1200px] flex-col justify-center gap-[20px]'>
          <div className='relative flex items-center justify-center xs:flex-col xs:gap-1 lg:-left-4 lg:flex-row lg:gap-[50px] xl:justify-start'>
            <MercadoLibre />
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
                <Search />
              </button>
            </div>
          </div>
          <div className='relative hidden items-center justify-between gap-[100px] xl:flex'>
            <div>
              <ul className='links flex h-full items-center justify-start gap-[30px] text-black'>
                <li className='mr-6 text-black'>Ingresa tu domicilio</li>
                <li className='flex h-4 items-center gap-2'>
                  Categorías <CategoriesChevron />
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

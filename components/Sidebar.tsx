import { useSidebarContext } from '@context/SidebarContext';
import { AiOutlineMenuUnfold } from 'react-icons/ai';
import { ShoppingCart } from './ShoppingCart';
import { MercadoLibre } from 'icons/header/MercadoLibre';
import { CategoriesChevron } from 'icons/header/CategoriesChevron';

const Sidebar = () => {
  const { isOpen, setIsOpen } = useSidebarContext();

  return (
    <aside
      className={`${
        isOpen ? 'flex' : 'hidden'
      } shadowed absolute left-0 top-0 z-40 h-screen w-[220px] flex-col justify-between bg-[#fff159] xl:hidden`}
    >
      <div className='flex flex-col gap-4'>
        <button
          className='relative left-3 top-[38px]'
          onClick={() => setIsOpen(false)}
        >
          <AiOutlineMenuUnfold color='black' size={24} />
        </button>
        <div className='flex items-center justify-center'>
          <MercadoLibre />
        </div>
        <nav className='flex h-[80vh] flex-col justify-around gap-2'>
          <div className='flex items-center justify-center'>
            <ShoppingCart />
          </div>
          <div>
            <ul className='links flex flex-col justify-center gap-3 pl-12 pt-10 '>
              <li className='text-black'>Ingresa tu domicilio</li>
              <li className='flex items-center gap-2 '>
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
          <div>
            <ul className='flex flex-col justify-center gap-3 pl-12 pt-10 text-black '>
              <li>Crea tu cuenta</li>
              <li>Ingresa</li>
              <li>Mis compras</li>
            </ul>
          </div>
        </nav>
      </div>
    </aside>
  );
};

export { Sidebar };

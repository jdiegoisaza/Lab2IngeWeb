import { useProductActionContext } from '@context/ProductActionContext';
import { useShoppingCartContext } from '@context/ShoppingCartContext';
import { Cart } from 'icons/header/Cart';

const ShoppingCart = () => {
  const { setOpenCartModal } = useShoppingCartContext();
  const { cartProducts } = useProductActionContext();

  const getTotalAmountOfProducts = () =>
    cartProducts.reduce((acc, { amount }) => acc + (amount ?? 0), 0);

  return (
    <button
      className='relative bottom-1'
      onClick={() => setOpenCartModal(true)}
    >
      <Cart />
      <span className='relative -right-0.5 -top-8 text-[11px] text-base font-medium text-white '>
        {getTotalAmountOfProducts()}
      </span>
    </button>
  );
};

export { ShoppingCart };

import { useShoppingCartContext } from '@context/ShoppingCartContext';
import { Modal } from '@components/modals/Modal';

const ShoppingCartModal = () => {
  const { openCartModal, setOpenCartModal } = useShoppingCartContext();

  return (
    <Modal
      open={openCartModal}
      setOpen={setOpenCartModal}
      modalTitle='Productos en el carrito'
    >
      <div>Este es el modal para mostrar los productos (W.I.P)</div>
    </Modal>
  );
};
export { ShoppingCartModal };

import { useShoppingCartContext } from '@context/ShoppingCartContext';
import { Modal } from '@components/modals/Modal';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {
  CartProduct,
  useProductActionContext,
} from '@context/ProductActionContext';
import { AiOutlineMinus, AiOutlinePlus, AiTwotoneDelete } from 'react-icons/ai';

const priceFormat = (
  quantity: number = 1,
  unitPrice: number,
  discount: number = 0
) => {
  const discountPrice = unitPrice * (discount / 100);
  return quantity * (unitPrice - discountPrice);
};

const getTotalToPay = (items: CartProduct[]) =>
  items.reduce(
    (acc, { amount, price, discount }) =>
      acc + priceFormat(amount, price, discount),
    0
  );

const ShoppingCartModal = () => {
  const { openCartModal, setOpenCartModal } = useShoppingCartContext();
  const { cartProducts, addProductToCart, removeProductFromCart } =
    useProductActionContext();

  return (
    <Modal
      open={openCartModal}
      setOpen={setOpenCartModal}
      modalTitle='Productos en el carrito'
      maxWidth='md'
    >
      <TableContainer>
        <Table sx={{ minWidth: 700 }} aria-label='Productos en carrito'>
          <TableHead>
            <TableRow>
              <TableCell align='center' colSpan={4}>
                <span className='font-extrabold'>Detalles</span>
              </TableCell>
              <TableCell align='right'>
                <span className='font-extrabold'>Precio</span>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <span className='font-extrabold'>Producto</span>
              </TableCell>
              <TableCell align='center'>
                <span className='font-extrabold'>Cantidad</span>
              </TableCell>
              <TableCell align='right'>
                <span className='font-extrabold'>Precio</span>
              </TableCell>
              <TableCell align='right'>
                <span className='font-extrabold'>Descuento</span>
              </TableCell>
              <TableCell align='right'>
                <span className='font-extrabold'>Suma</span>
              </TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {cartProducts.map(({ id, name, amount, price, discount }) => (
              <TableRow key={`producto__${id}`}>
                <TableCell>{name}</TableCell>
                <TableCell>
                  <div className='flex items-center justify-center gap-2'>
                    <button
                      onClick={() =>
                        addProductToCart({ id, name, price, discount })
                      }
                    >
                      <AiOutlinePlus />
                    </button>
                    {amount}
                    <button onClick={() => removeProductFromCart(id, false)}>
                      <AiOutlineMinus />
                    </button>
                  </div>
                </TableCell>
                <TableCell align='right'>{price}</TableCell>
                <TableCell align='right'>{discount}</TableCell>
                <TableCell align='right'>
                  {priceFormat(amount, price, discount)}
                </TableCell>
                <TableCell>
                  <button onClick={() => removeProductFromCart(id, true)}>
                    <AiTwotoneDelete />
                  </button>
                </TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell rowSpan={0} />
              <TableCell colSpan={3}>Total</TableCell>
              <TableCell align='right'>{getTotalToPay(cartProducts)}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Modal>
  );
};
export { ShoppingCartModal };

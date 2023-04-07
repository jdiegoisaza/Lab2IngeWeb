import { useShoppingCartContext } from '@context/ShoppingCartContext';
import { Modal } from '@components/modals/Modal';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const PLACEHOLDER_DATA = [
  {
    id: 'chair',
    name: 'Silla de oficina',
    price: 210900,
    discount: 32,
    amount: 1,
  },
  {
    id: 'mic',
    name: 'Micrófono',
    price: 74990,
    discount: 32,
    amount: 2,
  },
  {
    id: 'razor',
    name: 'Afeitadora',
    price: 134950,
    discount: 32,
    amount: 1,
  },
];

type CartItemsType = typeof PLACEHOLDER_DATA;

const priceFormat = (quantity: number, unitPrice: number, discount: number) => {
  const discountPrice = unitPrice * (discount / 100);
  return quantity * (unitPrice - discountPrice);
};

const getTotalToPay = (items: CartItemsType) =>
  items.reduce(
    (acc, { amount, price, discount }) =>
      acc + priceFormat(amount, price, discount),
    0
  );

const ShoppingCartModal = () => {
  const { openCartModal, setOpenCartModal } = useShoppingCartContext();

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
              <TableCell align='right'>
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
            </TableRow>
          </TableHead>
          <TableBody>
            {PLACEHOLDER_DATA.map(({ id, name, amount, price, discount }) => (
              <TableRow key={`producto__${id}`}>
                <TableCell>{name}</TableCell>
                <TableCell align='right'>{amount}</TableCell>
                <TableCell align='right'>{price}</TableCell>
                <TableCell align='right'>{discount}</TableCell>
                <TableCell align='right'>
                  {priceFormat(amount, price, discount)}
                </TableCell>
              </TableRow>
            ))}
            {/* <TableRow>
              <TableCell rowSpan={3} />
              <TableCell colSpan={2}>Subtotal</TableCell>
              <TableCell align='right'>{ccyFormat(invoiceSubtotal)}</TableCell>
            </TableRow> */}
            <TableRow>
              <TableCell rowSpan={0} />
              <TableCell colSpan={3}>Total</TableCell>
              <TableCell align='right'>
                {getTotalToPay(PLACEHOLDER_DATA)}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Modal>
  );
};
export { ShoppingCartModal };

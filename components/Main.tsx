import { PaymentMethods } from '@sections/PaymentMethods';

/* eslint-disable @next/next/no-img-element */
const Main = () => (
  <>
    {/* Hacer un componente y usarlo en cada una de estas secciones: */}
    <img
      src='/promotion.png'
      alt='Promoción Semana de la Mujer'
      className='shadowed m-auto h-auto w-full max-w-[1512px]'
    />
    <div className='flex w-full flex-col items-center'>
      <PaymentMethods /> {/* Formas de Pago */}
      <section /> {/* Ofertas */}
      <section /> {/* Suscripción */}
      <section /> {/* Beneficios */}
      <section /> {/* Tiendas */}
      <section /> {/* Descubre */}
      <section /> {/* Colecciones: Supermercado */}
      <section /> {/* Categorías */}
    </div>
  </>
);
export { Main };

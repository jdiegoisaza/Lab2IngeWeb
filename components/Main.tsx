import { PaymentMethods } from '@sections/PaymentMethods';
import { ShoppingCartModal } from './modals/ShoppingCartModal';
import { Deals } from '@sections/Deals';
import { PointsBenefits } from '@sections/PointsBenefits';
import { SubscriptionComponent } from '@sections/Subscription';

import { StoreComponent } from '@sections/Store';
import { DiscoverComponent } from '@sections/Discover';
import { Supermarket } from '@sections/Supermarket';
import { Categories } from '@sections/Categories';

/* eslint-disable @next/next/no-img-element */
const Main = () => (
  <>
    {/* Hacer un componente y usarlo en cada una de estas secciones: */}
    <img
      src='/promotion.png'
      alt='Promoción Semana de la Mujer'
      className='shadowed m-auto h-auto w-full max-w-[1512px]'
    />
    <div className='flex flex-col items-center'>
      <PaymentMethods /> {/* Formas de Pago */}
      <Deals /> {/* Ofertas */}
      <SubscriptionComponent />
      {/* Suscripción */}
      <PointsBenefits /> {/* Beneficios */}
      <DiscoverComponent /> {/* Descubre */}
      <StoreComponent /> {/* Tiendas */}
      <Supermarket /> {/* Colecciones: Supermercado */}
      <Categories /> {/* Categorías */}
    </div>
    <ShoppingCartModal />
  </>
);
export { Main };

import { PaymentMethods } from '@sections/main/PaymentMethods';
import { ShoppingCartModal } from '@components/modals/ShoppingCartModal';
import { Deals } from '@sections/main/Deals';
import { PointsBenefits } from '@sections/main/PointsBenefits';
import { SubscriptionComponent } from '@sections/main/Subscription';
import { StoreComponent } from '@sections/main/Store';
import { DiscoverComponent } from '@sections/main/Discover';
import { Supermarket } from '@sections/main/Supermarket';
import { Categories } from '@sections/main/Categories';

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

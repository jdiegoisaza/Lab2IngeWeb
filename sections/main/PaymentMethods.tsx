import { PaymentMethodCard } from '@components/PaymentMethodCard';
import { SmallBank } from 'icons/main/payment-methods/SmallBank';
import { SmallBill } from 'icons/main/payment-methods/SmallBill';
import { SmallCreditCard } from 'icons/main/payment-methods/SmallCreditCard';
import { SmallPlus } from 'icons/main/payment-methods/SmallPlus';

const PaymentMethods = () => (
  <section className='shadowed mt-[40px] flex flex-row items-center rounded-[4px] bg-white'>
    <div className='h-[90px] justify-around xs:hidden xs:w-[300px] md:flex xl:w-[915px]'>
      <PaymentMethodCard
        title='Hasta 48 cuotas'
        viewMoreText='Ver más'
        className='hidden cursor-pointer items-center justify-center gap-4 xl:flex'
        icon={<SmallCreditCard />}
      />
      <PaymentMethodCard
        title='Transferencia desde tu banco'
        viewMoreText='Ver más'
        className='hidden cursor-pointer items-center justify-center gap-4 xl:flex'
        icon={<SmallBank />}
      />
      <PaymentMethodCard
        title='Paga en efectivo'
        viewMoreText='Ver más'
        className='cursor-pointer items-center justify-center gap-4 md:flex'
        icon={<SmallBill />}
      />
    </div>
    <div className='small-left-border flex h-[90px] w-[270px] justify-center'>
      <PaymentMethodCard
        title='Más medios de pago'
        viewMoreText='Ver todos'
        className='flex cursor-pointer items-center justify-center gap-4'
        icon={<SmallPlus />}
      />
    </div>
  </section>
);
export { PaymentMethods };

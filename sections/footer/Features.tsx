import { CreditCard } from 'icons/footer/CreditCard';
import { Package } from 'icons/footer/Package';
import { Shield } from 'icons/footer/Shield';

const Features = () => (
  <section className='w-full' style={{ borderBottom: '1px solid #e6e6e6' }}>
    <section className='mx-auto my-0 flex min-h-[355px] flex-row flex-wrap items-center justify-center gap-0 text-center'>
      <div className='flex h-[260px] flex-col xs:w-[250px] sm:w-[400px]'>
        <div className='flex h-[58px] flex-col items-center justify-end'>
          <CreditCard />
        </div>
        <div className='mt-[27px] text-[19px] font-normal text-[#4b4b4b]'>
          <span>Paga con tarjeta o en efectivo</span>
        </div>
        <div className='mx-auto mb-0 mt-4 w-[300px] text-[15px] font-normal text-[#999999]'>
          <p>
            Con Mercado Pago, paga en cuotas y aprovecha la comodidad de
            financiación que te da tu banco, o hazlo con efectivo en puntos de
            pago. ¡Y siempre es seguro!
          </p>
        </div>
        <div className='mt-4 text-[13px] font-normal text-[#3483fa]'>
          <span>Cómo pagar con Mercado Pago</span>
        </div>
      </div>
      <div className='flex h-[260px] flex-col xs:w-[250px] sm:w-[400px]'>
        <div className='flex h-[58px] flex-col items-center justify-end'>
          <Package />
        </div>
        <div className='mt-[27px] text-[19px] font-normal text-[#4b4b4b]'>
          <span>Envío gratis desde $ 90.000</span>
        </div>
        <div className='mx-auto mb-0 mt-4 w-[300px] text-[15px] font-normal text-[#999999]'>
          <p>
            Con solo estar registrado en Mercado Libre, tienes envíos gratis en
            miles de productos seleccionados.
          </p>
        </div>
        <div className='mt-4 text-[13px] font-normal text-[#3483fa]'>
          <span>Conoce más sobre este beneficio</span>
        </div>
      </div>
      <div className='flex h-[260px] flex-col xs:w-[250px] sm:w-[400px]'>
        <div className='flex h-[58px] flex-col items-center justify-end'>
          <Shield />
        </div>
        <div className='mt-[27px] text-[19px] font-normal text-[#4b4b4b]'>
          <span>Seguridad, de principio a fin</span>
        </div>
        <div className='mx-auto mb-0 mt-4 w-[300px] text-[15px] font-normal text-[#999999]'>
          <p>
            ¿No te gusta? ¡Devuélvelo! En Mercado Libre, no hay nada que no
            puedas hacer, porque estás siempre protegido.
          </p>
        </div>
        <div className='mt-4 text-[13px] font-normal text-[#3483fa]'>
          <span>Cómo te protegemos</span>
        </div>
      </div>
    </section>
  </section>
);
export { Features };

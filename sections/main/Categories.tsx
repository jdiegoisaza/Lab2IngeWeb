import { SectionTitle } from '@components/SectionTitle';
import { Ball } from 'icons/main/categories/Ball';
import { Bear } from 'icons/main/categories/Bear';
import { Camera } from 'icons/main/categories/Camera';
import { Car } from 'icons/main/categories/Car';
import { Controller } from 'icons/main/categories/Controller';
import { Handlebar } from 'icons/main/categories/Handlebar';
import { LipStick } from 'icons/main/categories/LipStick';
import { Mic } from 'icons/main/categories/Mic';
import { Monitor } from 'icons/main/categories/Monitor';
import { Phone } from 'icons/main/categories/Phone';
import { Shirt } from 'icons/main/categories/Shirt';
import { Sofa } from 'icons/main/categories/Sofa';
import { Spanner } from 'icons/main/categories/Spanner';
import { Stove } from 'icons/main/categories/Stove';

const Categories = () => (
  <section className='mb-[18px] mt-[54px] max-w-[1200px] xs:w-[300px] sm:w-[500px] xl:w-full'>
    <SectionTitle title='Categorías populares' />
    <div className='grid grid-cols-2 gap-[1px] md:grid-cols-3 xl:grid-cols-7'>
      <div className='shadowed flex h-[170px] w-[170px] flex-col items-center justify-center gap-[10px] bg-white'>
        <div className='mt-4 h-[48px] w-[48px]'>
          <Car />
        </div>
        <div className='flex h-[35px] justify-start px-[13px] text-center text-[14px]'>
          <span className='text-[#333333]'>Carros, Motos y Otros</span>
        </div>
      </div>
      <div className='shadowed flex h-[170px] w-[170px] flex-col items-center justify-center gap-[10px] bg-white'>
        <div className='mt-4 h-[48px] w-[48px]'>
          <Monitor />
        </div>
        <div className='flex h-[35px] justify-start px-[13px] text-center text-[14px]'>
          <span className='text-[#333333]'>Computación</span>
        </div>
      </div>
      <div className='shadowed flex h-[170px] w-[170px] flex-col items-center justify-center gap-[10px] bg-white'>
        <div className='mt-4 h-[48px] w-[48px]'>
          <Shirt />
        </div>
        <div className='flex h-[35px] justify-start px-[13px] text-center text-[14px]'>
          <span className='text-[#333333]'>Ropa y Accesorios</span>
        </div>
      </div>
      <div className='shadowed flex h-[170px] w-[170px] flex-col items-center justify-center gap-[10px] bg-white'>
        <div className='mt-4 h-[48px] w-[48px]'>
          <Sofa />
        </div>
        <div className='flex h-[35px] justify-start px-[13px] text-center text-[14px]'>
          <span className='text-[#333333]'>Hogar y Muebles</span>
        </div>
      </div>
      <div className='shadowed flex h-[170px] w-[170px] flex-col items-center justify-center gap-[10px] bg-white'>
        <div className='mt-4 h-[48px] w-[48px]'>
          <Handlebar />
        </div>
        <div className='flex h-[35px] justify-start px-[13px] text-center text-[14px]'>
          <span className='text-[#333333]'>Accesorios para Vehículos</span>
        </div>
      </div>
      <div className='shadowed flex h-[170px] w-[170px] flex-col items-center justify-center gap-[10px] bg-white'>
        <div className='mt-4 h-[48px] w-[48px]'>
          <Stove />
        </div>
        <div className='flex h-[35px] justify-start px-[13px] text-center text-[14px]'>
          <span className='text-[#333333]'>Electrodomésticos</span>
        </div>
      </div>
      <div className='shadowed flex h-[170px] w-[170px] flex-col items-center justify-center gap-[10px] bg-white'>
        <div className='mt-4 h-[48px] w-[48px]'>
          <Camera />
        </div>
        <div className='flex h-[35px] justify-start px-[13px] text-center text-[14px]'>
          <span className='text-[#333333]'>Cámaras y Accesorios</span>
        </div>
      </div>
      <div className='shadowed flex h-[170px] w-[170px] flex-col items-center justify-center gap-[10px] bg-white'>
        <div className='mt-4 h-[48px] w-[48px]'>
          <Phone />
        </div>
        <div className='flex h-[35px] justify-start px-[13px] text-center text-[14px]'>
          <span className='text-[#333333]'>Celulares y Teléfonos</span>
        </div>
      </div>
      <div className='shadowed flex h-[170px] w-[170px] flex-col items-center justify-center gap-[10px] bg-white'>
        <div className='mt-4 h-[48px] w-[48px]'>
          <LipStick />
        </div>
        <div className='flex h-[35px] justify-start px-[13px] text-center text-[14px]'>
          <span className='text-[#333333]'>Belleza y Cuidado Personal</span>
        </div>
      </div>
      <div className='shadowed flex h-[170px] w-[170px] flex-col items-center justify-center gap-[10px] bg-white'>
        <div className='mt-4 h-[48px] w-[48px]'>
          <Ball />
        </div>
        <div className='flex h-[35px] justify-start px-[13px] text-center text-[14px]'>
          <span className='text-[#333333]'>Deportes y Fitness</span>
        </div>
      </div>
      <div className='shadowed flex h-[170px] w-[170px] flex-col items-center justify-center gap-[10px] bg-white'>
        <div className='mt-4 h-[48px] w-[48px]'>
          <Mic />
        </div>
        <div className='flex h-[35px] justify-start px-[13px] text-center text-[14px]'>
          <span className='text-[#333333]'>Electrónica, Audio y Video</span>
        </div>
      </div>
      <div className='shadowed flex h-[170px] w-[170px] flex-col items-center justify-center gap-[10px] bg-white'>
        <div className='mt-4 h-[48px] w-[48px]'>
          <Controller />
        </div>
        <div className='flex h-[35px] justify-start px-[13px] text-center text-[14px]'>
          <span className='text-[#333333]'>Consolas y Videojuegos</span>
        </div>
      </div>
      <div className='shadowed flex h-[170px] w-[170px] flex-col items-center justify-center gap-[10px] bg-white'>
        <div className='mt-4 h-[48px] w-[48px]'>
          <Bear />
        </div>
        <div className='flex h-[35px] justify-start px-[13px] text-center text-[14px]'>
          <span className='text-[#333333]'>Juegos y Juguetes</span>
        </div>
      </div>
      <div className='shadowed flex h-[170px] w-[170px] flex-col items-center justify-center gap-[10px] bg-white'>
        <div className='mt-4 h-[48px] w-[48px]'>
          <Spanner />
        </div>
        <div className='flex h-[35px] justify-start px-[13px] text-center text-[14px]'>
          <span className='text-[#333333]'>Herramientas</span>
        </div>
      </div>
    </div>
  </section>
);
export { Categories };

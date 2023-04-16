import { CategoryCard } from '@components/CategoryCard';
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
      <CategoryCard icon={<Car />} title='Carros, Motos y Otros' />
      <CategoryCard icon={<Monitor />} title='Computación' />
      <CategoryCard icon={<Shirt />} title='Ropa y Accesorios' />
      <CategoryCard icon={<Sofa />} title='Hogar y Muebles' />
      <CategoryCard icon={<Handlebar />} title='Accesorios para Vehículos' />
      <CategoryCard icon={<Stove />} title='Electrodomésticos' />
      <CategoryCard icon={<Camera />} title='Cámaras y Accesorios' />
      <CategoryCard icon={<Phone />} title='Celulares y Teléfonos' />
      <CategoryCard icon={<LipStick />} title='Belleza y Cuidado Personal' />
      <CategoryCard icon={<Ball />} title='Deportes y Fitness' />
      <CategoryCard icon={<Mic />} title='Electrónica, Audio y Video' />
      <CategoryCard icon={<Controller />} title='Consolas y Videojuegos' />
      <CategoryCard icon={<Bear />} title='Juegos y Juguetes' />
      <CategoryCard icon={<Spanner />} title='Herramientas' />
    </div>
  </section>
);
export { Categories };

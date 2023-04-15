const Info = () => (
  <section className='mb-[24px] min-h-[156px] max-w-[1180px] xs:w-[320px] sm:w-[500px] xl:w-full'>
    <section
      className='flex flex-col gap-2 py-4'
      style={{ borderBottom: '1px solid #e6e6e6' }}
    >
      <div className='flex flex-wrap gap-[20px] xs:justify-center md:justify-start'>
        <span className='text-xs font-medium text-[#333333]'>
          Trabaja con nosotros
        </span>
        <span className='text-xs font-medium text-[#333333]'>
          Términos y condiciones
        </span>
        <span className='text-xs font-medium text-[#333333]'>
          Cómo cuidamos tu privacidad
        </span>
        <span className='text-xs font-medium text-[#333333]'>
          Accesibilidad
        </span>
        <span className='text-xs font-medium text-[#333333]'>Ayuda / PQR</span>
        <span className='text-xs font-medium text-[#333333]'>
          www.sic.gov.co
        </span>
      </div>
      <div className='mt-[7px] text-xs font-normal text-[#999999] xs:justify-center md:justify-start'>
        <span>Copyright © 1999-2023 MercadoLibre Colombia LTDA.</span>
      </div>
      <div className='text-xs font-normal text-[#999999] xs:justify-center md:justify-start'>
        <span>Carrera 17 Numero 93 - 09 Piso 3, Bogotá D.C., Colombia</span>
      </div>
    </section>
    <section className='flex flex-row items-center gap-[20px]'>
      <img
        src='/images/footer/sic.png'
        alt='Logo SIC'
        className='h-[30px] w-[141px]'
      />
      <img
        src='/images/footer/pum.png'
        alt='Logo PUM'
        className='h-[34px] w-[200px]'
      />
    </section>
  </section>
);
export { Info };

import { SectionTitle } from '@components/SectionTitle';

const Categories = () => (
  <section className='mb-[18px] mt-[54px] max-w-[1200px] xs:w-[300px] sm:w-[500px] xl:w-full'>
    <SectionTitle title='Categorías populares' />
    <div className='grid grid-cols-2 gap-[1px] md:grid-cols-3 xl:grid-cols-7'>
      <div className='shadowed flex h-[170px] w-[170px] flex-col items-center justify-center gap-[10px] bg-white'>
        <div className='mt-4 h-[48px] w-[48px]'>
          <svg
            className='m-auto block'
            width='45'
            height='40'
            viewBox='0 0 45 40'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M40.5 16.375L38.731 3.111C38.599 2.117 37.751 1.375 36.749 1.375H8.251C7.249 1.375 6.401 2.117 6.269 3.111L4.5 16.375'
              stroke='#3483FA'
              strokeMiterlimit='10'
            />
            <path
              d='M12.5 33.375V39.375H3.5V33.375'
              stroke='#3483FA'
              strokeMiterlimit='10'
              strokeLinecap='square'
            />
            <path
              d='M41.5 33.375V39.375H32.5V33.375'
              stroke='#3483FA'
              strokeMiterlimit='10'
              strokeLinecap='square'
            />
            <path
              d='M44.5 33.375H0.5V22.778C0.5 21.87 0.809 20.988 1.377 20.279L4.5 16.375H40.5L43.623 20.279C44.191 20.989 44.5 21.87 44.5 22.778V33.375Z'
              stroke='#3483FA'
              strokeMiterlimit='10'
              strokeLinecap='square'
            />
            <path
              d='M36.5 28.375C38.1569 28.375 39.5 27.0319 39.5 25.375C39.5 23.7181 38.1569 22.375 36.5 22.375C34.8431 22.375 33.5 23.7181 33.5 25.375C33.5 27.0319 34.8431 28.375 36.5 28.375Z'
              stroke='#3483FA'
              strokeMiterlimit='10'
              strokeLinecap='square'
            />
            <path
              d='M8.5 28.375C10.1569 28.375 11.5 27.0319 11.5 25.375C11.5 23.7181 10.1569 22.375 8.5 22.375C6.84315 22.375 5.5 23.7181 5.5 25.375C5.5 27.0319 6.84315 28.375 8.5 28.375Z'
              stroke='#3483FA'
              strokeMiterlimit='10'
              strokeLinecap='square'
            />
            <path
              d='M19.5 25.375H25.5'
              stroke='#3483FA'
              strokeMiterlimit='10'
              strokeLinecap='square'
            />
          </svg>
        </div>
        <div className='flex h-[35px] justify-start px-[13px] text-center text-[14px]'>
          <span className='text-[#333333]'>Carros, Motos y Otros</span>
        </div>
      </div>
      <div className='shadowed flex h-[170px] w-[170px] flex-col items-center justify-center gap-[10px] bg-white'>
        <div className='mt-4 h-[48px] w-[48px]'>
          <svg
            className='m-auto block'
            width='45'
            height='43'
            viewBox='0 0 45 43'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M22.5 39.375V33.375'
              stroke='#3483FA'
              strokeMiterlimit='10'
              strokeLinecap='square'
            />
            <path
              d='M10.5 41.375C10.5 41.375 15.5 39.375 22.5 39.375C29.5 39.375 34.5 41.375 34.5 41.375'
              stroke='#3483FA'
              strokeMiterlimit='10'
              strokeLinecap='square'
            />
            <path
              d='M44.5 1.375H0.5V33.375H44.5V1.375Z'
              stroke='#3483FA'
              strokeMiterlimit='10'
              strokeLinecap='square'
            />
            <path
              d='M0.5 27.375H44.5'
              stroke='#3483FA'
              strokeMiterlimit='10'
              strokeLinecap='square'
            />
          </svg>
        </div>
        <div className='flex h-[35px] justify-start px-[13px] text-center text-[14px]'>
          <span className='text-[#333333]'>Computación</span>
        </div>
      </div>
      <div className='shadowed flex h-[170px] w-[170px] flex-col items-center justify-center gap-[10px] bg-white'>
        <div className='mt-4 h-[48px] w-[48px]'>
          <svg
            className='m-auto block'
            width='45'
            height='42'
            viewBox='0 0 45 42'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M30.5 1.375C30.5 5.775 26.9 9.375 22.5 9.375C18.1 9.375 14.5 5.775 14.5 1.375H8.5L0.5 5.375V17.375H8.5V41.375H36.5V17.375H44.5V5.375L36.5 1.375H30.5Z'
              stroke='#3483FA'
              strokeMiterlimit='10'
              strokeLinecap='square'
            />
          </svg>
        </div>
        <div className='flex h-[35px] justify-start px-[13px] text-center text-[14px]'>
          <span className='text-[#333333]'>Ropa y Accesorios</span>
        </div>
      </div>
      <div className='shadowed flex h-[170px] w-[170px] flex-col items-center justify-center gap-[10px] bg-white'>
        <div className='mt-4 h-[48px] w-[48px]'>
          <svg
            className='m-auto block'
            width='45'
            height='46'
            viewBox='0 0 45 46'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M6.5 45.375V41.375'
              stroke='#3483FA'
              strokeMiterlimit='10'
              strokeLinecap='square'
            />
            <path
              d='M38.5 45.375V41.375'
              stroke='#3483FA'
              strokeMiterlimit='10'
              strokeLinecap='square'
            />
            <path
              d='M38.5 22.475V5.375C38.5 3.175 36.7 1.375 34.5 1.375H10.5C8.3 1.375 6.5 3.175 6.5 5.375V22.475'
              stroke='#3483FA'
              strokeMiterlimit='10'
            />
            <path
              d='M44.5 41.375V27.375C44.5 24.575 42.3 22.375 39.5 22.375C36.7 22.375 34.5 24.575 34.5 27.375V31.375H10.5V27.375C10.5 24.575 8.3 22.375 5.5 22.375C2.7 22.375 0.5 24.575 0.5 27.375V41.375H44.5Z'
              stroke='#3483FA'
              strokeMiterlimit='10'
              strokeLinecap='square'
            />
          </svg>
        </div>
        <div className='flex h-[35px] justify-start px-[13px] text-center text-[14px]'>
          <span className='text-[#333333]'>Hogar y Muebles</span>
        </div>
      </div>
      <div className='shadowed flex h-[170px] w-[170px] flex-col items-center justify-center gap-[10px] bg-white'>
        <div className='mt-4 h-[48px] w-[48px]'>
          <svg
            className='m-auto block'
            width='45'
            height='46'
            viewBox='0 0 45 46'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M5.52023 22.5386C12.5098 25.7385 17.6637 32.2535 19.1032 40.0356'
              stroke='#3483FA'
              strokeMiterlimit='10'
            />
            <path
              d='M39.4798 22.5386C32.4902 25.7385 27.3363 32.2535 25.8968 40.0356'
              stroke='#3483FA'
              strokeMiterlimit='10'
            />
            <path
              d='M6.58936 17.375C6.58936 17.375 14.563 16.375 22.5003 16.375C30.4375 16.375 38.4108 17.375 38.4108 17.375'
              stroke='#3483FA'
              strokeMiterlimit='10'
            />
            <path
              d='M22.5 45.375C34.6503 45.375 44.5 35.5253 44.5 23.375C44.5 11.2247 34.6503 1.375 22.5 1.375C10.3497 1.375 0.5 11.2247 0.5 23.375C0.5 35.5253 10.3497 45.375 22.5 45.375Z'
              stroke='#3483FA'
              strokeMiterlimit='10'
              strokeLinecap='square'
            />
            <path
              d='M22.5 40.375C31.8888 40.375 39.5 32.7638 39.5 23.375C39.5 13.9862 31.8888 6.375 22.5 6.375C13.1112 6.375 5.5 13.9862 5.5 23.375C5.5 32.7638 13.1112 40.375 22.5 40.375Z'
              stroke='#3483FA'
              strokeMiterlimit='10'
              strokeLinecap='square'
            />
            <path
              d='M22.5 29.375C24.7091 29.375 26.5 27.5841 26.5 25.375C26.5 23.1659 24.7091 21.375 22.5 21.375C20.2909 21.375 18.5 23.1659 18.5 25.375C18.5 27.5841 20.2909 29.375 22.5 29.375Z'
              stroke='#3483FA'
              strokeMiterlimit='10'
              strokeLinecap='square'
            />
          </svg>
        </div>
        <div className='flex h-[35px] justify-start px-[13px] text-center text-[14px]'>
          <span className='text-[#333333]'>Accesorios para Vehículos</span>
        </div>
      </div>
      <div className='shadowed flex h-[170px] w-[170px] flex-col items-center justify-center gap-[10px] bg-white'>
        <div className='mt-4 h-[48px] w-[48px]'>
          <svg
            className='m-auto block'
            width='45'
            height='46'
            viewBox='0 0 45 46'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M44.5 1.375H0.5V45.375H44.5V1.375Z'
              stroke='#3483FA'
              strokeMiterlimit='10'
              strokeLinecap='square'
            />
            <path
              d='M37.5 17.375H7.5V38.375H37.5V17.375Z'
              stroke='#3483FA'
              strokeMiterlimit='10'
              strokeLinecap='square'
            />
            <path
              d='M28.5 25.375V27.375H16.5V25.375'
              stroke='#3483FA'
              strokeMiterlimit='10'
              strokeLinecap='square'
            />
            <path
              d='M22.5 11.375C23.6046 11.375 24.5 10.4796 24.5 9.375C24.5 8.27043 23.6046 7.375 22.5 7.375C21.3954 7.375 20.5 8.27043 20.5 9.375C20.5 10.4796 21.3954 11.375 22.5 11.375Z'
              stroke='#3483FA'
              strokeMiterlimit='10'
              strokeLinecap='square'
            />
            <path
              d='M9.5 11.375C10.6046 11.375 11.5 10.4796 11.5 9.375C11.5 8.27043 10.6046 7.375 9.5 7.375C8.39543 7.375 7.5 8.27043 7.5 9.375C7.5 10.4796 8.39543 11.375 9.5 11.375Z'
              stroke='#3483FA'
              strokeMiterlimit='10'
              strokeLinecap='square'
            />
            <path
              d='M35.5 11.375C36.6046 11.375 37.5 10.4796 37.5 9.375C37.5 8.27043 36.6046 7.375 35.5 7.375C34.3954 7.375 33.5 8.27043 33.5 9.375C33.5 10.4796 34.3954 11.375 35.5 11.375Z'
              stroke='#3483FA'
              strokeMiterlimit='10'
              strokeLinecap='square'
            />
          </svg>
        </div>
        <div className='flex h-[35px] justify-start px-[13px] text-center text-[14px]'>
          <span className='text-[#333333]'>Electrodomésticos</span>
        </div>
      </div>
      <div className='shadowed flex h-[170px] w-[170px] flex-col items-center justify-center gap-[10px] bg-white'>
        <div className='mt-4 h-[48px] w-[48px]'>
          <svg
            className='m-auto block'
            width='45'
            height='40'
            viewBox='0 0 45 40'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M5.5 2.375H10.5'
              stroke='#3483FA'
              strokeMiterlimit='10'
              strokeLinecap='square'
            />
            <path
              d='M3.5 39.375H41.5C43.157 39.375 44.5 38.032 44.5 36.375V10.375C44.5 8.718 43.157 7.375 41.5 7.375H33.5L29.501 1.375H19.5L15.5 7.375H3.5C1.843 7.375 0.5 8.718 0.5 10.375V36.375C0.5 38.032 1.843 39.375 3.5 39.375Z'
              stroke='#3483FA'
              strokeMiterlimit='10'
              strokeLinecap='square'
            />
            <path
              d='M24.5 33.375C30.0228 33.375 34.5 28.8978 34.5 23.375C34.5 17.8522 30.0228 13.375 24.5 13.375C18.9772 13.375 14.5 17.8522 14.5 23.375C14.5 28.8978 18.9772 33.375 24.5 33.375Z'
              stroke='#3483FA'
              strokeMiterlimit='10'
              strokeLinecap='square'
            />
            <path
              d='M8.5 16.375C9.05228 16.375 9.5 15.9273 9.5 15.375C9.5 14.8227 9.05228 14.375 8.5 14.375C7.94772 14.375 7.5 14.8227 7.5 15.375C7.5 15.9273 7.94772 16.375 8.5 16.375Z'
              stroke='#3483FA'
              strokeMiterlimit='10'
              strokeLinecap='square'
            />
            <path
              d='M8.5 16.375C9.05228 16.375 9.5 15.9273 9.5 15.375C9.5 14.8227 9.05228 14.375 8.5 14.375C7.94772 14.375 7.5 14.8227 7.5 15.375C7.5 15.9273 7.94772 16.375 8.5 16.375Z'
              fill='#3483FA'
            />
          </svg>
        </div>
        <div className='flex h-[35px] justify-start px-[13px] text-center text-[14px]'>
          <span className='text-[#333333]'>Cámaras y Accesorios</span>
        </div>
      </div>
      <div className='shadowed flex h-[170px] w-[170px] flex-col items-center justify-center gap-[10px] bg-white'>
        <div className='mt-4 h-[48px] w-[48px]'>
          <svg
            className='m-auto block'
            width='31'
            height='46'
            viewBox='0 0 31 46'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M0.5 11.375H30.5'
              stroke='#3483FA'
              strokeMiterlimit='10'
              strokeLinecap='square'
            />
            <path
              d='M0.5 33.375H30.5'
              stroke='#3483FA'
              strokeMiterlimit='10'
              strokeLinecap='square'
            />
            <path
              d='M26.5 45.375H4.5C2.291 45.375 0.5 43.584 0.5 41.375V5.375C0.5 3.166 2.291 1.375 4.5 1.375H26.5C28.709 1.375 30.5 3.166 30.5 5.375V41.375C30.5 43.584 28.709 45.375 26.5 45.375Z'
              stroke='#3483FA'
              strokeMiterlimit='10'
              strokeLinecap='square'
            />
            <path
              d='M13.5 6.375H17.5'
              stroke='#3483FA'
              strokeMiterlimit='10'
              strokeLinecap='square'
            />
          </svg>
        </div>
        <div className='flex h-[35px] justify-start px-[13px] text-center text-[14px]'>
          <span className='text-[#333333]'>Celulares y Teléfonos</span>
        </div>
      </div>
      <div className='shadowed flex h-[170px] w-[170px] flex-col items-center justify-center gap-[10px] bg-white'>
        <div className='mt-4 h-[48px] w-[48px]'>
          <svg
            className='m-auto block'
            width='25'
            height='46'
            viewBox='0 0 25 46'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M6.5 11.375C12.4 11.375 16.5 8.475 16.5 1.875'
              stroke='#3483FA'
              strokeMiterlimit='10'
            />
            <path
              d='M18.5 29.375V7.375C18.5 4.075 17.8 1.375 14.5 1.375C11.2 1.375 6.5 6.075 6.5 9.375V29.375'
              stroke='#3483FA'
              strokeMiterlimit='10'
              strokeLinecap='square'
            />
            <path
              d='M24.5 29.375H0.5V45.375H24.5V29.375Z'
              stroke='#3483FA'
              strokeMiterlimit='10'
              strokeLinecap='square'
            />
          </svg>
        </div>
        <div className='flex h-[35px] justify-start px-[13px] text-center text-[14px]'>
          <span className='text-[#333333]'>Belleza y Cuidado Personal</span>
        </div>
      </div>
      <div className='shadowed flex h-[170px] w-[170px] flex-col items-center justify-center gap-[10px] bg-white'>
        <div className='mt-4 h-[48px] w-[48px]'>
          <svg
            className='m-auto block'
            width='45'
            height='46'
            viewBox='0 0 45 46'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M14.5 2.875L22.5 8.875L30.5 2.875'
              stroke='#3483FA'
              strokeMiterlimit='10'
            />
            <path
              d='M0.5 24.6751L8.7 18.8751L5.5 9.4751'
              stroke='#3483FA'
              strokeMiterlimit='10'
            />
            <path
              d='M16.9 44.6749L14 35.075L4 35.275'
              stroke='#3483FA'
              strokeMiterlimit='10'
            />
            <path
              d='M41 35.275L31 35.075L28.1 44.6749'
              stroke='#3483FA'
              strokeMiterlimit='10'
            />
            <path
              d='M39.5 9.4751L36.3 18.8751L44.5 24.6751'
              stroke='#3483FA'
              strokeMiterlimit='10'
            />
            <path
              d='M26.5 29.375H18.5L14.5 21.375L22.5 15.375L30.5 21.375L26.5 29.375Z'
              stroke='#3483FA'
              strokeMiterlimit='10'
              strokeLinecap='square'
            />
            <path
              d='M22.5 45.375C34.6503 45.375 44.5 35.5253 44.5 23.375C44.5 11.2247 34.6503 1.375 22.5 1.375C10.3497 1.375 0.5 11.2247 0.5 23.375C0.5 35.5253 10.3497 45.375 22.5 45.375Z'
              stroke='#3483FA'
              strokeMiterlimit='10'
              strokeLinecap='square'
            />
          </svg>
        </div>
        <div className='flex h-[35px] justify-start px-[13px] text-center text-[14px]'>
          <span className='text-[#333333]'>Deportes y Fitness</span>
        </div>
      </div>
      <div className='shadowed flex h-[170px] w-[170px] flex-col items-center justify-center gap-[10px] bg-white'>
        <div className='mt-4 h-[48px] w-[48px]'>
          <svg
            className='m-auto block'
            width='33'
            height='46'
            viewBox='0 0 33 46'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M16.5 31.375C10.977 31.375 6.5 26.898 6.5 21.375V11.375C6.5 5.852 10.977 1.375 16.5 1.375C22.023 1.375 26.5 5.852 26.5 11.375V21.375C26.5 26.898 22.023 31.375 16.5 31.375Z'
              stroke='#3483FA'
              strokeMiterlimit='10'
              strokeLinecap='square'
            />
            <path
              d='M6.5 45.375H26.5'
              stroke='#3483FA'
              strokeMiterlimit='10'
              strokeLinecap='square'
            />
            <path
              d='M16.5 37.375V45.375'
              stroke='#3483FA'
              strokeMiterlimit='10'
              strokeLinecap='square'
            />
            <path
              d='M32.5 21.375C32.5 30.212 25.337 37.375 16.5 37.375C7.663 37.375 0.5 30.212 0.5 21.375'
              stroke='#3483FA'
              strokeMiterlimit='10'
              strokeLinecap='square'
            />
            <path
              d='M6.5 13.375H11.5'
              stroke='#3483FA'
              strokeMiterlimit='10'
              strokeLinecap='square'
            />
            <path
              d='M6.5 20.375H11.5'
              stroke='#3483FA'
              strokeMiterlimit='10'
              strokeLinecap='square'
            />
            <path
              d='M21.5 13.375H26.5'
              stroke='#3483FA'
              strokeMiterlimit='10'
              strokeLinecap='square'
            />
            <path
              d='M21.5 20.375H26.5'
              stroke='#3483FA'
              strokeMiterlimit='10'
              strokeLinecap='square'
            />
          </svg>
        </div>
        <div className='flex h-[35px] justify-start px-[13px] text-center text-[14px]'>
          <span className='text-[#333333]'>Electrónica, Audio y Video</span>
        </div>
      </div>
      <div className='shadowed flex h-[170px] w-[170px] flex-col items-center justify-center gap-[10px] bg-white'>
        <div className='mt-4 h-[48px] w-[48px]'>
          <svg
            className='m-auto block'
            width='45'
            height='40'
            viewBox='0 0 45 40'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M37 29.375C37.8284 29.375 38.5 28.7034 38.5 27.875C38.5 27.0466 37.8284 26.375 37 26.375C36.1716 26.375 35.5 27.0466 35.5 27.875C35.5 28.7034 36.1716 29.375 37 29.375Z'
              fill='#3483FA'
            />
            <path
              d='M33 33.375C33.8284 33.375 34.5 32.7034 34.5 31.875C34.5 31.0466 33.8284 30.375 33 30.375C32.1716 30.375 31.5 31.0466 31.5 31.875C31.5 32.7034 32.1716 33.375 33 33.375Z'
              fill='#3483FA'
            />
            <path
              d='M34.5 19.375H10.5C4.977 19.375 0.5 23.852 0.5 29.375C0.5 34.898 4.977 39.375 10.5 39.375C14.598 39.375 18.111 36.904 19.656 33.375H25.344C26.888 36.904 30.401 39.375 34.5 39.375C40.023 39.375 44.5 34.898 44.5 29.375C44.5 23.852 40.023 19.375 34.5 19.375Z'
              stroke='#3483FA'
              strokeMiterlimit='10'
              strokeLinecap='square'
            />
            <path
              d='M10.5 25.375V33.375'
              stroke='#3483FA'
              strokeMiterlimit='10'
              strokeLinecap='square'
            />
            <path
              d='M6.5 29.375H14.5'
              stroke='#3483FA'
              strokeMiterlimit='10'
              strokeLinecap='square'
            />
            <path
              d='M22.5 13.375V1.375'
              stroke='#3483FA'
              strokeMiterlimit='10'
              strokeLinecap='square'
            />
          </svg>
        </div>
        <div className='flex h-[35px] justify-start px-[13px] text-center text-[14px]'>
          <span className='text-[#333333]'>Consolas y Videojuegos</span>
        </div>
      </div>
      <div className='shadowed flex h-[170px] w-[170px] flex-col items-center justify-center gap-[10px] bg-white'>
        <div className='mt-4 h-[48px] w-[48px]'>
          <svg
            className='m-auto block'
            width='45'
            height='46'
            viewBox='0 0 45 46'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M22.5 45.375C33.5457 45.375 42.5 36.4207 42.5 25.375C42.5 14.3293 33.5457 5.375 22.5 5.375C11.4543 5.375 2.5 14.3293 2.5 25.375C2.5 36.4207 11.4543 45.375 22.5 45.375Z'
              stroke='#3483FA'
              strokeMiterlimit='10'
              strokeLinecap='square'
            />
            <path
              d='M22.5 32.375L25.5 28.375H19.5L22.5 32.375Z'
              stroke='#3483FA'
              strokeMiterlimit='10'
              strokeLinecap='square'
            />
            <path
              d='M22.5 32.375L25.5 28.375H19.5L22.5 32.375Z'
              fill='#3483FA'
            />
            <path
              d='M22.5 32.375V36.375'
              stroke='#3483FA'
              strokeMiterlimit='10'
              strokeLinecap='square'
            />
            <path
              d='M18.5 36.375H26.5'
              stroke='#3483FA'
              strokeMiterlimit='10'
              strokeLinecap='square'
            />
            <path
              d='M15.5 23.375C16.6046 23.375 17.5 22.4796 17.5 21.375C17.5 20.2704 16.6046 19.375 15.5 19.375C14.3954 19.375 13.5 20.2704 13.5 21.375C13.5 22.4796 14.3954 23.375 15.5 23.375Z'
              fill='#3483FA'
            />
            <path
              d='M29.5 23.375C30.6046 23.375 31.5 22.4796 31.5 21.375C31.5 20.2704 30.6046 19.375 29.5 19.375C28.3954 19.375 27.5 20.2704 27.5 21.375C27.5 22.4796 28.3954 23.375 29.5 23.375Z'
              fill='#3483FA'
            />
            <path
              d='M12.442 8.085C12.471 7.846 12.5 7.622 12.5 7.375C12.5 4.061 9.814 1.375 6.5 1.375C3.186 1.375 0.5 4.061 0.5 7.375C0.5 10.689 3.186 13.375 6.5 13.375'
              stroke='#3483FA'
              strokeMiterlimit='10'
            />
            <path
              d='M32.558 8.085C32.529 7.846 32.5 7.622 32.5 7.375C32.5 4.061 35.186 1.375 38.5 1.375C41.814 1.375 44.5 4.061 44.5 7.375C44.5 10.689 41.814 13.375 38.5 13.375'
              stroke='#3483FA'
              strokeMiterlimit='10'
            />
          </svg>
        </div>
        <div className='flex h-[35px] justify-start px-[13px] text-center text-[14px]'>
          <span className='text-[#333333]'>Juegos y Juguetes</span>
        </div>
      </div>
      <div className='shadowed flex h-[170px] w-[170px] flex-col items-center justify-center gap-[10px] bg-white'>
        <div className='mt-4 h-[48px] w-[48px]'>
          <svg
            className='m-auto block'
            width='45'
            height='45'
            viewBox='0 0 45 45'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M43 8.97509L37.1 14.8751L30 7.77509L35.9 1.87509C34.5 1.47509 33.1 1.27509 31.5 1.37509C25.9 1.87509 21.4 6.87509 21.5 12.4751C21.5 13.5751 21.7 14.6751 22 15.6751L2.80001 32.6751C-0.0999887 35.1751 -0.199989 39.6751 2.50001 42.3751C5.20001 45.0751 9.60001 44.9751 12.2 42.0751L29.2 22.8751C30.9 23.3751 32.8 23.5751 34.8 23.1751C38.8 22.3751 42.1 19.3751 43.2 15.4751C43.7 13.1751 43.6 10.9751 43 8.97509Z'
              stroke='#3483FA'
              strokeMiterlimit='10'
              strokeLinecap='square'
            />
          </svg>
        </div>
        <div className='flex h-[35px] justify-start px-[13px] text-center text-[14px]'>
          <span className='text-[#333333]'>Herramientas</span>
        </div>
      </div>
    </div>
  </section>
);
export { Categories };

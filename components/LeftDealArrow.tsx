const LeftDealArrow = ({ onClick, className }: any) => (
  <button
    className={`${
      className ? className : ''
    } carousel-arrow absolute -left-[50px] bottom-[130px] flex h-[80px] w-[80px] items-center justify-center rounded-[50%] bg-white md:h-[109px] md:w-[109px]`}
    onClick={onClick}
  >
    <svg
      width='25'
      height='43'
      viewBox='0 0 25 43'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M0.881237 23.3674C-0.290639 22.2088 -0.290639 20.3273 0.881237 19.1688L18.8812 1.37331C20.0531 0.214748 21.9562 0.214748 23.1281 1.37331C24.3 2.53186 24.3 4.41336 23.1281 5.57192L7.24686 21.2727L23.1187 36.9735C24.2906 38.132 24.2906 40.0135 23.1187 41.1721C21.9469 42.3307 20.0437 42.3307 18.8719 41.1721L0.871862 23.3766L0.881237 23.3674Z'
        fill='#3483FA'
      />
    </svg>
  </button>
);
export { LeftDealArrow };

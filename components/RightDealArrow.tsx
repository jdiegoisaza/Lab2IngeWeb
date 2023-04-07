const RightDealArrow = ({ onClick, className }: any) => (
  <button
    className={`${
      className ? className : ''
    } shadowed absolute -right-[50px] bottom-[130px] flex h-[80px] w-[80px] items-center justify-center rounded-[50%] bg-white md:h-[109px] md:w-[109px]`}
    onClick={() => onClick()}
  >
    <svg
      width='25'
      height='43'
      viewBox='0 0 25 43'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M24.1188 19.6326C25.2906 20.7912 25.2906 22.6727 24.1188 23.8312L6.11876 41.6267C4.94689 42.7853 3.04376 42.7853 1.87189 41.6267C0.700012 40.4681 0.700012 38.5866 1.87189 37.4281L17.7531 21.7273L1.88126 6.02652C0.709387 4.86796 0.709387 2.98646 1.88126 1.8279C3.05314 0.669345 4.95626 0.669345 6.12814 1.8279L24.1281 19.6234L24.1188 19.6326Z'
        fill='#3483FA'
      />
    </svg>
  </button>
);
export { RightDealArrow };

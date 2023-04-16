import { LeftChevron } from 'icons/main/deals/LeftChevron';

const LeftDealArrow = ({ onClick, className }: any) => (
  <button
    className={`${
      className ? className : ''
    } carousel-arrow absolute -left-[50px] bottom-[130px] flex h-[80px] w-[80px] items-center justify-center rounded-[50%] bg-white md:h-[109px] md:w-[109px]`}
    onClick={onClick}
  >
    <LeftChevron />
  </button>
);
export { LeftDealArrow };

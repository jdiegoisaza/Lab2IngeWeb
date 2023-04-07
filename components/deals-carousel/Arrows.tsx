import { LeftDealArrow } from '@components/LeftDealArrow';
import { RightDealArrow } from '@components/RightDealArrow';

interface ButtonGroupProps {
  previous?: () => void;
  next?: () => void;
}

const Arrows = ({ next, previous }: ButtonGroupProps) => (
  <div>
    <LeftDealArrow onClick={previous ? () => previous() : null} />
    <RightDealArrow onClick={next ? () => next() : null} />
  </div>
);
export { Arrows };

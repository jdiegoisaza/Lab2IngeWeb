interface PaymentMethodCardProps {
  icon: JSX.Element;
  title: string;
  viewMoreText: string;
  className: string;
}

const PaymentMethodCard = ({
  icon,
  title,
  viewMoreText,
  className,
}: PaymentMethodCardProps) => (
  <div className={className}>
    <div>{icon}</div>
    <div className='flex flex-col'>
      <span className='text-[17px]'>{title}</span>
      <span className='text-[13px] text-[#3483fa]'>{viewMoreText}</span>
    </div>
  </div>
);
export { PaymentMethodCard };

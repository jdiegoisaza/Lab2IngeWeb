interface CategoryCardProps {
  icon: JSX.Element;
  title: string;
}

const CategoryCard = ({ icon, title }: CategoryCardProps) => (
  <div className='shadowed flex h-[170px] w-[170px] flex-col items-center justify-center gap-[10px] bg-white'>
    <div className='mt-4 h-[48px] w-[48px]'>{icon}</div>
    <div className='flex h-[35px] justify-start px-[13px] text-center text-[14px]'>
      <span className='text-[#333333]'>{title}</span>
    </div>
  </div>
);
export { CategoryCard };

interface SectionTitleProps {
  title: string;
  subtitle: string;
}

const SectionTitle = ({ title, subtitle }: SectionTitleProps) => (
  <div className='flex h-full w-full items-baseline justify-start gap-2.5'>
    <span className='mr-2.5 text-[25px] font-thin text-[#666666]'>{title}</span>
    <a className='cursor-pointer text-sm font-normal text-[#3483fa] no-underline'>
      {subtitle}
    </a>
  </div>
);
export { SectionTitle };

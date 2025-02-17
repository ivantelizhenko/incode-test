type HeadingProps = {
  children: string;
  className?: string;
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
};

let style: string = ' ';

function Heading({ children, className, as: Tag }: HeadingProps) {
  if (Tag === 'h2') style = 'text-[2.4rem]';

  return <Tag className={style + ' ' + className}>{children}</Tag>;
}

export default Heading;

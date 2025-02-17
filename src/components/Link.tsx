import { ReactNode } from 'react';

type LinkProps = {
  className?: string;
  url: string;
  children: ReactNode;
};

const style = 'text-blue-400 hover:border-b hover:mb-[2px] w-fit h-fit ';

function Link({ className, children, url }: LinkProps) {
  return (
    <a href={url} target="_blank" className={style + ' ' + className}>
      {children}
    </a>
  );
}

export default Link;

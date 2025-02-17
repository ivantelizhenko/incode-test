import { ReactNode } from 'react';
import { useAppSelector } from '../store/hooks';

const style = 'button cursor-pointer border border-[#ccc] rounded-md';

function Button({
  className,
  children,
  onClick,
  type = 'button',
}: {
  className?: string;
  children: ReactNode;
  onClick?: (e: React.MouseEvent) => void;
  type?: 'button' | 'submit' | 'reset';
}) {
  const { isLoading } = useAppSelector(store => store.list);
  return (
    <button
      onClick={onClick}
      className={style + ' ' + className}
      type={type}
      disabled={isLoading}
    >
      {children}
    </button>
  );
}

export default Button;

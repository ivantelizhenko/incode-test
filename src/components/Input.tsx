import { ChangeEvent } from 'react';
import { useAppSelector } from '../store/hooks';

const style = 'input text-[1.6rem] p-[1.6rem] w-full ';

function Input({
  className,
  onChange,
}: {
  className?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}) {
  const { isLoading } = useAppSelector(store => store.board);

  return (
    <input
      type="text"
      placeholder="Enter repo URL"
      className={style + ' ' + className}
      onChange={onChange}
      disabled={isLoading}
    />
  );
}

export default Input;

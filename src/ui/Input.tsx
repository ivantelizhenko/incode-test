import { ChangeEvent } from 'react';

type InputProps = {
  className?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
};

const style = 'input text-[1.6rem] p-[1.6rem] w-full ';

function Input({ className, onChange, disabled = false }: InputProps) {
  return (
    <input
      type="text"
      placeholder="Enter repo URL"
      className={style + ' ' + className}
      onChange={onChange}
      disabled={disabled}
    />
  );
}

export default Input;

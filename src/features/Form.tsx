import { ChangeEvent, FormEvent, useState } from 'react';

import { useAppDispatch, useAppSelector } from '../store/hooks';
import { getIssues } from '../store/BoardSlice';

import Button from '../ui/Button';
import Input from '../ui/Input';

type FormProps = {
  className: string;
};

const style = 'flex gap-[2.4rem] ';

function Form({ className }: FormProps) {
  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector(store => store.board);
  const [requestObj, setRequestObj] = useState<{
    owner: string;
    repoName: string;
  }>({ owner: '', repoName: '' });

  function handleFetchIssues(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    dispatch(
      getIssues({ owner: requestObj.owner, repoName: requestObj.repoName })
    );
    e.currentTarget.reset();
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const data = e.target.value.replace('https://github.com/', '').split('/');

    if (data[0]) setRequestObj({ owner: data[0], repoName: data[1] });
  }

  return (
    <form className={style + ' ' + className} onSubmit={handleFetchIssues}>
      <Input onChange={handleChange} disabled={isLoading} />
      <Button type="submit" className="min-w-[20%]" disabled={isLoading}>
        Load issues
      </Button>
    </form>
  );
}

export default Form;

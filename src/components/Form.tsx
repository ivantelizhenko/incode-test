import { ChangeEvent, FormEvent, useState } from 'react';
import { useAppDispatch } from '../store/hooks';
import { getIssues } from '../store/ListSlice';
import Button from './Button';
import Input from './Input';

const style = 'flex gap-[2.4rem] ';

function Form({ className }: { className: string }) {
  const [requestObj, setRequestObj] = useState<{
    owner: string;
    repoName: string;
  }>({ owner: '', repoName: '' });
  const dispatch = useAppDispatch();

  function handleFetchIssues(e: FormEvent) {
    e.preventDefault();
    dispatch(
      getIssues({ owner: requestObj.owner, repoName: requestObj.repoName })
    );
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const data = e.target.value.replace('https://github.com/', '').split('/');

    if (data[0]) setRequestObj({ owner: data[0], repoName: data[1] });
  }

  return (
    <form className={style + ' ' + className} onSubmit={handleFetchIssues}>
      <Input onChange={handleChange} />
      <Button type="submit" className="min-w-[20%]">
        Load issues
      </Button>
    </form>
  );
}

export default Form;

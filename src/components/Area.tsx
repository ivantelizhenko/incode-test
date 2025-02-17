import { useAppSelector } from '../store/hooks';
import { AreaType } from '../store/ListSlice';

import Issue from './Issue';

const style =
  'flex flex-col gap-[2.4rem] p-[2.4rem] border border-[#333] bg-stone-200 items-center overflow-scroll ';

function Area({ className, type }: { className?: string; type: AreaType }) {
  const data = useAppSelector(store => store.list);
  const curList = data[`list${type}`];
  return (
    <div className={style + ' ' + className}>
      {curList?.map(issue => (
        <Issue key={issue.id} data={issue} />
      ))}
    </div>
  );
}

export default Area;

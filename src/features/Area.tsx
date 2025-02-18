import { useDrop } from 'react-dnd';

import { useAppDispatch, useAppSelector } from '../store/hooks';
import { changeColumn } from '../store/BoardSlice';

import Issue from './Issue';
import { AreaType } from '../utils/types';

type AreaProps = { className?: string; type: AreaType };

const style =
  'flex flex-col gap-[2.4rem] p-[2.4rem] border border-[#333] bg-stone-200 items-center overflow-scroll ';

function Area({ className, type }: AreaProps) {
  const dispatch = useAppDispatch();
  const data = useAppSelector(store => store.board);
  const curList = data[`list${type}`].toSorted((a, b) =>
    a.number > b.number ? 1 : -1
  );
  const [, drop] = useDrop(() => ({
    accept: Object.values(AreaType),
    drop: () => dispatch(changeColumn(type)),
  }));

  return (
    <div
      className={style + ' ' + className}
      ref={drop as unknown as React.RefCallback<HTMLDivElement>}
    >
      {curList?.map(issue => (
        <Issue key={issue.id} data={issue} type={type} />
      ))}
    </div>
  );
}

export default Area;

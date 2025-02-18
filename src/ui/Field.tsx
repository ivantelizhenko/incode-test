import Area from '../features/Area';
import Heading from './Heading';
import { AreaType } from '../utils/types';

type FieldProps = {
  title: string;
  type: string;
};

const style = 'flex flex-col gap-[1.2rem] w-full';

function Field({ title, type }: FieldProps) {
  return (
    <div className={style}>
      <Heading as="h2" className="text-center">
        {title}
      </Heading>
      <Area className="h-full" type={AreaType[type as keyof typeof AreaType]} />
    </div>
  );
}

export default Field;

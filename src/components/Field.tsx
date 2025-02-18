import { AreaType } from '../store/BoardSlice';
import Area from './Area';
import Heading from './Heading';

type FieldProps = {
  title: string;
};

function Field({ title }: FieldProps) {
  const type = title.replace(' ', '');
  return (
    <div className="flex flex-col gap-[1.2rem] w-full">
      <Heading as="h2" className="text-center">
        {title}
      </Heading>
      <Area className="h-full" type={AreaType[type as keyof typeof AreaType]} />
    </div>
  );
}

export default Field;

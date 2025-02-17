import Field from './Field';

function Fields() {
  return (
    <div className=" flex gap-[2.4rem] overflow-hidden h-full">
      <Field title="ToDo" />
      <Field title="In Progress" />
      <Field title="Done" />
    </div>
  );
}

export default Fields;

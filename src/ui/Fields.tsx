import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import Field from './Field';

function Fields() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className=" flex gap-[2.4rem] overflow-hidden h-full">
        <Field title="ToDo" type="ToDo" />
        <Field title="In Progress" type="InProgress" />
        <Field title="Done" type="Done" />
      </div>
    </DndProvider>
  );
}

export default Fields;

// comments: string;
// title: string;
// lastUpdate: string;
// number: string;
// author: string;
// id: string;
// status: 'open' | 'close';

import Heading from './Heading';
import { type Issue } from '../store/ListSlice';
import { format } from 'date-fns';

function Issue({ data }: { data: Issue }) {
  const { comments, title, lastUpdate, number, author, authorUrl } = data;
  const date = format(new Date(lastUpdate), 'MM/dd/yyyy');

  return (
    <div className="bg-white px-[1.6rem] py-[1.2rem] rounded-md w-full flex flex-col gap-[.75rem] text-[#777]">
      <Heading as="h3" className="text-[#333]!">
        {title}
      </Heading>
      <span>
        #{number} opened on {date}
      </span>
      <div className="flex w-full">
        <div className="card rounded-box grid  place-items-start w-fit">
          <a
            href={authorUrl}
            target="_blank"
            className="border-b-white border-b hover:border-b-inherit  "
          >
            {author}
          </a>
        </div>
        <div className="divider divider-horizontal divider-neutral before:w-[2px]"></div>
        <div className="card  rounded-box grid  place-items-start">
          {comments} coments
        </div>
      </div>
    </div>
  );
}

export default Issue;

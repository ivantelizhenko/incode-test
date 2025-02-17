import Form from './Form';

import Link from './Link';
import Stars from './Stars';

function Header() {
  return (
    <div className="grid grid-cols-[repeat(12,1fr)] grid-rows-2 gap-[1rem] ">
      <Form className="col-[1/-1]" />
      <Link url="#">Link name</Link>
      <Stars />
    </div>
  );
}

export default Header;

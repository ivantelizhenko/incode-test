import { ReactNode } from 'react';

function AppLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col py-[2.4rem] px-[2.4rem] h-screen w-[120rem] max-h-screen ">
      {children}
    </div>
  );
}

export default AppLayout;

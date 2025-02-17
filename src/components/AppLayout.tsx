import { ReactNode } from 'react';

function AppLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col py-[2.4rem] px-[2.4rem] h-screen gap-[2.4rem]">
      {children}
    </div>
  );
}

export default AppLayout;

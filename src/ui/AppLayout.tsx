import { ReactNode } from 'react';

type AppLayoutProps = { children: ReactNode };

const style =
  'flex flex-col py-[2.4rem] px-[2.4rem] h-screen w-[120rem] max-h-screen ';

function AppLayout({ children }: AppLayoutProps) {
  return <div className={style}>{children}</div>;
}

export default AppLayout;

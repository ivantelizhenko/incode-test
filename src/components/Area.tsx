const style = 'flex flex-col gap-[2.4rem] p-[2.4rem] ';

function Area({ className }: { className?: string }) {
  return <div className={style + ' ' + className}>Area</div>;
}

export default Area;

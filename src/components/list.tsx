import { ReactNode } from 'react';

export type ListProps<T> = {
  data?: T[];
  render: (item: T) => ReactNode;
  className?: string;
};

const List = <T,>(props: ListProps<T>) => {
  const { data, render, className } = props;
  if (!data || !data.length) {
    return (
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
        Empty data.
      </h3>
    );
  }

  const listClassName = className || '';
  return (
    <div
      className={`flex gap-4 flex-col items-center pb-7 max-w-7xl m-auto  ${listClassName}`}
    >
      <div className="flex gap-4  flex-col w-full">{data.map(render)}</div>
    </div>
  );
};

export default List;

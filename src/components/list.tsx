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
      <div className="flex flex-col justify-center items-center">
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
          No posts to display.
        </h4>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Create a new post now and share what&apos;s on your mind. #FirstPost
        </p>
      </div>
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

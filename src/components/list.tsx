import { ReactNode } from 'react';
import { Spinner } from './spinner';

export type ListProps<T> = {
  data?: T[];
  render: (item: T) => ReactNode;
  className?: string;
  isLoading?: boolean;
  isRefetching?: boolean;
  LoadingRender?: () => JSX.Element;
};

const List = <T,>(props: ListProps<T>) => {
  const {
    data, render, className, isLoading, isRefetching, LoadingRender
  } = props;

  if (isLoading && LoadingRender) {
    const filledArray = [...new Array(3)].map((_, i) => ({ i }));
    return (
      <div className="flex gap-4 flex-col items-center pb-7 max-w-7xl m-auto">
        <div className="flex gap-4  flex-col w-full">
          {filledArray.map((_, i) => (
            <LoadingRender key={i as unknown as string} />
          ))}
        </div>
      </div>
    );
  }

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
      {isRefetching && <Spinner />}
      <div className="flex gap-4  flex-col w-full">{data.map(render)}</div>
    </div>
  );
};

export default List;

export type IResponse<T> = {
  count: number;
  next: null;
  previous: null;
  results: T[];
};

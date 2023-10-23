import {
  Card, CardContent, CardHeader, CardTitle
} from './ui/card';
import { Skeleton } from './ui/skeleton';

export const CardSkeleton = () => (
  <Card>
    <CardHeader className="bg-primary hover:bg-primary/90 flex rounded-t-lg justify-between p-6 items-center">
      <CardTitle className="text-slate-100">
        <Skeleton className="h-4 mt-3 w-[200px]" />
      </CardTitle>
    </CardHeader>
    <CardContent>
      <div className="flex justify-between">
        <h4 className="mt-8 scroll-m-20 text-lg font-semibold tracking-tight text-gray-500">
          <Skeleton className="h-4 w-[95px] lg:w-[250px]" />
        </h4>
        <h4 className="mt-8 scroll-m-20 text-lg font-semibold tracking-tight text-gray-500">
          <Skeleton className="h-4 w-[50px] md:w-[100px]" />
        </h4>
      </div>
      <div className="leading-7 [&:not(:first-child)]:mt-3">
        <Skeleton className="h-4 mt-3" />
        <Skeleton className="h-4 mt-3" />
        <Skeleton className="h-4 mt-3 w-[200divx]" />
      </div>
    </CardContent>
  </Card>
);

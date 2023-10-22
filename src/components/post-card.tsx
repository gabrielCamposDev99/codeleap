import { Trash2, PenSquare } from 'lucide-react';
import {
  Card, CardContent, CardHeader, CardTitle
} from './ui/card';

export const PostCard = () => (
  <Card>
    <CardHeader className="bg-primary hover:bg-primary/90 flex rounded-t-lg justify-between p-6 items-center">
      <CardTitle className="text-slate-100">
        My First Post at CodeLeap Network!
      </CardTitle>
      <div className="flex justify-between gap-6">
        <PenSquare className="h-[2rem] w-[2rem] hover:cursor-pointer" />
        <Trash2 className="h-[2rem] w-[2rem] hover:cursor-pointer" />
      </div>
    </CardHeader>
    <CardContent>
      <div className="flex justify-between">
        <h4 className="mt-8 scroll-m-20 text-lg font-semibold tracking-tight text-gray-500">
          @GabrielCampos
        </h4>
        <h4 className="mt-8 scroll-m-20 text-lg font-semibold tracking-tight text-gray-500">
          2023-05-20
        </h4>
      </div>
      <p className="leading-7 [&:not(:first-child)]:mt-3">
        Jokester began sneaking into the castle in the middle of the night and
        leaving jokes all over the place: under the kings pillow, in his soup,
        even in the royal toilet. The king was furious, but he couldnt seem to
        stop Jokester.
      </p>
    </CardContent>
  </Card>
);

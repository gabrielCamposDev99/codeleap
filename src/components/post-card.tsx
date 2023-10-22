import { Trash2, PenSquare } from 'lucide-react';
import {
  Card, CardContent, CardHeader, CardTitle
} from './ui/card';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog';
import { PostForm } from './post-form';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from './ui/alert-dialog';
import { buttonVariants } from './ui/button';

export const PostCard = () => (
  <Card>
    <CardHeader className="bg-primary hover:bg-primary/90 flex rounded-t-lg justify-between p-6 items-center">
      <CardTitle className="text-slate-100">
        My First Post at CodeLeap Network!
      </CardTitle>
      <div className="flex justify-between gap-6">
        <Dialog>
          <DialogTrigger asChild>
            <PenSquare className="h-[2rem] w-[2rem] hover:cursor-pointer" />
          </DialogTrigger>
          <DialogContent className="sm:max-w-container">
            <DialogHeader>
              <DialogTitle>Edit Item</DialogTitle>
              <DialogDescription>
                Make changes to your post here. Click save when youre done.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <PostForm />
            </div>
          </DialogContent>
        </Dialog>

        <AlertDialog>
          <AlertDialogTrigger>
            <Trash2 className="h-[2rem] w-[2rem] hover:cursor-pointer" />
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction
                className={buttonVariants({ variant: 'destructive' })}
              >
                Continue
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
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

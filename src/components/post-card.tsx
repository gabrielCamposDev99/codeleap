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
import { PostType } from '@/validation/interfaces/IPost';
import { useAuth } from '@/contexts/AuthProvider';
import { formatDateByLocale } from '@/lib/utils';
import { EditPostForm } from '@/components/forms/post/edit-post-form';
import { useDeletePost } from '@/actions/api/postsApi/useDeletePost';

type PostCardProps = PostType;
export const PostCard = (props: PostCardProps) => {
  const { user } = useAuth();
  const {
    content,
    title,
    username,
    id,
    created_datetime: createdDateTime,
  } = props;

  const { deletePostMutate } = useDeletePost();

  return (
    <Card key={`${title}${id}`}>
      <CardHeader className="bg-primary hover:bg-primary/90 flex rounded-t-lg justify-between p-6 items-center">
        <CardTitle className="text-slate-100 line-clamp-1 w-5/6">
          {title}
        </CardTitle>
        {username === user?.username && (
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
                  <EditPostForm {...props} />
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
                    This action cannot be undone. This will permanently delete
                    your post from our servers.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction
                    className={buttonVariants({ variant: 'destructive' })}
                    onClick={() => deletePostMutate({ id })}
                  >
                    Continue
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        )}
      </CardHeader>
      <CardContent>
        <div className="flex justify-between">
          <h4 className="mt-8 scroll-m-20 text-lg font-semibold tracking-tight text-gray-500">
            @
            {username}
          </h4>
          <h4 className="mt-8 scroll-m-20 text-lg font-semibold tracking-tight text-gray-500">
            {formatDateByLocale(createdDateTime)}
          </h4>
        </div>
        <p className="leading-7 [&:not(:first-child)]:mt-3 break-words">
          {content}
        </p>
      </CardContent>
    </Card>
  );
};

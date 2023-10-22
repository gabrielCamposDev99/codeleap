import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { ModeToggle } from '@/components/mode-toggle';
import { Button } from '@/components/ui/button';
import {
  Card, CardContent, CardHeader, CardTitle
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { UserNav } from '@/components/user-nav';
import { postSchema } from '@/validation/schemas/post-schema';
import { useAuth } from '@/contexts/AuthProvider';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { PostType } from '@/validation/interfaces/IPost';
import { Textarea } from '@/components/ui/textarea';
import { PostCard } from '@/components/post-card';

const PostsView = () => {
  const { user } = useAuth();
  const postForm = useForm<z.infer<typeof postSchema>>({
    resolver: zodResolver(postSchema),
    mode: 'onChange',
    defaultValues: {
      username: user?.username,
    },
  });

  const onSubmit = (data: PostType) => data;

  return (
    <div>
      <div className=" flex-col md:flex bg-primary hover:bg-primary/90">
        <div className="container">
          <div className="flex min-h-16 items-center px-4">
            <h2 className="py-2 text-3xl font-bold tracking-tight text-slate-100">
              CodeLeap Network
            </h2>
            <div className="ml-auto flex items-center space-x-4">
              <ModeToggle />

              <UserNav />
            </div>
          </div>
        </div>
      </div>
      <div className="container flex-col mt-6">
        <Card>
          <CardHeader>
            <CardTitle>What’s on your mind?</CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...postForm}>
              <form onSubmit={postForm.handleSubmit(onSubmit)}>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <FormField
                      control={postForm.control}
                      name="title"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Title</FormLabel>
                          <FormControl>
                            <Input
                              required
                              placeholder="Hello World"
                              {...field}
                              value={field.value ?? ''}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="flex flex-col space-y-1.5">
                    <FormField
                      control={postForm.control}
                      name="content"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Content</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Content here"
                              {...field}
                              value={field.value ?? ''}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                <div className="flex justify-end pt-6">
                  <Button type="submit">Deploy</Button>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>

      <div className="container flex-col mt-6">
        <PostCard />
      </div>
    </div>
  );
};

export default PostsView;

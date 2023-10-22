import { UseFormReturn } from 'react-hook-form';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { CreatePostType } from '@/validation/interfaces/IPost';

type PostFormProps = {
  form: UseFormReturn<CreatePostType>;
  onSubmit: (data: CreatePostType) => void;
};

export const PostForm = (props: PostFormProps) => {
  const { form: postForm, onSubmit } = props;

  return (
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
          <Button type="submit" disabled={!postForm.formState.isValid}>
            Save
          </Button>
        </div>
      </form>
    </Form>
  );
};

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useAuth } from '@/contexts/AuthProvider';
import { postSchema } from '@/validation/schemas/post-schema';
import { PostType } from '@/validation/interfaces/IPost';
import { PostForm } from './partial/post-form';
import { useEditPost } from '@/actions/api/postsApi/useEditPost';

type EditPostFormProps = PostType;
export const EditPostForm = (props: EditPostFormProps) => {
  const { user } = useAuth();
  const { editPostMutate } = useEditPost();
  const { title, content, id } = props;
  const postForm = useForm<z.infer<typeof postSchema>>({
    resolver: zodResolver(postSchema),
    mode: 'onChange',
    defaultValues: {
      username: user?.username,
      content,
      title,
    },
  });

  const onSubmit = (data: Partial<PostType>) => {
    editPostMutate({ id, ...data });
    postForm.reset({ username: user?.username });
  };
  return <PostForm onSubmit={onSubmit} form={postForm} />;
};

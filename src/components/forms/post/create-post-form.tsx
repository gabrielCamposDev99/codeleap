import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useAuth } from '@/contexts/AuthProvider';
import { postSchema } from '@/validation/schemas/post-schema';
import { useCreatePost } from '@/actions/api/postsApi/useCreatePost';
import { CreatePostType } from '@/validation/interfaces/IPost';
import { PostForm } from './partial/post-form';

export const CreatePostForm = () => {
  const { user } = useAuth();
  const { createPostMutate } = useCreatePost();
  const postForm = useForm<z.infer<typeof postSchema>>({
    resolver: zodResolver(postSchema),
    mode: 'onChange',
    defaultValues: {
      username: user?.username,
    },
  });

  const onSubmit = (data: CreatePostType) => {
    createPostMutate(data);
    postForm.reset({ username: user?.username });
  };
  return <PostForm onSubmit={onSubmit} form={postForm} />;
};

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { createPost } from './createPost';

export function useCreatePost() {
  const queryClient = useQueryClient();

  const { mutate: createPostMutate, ...rest } = useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      toast('New Post successfully created ', { type: 'success' });
      queryClient.invalidateQueries({ queryKey: ['posts'] });
    },
  });

  return { ...rest, createPostMutate };
}

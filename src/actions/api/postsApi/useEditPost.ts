import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { PostType } from '@/validation/interfaces/IPost';
import { editPost } from './editPost';

export function useEditPost() {
  const queryClient = useQueryClient();

  const { mutate: editPostMutate, ...rest } = useMutation({
    mutationFn: (options: Partial<PostType>) => editPost(options),
    onSuccess: () => {
      toast('Post successfully Updated ', { type: 'success' });
      queryClient.invalidateQueries({ queryKey: ['posts'] });
    },
  });

  return { ...rest, editPostMutate };
}

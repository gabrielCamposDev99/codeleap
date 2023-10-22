import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { PostType } from '@/validation/interfaces/IPost';
import { deletePost } from './deletePost';

export function useDeletePost() {
  const queryClient = useQueryClient();

  const { mutate: deletePostMutate, ...rest } = useMutation({
    mutationFn: (id: Pick<PostType, 'id'>) => deletePost(id),
    onSuccess: () => {
      toast('Post successfully deleted. ', { type: 'success' });
      queryClient.invalidateQueries({ queryKey: ['posts'] });
    },
  });

  return { ...rest, deletePostMutate };
}

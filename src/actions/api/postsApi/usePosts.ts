import { useQuery } from '@tanstack/react-query';
import { getPosts } from './getPosts';

export function usePosts() {
  const {
    isLoading,
    data: posts,
    error,
  } = useQuery({
    queryKey: ['posts'],
    queryFn: getPosts,
  });

  return { isLoading, error, posts };
}

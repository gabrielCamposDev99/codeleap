import { useQuery } from '@tanstack/react-query';
import { getPosts } from './getPosts';

export function usePosts() {
  const { data: posts, ...rest } = useQuery({
    queryKey: ['posts'],
    queryFn: getPosts,
  });

  return { ...rest, posts };
}

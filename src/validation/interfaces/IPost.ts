import { z } from 'zod';
import { postSchema } from '../schemas/post-schema';

export type CreatePostType = Omit<PostType, 'id' | 'created_datetime'>;

export type PostType = z.infer<typeof postSchema> & {
  id: number;
  created_datetime: Date;
};

import { z } from 'zod';
import { postSchema } from '../schemas/post-schema';

export type PostType = z.infer<typeof postSchema>;

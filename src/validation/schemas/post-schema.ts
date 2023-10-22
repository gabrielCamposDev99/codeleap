import { z } from 'zod';

export const postSchema = z.object({
  title: z
    .string()
    .min(2, {
      message: 'Title must be at least 2 characters.',
    })
    .max(255, {
      message: 'Title must be at max 255 characters.',
    }),
  content: z
    .string()
    .min(1, {
      message: 'Content must be at least 1 characters.',
    })
    .max(255, {
      message: 'Content must be at max 255 characters.',
    }),
  username: z.string().min(2, {
    message: 'Username must be at least 1 characters.',
  }),
});

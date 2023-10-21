import { z } from 'zod';
import { userSchema } from '../schemas/user-schema';

export type UserType = z.infer<typeof userSchema>;

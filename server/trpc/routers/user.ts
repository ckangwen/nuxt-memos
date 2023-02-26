import { z } from "zod";
import { publicProcedure, router } from "../trpc";

const UserShape = z.object({
  id: z.number(),
  name: z.string(),
  username: z.string(),
  email: z.string(),
});

export type User = z.infer<typeof UserShape>;

export const userRouter = router({
  getUsers: publicProcedure.query(() => {
    return $fetch<User[]>(`https://jsonplaceholder.typicode.com/users`);
  }),
});

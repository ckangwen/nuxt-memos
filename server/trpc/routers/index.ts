import { router } from "../trpc";
import { userRouter } from "./user";

export const appTRPCRouter = router({
  user: userRouter,
});

export type AppTRPCRouter = typeof appTRPCRouter;

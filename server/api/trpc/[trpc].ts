import { createNuxtApiHandler } from "trpc-nuxt";
import { appTRPCRouter } from "../../trpc/routers/index";
import { createTRPCContext } from "../../trpc/trpc";

export default createNuxtApiHandler({
  router: appTRPCRouter,
  createContext: createTRPCContext,
});

import { initTRPC } from "@trpc/server";
import superjson from "superjson";
import type { H3Event } from "h3";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface TRPCGlobalContext {}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const createTRPCContext = (event: H3Event): TRPCGlobalContext => {
  return {};
};

const trpc = initTRPC.context<TRPCGlobalContext>().create({
  transformer: superjson,
});

export const { router } = trpc;
export const { middleware } = trpc;
export const publicProcedure = trpc.procedure;

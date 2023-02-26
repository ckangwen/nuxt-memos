import { createTRPCNuxtClient, httpBatchLink } from "trpc-nuxt/client";
import { loggerLink } from "@trpc/client";
import superjson from "superjson";
import { AppTRPCRouter } from "../server/trpc/routers/index";

export default defineNuxtPlugin(() => {
  const client = createTRPCNuxtClient<AppTRPCRouter>({
    transformer: superjson,
    links: [
      loggerLink({
        enabled: (opts) =>
          process.env.NODE_ENV === "development" ||
          (opts.direction === "down" && opts.result instanceof Error),
      }),
      httpBatchLink(),
    ],
  });

  return {
    provide: {
      client,
    },
  };
});

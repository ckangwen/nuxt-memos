import type { RouteMiddleware } from "nuxt/app";

type RouteLocationNormalized = Parameters<RouteMiddleware>[0];
/* eslint-disable consistent-return */
const handleAuth = (to: RouteLocationNormalized) => {
  if (to.path === "/auth") {
    return;
  }
  const user = useSupabaseUser();
  console.log("user.value", user.value);
  if (!user.value) {
    return navigateTo("/auth");
  }
};

export default defineNuxtRouteMiddleware((to) => {
  if (process.server) {
    return;
  }
  console.log("isHydrated.value", isHydrated.value);

  if (isHydrated.value) {
    return handleAuth(to);
  }

  onHydrated(() => handleAuth(to));
});

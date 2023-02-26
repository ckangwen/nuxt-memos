/* eslint-disable consistent-return */
const handleAuth = (to: RouteLocationNormalized) => {
  if (to.path === "/auth") {
    return;
  }
  console.log("currentUser.value?.token", currentUser.value?.token, to.path);
  if (!currentUser.value?.token) {
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

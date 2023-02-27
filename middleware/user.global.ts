import { useUser } from "~~/composables/user";

export default defineNuxtRouteMiddleware(() => {
  if (process.server) {
    return;
  }

  const { fetchUserInfo } = useUser();

  fetchUserInfo(true);
});

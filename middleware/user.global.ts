import { fetchUserInfo } from "~~/composables/user";

export default defineNuxtRouteMiddleware(() => {
  if (process.server) {
    return;
  }

  fetchUserInfo(true);
});

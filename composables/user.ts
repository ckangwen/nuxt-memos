export interface UserLogin {
  token?: string;
}
const STORAGE_KEY_USERS = "elk-users";

const initializeUser = () => {
  if (globalThis?.localStorage) {
    const storageValue = globalThis.localStorage.getItem(STORAGE_KEY_USERS);

    if (storageValue) {
      return JSON.parse(storageValue);
    }
  }

  return {};
};

export const currentUser = ref<UserLogin>(initializeUser());

export const fetchUserInfo = (force?: boolean) => {
  const doFetch = () => {
    console.log("fetchUserInfo");
  };

  if (force || !currentUser.value?.token) {
    doFetch();
  }
};

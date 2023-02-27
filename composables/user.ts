interface User {
  email: string;
}
const STORAGE_KEY_USERS = "memo-users";

const initializeUser = () => {
  if (globalThis?.localStorage) {
    const storageValue = globalThis.localStorage.getItem(STORAGE_KEY_USERS);

    if (storageValue) {
      return JSON.parse(storageValue);
    }
  }

  return null;
};

const doFetch = () => {
  console.log("fetchUserInfo");
};
export const useUser = () => {
  const currentUser = ref<User | null>(initializeUser());
  const sessionUser = useSupabaseUser();
  watch(sessionUser, (user) => {
    if (user === null) {
      currentUser.value = null;
    } else {
      currentUser.value = {
        email: user.email!,
      };
    }
  });

  const updateUserInfo = async (user: Partial<User>) => {
    currentUser.value = { ...currentUser.value!, ...user };
  };

  const fetchUserInfo = (force?: boolean) => {
    if (force || !currentUser.value?.email) {
      doFetch();
    }
  };

  return {
    currentUser,

    updateUserInfo,
    fetchUserInfo,
  };
};

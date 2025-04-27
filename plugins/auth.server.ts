// plugins/auth.ts
import { useAuthStore } from "@/store/auth";
import users from "@/server/database/users.json";

export default defineNuxtPlugin(async (nuxtApp) => {
  const authStore = useAuthStore();
  const authToken = useCookie("auth_token");

  if (authToken.value) {
    // Поиск пользователя по токену
    const user = users.find(
      (user) => user.credentials.passphrase === authToken.value
    );

    if (user) {
      authStore.setUser({
        name: user.name,
        surname: user.surname,
      });
    }
  }
});

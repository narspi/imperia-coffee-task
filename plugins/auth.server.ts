// plugins/auth.ts
import { useAuthStore } from "@/store/auth";
import users from "@/server/database/users.json";

export default defineNuxtPlugin(async (nuxtApp) => {
  const authStore = useAuthStore();

  const authToken = useCookie("auth_token");

  console.log(users);
});

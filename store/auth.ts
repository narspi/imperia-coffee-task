import { defineStore } from "pinia";
import { ref } from "vue";
import type { User } from "@/types/auth";

export const useAuthStore = defineStore("auth", () => {
  const user = ref<User | null>(null);

  async function login(email: string, password: string) {
    try {
      const { data, error } = await useFetch("/api/auth/login", {
        method: "POST",
        body: { email, password },
      });

      if (error.value) {
        throw new Error(error.value.data?.message || "Ошибка входа");
      }

      user.value = data?.value?.user as User;
    } catch (err) {
      throw err;
    }
  }

  function logout() {
    user.value = null;
  }

  return {
    user,
    login,
    logout,
  };
});

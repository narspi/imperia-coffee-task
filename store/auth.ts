import { defineStore } from "pinia";
import { ref } from "vue";
import type { User } from "@/types/auth";

export const useAuthStore = defineStore("auth", () => {
  // Используем ref для создания реактивных данных с типом
  const isAuthenticated = ref<boolean>(false);
  const user = ref<User | null>(null);

  // Метод логина
  async function login(email: string, password: string) {
    try {
      const { data, error } = await useFetch("/api/auth/login", {
        method: "POST",
        body: { email, password },
      });

      if (error.value) {
        throw new Error(error.value.data?.message || "Ошибка входа");
      }

      // Обновляем состояние пользователя после успешного входа
      user.value = data.value?.user as User;
      isAuthenticated.value = true;
    } catch (err) {
      console.error("Ошибка логина:", err);
      throw err; // Прокидываем ошибку дальше
    }
  }

  // Установить пользователя вручную (при успешной авторизации на сервере)
  function setUser(userData: User) {
    user.value = userData;
    isAuthenticated.value = true;
  }

  // Метод выхода
  function logout() {
    user.value = null;
    isAuthenticated.value = false;
  }

  return {
    user,
    isAuthenticated,
    login,
    logout,
    setUser,
  };
});

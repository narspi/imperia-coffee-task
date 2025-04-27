import { defineStore } from "pinia";
import { ref } from "vue";
import type { User } from "@/types/auth";

// Хранилище юзера
export const useAuthStore = defineStore("auth", () => {
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
  async function logout() {
    try {
      const { status, error } = await useFetch("/api/auth/logout");

      if (error.value) {
        throw new Error(error.value.data?.message || "Ошибка входа");
      }

      if (status.value === "success") {
        user.value = null;
        isAuthenticated.value = false;
      }
    } catch (err) {
      console.error("Ошибка запроса:", err);
      throw err; // Прокидываем ошибку дальше
    }
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

import { useAuthStore } from "@/store/auth";

export default defineNuxtRouteMiddleware((to) => {
  const auth = useAuthStore();

  // Проверка: если пользователь авторизован и пытается попасть на /login, редиректим на /account
  if (auth.isAuthenticated && to.path === "/login") {
    return navigateTo("/account");
  }

  // Проверка: если пользователь не авторизован и пытается попасть на любую защищенную страницу
  if (!auth.isAuthenticated && to.path !== "/login") {
    return navigateTo("/login");
  }
});

export default defineNuxtRouteMiddleware((to, from) => {
  const isAuthenticated = false;
  const token = useCookie("auth_token");

  if (!isAuthenticated && to.path !== "/login") {
    return navigateTo("/login");
  }
});

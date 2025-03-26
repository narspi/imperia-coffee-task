export default defineNuxtRouteMiddleware((to, from) => {
  const isAuthenticated = false;

  if (!isAuthenticated && to.path !== "/login") {
    return navigateTo("/login");
  }
});

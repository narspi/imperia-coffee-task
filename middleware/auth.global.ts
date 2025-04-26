export default defineNuxtRouteMiddleware((to, from) => {
  const isAuthenticated = false;
  const token = useCookie("auth_token");
  console.log(token.value);

  if (!isAuthenticated && to.path !== "/login") {
    return navigateTo("/login");
  }
});

// import { useAuthStore } from "@/store/auth";

// export default defineNuxtRouteMiddleware((to) => {
//   const auth = useAuthStore();

//   const isAuthenticated = !!auth.user;

//   if (!isAuthenticated && to.path !== "/login") {
//     return navigateTo("/login");
//   }
// });

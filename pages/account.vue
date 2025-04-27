<script setup lang="ts">
import { useAuthStore } from "@/store/auth";
const authStore = useAuthStore();

const logout = async () => {
  try {
    await authStore.logout();
    if (!authStore.isAuthenticated) {
      navigateTo("/login");
    }
  } catch (e: any) {
    console.log(e);
  }
};
</script>

<template>
  <div>Имя: {{ authStore.user?.name }}</div>
  <div>Фамилия: {{ authStore.user?.surname }}</div>
  <button @click="logout">Выйти</button>
</template>

<style scoped>
.hello {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 3rem;
  padding: 2rem;
}
</style>

<script setup lang="ts">
import { useAuthStore } from "@/store/auth";
const authStore = useAuthStore();
</script>

<template>
  <div>Имя: {{ authStore.user?.name }}</div>
  <div>Фамилия: {{ authStore.user?.surname }}</div>
</template>

<style scoped>
.hello {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 3rem;
  padding: 2rem;
}
</style>

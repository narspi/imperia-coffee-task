<script setup lang="ts">
import { ref } from "vue";
import { useAuthStore } from "@/store/auth";

const authStore = useAuthStore();
const email = ref("");
const password = ref("");
const errorMessage = ref("");

const login = async () => {
  try {
    await authStore.login(email.value, password.value);
    // navigateTo("/account");
  } catch (e: any) {
    errorMessage.value = e.message;
  }
};
</script>

<template>
  <div class="container">
    <div class="login-box">
      <h2>Вход</h2>
      <form @submit.prevent="login">
        <div class="input-group">
          <label>Логин</label>
          <input type="email" placeholder="Введите ваш email" v-model="email" />
        </div>
        <div class="input-group">
          <label>Пароль</label>
          <input
            type="password"
            placeholder="Введите ваш пароль"
            v-model="password"
          />
        </div>
        <button type="submit" class="login-button">Войти</button>
      </form>
      <p v-if="errorMessage">{{ errorMessage }}</p>
    </div>
  </div>
</template>

<style>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f4f4f4;
}

.login-box {
  width: 300px;
  padding: 20px;
  background: white;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  text-align: center;
}

.input-group {
  margin-bottom: 15px;
  text-align: left;
}

.input-group label {
  display: block;
  margin-bottom: 5px;
}

.input-group input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.login-button {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.login-button:hover {
  background-color: #0056b3;
}
</style>

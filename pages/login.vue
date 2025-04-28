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
    if (authStore.isAuthenticated) {
      navigateTo("/account");
    }
  } catch (e: any) {
    errorMessage.value = e.message;
  }
};
</script>

<template>
  <div class="login">
    <div class="login__box">
      <h2 class="login__title">Вход</h2>
      <form @submit.prevent="login" class="login__form">
        <div class="login__input-group">
          <label class="login__label">Логин</label>
          <input
            type="email"
            placeholder="Введите ваш email"
            v-model="email"
            class="login__input"
          />
        </div>
        <div class="login__input-group">
          <label class="login__label">Пароль</label>
          <input
            type="password"
            placeholder="Введите ваш пароль"
            v-model="password"
            class="login__input"
          />
        </div>
        <button type="submit" class="login__button">Войти</button>
      </form>
      <p v-if="errorMessage" class="login__error">{{ errorMessage }}</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f4f4f4;

  &__box {
    width: 300px;
    padding: 20px;
    background: white;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    text-align: center;
  }

  &__title {
    margin-bottom: 20px;
    font-size: 24px;
    color: #333;
  }

  &__form {
    display: flex;
    flex-direction: column;
  }

  &__input-group {
    margin-bottom: 15px;
    text-align: left;
  }

  &__label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
    font-size: 14px;
    color: #555;
  }

  &__input {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 14px;
    transition: border-color 0.3s;

    &:focus {
      border-color: #007bff;
      outline: none;
    }
  }

  &__button {
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
    transition: background-color 0.3s;

    &:hover {
      background-color: #0056b3;
    }
  }

  &__error {
    margin-top: 15px;
    color: red;
    font-size: 14px;
  }
}
</style>

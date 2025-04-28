<script setup lang="ts">
import { useAuthStore } from "@/store/auth";
import { useProductsStore } from "@/store/products";
import type { Product } from "@/types/products";

const authStore = useAuthStore();
const productsStore = useProductsStore();

// Логика выхода
const logout = async () => {
  try {
    await authStore.logout();
    if (!authStore.isAuthenticated) {
      navigateTo("/login");
    }
  } catch (e: any) {
    console.error(e);
  }
};

// Загружаем товары и на клиенте и на сервере
const { data } = await useFetch<Product[]>("/api/products/get", {
  method: "POST",
  body: {},
  server: true, // гарантируем, что запрос выполнится на сервере при SSR
  key: "products", // чтобы правильно работал кэш
});

console.log(data.value);

// После загрузки кладем в стор
if (data.value) {
  productsStore.setProducts(data.value);
}
</script>

<template>
  <div class="page">
    <!-- Шапка -->
    <header class="page__header header">
      <h1 class="header__title">
        Добро пожаловать, {{ authStore.user?.name || "Гость" }}!
      </h1>
      <button @click="logout" class="header__logout-btn">Выйти</button>
    </header>
    <!-- Фильтер товаров -->
    <Filter />
    <!-- Список товаров -->
    <Products />
  </div>
</template>

<style scoped lang="scss">
.page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;

  &__header {
    margin-bottom: 30px;
  }

  &__products {
    margin-top: 30px;
  }
}

.header {
  background-color: #2c3e50;
  color: white;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;

  &__title {
    margin: 0;
    font-size: 24px;
  }

  &__logout-btn {
    background-color: #e74c3c;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    color: white;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #c0392b;
    }
  }
}
</style>

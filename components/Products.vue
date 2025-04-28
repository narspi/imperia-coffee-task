<script setup lang="ts">
import { useProductsStore } from "@/store/products";
const productsStore = useProductsStore();
</script>

<template>
  <section class="page__products products">
    <h2 class="products__title">Наши товары</h2>
    <article class="products__grid">
      <div
        v-for="product in productsStore.filteredProducts"
        :key="product.id"
        class="products__card"
      >
        <!-- Временно убрал изображения, так как апи похоже имеет лимит на изображения -->
        <!-- <img
          :src="product.thumbnail"
          :alt="`Изображение: ${product.title}`"
          class="products__image"
          loading="lazy"
        /> -->
        <h3 class="products__name">{{ product.title }}</h3>
        <p class="products__description">{{ product.description }}</p>
        <p class="products__price">$ {{ product.price }}</p>
      </div>
    </article>
  </section>
</template>

<style scoped lang="scss">
.products {
  &__title {
    font-size: 28px;
    margin-bottom: 20px;
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
  }

  &__card {
    background: #f9f9f9;
    padding: 15px;
    border-radius: 10px;
    text-align: center;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }

  &__image {
    max-width: 100%;
    height: 200px;
    object-fit: contain;
    margin-bottom: 10px;
    border-radius: 6px;
  }

  &__name {
    font-size: 20px;
    margin: 10px 0;
  }

  &__description {
    font-size: 14px;
    color: #555;
    min-height: 50px;
  }

  &__price {
    margin-top: 10px;
    font-size: 18px;
    font-weight: bold;
    color: #27ae60;
  }
}
</style>

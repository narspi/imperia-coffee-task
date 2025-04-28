import { defineStore } from "pinia";
import { ref, computed } from "vue";
import type { Product } from "@/types/products";

export const useProductsStore = defineStore("products", () => {
  const products = ref<Product[]>([]);

  const searchQuery = ref<string>(""); // например, фильтрация по названию товара

  function setProducts(newProducts: Product[]) {
    products.value = newProducts;
  }

  const filteredProducts = computed(() => {
    // if (!searchQuery.value.trim()) {
    //   return products.value;
    // }

    // return products.value.filter((product) =>
    //   product.title.toLowerCase().includes(searchQuery.value.toLowerCase())
    // );
    return products;
  });

  return {
    products, // "сырые" данные
    searchQuery, // строка поиска
    setProducts,
    filteredProducts, // вычисляемые данные для отображения
  };
});

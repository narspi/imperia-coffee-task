import { defineStore } from "pinia";
import { ref, computed } from "vue";
import type { Product } from "@/types/products";

export const useProductsStore = defineStore("products", () => {
  const products = ref<Product[]>([]);
  const sortType = ref<string>(""); // например, фильтрация по цене

  function setProducts(newProducts: Product[]) {
    products.value = newProducts;
  }

  function setSortType(type: string) {
    sortType.value = type;
  }

  const filteredProducts = computed(() => {
    let sortedProducts = [...products.value];

    if (sortType.value === "cheap") {
      sortedProducts.sort((a, b) => a.price - b.price); // Сортировка по цене от дешвых к дорогим
    } else if (sortType.value === "expensive") {
      sortedProducts.sort((a, b) => b.price - a.price); // Сортировка по цене от дорогих к дешевым
    }
    // Сортировка по дате создания (от новых к старым)
    else if (sortType.value === "new") {
      sortedProducts.sort((a, b) => {
        const dateA = new Date(a.meta.createdAt);
        const dateB = new Date(b.meta.createdAt);
        return dateB.getTime() - dateA.getTime(); // Для сортировки от новых к старым
      });
    }

    return sortedProducts;
  });

  return {
    products, // "сырые" данные
    sortType, // парметр сортировки
    setProducts,
    setSortType,
    filteredProducts, // вычисляемые данные для отображения
  };
});

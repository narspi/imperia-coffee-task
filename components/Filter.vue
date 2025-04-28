<script setup lang="ts">
import { useProductsStore } from "@/store/products";
const productsStore = useProductsStore();

// Функция для обновления типа сортировки в сторе
const setSort = (type: string) => {
  // Если сортировка уже активна, то сбрасываем тип сортировки
  if (productsStore.sortType === type) {
    productsStore.setSortType(""); // Или любое значение, которое сбрасывает фильтрацию
  } else {
    productsStore.setSortType(type); // Устанавливаем новый тип сортировки
  }
};
</script>

<template>
  <div class="price-filter">
    <h3 class="price-filter__title">Сортировать</h3>
    <div class="price-filter__options">
      <button
        :class="[
          'price-filter__option',
          { active: productsStore.sortType === 'cheap' },
        ]"
        @click="setSort('cheap')"
      >
        Самые дешевые
      </button>
      <button
        :class="[
          'price-filter__option',
          { active: productsStore.sortType === 'expensive' },
        ]"
        @click="setSort('expensive')"
      >
        Самые дорогие
      </button>
      <button
        :class="[
          'price-filter__option',
          { active: productsStore.sortType === 'new' },
        ]"
        @click="setSort('new')"
      >
        Новинки
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.price-filter {
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: #fff;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;

  &__title {
    font-size: 20px;
  }

  &__options {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
  }

  &__option {
    padding: 10px 15px;
    background-color: #f1f1f1;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-weight: bold;
    transition: background-color 0.3s;
    white-space: nowrap;
    font-weight: 700;

    &.active {
      background-color: #ddd;
    }

    &:hover {
      background-color: #e0e0e0;
    }
  }
}
</style>

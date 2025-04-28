<template>
  <div class="price-filter">
    <h3 class="price-filter__title">Сортировать</h3>
    <div class="price-filter__options">
      <button class="price-filter__option">Самые дешевые</button>
      <button class="price-filter__option">Самые дорогие</button>
      <button class="price-filter__option">Новинки</button>
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
    flex-wrap: wrap; // чтобы на маленьких экранах переносились
  }

  &__option {
    padding: 10px 15px;
    background-color: #f1f1f1;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-weight: bold;
    transition: background-color 0.3s;
    white-space: nowrap; // чтобы текст в кнопках не переносился

    &:hover {
      background-color: #e0e0e0;
    }
  }
}
</style>

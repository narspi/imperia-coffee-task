import { deleteCookie } from "h3";

// Удаляем куку
export default defineEventHandler(async (event) => {
  // Указываем имя куки, которую нужно удалить
  deleteCookie(event, "auth_token", { path: "/" });

  // Возвращаем успешный ответ
  return {
    message: "Вы успешно вышли из системы",
  };
});

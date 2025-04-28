import products from "@/server/database/products.json";
import users from "@/server/database/users.json";
import { createError, parseCookies } from "h3";

// Для получения товаров, только авторизованных
export default defineEventHandler(async (event) => {
  // Только POST запросы
  if (event.method !== "POST") {
    throw createError({ statusCode: 405, statusMessage: "Method Not Allowed" });
  }

  // проверяет есть ли кука с таким юзером
  const cookies = parseCookies(event);
  const auth_token = cookies.auth_token;

  const user = users.find((user) => {
    if (user.credentials.passphrase === auth_token) return true;
    else false;
  });

  // Если не нашли юзера
  if (!user) {
    throw createError({
      statusCode: 401,
      message: "Неверный логин или пароль",
    });
  }

  return products;
});

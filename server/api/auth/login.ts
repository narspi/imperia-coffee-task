import users from "@/server/database/users.json";
import { readBody, createError, setCookie } from "h3";

// Авторизация пользователя
export default defineEventHandler(async (event) => {
  // Только POST запросы
  if (event.method !== "POST") {
    throw createError({ statusCode: 405, statusMessage: "Method Not Allowed" });
  }

  const body = await readBody(event);
  const { email, password } = body;

  // Ищем юзера
  const user = users.find((user) => {
    const passwordMatches = user?._comment?.match(/'([^']+)'/);
    if (!passwordMatches || !passwordMatches[1]) {
      throw new Error("Недопустимая база данных");
    }
    const userPassword = passwordMatches[1];
    if (user.credentials.username === email && userPassword === password)
      return true;
    else false;
  });

  // Если не нашли юзера
  if (!user) {
    throw createError({
      statusCode: 401,
      message: "Неверный логин или пароль",
    });
  }

  // Фейковый токен можно сделать нормальный токен, но в ранках тестового думаю это не обязательно
  const token = user.credentials.passphrase;

  // Устанавливаем токен в куку (httpOnly, чтобы не доступен в JS)
  setCookie(event, "auth_token", token, {
    httpOnly: true,
    path: "/",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 7, // 7 дней
  });

  // Возврщаем данные юзера
  return {
    user: {
      name: user.name,
      surname: user.surname,
    },
  };
});

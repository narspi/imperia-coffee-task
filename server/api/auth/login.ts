import users from "@/server/database/users.json";
import { readBody, createError } from "h3";

export default defineEventHandler(async (event) => {
  if (event.method !== "POST") {
    throw createError({ statusCode: 405, statusMessage: "Method Not Allowed" });
  }

  const body = await readBody(event);
  const { email, password } = body;

  const user = users.find(
    (user) =>
      user.credentials.username === email &&
      user.credentials.passphrase === password
  );

  if (!user) {
    throw createError({
      statusCode: 401,
      statusMessage: "Неверный логин или пароль",
    });
  }

  return {
    user: {
      name: user.name,
      surname: user.surname,
    },
    token: `fake-token-${user.credentials.username}`,
  };
});

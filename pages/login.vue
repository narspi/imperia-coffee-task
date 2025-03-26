<template>
  <div class="container">
    <div class="login-box">
      <h2>Вход</h2>
      <form>
        <div class="input-group">
          <label>Логин</label>
          <input type="text" placeholder="Введите ваш логин" />
        </div>
        <div class="input-group">
          <label>Пароль</label>
          <input type="password" placeholder="Введите ваш пароль" />
        </div>
        <button type="submit" class="login-button">Войти</button>
      </form>
    </div>
  </div>
</template>

<style>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f4f4f4;
}

.login-box {
  width: 300px;
  padding: 20px;
  background: white;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  text-align: center;
}

.input-group {
  margin-bottom: 15px;
  text-align: left;
}

.input-group label {
  display: block;
  margin-bottom: 5px;
}

.input-group input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.login-button {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.login-button:hover {
  background-color: #0056b3;
}
</style>

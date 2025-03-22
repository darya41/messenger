import React from "react";
import "../assets/styles/LoginForm.css";

const LoginForm = ({
  setIsLoginned,
  setLogin,
  login,
  setPassword,
  password,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(login, password);
    e.target.reset();

    if (login === "devytophik" && password === "1111") {
      setIsLoginned(true);
      localStorage.setItem("isLoginned", true);
    }

    setLogin("");
    setPassword("");
  };

  return (
    <div className="beginner-form">
      <h2>Вход</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Login"
          onChange={(e) => setLogin(e.target.value)}
        ></input>
        <input
          type="password"
          placeholder="Пароль"
          onChange={(e) => setPassword(e.target.value)}
        ></input>

        <button type="submit">Войти</button>
      </form>

      <div className="underForm">
        <h5>Регистрация</h5>
        <h5>Забыли пароль?</h5>
      </div>
    </div>
  );
};

export default LoginForm;

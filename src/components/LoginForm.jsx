import React, { useState } from "react";
import "../assets/styles/LoginForm.css";

const LoginForm = ({ setIsLoginned }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    e.target.reset();

    if (email === "devytopchik@yandex.by" && password == 1) {
      setIsLoginned(true);
      localStorage.setItem("isLoginned", true);
    }

    setEmail("");
    setPassword("");
  };

  return (
    <div className="beginner-form">
      <h2>Вход</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
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

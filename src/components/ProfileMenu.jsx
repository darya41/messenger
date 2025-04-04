import React, { useState } from "react";
import "../assets/styles/ProfileMenu.css";
import ThemeSwitcher from "./ThemeSwitcher";

const ProfileMenu = ({ setIsLoginned }) => {
  const [isHover, setIsHover] = useState();
  const [userName, setUserName] = useState("Иван Иванов");

  const handleNameChange = () => {
    const newName = prompt("Введите новое имя:", userName);
    if (newName !== null && newName.trim() !== "" && newName.length <= 21) {
      setUserName(newName);
      //localStorage.setItem("userName", newName);
    } else {
      alert("Вводенное имя некорректно");
    }
  };

  return (
    <div className="profile-menu">
      <div className="top">
        <img
          src={
            require("../assets/images/images.png") //тут будет иконка usera
          }
          style={{
            opacity: !isHover ? 1 : 0.5,
            transition: "all 0.5s",
          }}
          className="current-user-icon-menu"
          onClick={() => document.getElementById("avatar-input").click()}
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        ></img>
        <input
          id="avatar-input"
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          onChange={(e) => {
            if (e.target.files[0]) {
              const reader = new FileReader();
              reader.onload = (event) => {
                console.log("Новое фото:", event.target.result);
              };
              reader.readAsDataURL(e.target.files[0]);
            }
          }}
        />
        <h4 className="user-name">{userName}</h4>
      </div>
      <div className="bottom">
        <button onClick={handleNameChange}>Сменить имя</button>
        <ThemeSwitcher />
        <button
          className="log-out"
          onClick={() => {
            setIsLoginned(false);
            localStorage.setItem("isLoginned", false);
          }}
        >
          Выйти
        </button>
      </div>
    </div>
  );
};

export default ProfileMenu;

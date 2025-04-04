import React from "react";
import "../assets/styles/ProfileMenu.css";

const ProfileMenu = () => {
  return (
    <div className="profile-menu">
      <div className="top">
        <img
          src={
            require("../assets/images/images.png") //тут будет иконка usera
          }
          className="current-user-icon-menu"
        ></img>
      </div>
      <div className="bottom">
        <button>Сменить фотографию</button>
        <button>Сменить тему</button>
        <button>Выйти</button>
      </div>
    </div>
  );
};

export default ProfileMenu;

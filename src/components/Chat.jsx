import React from "react";
import "../assets/styles/Chat.css";
const Chat = () => {
  return (
    <div className="chat">
      <img
        src={require("../assets/images/images.png")}
        className="user-icon"
      ></img>
      <p>Chatname</p>
    </div>
  );
};

export default Chat;

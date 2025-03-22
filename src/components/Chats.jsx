import React from "react";
import "../assets/styles/Chats.css";
import Chat from "./Chat";

const Chats = () => {
  return (
    <div className="left-block">
      <input className="input-chat" placeholder="Название чата"></input>

      <div className="chats">
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
      </div>
    </div>
  );
};

export default Chats;

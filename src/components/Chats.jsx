import React, { useState } from "react";
import "../assets/styles/LeftBar.css";
import Chat from "./Chat";

const Chats = ({ setChatId, chats }) => {
  const [inputChatname, setInputChatname] = useState("");

  return (
    <div className="left-block">
      <input
        value={inputChatname}
        className="input-chat"
        placeholder="Название чата"
        onChange={(e) => setInputChatname(e.target.value)}
      ></input>

      <div className="chats">
        {chats
          .filter((el) =>
            el.chatname.toLowerCase().includes(inputChatname.toLowerCase())
          )
          .map((el, index) => (
            <Chat setChatId={setChatId} key={index} id={el.id} chat={el} />
          ))}
      </div>
    </div>
  );
};

export default Chats;

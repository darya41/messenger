import React, { useState } from "react";
import "../assets/styles/LeftBar.css";
import Chat from "./Chat";
import Overlay from "./Overlay";

const Chats = ({ setChatId, chats, chatId, setIsLoginned }) => {
  const [inputChatname, setInputChatname] = useState("");

  const [isOverlayOnn, setIsOverlayOnn] = useState(false);

  return (
    <div className="left-block">
      <Overlay
        isOverlayOnn={isOverlayOnn}
        setIsOverlayOnn={setIsOverlayOnn}
        setIsLoginned={setIsLoginned}
      />

      <div className="top-block">
        <img
          src={
            require("../assets/images/images.png") //тут будет иконка usera
          }
          className="current-user-icon"
          onClick={() => {
            setIsOverlayOnn((prevState) => !prevState);
          }}
        ></img>

        <input
          value={inputChatname}
          className="input-chat"
          placeholder="Название чата"
          onChange={(e) => setInputChatname(e.target.value)}
        ></input>
      </div>

      <div className="chats">
        {chats
          .filter((el) =>
            el.chatname.toLowerCase().includes(inputChatname.toLowerCase())
          )
          .map((el, index) => (
            <Chat
              chatId={chatId}
              setChatId={setChatId}
              key={index}
              id={el.id}
              chat={el}
            />
          ))}
      </div>
    </div>
  );
};

export default Chats;

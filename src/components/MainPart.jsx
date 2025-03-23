import React, { useState } from "react";
import "../assets/styles/MainPart.css";
import Messages from "./Messages";
import SendMessage from "./SendMessage";
import TopBar from "./TopBar";

const MainPart = ({ messages, setMessages, chatname }) => {
  const [isDeleteMode, setIsDeleteMode] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);

  return (
    <div className="main-part">
      <TopBar
        chatname={chatname}
        setIsDeleteMode={setIsDeleteMode}
        setIsEditMode={setIsEditMode}
        isDeleteMode={isDeleteMode}
        isEditMode={isEditMode}
      />

      <Messages
        messages={messages}
        setMessages={setMessages}
        isDeleteMode={isDeleteMode}
        isEditMode={isEditMode}
        setIsEditMode={setIsEditMode}
      />

      <SendMessage setMessages={setMessages} messages={messages} />
    </div>
  );
};

export default MainPart;

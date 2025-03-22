import React from "react";
import "../assets/styles/MainPart.css";
import Messages from "./Messages";
import SendMessage from "./SendMessage";
import TopBar from "./TopBar";

const MainPart = ({ messages, setMessages, chatname }) => {
  return (
    <div className="main-part">
      <TopBar chatname={chatname} />

      <Messages messages={messages} />

      <SendMessage setMessages={setMessages} messages={messages} />
    </div>
  );
};

export default MainPart;

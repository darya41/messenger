import React from "react";
import "../assets/styles/MainPart.css";
import Messages from "./Messages";
import SendMessage from "./SendMessage";
import TopBar from "./TopBar";

const MainPart = () => {
  return (
    <div className="main-part">
      <TopBar />

      <Messages />

      <SendMessage />
    </div>
  );
};

export default MainPart;

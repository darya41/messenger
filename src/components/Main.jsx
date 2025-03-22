import React from "react";
import "../assets/styles/Main.css";
import Chats from "./Chats";
import MainPart from "./MainPart";

const Main = () => {
  return (
    <div className="main">
      <Chats />
      <MainPart />
    </div>
  );
};

export default Main;

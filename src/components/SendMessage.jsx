import React from "react";
import { IoSend } from "react-icons/io5";
import "../assets/styles/SendMessage.css";

const SendMessage = () => {
  return (
    <div className="send-message">
      <input type="text" placeholder="Введите сообщение" />
      <IoSend style={{ width: 30, height: 30 }} />
    </div>
  );
};

export default SendMessage;

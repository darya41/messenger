import React from "react";
import "../assets/styles/Message.css";

const Message = ({ isFrom, message, time }) => {
  return (
    <div className={`message-block ${!isFrom ? "to" : "from"}`}>
      <h3>{message}</h3>
      <p>{time}</p>
    </div>
  );
};

export default Message;

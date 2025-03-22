import React from "react";
import "../assets/styles/Messages.css";
import Message from "./Message";

const Messages = ({ messages }) => {
  return (
    <div className="messages">
      {messages.map((el, index) => (
        <Message
          key={index}
          isFrom={el.isFrom}
          message={el.message}
          time={el.time}
        />
      ))}
    </div>
  );
};

export default Messages;

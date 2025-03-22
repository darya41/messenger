import React from "react";
import "../assets/styles/Messages.css";
import Message from "./Message";

const Messages = ({ messages, isDeleteMode, isEditMode, setMessages }) => {
  return (
    <div className="messages">
      {messages.map((el, index) => (
        <Message
          isDeleteMode={isDeleteMode}
          isEditMode={isEditMode}
          key={index}
          id={index}
          isFrom={el.isFrom}
          message={el.message}
          time={el.time}
          messages={messages}
          setMessages={setMessages}
        />
      ))}
    </div>
  );
};

export default Messages;

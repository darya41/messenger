import React, { useEffect, useState } from "react";
import "../assets/styles/Messages.css";
import Message from "./Message";

const Messages = ({
  messages,
  isDeleteMode,
  isEditMode,
  setMessages,
  setIsEditMode,
}) => {
  const [editIndex, setEditIndex] = useState(-1);

  useEffect(() => {
    if (!isEditMode) {
      setEditIndex(-1);
    }
  }, [isEditMode]);

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
          editIndex={editIndex}
          setEditIndex={setEditIndex}
          setIsEditMode={setIsEditMode}
        />
      ))}
    </div>
  );
};

export default Messages;

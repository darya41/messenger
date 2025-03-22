import React from "react";
import "../assets/styles/Message.css";

const Message = ({
  isFrom,
  message,
  messages,
  setMessages,
  time,
  isDeleteMode,
  isEditMode,
  id,
}) => {
  const handleDeleteOrEdit = (id) => {
    if (isDeleteMode) {
      setMessages(messages.filter((mes, index) => id !== index));

      alert("deleted");
    }

    if (isEditMode) {
      alert("edit");
    }
  };

  return (
    <div
      className={`message-block ${!isFrom ? "to" : "from"}`}
      onClick={() => handleDeleteOrEdit(id)}
    >
      <h3>{message}</h3>
      <p>{time}</p>
    </div>
  );
};

export default Message;

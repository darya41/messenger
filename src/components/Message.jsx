import React, { useState } from "react";
import { MdModeEdit } from "react-icons/md";
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
  setEditIndex,
  editIndex,
  setIsEditMode,
}) => {
  const [newMessage, setNewMessage] = useState(message);

  const handleDeleteOrEdit = (id) => {
    if (isDeleteMode) {
      setMessages(messages.filter((mes, index) => id !== index));

      alert("deleted");
    }

    if (isEditMode) {
      if (id !== editIndex) {
        setEditIndex(id);
        alert("editing");
      }
    }
  };

  return (
    <div
      className={`message-block ${!isFrom ? "to" : "from"} ${
        isDeleteMode ? "del" : ""
      } ${isEditMode ? "edit" : ""}`}
      onClick={() => handleDeleteOrEdit(id)}
    >
      {console.log(editIndex)}
      {isEditMode && editIndex === id ? (
        <div className="input-block">
          <input
            className="edit-input"
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <MdModeEdit
            onClick={() => {
              setIsEditMode(false);
              setMessages(
                messages.map((message, index) =>
                  index === id ? { ...message, message: newMessage } : message
                )
              );
            }}
          />
        </div>
      ) : (
        <h3>{message}</h3>
      )}
      <p>{time}</p>
    </div>
  );
};

export default Message;

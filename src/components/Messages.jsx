import React, { useEffect, useRef, useState } from "react";
import "../assets/styles/Messages.css";
import Message from "./Message";

const Messages = ({
  messages,
  isDeleteMode,
  isEditMode,
  setMessages,
  setIsEditMode,
  setSelectedIdsLen,
  setIsDeleteMode,
  chatname,
}) => {
  const [editIndex, setEditIndex] = useState(-1);
  const [selectedMessagesIds, setSelectedMessagesIds] = useState([]);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    setSelectedMessagesIds([]);
  }, [chatname]);

  useEffect(() => {
    setSelectedIdsLen(selectedMessagesIds.length);
  }, [selectedMessagesIds]);

  useEffect(() => {
    if (!isEditMode) {
      setEditIndex(-1);
    }
  }, [isEditMode]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatname]);

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
          setSelectedMessagesIds={setSelectedMessagesIds}
          selectedMessagesIds={selectedMessagesIds}
          setIsDeleteMode={setIsDeleteMode}
          chatname={chatname}
        />
      ))}

      <div ref={messagesEndRef} />
    </div>
  );
};

export default Messages;

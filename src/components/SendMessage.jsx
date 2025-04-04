import React, { useState } from "react";
import { IoSend } from "react-icons/io5";
import "../assets/styles/SendMessage.css";

const SendMessage = ({ messages, setMessages }) => {
  const [currentMessage, setCurrentMessage] = useState("");
  // const messageEndRef = useRef(null);

  // const formatDate = (date) => {
  //   const hours = String(date.getHours()).padStart(2, "0");
  //   const minutes = String(date.getMinutes()).padStart(2, "0");
  //   const day = String(date.getDate()).padStart(2, "0");
  //   const month = String(date.getMonth() + 1).padStart(2, "0");
  //   const year = date.getFullYear();

  //   return `${hours}:${minutes} ${day}.${month}.${year}`;
  // };

  return (
    <div className="send-message">
      <input
        type="text"
        value={currentMessage}
        onChange={(e) => setCurrentMessage(e.target.value)}
        placeholder="Введите сообщение"
      />
      <IoSend
        className="send"
        style={{ width: 30, height: 30 }}
        onClick={() => {
          if (currentMessage != "")
            setMessages([
              ...messages,
              { message: currentMessage, time: "03:00 am", isFrom: true },
            ]);

          setCurrentMessage("");
        }}
      />
    </div>
  );
};

export default SendMessage;

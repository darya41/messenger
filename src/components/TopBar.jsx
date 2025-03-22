import React from "react";
import { FaEdit } from "react-icons/fa";
import { LuDelete } from "react-icons/lu";
import "../assets/styles/TopBar.css";

const TopBar = () => {
  return (
    <div className="top-bar">
      <h1>Chatname</h1>
      <div className="options-panel">
        <FaEdit style={{ width: 30, height: 30 }} />

        <LuDelete style={{ width: 35, height: 35 }} />
      </div>
    </div>
  );
};

export default TopBar;

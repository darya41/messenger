import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { LuDelete } from "react-icons/lu";
import "../assets/styles/TopBar.css";

const TopBar = ({
  chatname,
  setIsDeleteMode,
  setIsEditMode,
  isEditMode,
  isDeleteMode,
}) => {
  const [isHoveredDelete, setIsHoveredDelete] = useState(false);
  const [isHoveredRedact, setIsHoveredRedact] = useState(false);

  const handleDeleteMode = () => {
    !isDeleteMode
      ? alert("Выберите сообщение для удаления")
      : alert("Режим удаления выключен");

    setIsDeleteMode(!isDeleteMode);

    if (isEditMode) {
      setIsEditMode(!isEditMode);
    }
  };

  const handleEditMode = () => {
    !isEditMode
      ? alert("Выберите сообщение которое собираетесь редактировать")
      : alert("Режим редактирования выключен");

    setIsEditMode(!isEditMode);

    if (isDeleteMode) {
      setIsDeleteMode(!isDeleteMode);
    }
  };

  const handleMouseEnterRedact = () => {
    setIsHoveredRedact(true);
  };

  const handleMouseLeaveRedact = () => {
    setIsHoveredRedact(false);
  };

  const handleMouseEnterDelete = () => {
    setIsHoveredDelete(true);
  };

  const handleMouseLeaveDelete = () => {
    setIsHoveredDelete(false);
  };

  return (
    <div className="top-bar">
      <h1>{chatname}</h1>
      <div className="options-panel">
        <FaEdit
          style={{
            width: 30,
            height: 30,
            fill: isHoveredRedact ? "#00ff00" : "white",
            transition: "all 0.3s",
          }}
          onMouseEnter={handleMouseEnterRedact}
          onMouseLeave={handleMouseLeaveRedact}
          onClick={handleEditMode}
        />

        <LuDelete
          style={{
            width: 35,
            height: 35,
            fill: isHoveredDelete ? "red" : "white",
            transition: "all 0.3s",
            stroke: "black",
          }}
          onMouseEnter={handleMouseEnterDelete}
          onMouseLeave={handleMouseLeaveDelete}
          onClick={handleDeleteMode}
        />
      </div>
    </div>
  );
};

export default TopBar;

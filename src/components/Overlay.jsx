import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import "../assets/styles/Overlay.css";
import ProfileMenu from "./ProfileMenu";

const Overlay = ({ isOverlayOnn, setIsOverlayOnn }) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div className={`overlay ${isOverlayOnn ? "onn" : "off"}`}>
      <RxCross1
        style={{
          width: 40,
          height: 40,
          color: !isHover ? "white" : "red",
          cursor: "pointer",
          position: "absolute",
          right: 1,
          transition: "all 0.3s",
        }}
        onClick={() => setIsOverlayOnn(false)}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      />

      <ProfileMenu />
    </div>
  );
};

export default Overlay;

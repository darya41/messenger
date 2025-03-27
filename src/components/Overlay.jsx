import React from "react";
import { RxCross1 } from "react-icons/rx";
import "../assets/styles/Overlay.css";

const Overlay = ({ isOverlayOnn, setIsOverlayOnn }) => {
  return (
    <div className={`overlay ${isOverlayOnn ? "onn" : "off"}`}>
      <RxCross1
        style={{
          width: 40,
          height: 40,
          color: "white",
          cursor: "pointer",
          position: "absolute",
          right: 1,
        }}
        onClick={() => setIsOverlayOnn(false)}
      />
    </div>
  );
};

export default Overlay;

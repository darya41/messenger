import React, { useEffect, useRef, useState } from "react";
import { MdCheck } from "react-icons/md";

const ThemeSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState(
    localStorage.getItem("theme") || "purple"
  );
  const dropdownRef = useRef(null);

  const themes = [
    { id: "purple", name: "Фиолетовая", color: "#6a0dad", icon: "💜" },
    { id: "light", name: "Светлая", color: "#ffffff", icon: "⚪" },
    { id: "green", name: "Зеленая", color: "#2e7d32", icon: "🌿" },
  ];

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Применение темы
  const applyTheme = (themeId) => {
    document.documentElement.setAttribute("data-theme", themeId);
    localStorage.setItem("theme", themeId);
    setCurrentTheme(themeId);
    setIsOpen(false);
  };

  // Инициализация темы при загрузке
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "purple";
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  return (
    <div className="theme-switcher" ref={dropdownRef}>
      <button
        className="theme-button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Сменить тему"
      >
        Сменить тему
      </button>

      {isOpen && (
        <div className="theme-dropdown">
          {themes.map((theme) => (
            <button
              key={theme.id}
              className={`theme-option ${
                currentTheme === theme.id ? "active" : ""
              }`}
              onClick={() => applyTheme(theme.id)}
              style={{ "--theme-color": theme.color }}
            >
              <span className="theme-icon">{theme.icon}</span>
              {theme.name}
              {currentTheme === theme.id && <MdCheck className="theme-check" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ThemeSwitcher;

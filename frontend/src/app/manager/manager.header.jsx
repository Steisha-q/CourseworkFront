import React, { useState, useRef, useEffect } from "react";
import "./manager.header.css";
import logoImage from "../../assets/logo.png";
import TextImage from "../../assets/textLogo.png";

const ManagerHeader = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef();

  // Закриття випадайки при кліку поза нею
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    alert("Вийти з акаунта"); // замість цього має бути реальний логаут
  };

  return (
    <header className="manager-header">
      <div className="header-left">
        <img src={logoImage} alt="EcoCraft" className="logo-img" />
        <img src={TextImage} alt="Secondary" className="secondary-img" />
      </div>

      <div className="header-right" ref={dropdownRef}>
        <div
          className="user-profile"
          onClick={() => setDropdownOpen((prev) => !prev)}
        >
          <img
            src="https://ui-avatars.com/api/?name=Manager&background=2e7d32&color=fff"
            alt="Manager"
          />
          <span>Manager</span>
          <i className="fas fa-chevron-down"></i>
        </div>

        {dropdownOpen && (
          <div className="dropdown-menu">
            <button className="logout-btn" onClick={handleLogout}>
              Вийти
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default ManagerHeader;

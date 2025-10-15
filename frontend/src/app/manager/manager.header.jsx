import React from "react";
import "./manager.header.css";

const ManagerHeader = () => {
  return (
    <header className="manager-header">
      <div className="header-left">
        <h1>Dashboard</h1>
      </div>
      <div className="header-right">
        <div className="user-profile">
          <img
            src="https://ui-avatars.com/api/?name=Manager&background=2e7d32&color=fff"
            alt="Manager"
          />
          <span>Manager</span>
          <i className="fas fa-chevron-down"></i>
        </div>
      </div>
    </header>
  );
};

export default ManagerHeader;

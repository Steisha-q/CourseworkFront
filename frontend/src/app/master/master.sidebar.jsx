import React from "react";
import "./master.sidebar.css";

import {
  FaHome,
  FaSearch,
  FaEnvelope,
  FaPlusCircle,
  FaUser,
  FaCommentDots,
  FaFire,
  FaClipboardList,
  FaSignOutAlt,
} from "react-icons/fa";

const menuItems = [
  { icon: FaHome, label: "Home", link: "#home" },
  { icon: FaSearch, label: "Search", link: "#search" },
  { icon: FaPlusCircle, label: "Create", link: "#create" },
  { icon: FaUser, label: "Profile", link: "#profile", active: true },
  { icon: FaFire, label: "Community", link: "#community" },
  { icon: FaClipboardList, label: "Posts", link: "#posts" },
];

const MasterSidebar = () => {
  return (
    <div className="master-sidebar">
      <div>
        <h1 className="sidebar-brand-name">Ecocraft</h1>

        <nav className="sidebar-nav">
          <ul className="nav-links">
            {menuItems.map((item, index) => {
              const IconComponent = item.icon;
              const isActive = item.active;

              return (
                <li
                  key={index}
                  className={`sidebar-nav-item ${isActive ? "active" : ""}`}
                >
                  <a href={item.link} className="sidebar-nav-link">
                    <IconComponent className="sidebar-icon" />
                    <span>{item.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      <div className="sidebar-logout-section">
        <a href="#logout" className="sidebar-logout-link">
          <FaSignOutAlt className="sidebar-icon" />
          Logout
        </a>
      </div>
    </div>
  );
};

export default MasterSidebar;

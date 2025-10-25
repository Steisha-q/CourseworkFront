import React from "react";
import "./manager.sidebar.css";

const menuItems = [
  { type: "section", label: "Overview" },
  { icon: "fas fa-tachometer-alt", label: "Dashboard" },

  { type: "section", label: "Post CRUD" },
  { icon: "fas fa-file-alt", label: "Posts" },

  { type: "section", label: "Category CRUD" },
  { icon: "fas fa-tags", label: "Categories" },

  { type: "section", label: "Things CRUD" },
  { icon: "fas fa-box", label: "Things" },

  { type: "section", label: "User Management" },
  { icon: "fas fa-users", label: "Users" },

  { type: "section", label: "Delivery Status" },
  { icon: "fas fa-sync-alt", label: "Update Status" },

  { type: "section", label: "Raffles" },
  { icon: "fas fa-gift", label: "Raffles" },
];

const ManagerSidebar = () => {
  return (
    <div className="manager-sidebar">
      <nav className="sidebar-nav">
        <ul className="nav-links">
          {menuItems.map((item, index) => (
            <React.Fragment key={index}>
              {item.type === "section" ? (
                <li className="nav-section">
                  <span>{item.label}</span>
                </li>
              ) : (
                <li>
                  <a href="#">
                    <i className={item.icon}></i>
                    <span>{item.label}</span>
                  </a>
                </li>
              )}
            </React.Fragment>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default ManagerSidebar;

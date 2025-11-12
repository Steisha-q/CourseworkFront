import React from "react";
import { ROUTES } from "../constants";
import { useLocation } from "react-router-dom";
import "./manager.sidebar.css";

const menuItems = [
  { type: "section", label: "Overview" },
  {
    icon: "fas fa-tachometer-alt",
    label: "Dashboard",
    route: ROUTES.managerDashboard(),
  },

  { type: "section", label: "Post CRUD" },
  {
    icon: "fas fa-file-alt",
    label: "Posts",
    route: ROUTES.post(),
  },

  { type: "section", label: "Category CRUD" },
  {
    icon: "fas fa-tags",
    label: "Categories",
    route: ROUTES.categories(),
  },

  { type: "section", label: "Things CRUD" },
  {
    icon: "fas fa-box",
    label: "Things",
    route: ROUTES.things(),
  },

  { type: "section", label: "User Management" },
  {
    icon: "fas fa-users",
    label: "Users",
    route: ROUTES.users(),
  },

  { type: "section", label: "Delivery Status" },
  {
    icon: "fas fa-sync-alt",
    label: "Update Status",
    route: ROUTES.status(),
  },

  { type: "section", label: "Raffles" },
  {
    icon: "fas fa-gift",
    label: "Raffles",
    route: ROUTES.raffles(),
  },
];

const ManagerSidebar = () => {
  const location = useLocation();

  const isActiveRoute = (route) => {
    return location.pathname === route;
  };

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
                  <a
                    href={item.route}
                    className={isActiveRoute(item.route) ? "active" : ""}
                  >
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
